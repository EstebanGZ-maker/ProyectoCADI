import OringsData  from "../models/oring.model.js";


//"Registrar Orings" 
export const createQueryOring = async (req, res) => {

    const { ID,description,codigoCompuesto,
        Espesor,Dexterno,Dinterno,PesoGr,PrecioProducir,PrecioVenta,IdPlano,
        Idmolde,Mtamaño,Ncavidades,Nplacas,Tdistribucion, Patin,Tmaquina,Tmolde,TProceso } = req.body

    try {
        
        const oringFound = await OringsData.find({ID}); 
        if (!oringFound) 
            return res.status(400).json(["El oring ya esta registrado"]);
        
        const newOring = new OringsData({
            ID,description,codigoCompuesto,
            Espesor,Dexterno,Dinterno,PesoGr,PrecioProducir,PrecioVenta,IdPlano,
            Idmolde,Mtamaño, Ncavidades,Nplacas,Tdistribucion,Patin,Tmaquina,Tmolde,TProceso
        });
        const oringSaved = await newOring.save()

        res.json({
            message: "Producto creado exitosamente",
            id: oringSaved._id,
            //ID: oringSaved.ID,
            description: oringSaved.description,
            createAt: oringSaved.createdAt,
            updateAt: oringSaved.updatedAt,

        })

    } catch (error) {
        res.status(500).json({message: error.message}); 
    }

};

//Obtener todos los orings almacenados
export const getQueryOrings = async ( res) => {

    const queryOrings = await OringsData.find()
    res.json(queryOrings)
    
};

//Obtener un oring dependiendo las medidas solicitadas
export const getQueryOring = async (req, res) => {

    const {Espesor, Dexterno, Dinterno} = req.query; 
    console.log("Parámetros recibidos:", req.query);

    try {
        
        const oringFound = await OringsData.find({ 
            
        $and: [ 
            {Espesor: { $gte: parseFloat(Espesor) - 2.0, $lte: parseFloat(Espesor) + 2.0}},
            {Dexterno: { $gte: parseFloat(Dexterno) - 2.0, $lte: parseFloat(Dexterno) + 2.0 }},
            {Dinterno: { $gte: parseFloat(Dinterno) - 2.0, $lte: parseFloat(Dinterno) + 2.0 }},
            // posibles parametros 
        ] 
             
      }); 
      //Lo que va responder 
      if (oringFound.length > 0) {
        
         
        return res.status(200).json({
          message: "Producto consultado exitosamente",
          result: oringFound,
           createdAt: oringFound.createdAt, 
           updatedAt: oringFound.updatedAt, 
        });
      } else {
        res.json({ success: false, 
            message: "No se encontraron orings con las variables especificadas" ,
            result: oringFound
        });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

//Actualizar un oring por id 
export const updateQueryOring = async (req, res) => {
    
    const queryOring = await OringsData.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!queryOring) return res.status(404).json({message: "Consulta actualizada"})
    res.json(queryOring)

};
//Eliminar un oring por id
export const deleteQueryOring = async (req, res) => {

    const queryOring = await OringsData.findByIdAndDelete(req.params.id)
    if (!queryOring) return res.status(404).json({message: "Consulta no encontrada"})
    res.json(queryOring)

};