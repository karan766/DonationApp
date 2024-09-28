 import mongoose from 'mongoose';

 const connectDB= async()=>{
    try{
        const conn = await mongoose.connect(`mongodb://127.0.0.1:27017/collection-project`
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.error(error.message);
        process.exit(1);
    }
 }

 export default connectDB ;