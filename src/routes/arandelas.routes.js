import { Router } from "express";
import { authRequired, requireRole } from "../middlewares/validateToken.js";
import { createArandelas, getArandelas, getArandela, updateArandela, deleteArandela } from "../controllers/arandelas.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createSchemaArandelas } from "../schemas/arandelas.schema.js";

const router = Router()

router.get("/queryArandelas/id", authRequired, getArandelas);

router.post("/queryArandela", /* authRequired, requireRole(['user']) ,validateSchema(createSchemaArandelas) */  createArandelas)

router.get("/queryArandela/query", authRequired, getArandela);

router.delete("/queryArandelas/id", authRequired, deleteArandela); 

router.put("/queryArandelas/id", authRequired, updateArandela );

export default router; 
