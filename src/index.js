/* //ARCHIVO PRINCIPAL, IMPORTA, EXPORTA, (INICIALIZADOR DE LA APP)
import { console } from 'inspector';
import app from './app.js'
import connectDB from "./db.test1.js";
import  dotenv  from "dotenv";

dotenv.config()

app.listen( process.env.PORT || 4000);
console.log('Server on port: ',process.env.PORT || 4000); 
connectDB();   */
 
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import connectDB from './db.test1.js';
import dotenv from 'dotenv';

dotenv.config();

// Conexión a la base de datos
connectDB();

// Configuración para servir el frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Asume que la carpeta `dist` está dentro de `src`
const frontendPath = path.join(__dirname, './dist');

// Servir archivos estáticos
app.use(express.static(frontendPath));

// Ruta fallback para manejar el frontend (Single Page Application)
app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Puerto y servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
 
