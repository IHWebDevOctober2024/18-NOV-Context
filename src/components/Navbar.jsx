// src/components/Navbar.jsx

import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import { LanguageContext } from "../context/language.context";
import { useContext } from "react";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { setLanguage } = useContext(LanguageContext);

  return (
    <nav className={`Navbar ${theme}`}>
      <div>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/projects"> Projects </NavLink>
        <button onClick={() => toggleTheme()}>
          {theme === "light" ? "🌛" : "🌞"}
        </button>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
          <option value="en">English</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
