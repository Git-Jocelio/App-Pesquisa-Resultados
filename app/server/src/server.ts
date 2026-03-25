import express from "express";
import cors from "cors";

import concursoRoutes from "./routes/concursoRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// prefixo da rota
app.use("/concursos", concursoRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});