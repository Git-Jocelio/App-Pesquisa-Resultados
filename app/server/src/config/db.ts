import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "megasena",
  password: "postgres",
  port: 5432
});

pool.on('error', (err) => {
  console.error(' Erro inesperado no cliente do banco:', err.message);
});



export default pool;