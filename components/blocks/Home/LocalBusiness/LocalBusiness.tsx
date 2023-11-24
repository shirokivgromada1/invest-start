import styles from "./LocalBusiness.module.scss";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";

import { PageComponentsLocalBusiness } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import InstagramIcon from "../../../../assets/instagram.svg";
import FacebookIcon from "../../../../assets/svg-facebook.svg";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { LangContext } from "../../../LangSwitcher/LangSwitcher";
export const LocalBusiness = ({
  data,
}: {
  data: PageComponentsLocalBusiness;
}) => {
  const { title, titleEng, list: list } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
  const isTablet = useBetterMediaQuery(
    "((min-width: 630px) and (max-width: 968px))"
  );
  const isMobile = useBetterMediaQuery("(max-width: 630px)");
  const [itemsToShow, setItemsToShow] = useState(
    isTablet ? 6 : isMobile ? 3 : list ? list.length : 0
  );
  useEffect(() => {
    setItemsToShow(isTablet ? 6 : isMobile ? 3 : list ? list.length : 0);
  }, [isTablet, list, isMobile]);

  const loadMoreItems = () => {
    setItemsToShow(itemsToShow + (isTablet ? 6 : 3));
  };

  return (
    <div className={styles.history} id="local-businesses">
      <div className="container">
        <h2 data-tina-field={tinaField(data, "title")}>
          {label === "UA" ? title : titleEng}
        </h2>
        <div className={styles.history__inner}>
          {list &&
            list.slice(0, itemsToShow).map(
              (l, index) =>
                l &&
                !l?.isHidden && (
                  <div
                    className={styles.history__inner__applicant}
                    key={index}
                    data-tina-field={tinaField(l)}
                  >
                    {l?.image && (
                      <Image
                        height={393}
                        width={393}
                        src={l.image}
                        layout={"responsive"}
                        alt={`picture business ${index}`}
                        data-tina-field={tinaField(l, "image")}
                      />
                    )}
                    <div className={styles.history__inner__applicant_desc}>
                      <h3 data-tina-field={tinaField(l, "businessTitle")}>
                        {label === "UA"
                          ? l?.businessTitle
                          : l?.businessTitleEng}
                      </h3>
                      <p data-tina-field={tinaField(l, "subtitle")}>
                        {label === "UA" ? l?.subtitle : l?.subtitleEng}
                      </p>
                      <p data-tina-field={tinaField(l, "desc")}>{l?.desc}</p>
                      {l?.websiteLink && (
                        <p>
                          {label === "UA" ? "Веб-сайт:" : "Website:"}{" "}
                          <a
                            href={l?.websiteLink}
                            target="_blank"
                            data-tina-field={tinaField(l, "websiteLink")}
                          >
                            {l?.websiteName}
                          </a>
                        </p>
                      )}
                      <div
                        className={
                          styles.history__inner__applicant_desc_socials
                        }
                      >
                        {l?.inst && (
                          <a
                            href={l?.inst}
                            target="_blank"
                            data-tina-field={tinaField(l, "inst")}
                          >
                            <InstagramIcon />
                          </a>
                        )}
                        {l?.facebook && (
                          <a
                            href={l?.facebook}
                            target="_blank"
                            data-tina-field={tinaField(l, "facebook")}
                          >
                            <FacebookIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
        <>
          {(isTablet || isMobile) && list && list.length > itemsToShow && (
            <button onClick={loadMoreItems}>
              {label === "UA" ? "Більше" : "Load more"}
            </button>
          )}
        </>
      </div>
    </div>
  );
};
