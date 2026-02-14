import React, { useContext } from "react"; 
import { CarroContext } from "../contexts/CarroContext"; 
import Card from "../components/Card";

export default function Home() {
  
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