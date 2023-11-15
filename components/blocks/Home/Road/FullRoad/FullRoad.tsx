import styles from "./FullRoad.module.scss";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface FullRoadProps {
  className: string;
}
const FullRoad: React.FC<FullRoadProps> = ({ className }) => {
  const [pointPositionValue1, setValue1] = useState(0);
  const [pointPositionValue2, setValue2] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-200px", "100%"],
  });
  const baseY1 = useMotionValue(0);
  const baseY2 = useMotionValue(0);

  useEffect(() => {
    scrollYProgress.on("change", (v) => {
      if (v > 0.5) {
        baseY1.set(1);
        baseY2.set(1);
        setValue1(1);
        setValue2(1);
      } else if (v > 0.4) {
        baseY1.set(0.85);
        baseY2.set(0.845);
        setValue1(0.85);
        setValue2(0.845);
      } else if (v > 0.2) {
        baseY1.set(0.6);
        baseY2.set(0.6675);
        setValue1(0.6);
        setValue2(0.6675);
      } else if (v > 0.1) {
        baseY1.set(0.425);
        baseY2.set(0.4);
        setValue1(0.425);
        setValue2(0.4);
      } else if (v > 0.01) {
        baseY1.set(0.1);
        baseY2.set(0.15);
        setValue1(0.1);
        setValue2(0.15);
      } else {
        baseY1.set(0);
        baseY2.set(0);
        setValue1(0);
        setValue2(0);
      }
    });
  });

  return (
    <div className={className + " " + styles.fullRoad} ref={ref}>
      <motion.div
        className={styles.fullRoad_point_left}
        initial={{ offsetDistance: "0%" }}
      />
      <motion.div
        className={styles.fullRoad_point_right}
        initial={{ offsetDistance: "0%" }}
      />
      <svg
        width="995"
        height="969"
        viewBox="0 0 995 969"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.fullRoad__inner}
      >
        <motion.path
          d="M385.312 0.000105316L385.312 42.9114C385.312 80.5001 385.312 99.1593 351.88 99.1593L129.64 99.1594C42.9595 99.1594 -3.04016 195.5 2.45959 279.295L2.45959 283.027C2.45959 356.5 62.9594 440 129.64 442.175L599.46 442.175C648.188 442.175 680.54 462.805 680.54 526.5L680.54 530.232C680.54 580.428 680.54 636.5 614.731 636.5L371.184 636.5C325.459 636.5 250.959 658.5 250.959 804.756L250.959 808.5C250.959 913.896 316.959 966.963 371.22 966.963L994.46 966.963"
          stroke="#309C54"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          style={{
            pathLength: baseY1,
            transitionDuration: "2s",
            transitionTimingFunction: "ease-out",
          }}
        />
        <motion.path
          d="M385.312 0.000105316L385.312 42.9114C385.312 80.5001 385.312 99.1593 351.88 99.1593L129.64 99.1594C42.9595 99.1594 -3.04016 195.5 2.45959 279.295L2.45959 283.027C2.45959 356.5 62.9594 440 129.64 442.175L599.46 442.175C648.188 442.175 680.54 462.805 680.54 526.5L680.54 530.232C680.54 580.428 680.54 636.5 614.731 636.5L371.184 636.5C325.459 636.5 250.959 658.5 250.959 804.756L250.959 808.5C250.959 913.896 316.959 966.963 371.22 966.963L994.46 966.963"
          stroke="#309C54"
          strokeOpacity="0.2"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          id="leftRoad"
        />
        <motion.path
          d="M424.735 30C424.735 122.5 409.459 137.924 355.891 137.924L177.959 137.924C87.9595 137.924 44.9594 188.163 44.9594 266.079L44.9594 269.811C44.9594 347.727 97.6315 409.311 153.959 409.311L358.691 409.311L618.742 409.311C695.458 409.311 720.742 458.5 720.742 552.499L720.742 556.231C720.742 617.5 685.96 673.999 618.742 673.999L375.195 673.999C313.459 673.999 285.959 739.735 285.959 814.734L285.959 818.478C285.959 886.5 330.959 934.499 375.195 934.499L723.826 934.499L901.458 934.499"
          stroke="#309C54"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          strokeDasharray="13 13"
        />
        <motion.path
          d="M467.811 2.00011L467.811 44.9121C465.459 128.5 446.959 182.5 372.959 180.5L215.959 180.5L142.959 180.5C97.4595 180.5 78.7676 219 78.9594 271.332L78.9594 275.064C78.9594 325.26 108.959 364.084 143.767 364.084L617.86 364.084C694.06 364.084 756.04 407 756.04 561.732L756.04 561.964C756.04 664.5 715.159 706.999 638.959 706.999L394.311 706.999C328.515 706.999 320.459 776.184 320.459 800.44L320.459 807.5C320.459 861.5 348.959 899.5 394.311 899.5L991.589 899.5"
          stroke="#309C54"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          style={{
            pathLength: baseY2,
            transitionDuration: "2s",
            transitionTimingFunction: "ease-out",
          }}
        />
        <motion.path
          d="M467.811 2.00011L467.811 44.9121C465.459 128.5 446.959 182.5 372.959 180.5L215.959 180.5L142.959 180.5C97.4595 180.5 78.7676 219 78.9594 271.332L78.9594 275.064C78.9594 325.26 108.959 364.084 143.767 364.084L617.86 364.084C694.06 364.084 756.04 407 756.04 561.732L756.04 561.964C756.04 664.5 715.159 706.999 638.959 706.999L394.311 706.999C328.515 706.999 320.459 776.184 320.459 800.44L320.459 807.5C320.459 861.5 348.959 899.5 394.311 899.5L991.589 899.5"
          stroke="#309C54"
          strokeOpacity="0.19"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          id="rightRoad"
        />
      </svg>
      <motion.div
        className={styles.fullRoad_point_left}
        style={{
          offsetDistance: `${pointPositionValue1 * 100}%`,
          transition: "all 2s ease-out",
        }}
      />
      <motion.div
        className={styles.fullRoad_point_right}
        style={{
          offsetDistance: `${pointPositionValue2 * 100}%`,
          transition: "all 2s ease-out",
        }}
      />
    </div>
  );
};

export default FullRoad;
