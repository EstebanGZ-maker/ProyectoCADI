import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getQueryOring, getQueryOrings, createQueryOring, updateQueryOring, deleteQueryOring } from "../controllers/queryOring.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProductsSchema } from "../schemas/oring.schema.js";

const router = Router()

router.get("/queryOring/id", authRequired , getQueryOrings)

router.post("/queryOring", authRequired, validateSchema(createProductsSchema), createQueryOring )

router.get("/queryOring/query", authRequired,  getQueryOring)

router.delete("/queryOring/:id", authRequired, deleteQueryOring )

router.put("/queryOring/:id", authRequired, updateQueryOring )

export default router  