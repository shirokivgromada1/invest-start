import styles from "./Footer.module.scss";
import Image from "next/image";
import { GlobalFooter, Maybe } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import Facebook from "./../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Telegram from "../../../assets/telegram.svg";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
import { Link as ScrollLink } from "react-scroll/modules";
const Footer = ({ data }: { data: Maybe<GlobalFooter> | undefined }) => {
  const { lang } = useContext(LangContext);
  const { label } = lang;
  if (data) {
    const { logo, nav, agencyEng, url, phone, social, email, agency } = data;
    if (logo)
      return (
        <footer className={styles.footer}>
          <div className="container-footer">
            <div className={styles.footer__inner}>
              <div className={styles.footer__inner_agency}>
                <Image
                  src={logo}
                  alt="logo"
                  height={97}
                  width={181}
                  data-tina-field={tinaField(data, "logo")}
                />
                <p>{label === "UA" ? agency : agencyEng}</p>
                {url && (
                  <Link href={url} data-tina-field={tinaField(data, "url")}>
                    <a target="_blank">
                      {label === "UA"
                        ? "Сайт Широковської громади"
                        : "Shirokov community site"}
                    </a>
                  </Link>
                )}
              </div>
              <nav className={styles.footer__inner_nav}>
                <ul>
                  <li>
                    <a href="/#local-businesses">
                      {label === "UA" ? data.nav?.label1 : data.nav?.label1Eng}
                    </a>
                  </li>
                  {data?.nav?.href2 && (
                    <li>
                      <a
                        href={data?.nav?.href2}
                        target="_blank"
                        data-tina-field={tinaField(data, "nav")}
                      >
                        {label === "UA"
                          ? data?.nav?.label2
                          : data?.nav?.label2Eng}
                      </a>
                    </li>
                  )}
                  <li>
                    <a href="/#useful-info">
                      {label === "UA" ? data.nav?.label3 : data.nav?.label3Eng}
                    </a>
                  </li>
                  <li>
                    <a href="/#investment">
                      {label === "UA" ? data.nav?.label4 : data.nav?.label4Eng}
                    </a>
                  </li>
                </ul>
              </nav>
              <div className={styles.footer__inner_cont_block}>
                <div className={styles.footer__inner_contacts}>
                  <p>
                    {label === "UA"
                      ? "Напишіть/зателефонуйте нам"
                      : "Write/call us"}
                  </p>
                  <a
                    href={`mailto:${email}`}
                    data-tina-field={tinaField(data, "email")}
                  >
                    {email}
                  </a>
                  <a
                    href={`tel:${phone}`}
                    data-tina-field={tinaField(data, "phone")}
                  >
                    {phone}
                  </a>
                </div>
                <div className={styles.footer__inner_contacts_links}>
                  <span>
                    {label === "UA" ? "Соціальні мережі" : "Social networks"}
                  </span>
                  <div>
                    {social?.instagram && (
                      <a
                        href={social?.instagram}
                        data-tina-field={tinaField(social, "instagram")}
                        target="_blank"
                      >
                        <Instagram />
                      </a>
                    )}
                    {social?.facebook && (
                      <a
                        href={social?.facebook}
                        target="_blank"
                        data-tina-field={tinaField(social, "facebook")}
                      >
                        <Facebook />
                      </a>
                    )}
                    {social?.telegram && (
                      <a
                        target="_blank"
                        href={social?.telegram}
                        data-tina-field={tinaField(social, "telegram")}
                      >
                        <Telegram />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
  }
};

export default Footer;
