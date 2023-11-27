import styles from "./Header.module.scss";
import { FC, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { GlobalHeader, Maybe } from "./../../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import LangSwitcher, { LangContext } from "../../LangSwitcher/LangSwitcher";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import Instagram from "@/assets/inst-header.svg";
import Facebook from "@/assets/facebook-header.svg";
import Telegram from "@/assets/telegram-header.svg";
const duration = 0.5;
interface IHeader {
  data: Maybe<GlobalHeader> | undefined;
}

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: duration,
      translateX: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  },
};

const item = {
  hidden: {
    transform: "translateX(100%)",
  },
  show: {
    transform: "translateX(0%)",
  },
};
const Header: FC<IHeader> = ({ data }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const desktopMatch = useBetterMediaQuery("(min-width:950px)");
  const mobileMatch = useBetterMediaQuery("(max-width:500px)");
  const { lang } = useContext(LangContext);
  const { label } = lang;
  useEffect(() => {
    desktopMatch && setIsOpen(false);
  }, [desktopMatch]);
  const handleMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.style.overflowY = isOpen ? "hidden" : "visible";
    }
  }, [isOpen]);
  const handleLinkClick = () => {
    setIsOpen(isOpen ? !isOpen : isOpen);
  };
  return (
    <header className={styles.header}>
      <div className="container-fluid">
        <motion.div
          className={styles.header__inner}
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.button
            className={styles.header__inner_burger}
            onClick={handleMenuClick}
          >
            <motion.div>
              <motion.svg
                height="14"
                viewBox="0 0 22 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%" }}
              >
                <motion.path
                  d="M1 1H21"
                  stroke="#333333"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M1 7H21"
                  stroke="#333333"
                  strokeLinecap="round"
                />
                <motion.path
                  d="M1 13H21"
                  stroke="#333333"
                  strokeLinecap="round"
                />
              </motion.svg>
            </motion.div>
          </motion.button>
          {data?.icon && (
            <Link href="/">
              <a className={styles.header__inner__logo}>
                <Image
                  src={data.icon}
                  width={147}
                  height={77}
                  data-tina-field={tinaField(data, "icon")}
                />
              </a>
            </Link>
          )}

          <div className={styles.header__inner__navigation}>
            <nav className={styles.header__inner__navigation_nav}>
              <ul>
                <a href="/#local-businesses">
                  <li>
                    {label === "UA"
                      ? data?.links?.label1
                      : data?.links?.label1Eng}
                  </li>
                </a>
                {data?.links?.href2 && (
                  <a href={data?.links?.href2} target="_blank">
                    <li>
                      {label === "UA"
                        ? data?.links?.label2
                        : data?.links?.label2Eng}
                    </li>
                  </a>
                )}
                <a href="/#useful-info">
                  <li>
                    {label === "UA"
                      ? data?.links?.label3
                      : data?.links?.label3Eng}
                  </li>
                </a>
                <a href="/#investment">
                  <li>
                    {label === "UA"
                      ? data?.links?.label4
                      : data?.links?.label4Eng}
                  </li>
                </a>
              </ul>
            </nav>
            <LangSwitcher />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className={styles.header__inner__menu}
                initial={!mobileMatch ? { opacity: 0 } : { height: "0px" }}
                animate={!mobileMatch ? { opacity: 1 } : { height: "100vh" }}
                exit={!mobileMatch ? { opacity: 0 } : { height: "0px" }}
                transition={{ duration: 1 }}
                style={!mobileMatch ? { minHeight: "100vh" } : {}}
              >
                <motion.nav
                  className={styles.header__inner__menu_nav}
                  initial={mobileMatch ? { height: "0px" } : undefined}
                  animate={mobileMatch ? { height: "fit-content" } : undefined}
                  exit={mobileMatch ? { height: "0px" } : undefined}
                  transition={{ duration: 1 }}
                >
                  <motion.div
                    className={styles.header__inner__menu_nav_wrapper}
                  >
                    <motion.ul>
                      <motion.li
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                      >
                        <motion.div variants={item}>
                          <a
                            href="/#local-businesses"
                            onClick={() => handleLinkClick()}
                          >
                            {label === "UA"
                              ? data?.links?.label1
                              : data?.links?.label1Eng}
                          </a>
                        </motion.div>
                      </motion.li>
                      <motion.li
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                      >
                        <motion.div variants={item}>
                          {data?.links?.href2 && (
                            <a
                              href={data?.links?.href2}
                              target="_blank"
                              onClick={() => handleLinkClick()}
                            >
                              {label === "UA"
                                ? data?.links?.label2
                                : data?.links?.label2Eng}
                            </a>
                          )}
                        </motion.div>
                      </motion.li>
                      <motion.li
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                      >
                        <motion.div variants={item}>
                          <a
                            href="/#useful-info"
                            onClick={() => handleLinkClick()}
                          >
                            {label === "UA"
                              ? data?.links?.label3
                              : data?.links?.label3Eng}
                          </a>
                        </motion.div>
                      </motion.li>
                      <motion.li
                        variants={container}
                        initial={"hidden"}
                        animate={"show"}
                      >
                        <motion.div variants={item}>
                          <a
                            href="/#investment"
                            onClick={() => handleLinkClick()}
                          >
                            {label === "UA"
                              ? data?.links?.label4
                              : data?.links?.label4Eng}
                          </a>
                        </motion.div>
                      </motion.li>
                    </motion.ul>
                    {data?.location && (
                      <div className={styles.header__inner__menu_address}>
                        <h4>{label === "UA" ? "Адреса" : "Address"}</h4>
                        <span data-tina-field={tinaField(data, "location")}>
                          {label === "UA" ? data.location : data.locationEng}
                        </span>
                      </div>
                    )}
                    {data?.phone && (
                      <div className={styles.header__inner__menu_tel}>
                        <h4>{label === "UA" ? "Телефон" : "Phone"}</h4>
                        <a
                          href={`tel:${data.phone}`}
                          data-tina-field={tinaField(data, "phone")}
                        >
                          {data.phone}
                        </a>
                      </div>
                    )}
                    {data?.email && (
                      <div className={styles.header__inner__menu_mail}>
                        <h4>{label === "UA" ? "Пошта" : "Email"}</h4>
                        <a
                          href={`mailto:${data.email}`}
                          data-tina-field={tinaField(data, "email")}
                        >
                          {data.email}
                        </a>
                      </div>
                    )}
                    <div className={styles.header__inner__menu_mobileSocials}>
                      {data?.instagram && (
                        <a
                          href={data.instagram}
                          data-tina-field={tinaField(data, "instagram")}
                          target="_blank"
                        >
                          <Instagram
                            className={
                              styles.header__inner__menu_mobileSocials_instagram
                            }
                          />
                        </a>
                      )}
                      {data?.facebook && (
                        <a
                          href={data?.facebook}
                          target="_blank"
                          data-tina-field={tinaField(data, "facebook")}
                        >
                          <Facebook
                            className={
                              styles.header__inner__menu_mobileSocials_facebook
                            }
                          />
                        </a>
                      )}
                      {data?.telegram && (
                        <a
                          target="_blank"
                          href={data?.telegram}
                          data-tina-field={tinaField(data, "telegram")}
                        >
                          <Telegram />
                        </a>
                      )}
                    </div>
                  </motion.div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
