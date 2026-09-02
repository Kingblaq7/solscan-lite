l"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="glass flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 hover:scale-110 hover:border-[#14F195]"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
