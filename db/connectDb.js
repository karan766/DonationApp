 import mongoose from 'mongoose';

 const connectDB= async()=>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://karansodhi703:PcUhK4LmUC6DTtjO@cluster0.bvaylqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
 }
   
 export default connectDB ;
 //`mongodb+srv://karansodhi703:PcUhK4LmUC6DTtjO@cluster0.bvaylqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`