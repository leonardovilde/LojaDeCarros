import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  nome: yup.string().required("O nome do carro é obrigatório"),
  marca: yup.string().required("A marca é obrigatória"),
  ano: yup.number()
    .typeError("O ano deve ser um número")
    .min(1900, "Ano inválido")
    .max(new Date().getFullYear(), "Ano inválido")
    .required("O ano é obrigatório"),
  preco: yup.number()
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser positivo")
    .required("O preço é obrigatório"),
  automatico: yup.boolean(),
  km: yup.number()
    .typeError("Quilometragem deve ser um número")
    .min(0, "Quilometragem inválida")
    .required("Quilometragem é obrigatória"),
  imagem: yup.string()
    .url("Digite uma URL válida")
    .required("A URL da imagem é obrigatória")
});

export default function Cadastro({ addCarro }) {
  const [valores, setValores] = useState({
    nome: "",
    marca: "",
    ano: "",
    preco: "",
    km: "",
    automatico: false,
    imagem: ""
  });

  const [erros, setErros] = useState({});

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange" // importante para validação em tempo real
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setValores((prev) => ({ ...prev, [name]: val }));

    // Validação simples em tempo real
    if (!val.toString().trim()) {
      setErros((prev) => ({ ...prev, [name]: "Campo obrigatório" }));
    } else {
      setErros((prev) => ({ ...prev, [name]: null }));
    }
  };

  const onSubmit = (data) => {
    addCarro(data);
    alert("Carro cadastrado com sucesso!");
    reset();
    setValores({
      nome: "",
      marca: "",
      ano: "",
      preco: "",
      km: "",
      automatico: false,
      imagem: ""
    });
    setErros({});
  };

  return (
    <div className="container">
      <h2>Cadastro de Carro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input 
          {...register("nome")} 
          name="nome"
          value={valores.nome}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.nome}</p>

        <label>Marca</label>
        <input 
          {...register("marca")} 
          name="marca"
          value={valores.marca}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.marca}</p>

        <label>Ano</label>
        <input 
          type="number" 
          {...register("ano")} 
          name="ano"
          value={valores.ano}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.ano}</p>

        <label>Preço</label>
        <input 
          type="number" 
          {...register("preco")} 
          name="preco"
          value={valores.preco}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.preco}</p>

        <label>Quilometragem</label>
        <input 
          type="number" 
          {...register("km")} 
          name="km"
          value={valores.km}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.km}</p>

        <label>Automático</label>
        <input 
          type="checkbox" 
          {...register("automatico")} 
          name="automatico"
          checked={valores.automatico}
          onChange={handleChange} 
        />

        <label>Imagem (URL)</label>
        <input 
          {...register("imagem")} 
          name="imagem"
          value={valores.imagem}
          onChange={handleChange} 
        />
        <p style={{ color: "red" }}>{erros.imagem}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
