export default function ResultCard() {
  return (
    <section className="mx-auto mb-28 max-w-5xl">

      <div className="mb-10 text-center">

        <h2 className="text-4xl font-bold">
          Wallet <span className="gradient-text">Overview</span>
        </h2>

        <p className="mt-3 text-gray-400">
          Your analysis results will appear here after scanning a wallet.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        {/* Balance */}

        <div className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(153,69,255,.25)]">

          <p className="text-sm text-gray-400">
            Balance
          </p>

          <h3 className="mt-4 text-4xl font-bold gradient-text">
            0.00
          </h3>

          <p className="mt-2 text-gray-500">
            SOL
          </p>

        </div>

        {/* Tokens */}

        <div className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(20,241,149,.25)]">

          <p className="text-sm text-gray-400">
            Tokens
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            0
          </h3>

          <p className="mt-2 text-gray-500">
            SPL Assets
          </p>

        </div>

        {/* NFTs */}

        <div className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(153,69,255,.25)]">

          <p className="text-sm text-gray-400">
            NFTs
          </p>

          <h3 className="mt-4 text-4xl font-bold">
            0
          </h3>

          <p className="mt-2 text-gray-500">
            Collected
          </p>

        </div>

        {/* Status */}

        <div className="glass group rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2">

          <p className="text-sm text-gray-400">
            Status
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500/15 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>

            <span className="text-green-400 font-medium">
              Ready
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Card */}

      <div className="glass mt-10 rounded-3xl p-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          <div>

            <p className="text-sm text-gray-500">
              Wallet Address
            </p>

            <p className="mt-2 font-mono text-gray-300 break-all">
              Waiting for analysis...
            </p>

          </div>

          <div className="flex gap-4">

            <button className="rounded-2xl border border-white/10 px-6 py-3 transition hover:border-[#14F195]">
              Copy
            </button>

            <button className="btn-primary rounded-2xl px-6 py-3">
              View Explorer
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
