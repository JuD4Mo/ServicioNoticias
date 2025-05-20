import express from "express";
import { crearNoticia, getNoticias, editarNoticia, eliminarNoticia, getNoticiaById } from "../controllers/noticiasController.js";

const router = express.Router();

router.post("/crearNoticia", crearNoticia)

router.get("/listarNoticias", getNoticias)

router.patch("/editarNoticia/:id", editarNoticia)

router.delete("/eliminarNoticia/:id", eliminarNoticia)

router.get("/getNoticiaId/:id", getNoticiaById)
export default router;
