
"use client";

export default function SearchCard() {
  return (
    <section className="glass glow mx-auto mb-14 max-w-3xl rounded-3xl p-8">

      <h2 className="mb-6 text-center text-2xl font-bold">

        Wallet Lookup

      </h2>

      <input
        type="text"
        placeholder="Enter Solana wallet address..."
        className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 outline-none transition focus:border-[#14F195]"
      />

      <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-[#9945FF] to-[#14F195] py-4 text-lg font-bold transition duration-300 hover:scale-[1.02]">

        Analyze Wallet

      </button>

    </section>
  );
}
