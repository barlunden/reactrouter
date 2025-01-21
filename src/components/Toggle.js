import React from "react";
import { useTheme } from "./ThemeContext";

const Toggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4 flex justify-center">
      <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-800 text-white rounded hover:scale-125 shadow-xl dark:rounded-full"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Toggle;