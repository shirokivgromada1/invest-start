import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LangSwitcher.module.scss";
const LangSwitcher = () => {
  const [lang, setLang] = useState({ code: "ua", label: "UA" });
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      if (storedLanguage === "UA") setLang({ code: "ua", label: "UA" });
      if (storedLanguage === "EN") setLang({ code: "en", label: "EN" });
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  const handleLanguageChange = (language: any) => {
    setLang(language);
    i18n.changeLanguage(language.label);
    localStorage.setItem("language", language.label);
    setIsOpen(false);
  };
  const languageOptions = [
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
