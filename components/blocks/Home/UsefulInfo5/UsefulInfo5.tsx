import { tinaField } from "tinacms/dist/react";
import { PageComponentsUsefulInfo5 } from "@/tina/__generated__/types";
import styles from "./UsefulInfo5.module.scss";
import { useContext, useState } from "react";
import Minus from "./../../../../assets/minus.svg";
import Plus from "./../../../../assets/plus.svg";
import House from "../../../../assets/house.svg";
import Square from "../../../../assets/square.svg";
import Location from "../../../../assets/location.svg";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
export const UsefulInfo5 = ({ data }: { data: PageComponentsUsefulInfo5 }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };
  const { title, itemTitleEng, titleEng, itemTitle, itemNumber, list } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
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
                  <ul>
                    {list &&
                      list.map(
                        (item, index) =>
                          !item?.hidden && (
                            <li key={index}>
                              {item?.title && item?.titleEng && (
                                <h4 data-tina-field={tinaField(item, "title")}>
                                  <span>{index + 1}. </span>
                                  {label === "UA" ? item.title : item.titleEng}
                                </h4>
                              )}
                              <div>
                                {item?.location && item.locationEng && (
                                  <p>
                                    <Location />
                                    {label === "UA"
                                      ? item.location
                                      : item.locationEng}
                                  </p>
                                )}
                                {item?.square && item.squareEng && (
                                  <p>
                                    <Square />
                                    {label === "UA"
                                      ? item.square
                                      : item.squareEng}
                                  </p>
                                )}
                                {item?.repair && item.repairEng && (
                                  <p>
                                    <House />
                                    {label === "UA"
                                      ? item.repair
                                      : item.repairEng}
                                  </p>
                                )}
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
