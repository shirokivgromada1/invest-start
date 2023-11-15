import styles from "./MobileRoad.module.scss";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface FullRoadProps {
  className: string;
}
const MobileRoad: React.FC<FullRoadProps> = ({ className }) => {
  const [pointPositionValue, setValue] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-200px", "100%"],
  });
  const baseY = useMotionValue(0);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      if (v > 0.5) {
        baseY.set(1);
        setValue(1);
      } else if (v > 0.4) {
        baseY.set(0.9);
        setValue(0.9);
      } else if (v > 0.2) {
        baseY.set(0.6);
        setValue(0.6);
      } else if (v > 0.1) {
        baseY.set(0.4);
        setValue(0.4);
      } else if (v > 0.01) {
        baseY.set(0.1);
        setValue(0.1);
      } else {
        baseY.set(0);
        setValue(0);
      }
    });
  });

  return (
    <div className={className + " " + styles.mobileRoad} ref={ref}>
      <motion.div
        className={styles.mobileRoad_point}
        initial={{ offsetDistance: "0%" }}
      />
      <svg
        width="335"
        height="604"
        viewBox="0 0 335 604"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M191.5,-0.000131185C195.5,73.4999 174.2,96.1088 81,96.1088C38.5,96.1088 1.99998,124.5 1.99998,179.984L1.99998,183.445C1.99998,257.5 75.2324,265.5 93,265.5L175.5,267.844C215,267.844 256.498,286.5 256.498,352.662L256.498,356.124C256.498,408.5 215,435.364 171.5,435.364L111,435.364C72.5,435.364 23,452.527 24,520.027L24,523.5C24,592 96.7323,602 123,602L335,602"
          stroke="#309C54"
          strokeOpacity="0.19"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          strokeDasharray="13 13"
        />
        <motion.path
          d="M191.5,-0.000131185C195.5,73.4999 174.2,96.1088 81,96.1088C38.5,96.1088 1.99998,124.5 1.99998,179.984L1.99998,183.445C1.99998,257.5 75.2324,265.5 93,265.5L175.5,267.844C215,267.844 256.498,286.5 256.498,352.662L256.498,356.124C256.498,408.5 215,435.364 171.5,435.364L111,435.364C72.5,435.364 23,452.527 24,520.027L24,523.5C24,592 96.7323,602 123,602L335,602"
          stroke="#309C54"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          strokeDasharray="13 13"
          style={{
            pathLength: baseY,
            transitionDuration: "2s",
            transitionTimingFunction: "ease-out",
          }}
        />
      </svg>
      <motion.div
        className={styles.mobileRoad_point}
        style={{
          offsetDistance: `${pointPositionValue * 100}%`,
          transition: "all 2s ease-out",
        }}
      />
    </div>
  );
};

export default MobileRoad;
