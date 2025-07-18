"use client";
import { useEffect, useState } from "react";
import { getBugBountyContract } from "../utils/contract";

export default function BugList() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBugs = async () => {
    try {
      const contract = await getBugBountyContract();
      const allBugs = await contract.getAllBugs();

      const parsedBugs = allBugs.map((bug, i) => ({
        id: i,
        url: bug[0],
        description: bug[1],
        verified: bug[2],
      }));

      setBugs(parsedBugs);
    } catch (err) {
      console.error("Error loading bugs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reported Bugs</h2>
      {loading ? (
        <p>Loading...</p>
      ) : bugs.length === 0 ? (
        <p>No bugs reported yet.</p>
      ) : (
        <ul className="space-y-4">
          {bugs.map((bug) => (
            <li key={bug.id} className="border p-4 rounded-lg shadow">
              <p><strong>URL:</strong> {bug.url}</p>
              <p><strong>Description:</strong> {bug.description}</p>
              <p><strong>Verified:</strong> {bug.verified ? "✅" : "❌"}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

