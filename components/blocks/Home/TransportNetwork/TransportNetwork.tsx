import styles from "./TransportNetwork.module.scss";
import { PageComponentsTransportNetwork } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
const generateArray = (start: number, step: number, end: number) => {
  const count = Math.floor((end - start) / step) + 1;
  const values = Array.from({ length: count }, (_, index) => {
    const value = start + index * step;
    return Number(value.toFixed(3));
  });
  values[values.length - 1] = end;

  return values;
};
import { useInView } from "react-intersection-observer";
import Carousel from "../../../../components/Carousel/Carousel";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
export const TransportNetwork = ({
  data,
}: {
  data: PageComponentsTransportNetwork;
}) => {
  const { title, titleEng, settlements, square, population } = data;
  const [ref, inView] = useInView();
  const countOfSettlements = settlements && generateArray(1, 2, settlements);
  const countOfPopulation = population && generateArray(100, 100, population);
  const countOfSquare = square && generateArray(2.3, 3.3, square);
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <section ref={ref} className={styles.transportNetwork}>
      <div className="container">
        <div className={styles.transportNetwork__inner}>
          <div className={styles.transportNetwork__inner_count}>
            {settlements && (
              <Carousel
                itemArray={countOfSettlements}
                inView={inView}
                title={`${
                  label === "UA" ? "населених пунктів" : "settlements"
                } `}
              />
            )}
            {population && (
              <Carousel
                itemArray={(countOfPopulation as number[]).map(
                  (item) => `>${item}`
                )}
                inView={inView}
                title={`${label === "UA" ? "населення" : "population"} `}
              />
            )}
            {square && (
              <Carousel
                itemArray={(countOfSquare as number[]).map(
                  (item) => `${item} ${label === "UA" ? "км" : "km"}\u00B2`
                )}
                inView={inView}
                title={`${
                  label === "UA" ? "площа громади" : "community square"
                } `}
              />
            )}
          </div>
          <h1>{label === "UA" ? title : titleEng}</h1>
        </div>
      </div>
    </section>
  );
};
