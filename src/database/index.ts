import mongoose from 'mongoose';
export const connectDb = async () => {
  try{
       

    const DB="mongodb+srv://felexonyango19:Q1qRnSFLVsQ5Mb5m@cluster0.voshhwm.mongodb.net/?retryWrites=true"
    //const DB ="mongodb://127.0.0.1:27017/ProjectManagement"
    await mongoose.connect(DB,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify:false,
      
       
    })
    console.log(`MongoDB Connected `)
} catch (error) {
  console.error(error )
        process.exit(1)
}
};

