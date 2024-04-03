import mongoose from "mongoose";

const connectDBtest = async () =>{
    
    try { 
        await mongoose.createConnection('mongodb://localhost:27017/test');
        console.log("Conection successful with test");      
    } catch (error) {
        console.log(error);
        throw error;
    }
}; 

export default connectDBtest; 