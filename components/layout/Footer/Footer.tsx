import styles from "./Footer.module.scss";
import Image from "next/image";
import { GlobalFooter, Maybe } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import Facebook from "./../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Telegram from "../../../assets/telegram.svg";
const Footer = ({ data }: { data: Maybe<GlobalFooter> | undefined }) => {
  if (data) {
    const { logo, nav, location, googleUrl, phone, social, email, agency } =
      data;
    if (logo)
      return (
        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footer__inner}>
              <div className={styles.footer__inner_agency}>
                <Image
                  src={logo}
                  alt="logo"
                  height={97}
                  width={181}
                  data-tina-field={tinaField(data, "logo")}
                />
                <p>{agency}</p>
                <p>{location}</p>
                {googleUrl && (
                  <Link
                    href={googleUrl}
                    data-tina-field={tinaField(data, "googleUrl")}
                  >
                    <a target="_blank">Показати на мапі</a>
                  </Link>
                )}
              </div>
              <nav className={styles.footer__inner_nav}>
                <ul>
                  {nav?.map(
                    (link, index) =>
                      link &&
                      link.href && (
                        <li>
                          <a
                            href={link.href}
                            key={link.label + index}
                            data-tina-field={tinaField(link)}
                          >
                            {link.label}
                          </a>
                        </li>
                      )
                  )}
                </ul>
              </nav>
              <div className={styles.footer__inner_cont_block}>
                <div className={styles.footer__inner_contacts}>
                  <p>Напишіть/зателефонуйте нам</p>
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
                  <span>Соціальні мережі</span>
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
