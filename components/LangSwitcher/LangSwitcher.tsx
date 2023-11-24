import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./LangSwitcher.module.scss";

interface Lang {
  code: string;
  label: string;
}

interface LangContextType {
  lang: Lang;
  changeLanguage: (language: Lang) => void;
}

const defaultLang: Lang = { code: "ua", label: "UA" };

export const LangContext = createContext<LangContextType>({
  lang: defaultLang,
  changeLanguage: () => {},
});

export const LangSwitcherProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>(defaultLang);

  const changeLanguage = (language: Lang) => {
    setLang(language);
    localStorage.setItem("language", language.label);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      if (storedLanguage === "UA") setLang({ code: "ua", label: "UA" });
      if (storedLanguage === "EN") setLang({ code: "en", label: "EN" });
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  );
};
const LangSwitcher: React.FC = () => {
  const { lang, changeLanguage } = useContext(LangContext)!;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  console.log(lang);
  const handleLanguageChange = (language: Lang) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  const languageOptions: Lang[] = [
    { code: "ua", label: "UA" },
    { code: "en", label: "EN" },
  ];

  const selectedOptionIndex = languageOptions.findIndex(
    (option) => option.code === lang.code
  );

  if (selectedOptionIndex !== -1) {
    const selectedOption = languageOptions.splice(selectedOptionIndex, 1);
    languageOptions.unshift(selectedOption[0]);
  }

  return (
    <div className={styles.langSwitcher}>
      <div className={styles.langSwitcher__button} onClick={toggleDropdown}>
        <span className={styles.langSwitcher__label}>{lang.label}</span>
      </div>
      {isOpen && (
        <ul className={styles.langSwitcher__menu}>
          {languageOptions.map((option) => (
            <li
              key={option.code}
              className={styles.langSwitcher__menu_option}
              onClick={() => handleLanguageChange(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;
