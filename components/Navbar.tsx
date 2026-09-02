
"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-5">

        <div className="flex items-center gap-3">

          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-[#9945FF] to-[#14F195] shadow-lg shadow-purple-500/20" />

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Sol<span className="gradient-text">Scan</span>
            </h1>
          </div>

        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Docs
          </a>

        </nav>

        <ThemeToggle />

      </div>
    </header>
  );
}
