export default function ResultCard() {
  return (
    <section className="glass mx-auto mb-24 max-w-3xl rounded-3xl p-8">

      <h2 className="mb-8 text-2xl font-bold">

        Wallet Summary

      </h2>

      <div className="space-y-5">

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-gray-400">Balance</span>
          <span>0.00 SOL</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-gray-400">Tokens</span>
          <span>0</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-3">
          <span className="text-gray-400">NFTs</span>
          <span>0</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Status</span>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">

            Ready

          </span>

        </div>

      </div>

    </section>
  );
}
