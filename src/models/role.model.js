import mongoose from "mongoose";

export const Roles = ["user", "admin"]

//esquema de como se van a guardar los datos de usuario en la DB

const roleSchema = new mongoose.Schema({
    username: {
        type: String
    }
    }, 
    {
        versionKey: false,
    });

//Esto es para interactuar con la DB y los metodos. 
const  roleModel = mongoose.model("Role", roleSchema); 


export  default roleModel;