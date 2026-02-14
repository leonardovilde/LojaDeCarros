import React, { useContext } from "react"; 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";  
import { CarroContext } from "../contexts/CarroContext"; 

const schema = yup.object().shape({
  marca: yup.string().required("A marca é obrigatória"),
  modelo: yup.string().required("O modelo é obrigatório"),
  ano: yup.number().typeError("O ano deve ser um número").required("O ano é obrigatório").min(1900, "Ano inválido").max(new Date().getFullYear(), "Ano inválido"),
  preco: yup.number().typeError("Preço deve ser um número").required("O preço é obrigatório").positive("O preço deve ser positivo"),
  km: yup.number().typeError("KM deve ser um número").required("Quilometragem obrigatória").min(0, "KM não pode ser negativo"),
  cor: yup.string().required("A cor é obrigatória"),
  cambio: yup.string().required("Selecione o câmbio"),
  combustivel: yup.string().required("Selecione o combustível"),
  portas: yup.number().typeError("Número de portas inválido").required("Informe o número de portas").min(2, "Mínimo 2 portas").max(6, "Máximo 6 portas"),
  descricao: yup.string().required("A descrição é obrigatória").min(10, "Descrição muito curta"),
  foto: yup.string().required("Imagem obrigatória").test(
      "is-valid-image",
      "Digite uma URL válida ou imagem Base64 válida",
      (value) => value && (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("data:image/"))
    )
});


export default function Cadastro() {
  
  const { adicionarCarro } = useContext(CarroContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    adicionarCarro({
      ...data,
      id: Date.now()
    });

    alert("Carro cadastrado com sucesso!");
    reset();
    navigate("/"); 
  };

  return (
    <div className="container">
      <h2>Cadastro de Carro</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Marca</label>
        <input {...register("marca")} />
        <p style={{ color: "red" }}>{errors.marca?.message}</p>

        <label>Modelo</label>
        <input {...register("modelo")} />
        <p style={{ color: "red" }}>{errors.modelo?.message}</p>

        <label>Ano</label>
        <input type="number" {...register("ano", { valueAsNumber: true })} />
        <p style={{ color: "red" }}>{errors.ano?.message}</p>

        <label>Preço</label>
        <input type="number" {...register("preco", { valueAsNumber: true })} />
        <p style={{ color: "red" }}>{errors.preco?.message}</p>

        <label>Quilometragem</label>
        <input type="number" {...register("km", { valueAsNumber: true })} />
        <p style={{ color: "red" }}>{errors.km?.message}</p>

        <label>Cor</label>
        <input {...register("cor")} />
        <p style={{ color: "red" }}>{errors.cor?.message}</p>

        <label>Câmbio</label>
        <select {...register("cambio")}>
          <option value="">Selecione</option>
          <option value="Manual">Manual</option>
          <option value="Automático">Automático</option>
        </select>
        <p style={{ color: "red" }}>{errors.cambio?.message}</p>

        <label>Combustível</label>
        <select {...register("combustivel")}>
          <option value="">Selecione</option>
          <option value="Gasolina">Gasolina</option>
          <option value="Etanol">Etanol</option>
          <option value="Flex">Flex</option>
          <option value="Diesel">Diesel</option>
        </select>
        <p style={{ color: "red" }}>{errors.combustivel?.message}</p>

        <label>Portas</label>
        <input type="number" {...register("portas", { valueAsNumber: true })} />
        <p style={{ color: "red" }}>{errors.portas?.message}</p>

        <label>Descrição</label>
        <textarea {...register("descricao")} />
        <p style={{ color: "red" }}>{errors.descricao?.message}</p>

        <label>Imagem (URL ou Base64)</label>
        <input {...register("foto")} />
        <p style={{ color: "red" }}>{errors.foto?.message}</p>

        <br />
        <button type="submit" className="detalhes" style={{ width: "100%" }}>
          Cadastrar Carro
        </button>
      </form>
    </div>
  );
}