import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/test"); 
        console.log("Conection sucessefull test")
    } catch (error) {
        console.log(error); 
    }
}

export default connectDB; 