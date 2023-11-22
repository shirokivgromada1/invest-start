import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo } from "@/tina/__generated__/types";
import styles from "./UsefulInfo.module.scss";
import Image from "next/image";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import { motion } from "framer-motion";

export const UsefulInfo = ({ data }: { data: PageComponentsUsefulInfo }) => {
  const match = useBetterMediaQuery("(max-width: 1050px)");
  const isMobile = useBetterMediaQuery("(max-width: 550px)");
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };
  const matches = useBetterMediaQuery("(max-width: 650px)");
  const { title, itemTitle, itemNumber, desc, contacts } = data;

  return (
    <section className={styles.info} id="useful-info">
      <div className="container">
        <div className={styles.info__inner}>
          {title && <h1 data-tina-field={tinaField(data, "title")}>{title}</h1>}
          <div className={styles.info__inner_collapse}>
            <button
              onClick={() => toggleIndex(1)}
              className={
                openIndices.includes(1)
                  ? styles.info__inner_collapse_active
                  : ""
              }
            >
              <h1 data-tina-field={tinaField(data, "itemNumber")}>
                {itemNumber}
              </h1>
              <div>
                <h5 data-tina-field={tinaField(data, "itemTitle")}>
                  {itemTitle}
                </h5>
              </div>
              <div>{openIndices.includes(1) ? <Minus /> : <Plus />}</div>
              <div
                className={
                  styles.hidden +
                  " " +
                  (openIndices.includes(1) ? styles.show : " ")
                }
              >
                <div>
                  {desc?.children.map((annItem: any, annIndex: number) => {
                    if (annItem.type.startsWith("h"))
                      return annItem.children.map((text: any) => (
                        <annItem.type
                          key={"announceHeadline" + annIndex}
                          style={{
                            fontWeight: text.bold && "bold",
                            fontStyle: text.italic && "italic",
                          }}
                          data-tina-field={tinaField(data, "desc")}
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
                          data-tina-field={tinaField(data, "desc")}
                        >
                          {text.text}
                        </p>
                      ));
                    return null;
                  })}
                  {contacts && (
                    <ul>
                      <h3 data-tina-field={tinaField(contacts, "title")}>
                        {contacts.title}
                      </h3>
                      {contacts?.contactsList &&
                        contacts.contactsList.map(
                          (c, index) =>
                            c && (
                              <li key={index} data-tina-field={tinaField(c)}>
                                {c?.name && (
                                  <span data-tina-field={tinaField(c, "name")}>
                                    {c.name}{" "}
                                  </span>
                                )}
                                {c?.description}
                              </li>
                            )
                        )}
                    </ul>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
