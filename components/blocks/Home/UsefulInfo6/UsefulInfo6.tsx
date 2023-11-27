import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo6 } from "@/tina/__generated__/types";
import styles from "./UsefulInfo6.module.scss";
import { useContext, useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
export const UsefulInfo6 = ({ data }: { data: PageComponentsUsefulInfo6 }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const { title, titleEng, itemTitleEng, itemTitle, itemNumber, list } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <section className={styles.info} id="useful-info">
      <div className="container">
        <div className={styles.info__inner}>
          {title && titleEng && (
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
                  <ul>
                    {list &&
                      list.map(
                        (item, index) =>
                          !item?.hidden && (
                            <li key={index}>
                              {item?.title && item?.titleEng && (
                                <h4 data-tina-field={tinaField(item, "title")}>
                                  {label === "UA" ? item.title : item.titleEng}
                                </h4>
                              )}
                              {item?.subtitle && item?.subtitleEng && (
                                <p
                                  data-tina-field={tinaField(item, "subtitle")}
                                >
                                  {label === "UA"
                                    ? item.subtitle
                                    : item.subtitleEng}
                                </p>
                              )}
                              <div className={styles.show__bio}>
                                {item?.position || item?.fullname ? (
                                  <div className={styles.show__bio_fullname}>
                                    {item?.position && item?.positionEng && (
                                      <p
                                        data-tina-field={tinaField(
                                          item,
                                          "position"
                                        )}
                                      >
                                        {label === "UA"
                                          ? item.position
                                          : item.positionEng}
                                      </p>
                                    )}
                                    {item?.fullname && item?.fullnameEng && (
                                      <p
                                        data-tina-field={tinaField(
                                          item,
                                          "fullname"
                                        )}
                                      >
                                        {label === "UA"
                                          ? item.fullname
                                          : item.fullnameEng}
                                      </p>
                                    )}
                                  </div>
                                ) : null}
                                <div className={styles.show__bio_contacts}>
                                  {item?.contact1 && (
                                    <p
                                      data-tina-field={tinaField(
                                        item,
                                        "contact1"
                                      )}
                                    >
                                      {item.contact1}
                                    </p>
                                  )}
                                  {item?.contact2 && (
                                    <p
                                      data-tina-field={tinaField(
                                        item,
                                        "contact2"
                                      )}
                                    >
                                      {item.contact2}
                                    </p>
                                  )}
                                  {item?.contact3 && (
                                    <p
                                      data-tina-field={tinaField(
                                        item,
                                        "contact3"
                                      )}
                                    >
                                      {item.contact3}
                                    </p>
                                  )}
                                </div>
                              </div>
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
