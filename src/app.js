/* const { ifError, match } = require("assert");
const { kMaxLength } = require("buffer");
const { error, Console } = require("console");
const { openAsBlob } = require("fs");
const { access } = require("fs/promises");
const { connect } = require("http2");
const { AbstractCursor, MongoCryptCreateEncryptedCollectionError } = require("mongodb");
//Se hace un llamado a  la libreria mongoose
const { default: mongoose, createConnection } = require("mongoose");
const { basename } = require("path/posix");
const { config, abort } = require("process");
const { isAnyArrayBuffer } = require("util/types");
const { float } = require("webidl-conversions");
const Schema = mongoose.Schema

//URL de conexión a MongoDB 
const mongoURI = 'mongodb://localhost:27017/test';

//Conexión a MongoDB 
mongoose.connect(mongoURI)
    .then(() => console.log("Conección exitosa"))
    .catch(err => console.error("Error al conectar el servidor", err)); 
 */

/* 
Verificaciones manuales/ reconocimiento de caracteres, 400 clientes bancos
Ofertas de adquisición, al vender la copañia lidero lo del fraude
Reunir capital,        
NO darse lujos inmediatamente, recoger capital,
TEMA CENTRAL SOFTWARE Y DATA en comercios clasicos, 
Cultura del " exit = capital x 30/40 veces " crecer una compañia y venderla enfocanose en tener liquidez 
Gente metelona e iteligente para complementar las ideas y que se le vea potencial enfocado en una industria conocida
DPI = capital levantado y cuanto dió de retorno
Que se necesita tener para que sea interesante
    - GENTE CON UN TRACK RECORD ya han creado 
    - Fundadores que no han creado/Fundador no Obvio

    EXTRUCUTURA DE FONDO o como fondear una empresa(Inversores)

Intitucionales (Aseguradoras, fondos de pension)
Fondos 
Family office 
Empresarios / Personas X

modalidad 220 = 2% de interes anual /12 y el 20% Sobre la ganancia 
Entidades "LLc" = "SAS" General pathner



Enfocarse en elementos disrruptivos para fondo de capital de riesgo 
 
 */      
     
// EL APP DEFINIRÁ LAS RUTAS Y LA LOGICA DE LA APLICACIÓN EN CONJUNTO CON EL INDEX

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js"
import queryOringRoutes  from "./routes/queryOring.routes.js"

const app = express();

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(queryOringRoutes)

export default app;