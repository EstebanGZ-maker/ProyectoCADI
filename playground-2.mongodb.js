/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'OringDB';
const collection = 'PropiedadesOrg';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);

// The prototype form to create a collection:
db.createCollection( 
  {
    Dimensiones: 455,
    TipoProducto: "Oring",
    ConsumoCompra: 45.00,
    TipoMaterial: "Silicona"
  
  })
show.database