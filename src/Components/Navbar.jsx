import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-[#FFF7ED] dark:bg-slate-950 border-b border-stone-200 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto h-20 px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="font-extrabold text-2xl tracking-tighter text-[#292524] dark:text-white">
          Noted<span className="text-orange-500 text-4xl leading-none">.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-[#57534E] dark:text-slate-300">
          <NavLink to="/" className="hover:text-orange-500">Home</NavLink>
          <NavLink to="/notes" className="hover:text-orange-500">My Notes</NavLink>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white dark:bg-slate-800"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="hidden sm:block px-5 py-2.5 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600">
            Sign Up
          </button>

          {/* Mobile Menu Btn */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 font-semibold text-[#57534E] dark:text-slate-300 bg-[#FFF7ED] dark:bg-slate-950">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/notes" onClick={() => setOpen(false)}>My Notes</NavLink>
          <button className="text-left text-orange-500">Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
