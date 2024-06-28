use("test");

// Reemplazar "coleccion" con el nombre de tu colección
// Reemplazar "campo" con el nombre del campo que deseas convertir

db.OringsData.find().forEach(function(doc) {
  doc.Espesor = parseFloat(doc.Espesor);
  db.OringsData.save(doc);
});


/* db.sale.aggregate([
  {$match: {
    date: { $gte: new Date("2014-01-01"), $lt: new Date("2025-02-02") }
  }},
  { $group:{ _id: "$item", totalSaleAmount: {$sum: {$multiply: ["$price", "$quantity"] }}}}
]) */

