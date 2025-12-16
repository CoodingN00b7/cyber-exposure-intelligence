import StatCard from "../components/StatCard";
import SearchBox from "../components/SearchBox";
import SeverityChart from "../components/SeverityChart";
import BreachTable from "../components/BreachTable";

export default function Dashboard() {
  const mockBreaches = [
    { type: "Email", source: "Public Breach", severity: "Medium" },
    { type: "Aadhaar", source: "Dark Web", severity: "Critical" },
    { type: "PAN", source: "Dark Web", severity: "High" }
  ];

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">
        Cyber Exposure Intelligence Platform
      </h1>

      <SearchBox />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        <StatCard title="Total Breaches" value="15,540" />
        <StatCard title="Critical Alerts" value="6,462" color="text-red-500" />
        <StatCard title="Dark Web Leaks" value="8,078" />
        <StatCard title="DPDP Compliance" value="Enabled" color="text-green-400" />
      </div>

      {/* Charts & Table */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <SeverityChart />
        <div className="col-span-2">
          <BreachTable data={mockBreaches} />
        </div>
      </div>
    </div>
  );
}
