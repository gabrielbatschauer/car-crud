export const cambios = [
  { value: "Automático", label: "Automático" },
  { value: "Manual", label: "Manual" },
  { value: "Semi-Automático", label: "Semi-Automático" },
];

export const combustiveis = [
  { value: "Gasolina", label: "Gasolina" },
  { value: "Álcool", label: "Álcool" },
  { value: "Diesel", label: "Diesel" },
  { value: "Elétrico", label: "Elétrico" },
];

export const anos = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
];

export const cores = [
  { value: "Preto", label: "Preto" },
  { value: "Branco", label: "Branco" },
  { value: "Prata", label: "Prata" },
  { value: "Vermelho", label: "Vermelho" },
  { value: "Azul", label: "Azul" },
  { value: "Verde", label: "Verde" },
  { value: "Amarelo", label: "Amarelo" },
  { value: "Cinza", label: "Cinza" },
  { value: "Roxo", label: "Roxo" },
  { value: "Laranja", label: "Laranja" },
];

export const marcas = {
  Toyota: ["Corolla", "Hilux", "Yaris"],
  Honda: ["Civic", "Fit", "HR-V"],
  Ford: ["Ka", "Fiesta", "Ranger"],
};

// ✅ Histórico de preço para carros específicos (exemplo)
export const priceHistories = {
  Hilux: [
    { data: "2023", preco: 150000 },
    { data: "2024", preco: 180000 },
    { data: "2025", preco: 290000 },
  ],
  Civic: [
    { data: "2023-10", preco: 98000 },
    { data: "2024-03", preco: 99000 },
    { data: "2025-06", preco: 97000 },
  ],
  Corolla: [
    { data: "2023-01", preco: 120000 },
    { data: "2023-06", preco: 125000 },
    { data: "2024-01", preco: 130000 },
  ],
  Ka: [
    { data: "2023-02", preco: 45000 },
    { data: "2023-07", preco: 47000 },
    { data: "2024-02", preco: 48000 },
  ],
  Fiesta: [
    { data: "2023-03", preco: 52000 },
    { data: "2023-08", preco: 54000 },
    { data: "2024-03", preco: 55000 },
  ],
  Ranger: [
    { data: "2023-04", preco: 200000 },
    { data: "2023-09", preco: 210000 },
    { data: "2024-04", preco: 220000 },
  ],
  Fit: [
    { data: "2023-05", preco: 60000 },
    { data: "2023-10", preco: 62000 },
    { data: "2024-05", preco: 63000 },
  ],
  "HR-V": [
    { data: "2023-06", preco: 70000 },
    { data: "2023-11", preco: 72000 },
    { data: "2024-06", preco: 73000 },
  ],
  Yaris: [
    { data: "2023-07", preco: 55000 },
    { data: "2023-12", preco: 57000 },
    { data: "2024-07", preco: 58000 },
  ],
};
