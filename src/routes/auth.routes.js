import { Router } from "express";
import {register, login , logout, profile, verifyToken } from "../controllers/auth.controller.js"
import { authRequired, requireRole } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", authRequired, requireRole(['admin']), validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema) ,login );

router.post("/logout", logout);

router.get("/verify", verifyToken);

router.get("/profile", authRequired ,profile );

export default router;