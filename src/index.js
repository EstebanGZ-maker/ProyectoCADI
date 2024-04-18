//ARCHIVO PRINCIPAL, IMPORTA, EXPORTA, (INICIALIZADOR DE LA APP)
import app from './app.js'
import connectDB from "./db.test1.js";

app.listen(4000);
console.log('Server on port: ', 4000); 
connectDB();  