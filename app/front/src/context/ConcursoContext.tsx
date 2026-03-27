import React, { createContext, useState } from "react";
import { ReactNode } from "react";
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

  const buscarRecente = async () => {
    try {
      const response = await api.get("/recente");
      setConcurso(response.data);
      setErro("");
    } catch {
      setErro("Erro ao buscar concurso recente");
    }
  };

  const buscarPorNumero = async (numero: number) => {
  try {
    console.log(numero);
    
    const response = await api.get(`/${numero}`);
    setConcurso(response.data);

//console.log("Axios:", concurso);
//console.log("pesq num:", numero);

  } catch (err) {
    console.error(err);
    setErro("Erro ao buscar concurso");
  }
  console.log("Axios:", concurso);
// console.log("pesq num:", numero);

};

  return (
    <ConcursoContext.Provider
      value={{ concurso, erro, buscarRecente, buscarPorNumero }}
    >
      {children}
    </ConcursoContext.Provider>
  );
};