/* Uso global, db */
// MongoDB Playground
// Para desactivar este confi => | MongoDB | "Use Default Template For Playground".
// Asegurar estar conectado para habilitar las finalizaciones y poder ejecutar el Playground
// Usar Ctrl+Espacio  dentro de un fragmento o una cadena literal para activar las finalizaciones.
// El resultado del último comando ejecutado en un playground se muestra en el panel de resultados.
// Por defecto se devolverán los 20 primeros documentos con un cursor.
// Utilizar 'console.log()' para imprimir en la salida de depuración.
// Documentación sobre los Playground
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Selecionar DB. La base de datos que deseo trabajar
use('mongodbVSCodePlaygroundDB');

// Se inserta pocos documentos dentro de "sales collection".
db.getCollection('sales').insertMany([
  { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
  { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
  { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
  { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
  { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
]);

// Ejecuta un comando de busqueda para ver "items sold on April 4th, 2014".
const salesOnApril4th = db.getCollection('sales').find({
  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
}).count();

// Imprime mensaje en consola.
console.log(`${salesOnApril4th} sales occurred in 2014.`);

// Aquí se ejecuta una agregación y abrimos un cursor a los resultados.
// Se usa '.toArray()' para agotar el cursor y devolver todo el conjunto de resultados.
// Se puede usar '.hasNext()/.next()' para iterar a través del cursor página por página.
db.getCollection('sales').aggregate([
  // Encuentra todas las ventas que ocurrieron en 2014.
  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Grupo del total de ventas por cada producto.
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
]);

db.getName
