import Link from "next/link";
import styles from "./HromadaCompanies.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

import { PageComponentsHromadaCompanies } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";

export const HromadaCompanies = ({
  data,
}: {
  data: PageComponentsHromadaCompanies;
}) => {
  const { title, list: list } = data;
  const isTablet = useBetterMediaQuery(
    "((min-width: 630px) and (max-width: 968px))"
  );
  const isMobile = useBetterMediaQuery("(max-width: 630px)");

  return (
    <div className={styles.work}>
      <div className="container">
        <h2 data-tina-field={tinaField(data, "title")}>{title}</h2>
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
