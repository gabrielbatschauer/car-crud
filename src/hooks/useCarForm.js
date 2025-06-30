import { useState, useEffect } from "react";
import { capitalize } from "../utils/text";

export function useCarForm(initialCar = null) {
  // Inicializa o estado do formulário com os valores do carro inicial ou com valores vazios
  // O estado inclui campos como id, marca, modelo, ano, cor, câmbio e data
  const [form, setForm] = useState({
    id: "",
    marca: "",
    modelo: "",
    km: "",
    year: "",
    combustivel: "",
    color: "",
    cambio: "",
    date: "",
  });

  // Efeito para definir o estado do formulário com os valores do carro inicial
  // Ele é executado apenas uma vez quando o componente é montado ou quando o carro inicial muda
  // Isso garante que o formulário seja preenchido com os dados corretos quando um carro é editado
  useEffect(() => {
    if (initialCar) {
      setForm(initialCar);
    }
  }, [initialCar]);

  // Função para lidar com as mudanças nos campos do formulário
  // Ela atualiza o estado do formulário com os novos valores dos campos
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Atualiza o estado do formulário com o novo valor
    // Se o campo for "color", capitaliza o valor
    setForm((prev) => ({
      ...prev,
      [name]: name === "color" ? capitalize(value) : value,
      ...(name === "marca" ? { modelo: "" } : {}),
    }));
  };

  // Função para resetar o formulário para os valores iniciais
  const resetForm = () => {
    setForm({
      id: "",
      marca: "",
      modelo: "",
      year: "",
      color: "",
      cambio: "",
      km: "",
      combustivel: "",
      date: "",
    });
  };

  // Retorna o estado do formulário, a função de manipulação de mudanças,
  return { form, handleChange, setForm, resetForm };
}
