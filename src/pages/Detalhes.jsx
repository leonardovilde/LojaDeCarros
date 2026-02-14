import React from "react";
import { useParams, Link } from "react-router-dom";

export default function Detalhes({ carros }) {
  const { id } = useParams();
  const carro = carros.find((c) => c.id === parseInt(id));

  if (!carro) {
    return (
      <div className="container">
        <h2>Carro não encontrado</h2>
        <Link to="/">
          <button style={{ backgroundColor: "#007bff" }}>
            Voltar
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>{carro.marca} {carro.modelo}</h2>

      <img
        src={carro.foto}
        alt={carro.modelo}
        style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
      />

      <p><strong>Marca:</strong> {carro.marca}</p>
      <p><strong>Modelo:</strong> {carro.modelo}</p>
      <p><strong>Ano:</strong> {carro.ano}</p>
      <p><strong>Preço:</strong> R$ {carro.preco}</p>
      <p><strong>Câmbio:</strong> {carro.cambio}</p>
      <p><strong>Combustível:</strong> {carro.combustivel}</p>
      <p><strong>Quilometragem:</strong> {carro.km} km</p>
      <p><strong>Cor:</strong> {carro.cor}</p>
      <p><strong>Portas:</strong> {carro.portas}</p>
      <p><strong>Descrição:</strong> {carro.descricao}</p>

      <Link to="/">
        <button style={{ backgroundColor: "#007bff" }}>
          Voltar
        </button>
      </Link>
    </div>
  );
}
