import React, { useContext } from "react"; // 1. Importe o useContext
import { CarroContext } from "../contexts/CarroContext"; // 2. Importe o seu Contexto
import Card from "../components/Card";

export default function Home() {
  // 3. Pegue os dados direto do "estoque" global (Contexto)
  const { carros, removerCarro } = useContext(CarroContext);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚗 Carros em Estoque
      </h2>

      {carros.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          Nenhum carro cadastrado ainda.
        </p>
      ) : (
        // O restante do seu código permanece exatamente o mesmo
        carros.map((carro) => (
          <Card
            key={carro.id}
            carro={carro}
            onRemover={removerCarro}
          />
        ))
      )}
    </div>
  );
}