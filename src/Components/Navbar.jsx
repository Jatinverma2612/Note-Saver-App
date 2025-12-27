import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <header
      className="
        sticky top-0 z-50
        bg-[#fff8ee] dark:bg-[#0b1220]
        border-b border-black/10 dark:border-white/10
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="text-xl font-bold text-slate-900 dark:text-white">
          Noted<span className="text-orange-500">.</span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className="text-slate-700 dark:text-slate-200 hover:text-orange-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/notes"
            className="text-slate-700 dark:text-slate-200 hover:text-orange-500"
          >
            My Notes
          </NavLink>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="
              p-2 rounded-full
              bg-black/5 dark:bg-white/10
              text-slate-700 dark:text-slate-200
              hover:text-orange-500
            "
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* SIGN UP */}
          <button className="hidden sm:block px-4 py-1.5 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600">
            Sign Up
          </button>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-800 dark:text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#fff8ee] dark:bg-[#0b1220] border-t border-black/10 dark:border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-3">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="text-slate-800 dark:text-slate-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/notes"
              onClick={() => setOpen(false)}
              className="text-slate-800 dark:text-slate-200"
            >
              My Notes
            </NavLink>

            <button className="mt-2 px-4 py-2 rounded-lg bg-orange-500 text-white">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
