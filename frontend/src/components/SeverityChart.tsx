import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#ef4444", "#f97316", "#eab308", "#22c55e"];

export default function SeverityChart() {
  const data = [
    { name: "Critical", value: 12 },
    { name: "High", value: 20 },
    { name: "Medium", value: 35 },
    { name: "Low", value: 18 }
  ];

  return (
    <div className="bg-panel p-4 rounded-xl">
      <h3 className="mb-2 font-semibold">Alerts by Severity</h3>

      <PieChart width={250} height={200}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
