// components/animate-ui/components/buttons/theme-toggler.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";           // assuming you're using next-themes
import { useState, useEffect } from "react";

export function ThemeToggler() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ── Most important line ──
  if (!mounted) return null;     // ← or return a neutral placeholder <div className="w-10 h-10" />

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      // your styling...
    >
      {isDark ? (
        <Sun className="lucide lucide-sun" /* ... your props */ />
      ) : (
        <Moon className="lucide lucide-moon" /* ... */ />
      )}
    </button>
  );
}