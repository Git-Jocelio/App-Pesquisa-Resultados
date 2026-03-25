import pool from "../config/db";

// Buscar concurso mais recente
const getConcursoRecente = async () => {
  const result = await pool.query(
    "SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1"
  );
  return result.rows[0];
};

// Buscar concurso por número
const getConcursoPorNumero = async (concurso: string) => {
  const result = await pool.query(
    "SELECT * FROM megasena WHERE concurso = $1",
    [concurso]
  );
  return result.rows[0];
};

export default {
  getConcursoRecente,
  getConcursoPorNumero,
};