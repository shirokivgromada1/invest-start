import useBetterMediaQuery from "../../../../hooks/useBetterMediaQuery";
import { tinaField } from "tinacms/dist/react";
import { PageComponentsRoad } from "./../../../../tina/__generated__/types";
import styles from "./Road.module.scss";
import FullRoad from "./FullRoad/FullRoad";
import MobileRoad from "./MobileRoad/MobileRoad";
import TabletRoad from "./TabletRoad/TabletRoad";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Station from "./components/Station/Station";
import Image from "next/image";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const Road = ({ data }: { data: PageComponentsRoad }) => {
  const match = useBetterMediaQuery("(max-width: 700px)");
  const { stations } = data;
  const [visibleContent, setVisible] = useState(0);
  const matchesDesktop = useBetterMediaQuery("(min-width: 1143px)");
  const matchesTablet = useBetterMediaQuery(
    "(max-width: 1143px) and (min-width: 767px)"
  );
  const matchesMobile = useBetterMediaQuery("(max-width: 767px)");
  const { lang } = useContext(LangContext);
  const { label } = lang;
  useEffect(() => {
    matchesDesktop && setVisible(0);
    matchesTablet && setVisible(1);
    matchesMobile && setVisible(2);
  }, [matchesDesktop, matchesTablet, matchesMobile]);

  return (
    <section className={styles.road}>
      <div className="container">
        <div className={styles.road__inner}>
          <AnimatePresence>
            {visibleContent == 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FullRoad className={styles.road__inner_desktop} />
              </motion.div>
            )}
            {visibleContent == 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <TabletRoad className={styles.road__inner_tablet} />
              </motion.div>
            )}
            {visibleContent == 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <MobileRoad className={styles.road__inner_mobile} />
              </motion.div>
            )}
          </AnimatePresence>
          {stations &&
            stations.slice(0, 4).map(
              (s, index) =>
                s &&
                s?.hTextEng &&
                s?.hText &&
                s?.pTextEng &&
                s?.pText &&
                s?.icon && (
                  <Station
                    key={s.hText + index}
                    className={styles.road__inner_station}
                    hText={label === "UA" ? s.hText : s.hTextEng}
                    pText={label === "UA" ? s.pText : s.pTextEng}
                    isOrdered={index % 2 != 0 && true}
                    index={index}
                  >
                    <Image
                      src={s.icon}
                      width={104}
                      height={104}
                      data-tina-field={tinaField(s)}
                    />
                  </Station>
                )
            )}
        </div>
      </div>
    </section>
  );
};
