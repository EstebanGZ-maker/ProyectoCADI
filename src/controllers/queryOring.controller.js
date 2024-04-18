import test from "node:test";
import Orings  from "../models/oring.model.js";

// TO DO = Revisar como se llaman las solicitudes, si es con "OringsData" o con  "Orings".
export const getQueryOrings = async (req, res) => {

    const queryOrings = await Orings.find()
    res.json(queryOrings)

};

export const createQueryOring = async (req, res) => {
    const { IDcadi,description,codigoCompuesto,
        Espesor,Dexterno,Dinterno,Idmolde,Mtamaño,
        Ncavidades,Nplacas,Tmaquina,Tmolde,TProceso, } = req.body

        
    const newOring = new Orings({
        IDcadi,description,codigoCompuesto,
        Espesor,Dexterno,Dinterno,Idmolde,Mtamaño,
        Ncavidades,Nplacas,Tmaquina,Tmolde,TProceso,
    });

    const saveOring = await newOring.save();
    res.json(saveOring);
};

export const getQueryOring = async (req, res) => {
    
    try {
        
        const queryOring = await Orings.find({ 
        $and: [
            {Espesor: { $gte: Espesor - 0.5, $lte: Espesor + 0.5 }},
            {Dexterno: { $gte: Dexterno - 0.5, $lte: Dexterno + 0.5 }},
            {Dinterno: { $gte: Dinterno - 0.5, $lte: Dinterno + 0.5 }},
            // posibles parametros 
            {codigoCompuesto: codigoCompuesto},
        ] 
      }); 

      //Procesador de resultados 
      if(queryOring.length > 0){
        //return res.status(200).json;
        res.json(queryOring)
      } else {
        res.json({ success: false,
            message: "No se encontraron orings con las variables especificadas",
          });
      }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message});
    }
};

export const deleteQueryOring = async (req, res) => {

    const queryOring = await Orings.findByIdAndDelete(req.params.id)
    if (!queryOring) return res.status(404).json({message: "Consulta no encontrada"})
    res.json(queryOring)

};

export const updateQueryOring = async (req, res) => {

    const queryOring = await Orings.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!queryOring) return res.status(404).json({message: "Consulta actualizada"})
    res.json(queryOring)

};