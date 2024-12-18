import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.MONGO_URI

const clientOptions = { 
  serverApi: { 
    version: '1', 
    strict: true, 
    deprecationErrors: true 
  } 
};

const connectDB = async () => {
  try {
    // Conectar a MongoDB usando Mongoose
    await mongoose.connect(uri, clientOptions);

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    
    console.error("Connection failed:", error);
  } 
};

export default connectDB; 