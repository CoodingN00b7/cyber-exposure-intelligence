interface StatCardProps {
  title: string;
  value: string | number;
  color?: string;
}

export default function StatCard({
  title,
  value,
  color = "text-white"
}: StatCardProps) {
  return (
    <div className="bg-panel p-4 rounded-xl shadow">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className={`text-2xl font-bold mt-2 ${color}`}>{value}</h2>
    </div>
  );
}
