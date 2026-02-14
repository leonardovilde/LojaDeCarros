import React, { createContext, useState } from "react";

export const CarroContext = createContext();

export const CarroProvider = ({ children }) => {
  const [carros, setCarros] = useState([
    {
      id: 1,
      modelo: "Honda Civic",
      ano: 2020,
      preco: "R$ 80.000",
      automatico: true,
      km: 35000,
      foto: "https://www.shutterstock.com/image-photo/thessalonikigreece-3-october-2017-honda-260nw-2541558101.jpg",
    },
    {
      id: 2,
      modelo: "Toyota Corolla",
      ano: 2019,
      preco: "R$ 75.000",
      automatico: true,
      km: 42000,
      foto: "https://www.infomoney.com.br/wp-content/uploads/2019/06/novo-toyota-corolla-.jpg",
    }
  ]);

  const removerCarro = (id) => {
    setCarros(carros.filter((carro) => carro.id !== id));
  };

  const adicionarCarro = (novoCarro) => {
    const id = carros.length ? carros[carros.length - 1].id + 1 : 1;
    setCarros([...carros, { ...novoCarro, id }]);
  };

  return (
    <CarroContext.Provider value={{ carros, adicionarCarro, removerCarro }}>
      {children}
    </CarroContext.Provider>
  );
};