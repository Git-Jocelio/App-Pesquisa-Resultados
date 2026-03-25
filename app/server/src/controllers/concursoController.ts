import { Request, Response } from "express";
import concursoModel from "../models/concursoModel";

// GET /recente
const buscarRecente = async (req: Request, res: Response) => {
  try {
    const concurso = await concursoModel.getConcursoRecente();
    res.json(concurso);
  } catch (err: any) {
    res.status(500).json({ erro: "erro desconhecido" });
    //
//*    console.error("=== DETALHES DO ERRO ===");
//    console.error(err); // Isso vai imprimir o stack trace e o objeto completo
//    res.status(500).json({
//      erro: err.message || "Erro desconhecido",
//      detalhes: err.stack
//*    });
    
  }
};

// GET /:numero
const buscarPorNumero = async (req: Request, res: Response) => {
  const numeroConcurso = req.params.concurso as string;

  try {
    const concurso = await concursoModel.getConcursoPorNumero(numeroConcurso);

    if (!concurso) {
      return res.status(404).json({
        mensagem: "Concurso não encontrado",
      });
    }

    res.json(concurso);
  } catch (err: any) {
    res.status(500).json({ erro: err.message });
  }
};

export default {
  buscarRecente,
  buscarPorNumero,
};