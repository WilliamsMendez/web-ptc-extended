import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Cargar preferencia guardada
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (isLight) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }

    setIsLight(!isLight);
  };

  return (
    <>
        <button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-surface rounded-full transition flex items-center px-1 cursor-pointer"
    >
      <div
        className={`w-4 h-4 rounded-full bg-brand-accent-70 transition-transform duration-300 ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      />

      
    </button>
    </>

    
  );
}
