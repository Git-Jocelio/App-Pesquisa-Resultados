import { useContext, useEffect, useState } from "react";
import { ConcursoContext } from "./context/ConcursoContext";
import { Container, Bola } from "./components/styles";

function App() {
  const { concurso, erro, buscarRecente, buscarPorNumero } = useContext(ConcursoContext);
  const [numero, setNumero] = useState("");

  useEffect(() => {
    buscarRecente();
  }, []);


   const handleBuscar = async () => {
   
    if (!numero) return;    
    await buscarPorNumero(Number(numero));
    const resultadoBusca = await buscarPorNumero(Number(numero));
    console.log(resultadoBusca);
  };

  return (
    <Container>
      <h1>Mega-Sena</h1>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Digite o número do concurso"
        value={numero}
        onChange={(e) => {
  const valor = e.target.value;
  if (/^\d*$/.test(valor)) {
    setNumero(valor);
  }
}}
      />

      <button onClick={handleBuscar}>Buscar</button>
     

      {erro && <p>{erro}</p>}

      {concurso && (
        <div>
          <h2>Concurso {concurso.concurso}</h2>
          <p>Data: {concurso.data_do_sorteio}</p>

          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <Bola>{concurso.bola1}</Bola>
            <Bola>{concurso.bola2}</Bola>
            <Bola>{concurso.bola3}</Bola>
            <Bola>{concurso.bola4}</Bola>
            <Bola>{concurso.bola5}</Bola>
            <Bola>{concurso.bola6}</Bola>
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;