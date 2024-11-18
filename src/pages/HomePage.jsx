// src/pages/HomePage.jsx

const profileImg = "https://i.imgur.com/i1gsj0v.png";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import languages from "../languages.json";
import { LanguageContext } from "../context/language.context";

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={`HomePage ${theme}`}>
      <h1>{languages[language].welcome}</h1>
      <img src={profileImg} className="profile" alt="profile" />
    </div>
  );
}

export default HomePage;
