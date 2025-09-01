"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Inscription réussie !");
        setEmail("");
      } else {
        setMessage("❌ " + (data.error || "Une erreur est survenue"));
      }
    } catch (err) {
      setMessage("⚠️ Une erreur réseau est survenue.");
    }

    setLoading(false);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
      <p className="text-green-200 mb-4">Restez informé de nos actualités</p>
      <div className="flex">
        <Input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-l-full border-green-700 bg-green-800 text-white placeholder-green-300"
        />
        <Button
          onClick={handleSubscribe}
          disabled={loading}
          className="rounded-r-full bg-green-600 hover:bg-green-700"
        >
          <Mail className="w-4 h-4" />
        </Button>
      </div>
      {message && <p className="mt-2 text-sm text-white">{message}</p>}
    </div>
  );
}
