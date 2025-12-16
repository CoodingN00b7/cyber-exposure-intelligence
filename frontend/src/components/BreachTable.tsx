interface Breach {
  type: string;
  source: string;
  severity: string;
}

export default function BreachTable({ data }: { data: Breach[] }) {
  return (
    <div className="bg-panel rounded-xl p-4">
      <h3 className="font-semibold mb-3">Recent Breaches</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left">Type</th>
            <th>Source</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((b, i) => (
            <tr key={i} className="border-t border-slate-800">
              <td>{b.type}</td>
              <td className="text-center">{b.source}</td>
              <td className="text-center font-semibold">{b.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
