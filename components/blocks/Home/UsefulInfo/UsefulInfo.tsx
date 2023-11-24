import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo } from "@/tina/__generated__/types";
import styles from "./UsefulInfo.module.scss";
import { useContext, useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import { motion } from "framer-motion";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const UsefulInfo = ({ data }: { data: PageComponentsUsefulInfo }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };
  const { lang } = useContext(LangContext);
  const { label } = lang;
  const {
    title,
    titleEng,
    itemTitleEng,
    descEng,
    itemTitle,
    itemNumber,
    desc,
    contacts,
  } = data;

  return (
    <section className={styles.info} id="useful-info">
      <div className="container">
        <div className={styles.info__inner}>
          {title && (
            <h1 data-tina-field={tinaField(data, "title")}>
              {" "}
              {label === "UA" ? title : titleEng}
            </h1>
          )}
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
                  {label === "UA" ? itemTitle : itemTitleEng}
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
                  {label === "UA"
                    ? desc?.children.map((annItem: any, annIndex: number) => {
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
                      })
                    : descEng?.children.map(
                        (annItem: any, annIndex: number) => {
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
                        }
                      )}

                  {contacts && (
                    <ul>
                      <h3 data-tina-field={tinaField(contacts, "title")}>
                        {label === "UA" ? contacts.title : contacts.titleEng}
                      </h3>
                      {contacts?.contactsList &&
                        contacts.contactsList.map(
                          (c, index) =>
                            c && (
                              <li key={index} data-tina-field={tinaField(c)}>
                                {c?.name && c?.nameEng && (
                                  <span data-tina-field={tinaField(c, "name")}>
                                    {label === "UA" ? c.name : c.nameEng}{" "}
                                  </span>
                                )}
                                {label === "UA"
                                  ? c?.description
                                  : c?.descriptionEng}
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
