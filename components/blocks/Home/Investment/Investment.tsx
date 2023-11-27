import Link from "next/link";
import styles from "./Investment.module.scss";
import { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageComponentsInvestment } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { Card } from "@/components/blocks/Home/Investment/Card/Card";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const Investment = ({ data }: { data: PageComponentsInvestment }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  const { title, list, titleEng } = data;
  const isTablet = useBetterMediaQuery("(min-width: 705px)");
  const isMobile = useBetterMediaQuery("(max-width: 704px)");
  const numItemsToShow = showMore
    ? list?.length ?? 0
    : isTablet
    ? 6
    : isMobile
    ? 4
    : list?.length;

  const [itemsToShow, setItemsToShow] = useState(
    list?.slice(0, numItemsToShow) ?? []
  );

  useEffect(() => {
    setItemsToShow(list?.slice(0, numItemsToShow) ?? []);
  }, [isMobile, showMore, isTablet]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <motion.section
      className={styles.investment}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="investment"
    >
      <div className="container">
        <div className={styles.investment__inner}>
          <h2 data-tina-field={tinaField(data, "title")}>
            {label === "UA" ? title : titleEng}
          </h2>
          <div>
            <AnimatePresence>
              {itemsToShow &&
                itemsToShow.map(
                  (item, index) =>
                    item &&
                    !item.isHidden &&
                    item.link && (
                      <Link href={item.link} key={"card" + index} passHref>
                        <a target="_blank" rel="noopener noreferrer">
                          <motion.div
                            data-tina-field={tinaField(
                              item,
                              "opportunityTitle"
                            )}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.2 }}
                          >
                            {item.opportunityTitle &&
                              item.opportunityTitleEng &&
                              item.desc &&
                              item.descEng && (
                                <Card
                                  title={
                                    label === "UA"
                                      ? item.opportunityTitle
                                      : item.opportunityTitleEng
                                  }
                                  description={
                                    label === "UA" ? item.desc : item.descEng
                                  }
                                  index={index + 1}
                                />
                              )}
                          </motion.div>
                        </a>
                      </Link>
                    )
                )}
            </AnimatePresence>
          </div>
          {list && list?.length > (isTablet ? 6 : 4) && (
            <motion.button
              type="button"
              onClick={handleMoreClick}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.4 }}
            >
              {showMore
                ? label === "UA"
                  ? "Менше"
                  : "Less"
                : label === "UA"
                ? "Більше"
                : "More"}
            </motion.button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
