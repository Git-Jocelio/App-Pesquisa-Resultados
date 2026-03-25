import express from "express";
const router = express.Router();

import concursoController from "../controllers/concursoController";

// rota mais recente
router.get("/recente", concursoController.buscarRecente);

// rota por número
router.get("/:concurso", concursoController.buscarPorNumero);

export default router;