"use client";
import { useState } from "react";
import { getBugBountyContract } from "../utils/contract";

export default function SubmitBug() {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    try {
      const contract = await getBugBountyContract();
      const tx = await contract.submitBug(url, description);
      await tx.wait();
      alert("Bug submitted successfully!");
      setUrl("");
      setDescription("");
    } catch (err) {
      console.error("Error submitting bug:", err);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Submit Bug</h2>
      <input
        type="text"
        placeholder="Bug URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full border p-2"
      />
      <textarea
        placeholder="Bug Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2"
      />
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>
  );
}

