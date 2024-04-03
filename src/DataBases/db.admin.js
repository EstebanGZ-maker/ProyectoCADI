//PRUEBA DE CONECCIÓN OFICIAL 
import mongoose from "mongoose";

const connectDBadmin = async () =>{
    
    try { 
        await mongoose.createConnection('mongodb://localhost:27017/admin'); 
        console.log("Conection successful with admin");     
    } catch (error) {
        console.log(error);
        throw error;
    }
}; 

export default connectDBadmin; 
 