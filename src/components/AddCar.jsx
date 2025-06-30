import { useState } from "react";
import CamposAdd from "./CamposAdd";
import { cambios, combustiveis, marcas, cores, anos } from "../data/options";
import { useCarForm } from "../hooks/useCarForm";
import FormAdd from "./FormAdd";

function AddCar({ addCar }) {
  const [error, setError] = useState(false);
  // Usa o hook useCarForm para gerenciar o estado do formulário
  // Ele retorna o estado do formulário, a função de manipulação de mudanças e a função de reset
  // O estado inicial do formulário é vazio, pois não há carro selecionado
  const { form, handleChange, resetForm } = useCarForm();

  // Filtra as marcas disponíveis com base no carro selecionado
  // Se a marca selecionada não tiver modelos, retorna um array vazio
  const modelosDisponiveis = Array.isArray(marcas[form.marca])
    ? marcas[form.marca]
    : [];

  // Função para lidar com o envio do formulário
  // Ela previne o comportamento padrão do formulário, verifica se todos os campos estão preenchidos
  const handleSubmit = (e) => {
    e.preventDefault();
    const { marca, modelo, year, color, cambio, km, combustivel } = form;

    if (
      [marca, modelo, year, color, cambio, km, combustivel].some(
        (v) => !v.trim()
      )
    ) {
      setError(true);
      return;
    }

    setError(false);
    // Cria um novo carro com os dados do formulário
    addCar(marca, modelo, year, color, cambio, km, combustivel);
    resetForm();
  };

  return (
    <FormAdd onSubmit={handleSubmit}>
      <CamposAdd
        name="marca"
        value={form.marca}
        label="Marca"
        type="select"
        onChange={handleChange}
      >
        <option value=""></option>
        {Object.keys(marcas).map((marca) => (
          <option key={marca} value={marca}>
            {marca}
          </option>
        ))}
      </CamposAdd>

      <CamposAdd
        name="modelo"
        value={form.modelo}
        label="Modelo"
        type="select"
        onChange={handleChange}
        disabled={!form.marca}
      >
        <option value=""></option>
        {modelosDisponiveis.map((modelo) => (
          <option key={modelo} value={modelo}>
            {modelo}
          </option>
        ))}
      </CamposAdd>

      <CamposAdd
        name="year"
        label="Ano"
        type="select"
        value={form.year}
        onChange={handleChange}
      >
        <option value="" defaultValue>
          Selecione o ano
        </option>
        {anos.map((ano) => (
          <option key={ano} value={ano}>
            {ano}
          </option>
        ))}
      </CamposAdd>

      <CamposAdd
        name="color"
        label="Cor"
        type="select"
        value={form.color}
        onChange={handleChange}
      >
        <option value="" defaultValue>
          Selecione a cor
        </option>
        {cores.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </CamposAdd>

      <CamposAdd
        name="cambio"
        label="Câmbio"
        type="select"
        value={form.cambio}
        onChange={handleChange}
      >
        <option value="" defaultValue>
          Selecione o tipo de câmbio
        </option>
        {cambios.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </CamposAdd>
      <CamposAdd
        name="km"
        label="Quilometragem"
        placeholder="0"
        type="text"
        value={form.km}
        onChange={handleChange}
      />
      <CamposAdd
        name="combustivel"
        label="Combustível"
        placeholder="Gasolina"
        type="select"
        value={form.combustivel}
        onChange={handleChange}
      >
        <option value="" defaultValue>
          Selecione o tipo de combustível
        </option>
        {combustiveis.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </CamposAdd>

      <div className="flex flex-col items-start gap-2">
        {error && (
          <p role="alert" className="text-red-600 font-bold">
            Preencha todos os campos
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition-colors duration-300"
        >
          Adicionar
        </button>
      </div>
    </FormAdd>
  );
}

export default AddCar;
