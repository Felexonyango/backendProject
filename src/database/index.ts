import mongoose from 'mongoose';
export const connectDb = async () => {
  try{
       

    const test="mongodb+srv://felexonyango19:Q1qRnSFLVsQ5Mb5m@cluster0.voshhwm.mongodb.net/?retryWrites=true"
    await mongoose.connect(test,{
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

