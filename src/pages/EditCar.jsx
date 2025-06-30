import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import { cambios, combustiveis, marcas, cores, anos } from "../data/options"; // mesmo usado no AddCar
import { useMemo, useState } from "react";
import { capitalize } from "../utils/text"; // função para capitalizar a primeira letra
import { saveCar } from "../utils/saveCar"; // função para salvar o carro editado
import { useCarForm } from "../hooks/useCarForm"; // hook para gerenciar o formulário
import CamposAdd from "../components/CamposAdd";
import FormAdd from "../components/FormAdd";

function EditCar() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  //Busca o id pelo searchParams
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  // Busca os carros do localStorage ou inicializa com um array vazio
  // Usando useMemo para otimizar a performance, evitando re-renderizações desnecessárias
  const cars = useMemo(() => {
    return JSON.parse(localStorage.getItem("cars")) || [];
  }, []);

  // Encontra o carro específico pelo ID (q) usando useMemo para otimizar
  // Evita re-calcular o carro toda vez que o componente renderiza
  const car = useMemo(() => {
    return cars.find((c) => c.id === q);
  }, [cars, q]);

  // Use o hook useCarForm para gerenciar o estado do formulário
  // Ele recebe o carro atual e retorna o estado do formulário e a função de manipulação
  const { form, handleChange } = useCarForm(car);

  // Filtra as marcas disponíveis com base no carro selecionado
  const modelosDisponiveis = Array.isArray(marcas[form.marca])
    ? marcas[form.marca]
    : [];

  // Função para lidar com o envio do formulário
  // Ela previne o comportamento padrão do formulário, cria um novo objeto de carro editado
  const handleSubmit = (e) => {
    e.preventDefault();

    const carroEditado = {
      ...form,
      color: capitalize(form.color),
    };

    const updatedCars = saveCar(carroEditado, cars);
    localStorage.setItem("cars", JSON.stringify(updatedCars));

    navigate("/");
  };
  return (
    <main className="p-4 space-y-4">
      <Title>
        Editando {car.marca} {car.modelo}
      </Title>
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
            Salvar alterações
          </button>
        </div>
      </FormAdd>
    </main>
  );
}

export default EditCar;
