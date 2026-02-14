import React from "react";
import Card from "../components/Card";

export default function Home({ carros, removerCarro }) {
  return (
    <div className="container">
      {carros.length === 0 ? (
        <p>Nenhum carro cadastrado ainda.</p>
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
