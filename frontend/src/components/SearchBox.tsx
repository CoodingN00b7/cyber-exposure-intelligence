import { useState } from "react";
import axios from "axios";

export default function SearchBox() {
  const [type, setType] = useState("Email");
  const [value, setValue] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const search = async () => {
    const res = await axios.post("http://localhost:5000/api/search", {
      type,
      value
    });
    setResults(res.data);
  };

  return (
    <div className="bg-panel p-4 rounded-xl">
      <div className="flex gap-2">
        <select
          className="bg-slate-800 p-2 rounded"
          onChange={(e) => setType(e.target.value)}
        >
          <option>Email</option>
          <option>Mobile</option>
          <option>PAN</option>
          <option>Aadhaar</option>
          <option>IP</option>
        </select>

        <input
          className="flex-1 bg-slate-800 p-2 rounded"
          placeholder="Enter value to check exposure"
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={search}
          className="bg-accent px-5 rounded font-semibold"
        >
          Check
        </button>
      </div>

      {results.length > 0 && (
        <div className="mt-4 text-sm text-gray-300">
          Found {results.length} exposure(s)
        </div>
      )}
    </div>
  );
}
