import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function GraficoPreco({ historico }) {
  if (!historico || historico.length === 0) {
    return <p className="text-white">Sem histórico de preço.</p>;
  }

  return (
    <div className="bg-white rounded shadow p-4 w-full h-64">
      <h2 className="text-black text-lg mb-2">Histórico de Preço por Ano</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historico}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis dataKey="preco" />
          <Tooltip />
          <Line type="monotone" dataKey="preco" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraficoPreco;
