import { v4 } from "uuid";

export function saveCar(car, cars) {
  // Função para salvar um carro no array de carros
  // Ela verifica se o carro já possui um ID
  if (!car.id) {
    // Novo carro
    // Se não tiver ID, cria um novo carro com um ID único e a data atual
    // O ID é gerado usando a função v4 do pacote uuid
    const newCar = { ...car, id: v4(), date: new Date().toLocaleDateString() };
    return [...cars, newCar];
  } else {
    // Editar carro existente
    return cars.map((c) => (c.id === car.id ? car : c));
  }
}
