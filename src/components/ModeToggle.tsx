import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../hooks/ThemeProvider";

const ModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="bg-white p-2 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-90 hover:text-accent-foreground shadow-md hover:shadow-xl"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon className="h-6 w-6" /> : <MdSunny className="h-6 w-6" />}
    </button>
  );
};

export default ModeToggle;
