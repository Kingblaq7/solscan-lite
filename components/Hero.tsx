export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Floating Glow */}
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#9945FF]/30 to-[#14F195]/20 blur-[120px] float" />

      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#14F195]/20 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl">

          <span className="h-2 w-2 rounded-full bg-[#14F195] animate-pulse"></span>

          Built for the Solana Ecosystem

        </div>

        {/* Heading */}

        <h1 className="mt-10 text-5xl font-black leading-tight tracking-tight md:text-7xl">

          Discover Every

          <br />

          <span className="gradient-text">

            Solana Wallet

          </span>

          <br />

          Instantly

        </h1>

        {/* Description */}

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

          Analyze balances, token holdings, wallet activity and
          blockchain insights through a beautifully crafted
          premium dashboard built for everyone.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="btn-primary rounded-2xl px-8 py-4 font-semibold">

            Analyze Wallet

          </button>

          <button className="glass rounded-2xl px-8 py-4 font-semibold transition hover:border-[#14F195]">

            Learn More

          </button>

        </div>

        {/* Stats */}

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="glass rounded-3xl p-8">

            <h2 className="text-4xl font-bold gradient-text">

              Fast

            </h2>

            <p className="mt-3 text-gray-400">

              Wallet analysis in seconds.

            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-4xl font-bold gradient-text">

              Secure

            </h2>

            <p className="mt-3 text-gray-400">

              No wallet connection required.

            </p>

          </div>

          <div className="glass rounded-3xl p-8">

            <h2 className="text-4xl font-bold gradient-text">

              Simple

            </h2>

            <p className="mt-3 text-gray-400">

              Clean SaaS experience for everyone.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
