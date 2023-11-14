import Link from "next/link";
import styles from "./Investment.module.scss";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageComponentsInvestment } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { Card } from "@/components/blocks/Home/Investment/Card/Card";

export const Investment = ({ data }: { data: PageComponentsInvestment }) => {
  const [showMore, setShowMore] = useState(false);

  const handleMoreClick = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  const { title, list } = data;
  const isTablet = useBetterMediaQuery(
    "((min-width: 705px) and (max-width: 1080px))"
  );
  const isMobile = useBetterMediaQuery("(max-width: 704px)");
  const numItemsToShow = showMore
    ? list?.length ?? 0
    : isTablet
    ? 6
    : isMobile
    ? 4
    : 9;

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

  return (
    <motion.section
      className={styles.investment}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container">
        <div className={styles.investment__inner}>
          <h2 data-tina-field={tinaField(data, "title")}>{title}</h2>
          <div>
            <AnimatePresence>
              {itemsToShow &&
                itemsToShow.map(
                  (item, index) =>
                    item &&
                    !item.isHidden &&
                    item.link && (
                      <Link
                        href={item.link}
                        key={"card" + index}
                        data-tina-field={tinaField(item, "link")}
                      >
                        <motion.div
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          transition={{ duration: 0.2 }}
                          data-tina-field={tinaField(item)}
                        >
                          {item.opportunityTitle && item.desc && (
                            <Card
                              title={item.opportunityTitle}
                              description={item.desc}
                              index={index + 1}
                            />
                          )}
                        </motion.div>
                      </Link>
                    )
                )}
            </AnimatePresence>
          </div>
          {list && list?.length > (isTablet ? (isMobile ? 4 : 6) : 9) && (
            <motion.button
              type="button"
              onClick={handleMoreClick}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.4 }}
            >
              {showMore ? "Менше" : "Більше"}
            </motion.button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
