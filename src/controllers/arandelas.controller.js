import arandelasdatos from "../models/arandelas.model.js";

// REGISTRAR ARANDELAS 
export const createArandelas = async (req, res, next) => {
    const { ID, Description, Compuesto, Dexterno, Dinterno, W, Peso, MoldTamaño, Ncavidades, Nplacas, Distribucion, Patin, Linea, Tmaquina, TProceso, PDF } = req.body;

    try {
        const arandelasFound = await arandelasdatos.find({ ID });
        if (arandelasFound.length > 0) {
            return res.status(400).json({ message: "La arandela ya está registrada" });
        }

        const newArandela = new arandelasdatos({
            ID, Description, Compuesto, W, Dexterno, Dinterno, Peso, MoldTamaño, Ncavidades, Nplacas, Distribucion, Patin, Linea, Tmaquina, TProceso, PDF
        });
        const arandelaSaved = await newArandela.save();

        res.json({
            message: "Producto creado exitosamente",
            id: arandelaSaved._id,
            Description: arandelaSaved.Description,
            createAt: arandelaSaved.createdAt,
            updateAt: arandelaSaved.updatedAt
        });

    } catch (error) {
        next(error);
    }
};

// OBTENER LAS ARANDELAS ALMACENADAS (ALL)
export const getArandelas = async (req, res, next) => {
    try {
        const queryArandelas = await arandelasdatos.find();
        res.json(queryArandelas);
    } catch (error) {
        next(error);
    }
};

// OBTENER LAS ARANDELAS ALMACENADAS (FILTRADAS)
export const getArandela = async (req, res, next) => {
    const { W, Dexterno, Dinterno } = req.query; /* body */

    try {
        const arandelasFound = await arandelasdatos.find({
            $and: [
                { W: { $gte: parseFloat(W) - 0.3, $lte: parseFloat(W) + 0.3 } },
                { Dexterno: { $gte: parseFloat(Dexterno) - 0.5, $lte: parseFloat(Dexterno) + 0.5 } },
                { Dinterno: { $gte: parseFloat(Dinterno) - 0.5, $lte: parseFloat(Dinterno) + 0.5 } },
            ]
        });

        if (arandelasFound.length > 0) {
            return res.status(200).json({
                message: "Producto consultado exitosamente",
                result: arandelasFound
            });
        } else {
            res.json({ success: false, message: "No se encontraron arandelas con las variables especificadas" });
        }
    } catch (error) {
        next(error);
    }
};

// ACTUALIZAR LAS ARANDELAS 
export const updateArandela = async (req, res, next) => {
    try {
        const updateArandela = await arandelasdatos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updateArandela) {
            return res.status(400).json({ message: "Consulta no encontrada" });
        }
        res.json({ message: "Consulta actualizada", arandela: updateArandela });
    } catch (error) {
        next(error);
    }
};

// ELIMINAR ARANDELAS POR ID 
export const deleteArandela = async (req, res, next) => {
    try {
        const deleteArandela = await arandelasdatos.findByIdAndDelete(req.params.id);
        if (!deleteArandela) {
            return res.status(400).json({ message: "Consulta no encontrada" });
        }
        res.json({ message: "Arandela eliminada", arandela: deleteArandela });
    } catch (error) {
        next(error);
    }
};
