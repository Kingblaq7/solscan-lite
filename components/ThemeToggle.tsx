"use client";

import { useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  return (

    <button

      onClick={() => setDark(!dark)}

      className="glass rounded-full px-4 py-2 text-sm transition duration-300 hover:scale-105 hover:border-[#14F195]"

    >

      {dark ? "🌙 Dark" : "☀️ Light"}

    </button>

  );

}
