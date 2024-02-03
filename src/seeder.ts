import mongoose, { Types } from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users'
import {User} from './model/user'
import {connectDb} from './database/index'


dotenv.config()
connectDb()

 export const importData = async () => {
    try {   
      await User.deleteMany()
        
          await User.insertMany(users)
          //await Menu.insertMany(MenuData)

        console.log('Data Imported')
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

export const destroyData = async () => {
    try {
        const batchSize = 100; 
        let offset = 0;

        while (true) {
            const result = await User.deleteMany({}).skip(offset).limit(batchSize);
            
            if (!result || result.deletedCount === undefined) {
                break; 
            }

            if (result.deletedCount > 0) {
                offset += batchSize;
            } else {
                break; 
            }
        }

        console.log(`Data Destroyed!`);
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);
    }
};



//node backend/seeder -d
if(process.argv[2] === '-d'){
    destroyData()
} else{
    importData()
}