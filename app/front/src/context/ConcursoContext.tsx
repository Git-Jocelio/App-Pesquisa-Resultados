import React, { createContext, useState, ReactNode } from "react";
import { api } from "../services/api";

interface Concurso {
  concurso: number;
  data_do_sorteio: string;
  bola1: number;
  bola2: number;
  bola3: number;
  bola4: number;
  bola5: number;
  bola6: number;
}

interface ConcursoContextData {
  concurso: Concurso | null;
  erro: string;
  buscarRecente: () => void;
  buscarPorNumero: (numero: number) => void;
}

interface Props {
  children: ReactNode;
}

export const ConcursoContext = createContext({} as ConcursoContextData);

export const ConcursoProvider = ({ children }: Props) => {
  const [concurso, setConcurso] = useState<Concurso | null>(null);
  const [erro, setErro] = useState("");

  // ✅ Busca concurso mais recente
  const buscarRecente = async () => {
    try {
      const response = await api.get("/recente");
      console.log("Recente:", response.data);

      setConcurso(response.data);
      setErro("");
    } catch (err) {
      console.error(err);
      setErro("Erro ao buscar concurso recente");
    }
  };

  // ✅ Busca por número
  const buscarPorNumero = async (numero: number) => {
    try {
      console.log("Número enviado:", numero);

      const response = await api.get(`/${numero}`);

      console.log("Resposta API:", response.data);

      setConcurso(response.data);
      setErro("");
    } catch (err: any) {
      console.error(err);
      setErro("Erro ao buscar concurso");
      if (err.response && err.response.status === 404) {
        setErro("Concurso não encontrado");
        setConcurso(null); // limpa resultado anterior
      } else {
        setErro("Erro ao buscar concurso");
      }


    }
  };

  return (
    <ConcursoContext.Provider
      value={{ concurso, erro, buscarRecente, buscarPorNumero }}
    >
      {children}
    </ConcursoContext.Provider>
  );
};