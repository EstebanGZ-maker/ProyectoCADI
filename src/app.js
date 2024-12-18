// EL APP DEFINIRÁ LAS RUTAS Y LA LOGICA DE LA APLICACIÓN EN CONJUNTO CON EL INDEX

import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"

//Routes 

import authRoutes from "./routes/auth.routes.js"
import queryOringRoutes  from "./routes/queryOring.routes.js"
import arandelasRoutes from "./routes/arandelas.routes.js";

const app = express();

//Middlewares

app.use(cors({
    origin: ['https://consultascadi.up.railway.app', 'http://localhost:5173'], // URLs permitidas
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true // Permite cookies/sesiones
}));

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(queryOringRoutes);
app.use(arandelasRoutes);

export default app;