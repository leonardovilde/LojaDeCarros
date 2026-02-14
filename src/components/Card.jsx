import React from "react";
import { Link } from "react-router-dom";

export default function Card({ carro, onRemover }) {
  return (
    <div className="card">
      <img
        src={carro.foto}
        alt={carro.modelo}
        onError={(e) =>
          (e.target.src = "https://via.placeholder.com/300x200?text=Sem+Imagem")
        }
      />
      <h3>{carro.modelo}</h3>
      <p>Ano: {carro.ano}</p>
      <p>Preço: {carro.preco}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={`/detalhes/${carro.id}`}>
          <button style={{ backgroundColor: "#007bff" }}>Detalhes</button>
        </Link>
        <button
          style={{ backgroundColor: "#dc3545" }}
          onClick={() => onRemover(carro.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
}
