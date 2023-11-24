import styles from "./HromadaCompanies.module.scss";
import Image from "next/image";
import { useContext } from "react";
import { PageComponentsHromadaCompanies } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const HromadaCompanies = ({
  data,
}: {
  data: PageComponentsHromadaCompanies;
}) => {
  const { title, titleEng, list: list } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <div className={styles.work}>
      <div className="container">
        <h2 data-tina-field={tinaField(data, "title")}>
          {label === "UA" ? title : titleEng}
        </h2>
        <div className={styles.work__inner}>
          {list &&
            list.map(
              (l, index) =>
                l &&
                !l?.isHidden && (
                  <div
                    className={styles.work__inner__company}
                    key={index}
                    data-tina-field={tinaField(l)}
                  >
                    <div>
                      {l?.image && (
                        <Image
                          height={100}
                          width={200}
                          src={l.image}
                          layout={"responsive"}
                          alt={`picture company ${index}`}
                          data-tina-field={tinaField(l, "image")}
                        />
                      )}
                    </div>
                  </div>
                )
            )}
        </div>
      </div>
    </div>
  );
};
