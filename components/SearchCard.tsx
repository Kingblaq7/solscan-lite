"use client";

import { useState } from "react";

export default function SearchCard() {
  const [wallet, setWallet] = useState("");

  return (
    <section className="relative mx-auto mb-20 max-w-4xl">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-r from-[#9945FF]/20 to-[#14F195]/20 blur-3xl" />

      <div className="glass rounded-[32px] p-8 md:p-10">

        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] text-3xl shadow-xl">

            🔍

          </div>

          <h2 className="text-3xl font-bold">

            Analyze Any Solana Wallet

          </h2>

          <p className="mt-3 text-gray-400">

            Paste a wallet address below to view balances,
            tokens and blockchain insights.

          </p>

        </div>

        <input
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Enter Solana wallet address..."
          className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-lg outline-none transition-all duration-300 focus:border-[#14F195] focus:ring-2 focus:ring-[#14F195]/30"
        />

        <button className="btn-primary mt-6 w-full rounded-2xl py-5 text-lg font-bold">

          Analyze Wallet →

        </button>

        <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">

          <p className="text-sm text-gray-500">

            Example Wallet

          </p>

          <p className="mt-2 break-all font-mono text-sm text-[#14F195]">

            9xQeWvG816bUx9EPjHmaT23yvVMiQ2zD8bN9D6zN7b8L

          </p>

        </div>

      </div>

    </section>
  );
}
