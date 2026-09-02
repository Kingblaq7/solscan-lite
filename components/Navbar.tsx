"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">

      <div className="container pt-6">

        <nav className="glass flex items-center justify-between rounded-2xl border border-white/10 px-6 py-4">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#9945FF] to-[#14F195] text-xl font-bold shadow-lg shadow-purple-500/30">

              S

            </div>

            <div>

              <h2 className="text-lg font-bold tracking-tight">

                Sol<span className="gradient-text">Scan</span>

              </h2>

              <p className="text-xs text-gray-500">

                Lite

              </p>

            </div>

          </div>

          {/* Links */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              Features
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-white"
            >
              Docs
            </a>

          </div>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

            <button className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold">

              Launch App

            </button>

          </div>

        </nav>

      </div>

    </header>
  );
}
