import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo4 } from "@/tina/__generated__/types";
import styles from "./UsefulInfo4.module.scss";
import Image from "next/image";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import Arrow from "../../../../assets/arrow-list.svg";
export const UsefulInfo4 = ({ data }: { data: PageComponentsUsefulInfo4 }) => {
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
  const { title, itemTitle, itemNumber, list } = data;
  function isPdf(url: string | undefined): boolean {
    return typeof url === "string" && url.toLowerCase().endsWith(".pdf");
  }
  function getHref(date: string | undefined | null): string | undefined {
    if (date !== null && date !== undefined) {
      return date;
    }
    return undefined;
  }

  function getTarget(date: string | undefined | null): string | undefined {
    return isPdf(date as string) ? undefined : "_blank";
  }

  function getDownload(date: string | undefined | null): boolean | undefined {
    return date === null || date === undefined || isPdf(date) || undefined;
  }

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
              <div className={styles.info__inner_collapse_visible}>
                <h1 data-tina-field={tinaField(data, "itemNumber")}>
                  {itemNumber}
                </h1>
                <h5 data-tina-field={tinaField(data, "itemTitle")}>
                  {itemTitle}
                </h5>
                <div>{openIndices.includes(1) ? <Minus /> : <Plus />}</div>
              </div>
              <div
                className={
                  styles.hidden +
                  " " +
                  (openIndices.includes(1) ? styles.show : " ")
                }
              >
                <div>
                  <ul>
                    {list &&
                      list.map(
                        (item, index) =>
                          !item?.hidden && (
                            <li key={index}>
                              {item?.title && (
                                <h4 data-tina-field={tinaField(item, "title")}>
                                  {item.title}
                                </h4>
                              )}
                              {item?.link || item?.url ? (
                                <a
                                  href={getHref(item?.link || item?.url)}
                                  target={getTarget(item?.url)}
                                  download={getDownload(
                                    item?.link || item?.url
                                  )}
                                  data-tina-field={tinaField(item, "kadastr")}
                                >
                                  {item?.kadastr}
                                </a>
                              ) : null}
                              {item?.descBlock && (
                                <p
                                  data-tina-field={tinaField(item, "descBlock")}
                                >
                                  {item.descBlock}
                                </p>
                              )}
                            </li>
                          )
                      )}
                  </ul>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
