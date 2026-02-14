import React from "react";
import Card from "../components/Card";

export default function Home({ carros, removerCarro }) {
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

