import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // Updated import path

const DarkmodeButton = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // On initial load, check the local storage for theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      // If no preference is found, default to light mode
      setTheme("light");
    }
    setIsHydrated(true); // Set hydrated flag to true after the initial render
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Only render button after hydration
  if (!isHydrated) {
    return null; // Prevent rendering until after the component has mounted
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center px-4 py-2 bg-gray-300 rounded-lg dark:bg-gray-700 text-black dark:text-white"
    >
      {theme === "dark" ? (
        <>
          <SunIcon className="w-5 h-5" />
        </>
      ) : (
        <>
          <MoonIcon className="w-5 h-5" />
        </>
      )}
    </button>
  );
};

export default DarkmodeButton;
