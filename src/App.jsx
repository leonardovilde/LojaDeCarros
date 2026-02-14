import React from "react";
import { Routes, Route } from "react-router-dom";
import { CarroProvider } from "./contexts/CarroContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Detalhes from "./pages/Detalhes";

export default function App() {
  return (
    <CarroProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
      </Routes>
    </CarroProvider>
  );
}