import mongoose from "mongoose";

//Esquema de como se van a guardar los datos de las arandelas en la DB

const ArandelasSchema = new mongoose.Schema({
    ID:{
        type: Number,
        required: true, 
        unique: true
    },
    Description:{
        type: String, 
        required: true,
    },
    Compuesto: {
        type: String,
        required: true
    },
    W: {
        type: Number,
        required: true,
    },
    Dexterno: {
        type: Number,
        required: true,
    },
    Dinterno: {
        type: Number,
        required: true,
    },
    Peso: {
        type: String
    },
    MoldTamaño: {
        type: String
    },
    Ncavidades: {
        type: String
    },
    Nplacas: {
        type: String
    },
    Distribucion: {
        type: String
    },
    Patin: {
        type: String
    },
    Linea: {
        type: String
    },
    Tmaquina: {
        type: String
    },
    TProceso: {
        type: String
    },
    PDF: {
        type: String,
        required: true,
    }
},{
    timestamps: true
}); 

//Desde aqui interactua con la DB 
const ArandelasModel = mongoose.model("arandelasdatos", ArandelasSchema); 

export default ArandelasModel; 