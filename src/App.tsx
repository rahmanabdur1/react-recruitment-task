/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { Complain } from "./types";
import { fetchComplains } from "./api";
import ComplaintForm from "./components/ComplaintForm";
import ComplaintList from "./components/ComplaintList";

function App() {
  const [complains, setComplains] = useState<Complain[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadComplains = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchComplains();
      setComplains(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadComplains();
  }, [loadComplains]);

  return (
    <main className="app-container">
      <ComplaintForm onSuccess={loadComplains} />
      <ComplaintList complains={complains} loading={loading} error={error} />
    </main>
  );
}

export default App;
