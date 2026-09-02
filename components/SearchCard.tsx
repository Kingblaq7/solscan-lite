"use client";

import { useState } from "react";
import { analyzeWallet } from "@/lib/solana";

export default function SearchCard() {
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAnalyze() {
    if (!wallet.trim()) {
      alert("Please enter a Solana wallet address.");
      return;
    }

    setLoading(true);

    const result = await analyzeWallet(wallet);

    setLoading(false);

    if (!result.success) {
      alert(result.message);
      return;
    }

    alert(
`Wallet Found!

Balance: ${result.balance} SOL

Explorer:
${result.explorer}`
    );
  }

  return (
    <section className="relative mx-auto mb-20 max-w-4xl">

      <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 blur-3xl" />

      <div className="glass rounded-[32px] p-8 md:p-10">

        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] text-3xl">

            🔍

          </div>

          <h2 className="text-3xl font-bold">

            Analyze Any Solana Wallet

          </h2>

          <p className="mt-3 text-gray-400">

            Paste a wallet address below.

          </p>

        </div>

        <input
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Enter Solana wallet..."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 outline-none focus:border-[#14F195]"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="btn-primary mt-6 w-full rounded-2xl py-5 text-lg font-bold"
        >
          {loading ? "Analyzing..." : "Analyze Wallet"}
        </button>

      </div>

    </section>
  );
}
