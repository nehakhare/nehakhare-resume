"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme") || "light";
    setTheme(stored);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      type="button"
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
