import { tinaField } from "tinacms/dist/react";
import { PageComponentsOpportunity3 } from "@/tina/__generated__/types";
import styles from "./Opportunity3.module.scss";
import Image from "next/image";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

export const Opportunity3 = ({
  data,
}: {
  data: PageComponentsOpportunity3;
}) => {
  const match = useBetterMediaQuery("(max-width: 1050px)");
  const isMobile = useBetterMediaQuery("(max-width: 550px)");
  const {
    title,
    subtitle,
    text,
    image1,
    image2,
    listTitle,
    phone,
    email,
    location,
  } = data;

  return (
    <section className={styles.opportunity}>
      <div className={styles.opportunity__block}>
        <div className={styles.opportunity__block_title}>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div>
          {text?.children.map((annItem: any, annIndex: number) => {
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
          })}
        </div>
        <div>
          <h2>{listTitle}</h2>
          <ul className={styles.opportunity__block_list}>
            {phone && <li>Номер телефону: {phone}</li>}
            {email && <li>Електронна пошта: {email}</li>}
            {location && (
              <li>Адреса офісу Широківської сільської ради: {location}</li>
            )}
          </ul>
        </div>
      </div>
      <div className={styles.opportunity__gallery}>
        <div className={styles.opportunity__gallery_image1}>
          {image1 && (
            <Image
              src={image1}
              width={610}
              height={match ? 440 : 380}
              layout="responsive"
              alt={`image`}
            />
          )}
        </div>
        <div className={styles.opportunity__gallery_image2}>
          {image2 && (
            <Image
              src={image2}
              width={610}
              height={match ? 440 : 280}
              layout="responsive"
              alt={`image`}
            />
          )}
        </div>
      </div>
    </section>
  );
};
