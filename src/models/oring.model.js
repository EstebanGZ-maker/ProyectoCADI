import { Double } from "mongodb";
import mongoose from "mongoose"


//Esquema de como se van a guardar los datos de los productos en la DB
const OringsSchema = new mongoose.Schema({
    IDcadi:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,   
        required: true,
    },
    codigoCompuesto: {
        type: String,
        required: true
    },
    Espesor: {
        type: Number,
        required: true
    },
    Dexterno: {
        type: Number,
        required: true
    },
    Dinterno: {
        type: Number,
        required: true
    },
    Idmolde: {
        type: String,
        required: true,
        unique: true
    },
    Mtamaño: {
        type: String
    },
    Ncavidades: {
        type: String
    },
    Nplacas: {
        type: String
    },
    Tmaquina: {
        type: String
    },
    Tmolde: {
        type: String    
    },
    TProceso: {
        type: String
    },
});

//Esto es para interactuar con la DB y los metodos. 
//Aqui se cambia lo de la DB antes era Orings
const OringModel = mongoose.model("OringsData", OringsSchema); 

export default OringModel;