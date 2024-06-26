import mongoose from "mongoose";

//esquema de como se van a guardar los datos de usuario en la DB
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }, 
    roles: {
        type: [String],
        default: ['user'] 
      }

}, {
    timestamps: true
});

//Esto es para interactuar con la DB y los metodos. 
const  UserModel = mongoose.model("User", userSchema); 


export  default UserModel;