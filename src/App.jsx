import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Detalhes from "./pages/Detalhes";

export default function App() {
  // Estado inicial com carros de exemplo
  const [carros, setCarros] = useState([
    {
      id: 1,
      modelo: "Honda Civic",
      ano: 2020,
      preco: "R$ 80.000",
      automatico: true,
      km: 35000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Honda_Civic_2019_front.jpg"
    },
    {
      id: 2,
      modelo: "Toyota Corolla",
      ano: 2019,
      preco: "R$ 75.000",
      automatico: true,
      km: 42000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/9/92/2019_Toyota_Corolla_Icon_VVT-i_HEV_1.8_Front.jpg"
    },
    {
      id: 3,
      modelo: "Volkswagen Golf",
      ano: 2018,
      preco: "R$ 70.000",
      automatico: false,
      km: 50000,
      foto: "https://upload.wikimedia.org/wikipedia/commons/e/eb/2018_Volkswagen_Golf_Sport_TSI_1.4_Front.jpg"
    }
  ]);

  // Função para remover carro
  function removerCarro(id) {
    setCarros(carros.filter((carro) => carro.id !== id));
  }

  // Função para adicionar carro
  function adicionarCarro(novoCarro) {
    const id = carros.length ? carros[carros.length - 1].id + 1 : 1;
    setCarros([...carros, { ...novoCarro, id }]);
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home carros={carros} removerCarro={removerCarro} />}
        />
        <Route
          path="/cadastro"
          element={<Cadastro adicionarCarro={adicionarCarro} />}
        />
        <Route path="/detalhes/:id" element={<Detalhes carros={carros} />} />
      </Routes>
    </>
  );
}
