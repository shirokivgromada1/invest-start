import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo2 } from "@/tina/__generated__/types";
import styles from "./UsefulInfo2.module.scss";
import { useContext, useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import Arrow from "../../../../assets/arrow-list.svg";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
export const UsefulInfo2 = ({ data }: { data: PageComponentsUsefulInfo2 }) => {
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
  const { title, itemTitle, titleEng, itemTitleEng, itemNumber, list } = data;
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
          {title && (
            <h1 data-tina-field={tinaField(data, "title")}>
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
                  <ul onClick={(e) => e.stopPropagation()}>
                    {list &&
                      list.map(
                        (item, index) =>
                          !item?.hidden && (
                            <li key={index}>
                              <Arrow />
                              {item?.link || item?.url ? (
                                <a
                                  href={getHref(item?.link || item?.url)}
                                  target={getTarget(item?.url)}
                                  download={getDownload(
                                    item?.link || item?.url
                                  )}
                                  data-tina-field={tinaField(item, "title")}
                                >
                                  {label === "UA"
                                    ? item?.title
                                    : item?.titleEng}
                                </a>
                              ) : null}
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
