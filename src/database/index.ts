import mongoose from 'mongoose';

export const DB="mongodb+srv://felexonyango19:Q1qRnSFLVsQ5Mb5m@cluster0.voshhwm.mongodb.net/?retryWrites=true"
export const connectDb = async () => {
  try{
       

    await mongoose.connect(DB,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify:false,
      
       
    })
    console.log(`MongoDB Connected `)
} catch (error) {
  console.error(error )
        process.exit(1)
}
};

