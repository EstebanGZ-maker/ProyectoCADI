/* const { error, Console } = require("console");
const {MongoClient} =  require("mongodb")

const url = "mongodb+srv://estebangz:esteban@cluster0.jmghup5.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(url); 

async function run(){
    try {
        await client.connect();
        console.log("Conección exitosa!!");

    } catch (err) {
        console.log(err.stack);
    }

    finally{
        await client.close(); 
    }
}
 
run().catch(console.dir) */


//PRUEBA DE CONECCIÓN OFICIAL 
import mongoose from "mongoose";

export const conectDB = async () =>{
    
    try {
        const adminClient = await mongoose.connect('mongodb://localhost:27017/admin'); 
        console.log("Conection successful with admin");      
    } catch (error) {
        console.log(error);
    }
}; 

/* export const conectDBtest = async () =>{
    
    try { 
        const testClient = await mongoose.connect('mongodb://localhost:27017/test');
        console.log("Conection successful with test");      
    } catch (error) {
        console.log(error);
    }
}; 
 */

