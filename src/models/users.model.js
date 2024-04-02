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
    }

}, {
    timestamps: true
});

//Esto es para interactuar con la DB y los metodos. 
export  default mongoose.model("User", userSchema)

