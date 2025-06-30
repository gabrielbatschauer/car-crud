import { useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import CarDetailPage from "../components/CarDetailPage";
import GraficoPreco from "../charts/GraficoPreco";
import { priceHistories } from "../data/options";

function CarPage() {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");

  const car = cars.find((car) => car.id === q);

  return (
    <main className="grid grid-cols-3 p-4 gap-2 ">
      <article className="bg-red-700 p-4 col-span-3 md:col-span-3 order-1">
        Fotos
      </article>

      <article className="rounded-md shadow-2xl p-6 col-span-3 md:col-span-2 order-2">
        {car && (
          <section className="text-black space-y-6 flex flex-col items-center justify-center p-4">
            <Title className="text-xl font-bold">
              {car.marca} {car.modelo}
            </Title>

            <div className="w-full flex justify-center">
              <div className="flex flex-wrap gap-12">
                <CarDetailPage label="Ano/Modelo" value={car.year} />
                <CarDetailPage label="Quilometragem" value={car.km} />
                <CarDetailPage label="Câmbio" value={car.cambio} />
                <CarDetailPage label="Combustível" value={car.combustivel} />
                <CarDetailPage label="Cor" value={car.color} />
              </div>
            </div>
            <GraficoPreco historico={priceHistories[car.modelo] || []} />
          </section>
        )}
      </article>
      <article className="bg-blue-700 p-4 col-span-3 md:col-span-2 order-3 md:order-4">
        Dados do vendedor
      </article>
      <aside className="bg-yellow-700 700 p-4 row-span-2 order-4 col-span-3 md:col-span-1 md:order-3">
        Enviar mensagem
      </aside>
    </main>
  );
}

export default CarPage;
