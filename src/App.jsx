import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCar from "./components/AddCar";
import { Calendar, Car, Icon, Palette, Plus } from "lucide-react";
import { gearbox } from "@lucide/lab";
import Title from "./components/Title";
import CarDetailAll from "./components/CarDetailAll";
import { capitalize } from "./utils/text";
import { saveCar } from "./utils/saveCar";

function Home() {
  const navigate = useNavigate();

  const [showAddCar, setShowAddCar] = useState(false);

  // Inicializa o estado com os carros do localStorage ou um array vazio
  const [cars, setCars] = useState(
    () => JSON.parse(localStorage.getItem("cars")) || []
  );

  // Efeito para salvar os carros no localStorage sempre que o estado mudar
  // Isso garante que os dados persistam mesmo após o recarregamento da página
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  // Função para deletar um carro pelo ID
  // Ela filtra o array de carros, removendo o carro com o ID especificado
  // E atualiza o estado com o novo array filtrado
  function deleteCar(id) {
    setCars(cars.filter((car) => car.id !== id));
  }

  // Função para navegar para a página de detalhes do carro
  // Ela cria uma query string com o ID do carro e usa o hook navigate do react-router-dom
  // para redirecionar para a rota de detalhes do carro
  function seeDetails(id) {
    const query = new URLSearchParams();
    query.set("q", id);
    navigate(`/car?${query.toString()}`);
  }

  // Função para adicionar um novo carro
  // Ela cria um novo objeto de carro com os dados fornecidos, incluindo a data atual
  // E chama a função saveCar para atualizar o estado dos carros
  function addCar(marca, modelo, year, color, cambio, km, combustivel) {
    const newCar = {
      marca,
      modelo,
      year,
      color: capitalize(color),
      cambio,
      km,
      combustivel,
      date: new Date().toLocaleDateString(),
    };

    const updatedCars = saveCar(newCar, cars);
    setCars(updatedCars);
  }

  return (
    <main className="h-full w-full bg-neutral-100 py-4 px-16 space-y-2">
      <Title>Car List</Title>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          showAddCar
            ? "max-h-[600px] opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {showAddCar && <AddCar addCar={addCar} />}
      </div>

      <section aria-label="Lista de carros">
        <ul className="flex flex-col gap-3">
          {cars.map((c) => (
            <li
              key={c.id}
              className="p-5 rounded-md shadow-lg bg-white space-y-4"
            >
              <article className="space-y-1">
                <h2 className="flex items-center gap-2 text-lg font-semibold">
                  <Car size={22} aria-hidden="true" /> {c.marca} {c.modelo}
                </h2>

                <dl className="grid grid-cols-1 gap-y-1">
                  <CarDetailAll label="Ano/Modelo" value={c.year}>
                    <Calendar size={22} aria-hidden="true" />
                  </CarDetailAll>
                  <CarDetailAll label="Cor" value={c.color}>
                    <Palette size={22} aria-hidden="true" />
                  </CarDetailAll>
                  <CarDetailAll label="Câmbio" value={c.cambio}>
                    <Icon iconNode={gearbox} size={22} aria-hidden="true" />
                  </CarDetailAll>
                  <CarDetailAll
                    label="Data"
                    value={`Adicionado em ${c.date}`}
                    className="text-gray-500"
                  />
                </dl>

                <div className="flex gap-2 pt-3 ps-3">
                  <button
                    onClick={() => seeDetails(c.id)}
                    aria-label={`Ver detalhes do carro ${c.marca} ${c.modelo}`}
                    className="font-bold border rounded-md hover:bg-gray-200 hover:text-black p-2 transition-colors duration-300"
                  >
                    Ver detalhes
                  </button>
                  <button
                    onClick={() => navigate(`/edit?q=${c.id}`)}
                    aria-label={`Editar carro ${c.marca} ${c.modelo}`}
                    className="font-bold border rounded-md hover:bg-gray-200 hover:text-black p-2 transition-colors duration-300"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteCar(c.id)}
                    aria-label={`Deletar carro ${c.marca} ${c.modelo}`}
                    className="font-bold border border-red-500 text-red-500 rounded-md p-2 hover:bg-red-500 hover:text-white transition-colors duration-300"
                  >
                    Deletar
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <button
        aria-label="Adicionar carro"
        onClick={() => {
          setShowAddCar((prev) => !prev);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-colors duration-300 flex items-center justify-center z-50"
      >
        <Plus size={20} />
      </button>
    </main>
  );
}
export default Home;
