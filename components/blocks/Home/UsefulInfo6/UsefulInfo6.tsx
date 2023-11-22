import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo6 } from "@/tina/__generated__/types";
import styles from "./UsefulInfo6.module.scss";
import Image from "next/image";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import House from "../../../../assets/house.svg";
import Square from "../../../../assets/square.svg";
import Location from "../../../../assets/location.svg";
export const UsefulInfo6 = ({ data }: { data: PageComponentsUsefulInfo6 }) => {
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
                              {item?.subtitle && (
                                <p
                                  data-tina-field={tinaField(item, "subtitle")}
                                >
                                  {item.subtitle}
                                </p>
                              )}
                              <div className={styles.show__bio}>
                                {item?.position || item?.fullname ? (
                                  <div className={styles.show__bio_fullname}>
                                    {item?.position && (
                                      <p
                                        data-tina-field={tinaField(
                                          item,
                                          "position"
                                        )}
                                      >
                                        {item.position}
                                      </p>
                                    )}
                                    {item?.fullname && (
                                      <p
                                        data-tina-field={tinaField(
                                          item,
                                          "fullname"
                                        )}
                                      >
                                        {item.fullname}
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
