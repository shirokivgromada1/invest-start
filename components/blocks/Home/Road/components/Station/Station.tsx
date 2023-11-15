import styles from "./Station.module.scss";
import { useInView } from "react-intersection-observer";
interface StationProps {
  hText: string;
  pText: string;
  children: React.ReactElement;
  className?: string;
  isOrdered?: boolean;
  index?: number;
}
const Station: React.FC<StationProps> = ({
  hText,
  pText,
  children,
  className = "",
  index,
  isOrdered = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      ref={ref}
      className={
        className +
        " " +
        (index === 2
          ? styles.tablet_gap_2
          : index === 3
          ? styles.tablet_gap_3
          : "")
      }
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1s ease-in-out 0.5s",
      }}
    >
      {!isOrdered && children}
      <div className={styles.station__inner}>
        <h1>{hText}</h1>
        <p>{pText}</p>
      </div>
      {isOrdered && children}
    </section>
  );
};

export default Station;
