import { tinaField } from "tinacms/dist/react";
import { PageComponentsOpportunity } from "@/tina/__generated__/types";
import styles from "./Opportunity.module.scss";
import Image from "next/image";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const Opportunity = ({ data }: { data: PageComponentsOpportunity }) => {
  const match = useBetterMediaQuery("(max-width: 1050px)");
  const {
    title,
    titleEng,
    subtitleEng,
    textEng,
    subtitle,
    text,
    image1,
    image2,
    image3,
    listTitle,
    phone,
    email,
    location,
    locationEng,
    listTitleEng,
  } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <section className={styles.opportunity}>
      <div className={styles.opportunity__block}>
        <div className={styles.opportunity__block_title}>
          <h1 data-tina-field={tinaField(data, "title")}>
            {label === "UA" ? title : titleEng}
          </h1>
          {subtitle && subtitleEng && (
            <p data-tina-field={tinaField(data, "subtitle")}>
              {label === "UA" ? subtitle : subtitleEng}
            </p>
          )}
        </div>
        <div>
          {label === "UA"
            ? text?.children.map((annItem: any, annIndex: number) => {
                if (annItem.type.startsWith("h"))
                  return annItem.children.map((text: any) => (
                    <annItem.type
                      key={"announceHeadline" + annIndex}
                      style={{
                        fontWeight: text.bold && "bold",
                        fontStyle: text.italic && "italic",
                      }}
                      data-tina-field={tinaField(data, "text")}
                    >
                      {text.text}
                    </annItem.type>
                  ));
                if (annItem.type.startsWith("p"))
                  return annItem.children.map((text: any) => (
                    <p
                      key={"announceParagraph" + annIndex}
                      style={{
                        fontWeight: text.bold && "bold",
                        fontStyle: text.italic && "italic",
                      }}
                      data-tina-field={tinaField(data, "text")}
                    >
                      {text.text}
                    </p>
                  ));
                return null;
              })
            : textEng?.children.map((annItem: any, annIndex: number) => {
                if (annItem.type.startsWith("h"))
                  return annItem.children.map((text: any) => (
                    <annItem.type
                      key={"announceHeadline" + annIndex}
                      style={{
                        fontWeight: text.bold && "bold",
                        fontStyle: text.italic && "italic",
                      }}
                    >
                      {text.text}
                    </annItem.type>
                  ));
                if (annItem.type.startsWith("p"))
                  return annItem.children.map((text: any) => (
                    <p
                      key={"announceParagraph" + annIndex}
                      style={{
                        fontWeight: text.bold && "bold",
                        fontStyle: text.italic && "italic",
                      }}
                    >
                      {text.text}
                    </p>
                  ));
                return null;
              })}
        </div>
        <div>
          <h2 data-tina-field={tinaField(data, "listTitle")}>
            {" "}
            {label === "UA" ? listTitle : listTitleEng}
          </h2>
          <ul className={styles.opportunity__block_list}>
            {phone && (
              <li data-tina-field={tinaField(data, "phone")}>
                {label === "UA" ? "Номер телефону:" : "Phone number:"} {phone}
              </li>
            )}
            {email && (
              <li data-tina-field={tinaField(data, "email")}>
                {label === "UA" ? "Електронна пошта:" : "Email:"} {email}
              </li>
            )}
            {location && (
              <li data-tina-field={tinaField(data, "location")}>
                {label === "UA"
                  ? "Адреса офісу Широківської сільської ради:"
                  : "Address of the Shirokivska village council office:"}{" "}
                {label === "UA" ? location : locationEng}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.opportunity__gallery}>
        <div className={styles.opportunity__gallery_image1}>
          {image1 && (
            <Image
              src={image1}
              width={300}
              height={match ? 226 : 665}
              layout="responsive"
              alt={`image`}
              data-tina-field={tinaField(data, "image1")}
            />
          )}
        </div>
        <div className={styles.opportunity__gallery_image2}>
          {image2 && (
            <Image
              src={image2}
              width={300}
              height={match ? 226 : 383}
              layout="responsive"
              alt={`image`}
              data-tina-field={tinaField(data, "image2")}
            />
          )}
        </div>
        <div className={styles.opportunity__gallery_image3}>
          {image3 && (
            <Image
              src={image3}
              width={300}
              height={match ? 226 : 272}
              layout="responsive"
              alt={`image`}
              data-tina-field={tinaField(data, "image3")}
            />
          )}
        </div>
      </div>
    </section>
  );
};
