import { createContext } from "react";
import { useState } from "react";

const LanguageContext = createContext();

function LanguageProviderWrapper(props) {
  const [language, setLanguage] = useState("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext, LanguageProviderWrapper }; // we can export multiple variables with this syntax
