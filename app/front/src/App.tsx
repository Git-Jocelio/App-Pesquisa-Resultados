import { useContext, useEffect } from "react";
import { ConcursoContext } from "./context/ConcursoContext";

function App() {
  const { concurso, erro, buscarRecente } = useContext(ConcursoContext);

  useEffect(() => {
    buscarRecente();
  }, [buscarRecente]);

  return (
    <div>
      <h1>Mega-Sena</h1>

      {erro && <p>{erro}</p>}

      {concurso && (
        <div>
          <h2>Concurso: {concurso.concurso}</h2>
          <p>Data: {concurso.data_do_sorteio}</p>
          <p>
            Números: {concurso.bola1}, {concurso.bola2}, {concurso.bola3},{" "}
            {concurso.bola4}, {concurso.bola5}, {concurso.bola6}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;