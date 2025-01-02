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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://consultascadi.up.railway.app'); // Allow requests from your frontend
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
    next();
});

app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://localhost:5173'], // URLs permitidas
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true // Permite cookies/sesiones
}));

app.use(morgan('dev')); 
app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);
app.use(queryOringRoutes);
app.use(arandelasRoutes);

export default app;