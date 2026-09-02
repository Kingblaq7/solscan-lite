export default function BackgroundEffects() {
  return (
    <>
      <div className="fixed left-[-180px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#9945FF]/20 blur-[140px] animate-pulse -z-50" />

      <div className="fixed right-[-160px] top-[30%] h-[380px] w-[380px] rounded-full bg-[#14F195]/15 blur-[140px] animate-pulse -z-50" />

      <div className="fixed bottom-[-220px] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-[180px] -z-50" />
    </>
  );
}
