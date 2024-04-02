import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { getQueryOring, getQueryOrings, createQueryOring, updateQueryOring, deleteQueryOring } from "../controllers/queryOring.controller.js";
import { get } from "https";

const router = Router()

router.get("/queryOring", authRequired, getQueryOrings)

router.get("/queryOring/:id", authRequired, getQueryOring)

router.post("/queryOring", authRequired, createQueryOring )

router.delete("/queryOring/:id", authRequired, deleteQueryOring )

router.put("/queryOring/:id", authRequired, updateQueryOring )

export default router  