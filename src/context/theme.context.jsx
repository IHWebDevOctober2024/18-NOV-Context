import { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProviderWrapper }; // we can export multiple variables with this syntax
