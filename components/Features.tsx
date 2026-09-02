export default function Features() {
  const features = [
    {
      title: "Instant Analysis",
      description:
        "Analyze any Solana wallet in seconds with a clean and modern experience.",
      icon: "⚡",
    },
    {
      title: "Privacy First",
      description:
        "No wallet connection required. Simply paste an address to begin.",
      icon: "🔒",
    },
    {
      title: "Real-Time Insights",
      description:
        "View balances, token holdings and wallet activity with a premium interface.",
      icon: "📊",
    },
  ];

  return (
    <section className="container my-28">

      <div className="text-center mb-14">

        <h2 className="text-5xl font-bold">
          Why Choose <span className="gradient-text">SolScan Lite</span>
        </h2>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Everything you need to inspect Solana wallets through one
          beautifully crafted dashboard.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {features.map((feature) => (

          <div
            key={feature.title}
            className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-3 hover:border-[#14F195]/40"
          >

            <div className="mb-6 text-5xl">

              {feature.icon}

            </div>

            <h3 className="text-2xl font-bold">

              {feature.title}

            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              {feature.description}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
