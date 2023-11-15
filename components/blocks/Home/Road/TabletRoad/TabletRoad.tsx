import styles from "./TabletRoad.module.scss";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
interface FullRoadProps {
  className: string;
}
const TabletRoad: React.FC<FullRoadProps> = ({ className }) => {
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
        baseY1.set(0.945);
        baseY2.set(0.945);
        setValue1(0.945);
        setValue2(0.945);
      } else if (v > 0.4) {
        baseY1.set(0.85);
        baseY2.set(0.845);
        setValue1(0.85);
        setValue2(0.845);
      } else if (v > 0.2) {
        baseY1.set(0.6);
        baseY2.set(0.663);
        setValue1(0.6);
        setValue2(0.663);
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
    <div className={className + " " + styles.tabletRoad} ref={ref}>
      <motion.div
        className={styles.tabletRoad_point_left}
        initial={{ offsetDistance: "0%" }}
      />
      <motion.div
        className={styles.tabletRoad_point_right}
        initial={{ offsetDistance: "0%" }}
      />
      <svg
        width="691"
        height="879"
        viewBox="0 0 691 879"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M319.081 4.71751e-05L319.081 39.8066C319.081 74.6755 319.081 91.9848 291.424 91.9848L107.576 91.9848C35.8694 91.9848 -2.18393 181.355 2.36575 259.087L2.36575 262.549C2.36575 330.706 44.4999 402.5 117.5 400.182L484 400.182C542 400.182 563.309 429.319 563.309 488.406L563.309 491.868C563.309 538.432 563.309 590.447 508.869 590.447L321 590.447C269.5 590.447 207.938 600.855 207.938 736.529L207.938 740.002C207.938 837.772 268.5 877 321 877L823 877"
          stroke="#309C54"
          strokeOpacity="0.2"
          strokeWidth="2.4"
          strokeMiterlimit="10"
        />
        <motion.path
          d="M319.081 4.71751e-05L319.081 39.8066C319.081 74.6755 319.081 91.9848 291.424 91.9848L107.576 91.9848C35.8694 91.9848 -2.18393 181.355 2.36575 259.087L2.36575 262.549C2.36575 330.706 44.4999 402.5 117.5 400.182L484 400.182C542 400.182 563.309 429.319 563.309 488.406L563.309 491.868C563.309 538.432 563.309 590.447 508.869 590.447L321 590.447C269.5 590.447 207.938 600.855 207.938 736.529L207.938 740.002C207.938 837.772 268.5 877 321 877L823 877"
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
          d="M386.689 2.00005L386.689 41.7803C384.744 119.268 369.44 163.327 308.221 161.473L178.338 161.473L135 161.473C81.4999 161.473 64.8421 203.163 65.0009 251.676L65.0009 255.136C65.0009 301.668 88.4999 337.659 125 337.659L510.822 337.659C573.861 337.659 625.136 377.443 625.136 520.883L625.136 521.098C621 604 581 644.548 516 644.548L343 644.548C264.789 644.548 264.789 699.5 264.789 732.169L264.789 738.714C264.789 787.5 286 824 343 824L820 824"
          stroke="#309C54"
          strokeOpacity="0.19"
          strokeWidth="2.4"
          strokeMiterlimit="10"
        />
        <motion.path
          d="M386.689 2.00005L386.689 41.7803C384.744 119.268 369.44 163.327 308.221 161.473L178.338 161.473L135 161.473C81.4999 161.473 64.8421 203.163 65.0009 251.676L65.0009 255.136C65.0009 301.668 88.4999 337.659 125 337.659L510.822 337.659C573.861 337.659 625.136 377.443 625.136 520.883L625.136 521.098C621 604 581 644.548 516 644.548L343 644.548C264.789 644.548 264.789 699.5 264.789 732.169L264.789 738.714C264.789 787.5 286 824 343 824L820 824"
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
          d="M351.487 28C351.487 113.802 338.878 128.109 294.659 128.109L147.785 128.109C55.5 128.109 35 174.71 35 246.984L35 250.445C35 322.719 81.4783 369.844 127.974 369.844L296.971 369.844L511.63 369.844C574.957 369.844 595.827 425.471 595.827 512.662L595.827 516.124C595.827 572.957 567.116 617.364 511.63 617.364L337 617.364C241 617.364 237.934 662.34 237.934 731.908L237.934 735.381C237.934 795 254 854 353.5 854L598.372 854L745 854"
          stroke="#309C54"
          strokeWidth="2.4"
          strokeMiterlimit="10"
          strokeDasharray="13 13"
        />
      </svg>
      <motion.div
        className={styles.tabletRoad_point_left}
        style={{
          offsetDistance: `${pointPositionValue1 * 100}%`,
          transition: "all 2s ease-out",
        }}
      />
      <motion.div
        className={styles.tabletRoad_point_right}
        style={{
          offsetDistance: `${pointPositionValue2 * 100}%`,
          transition: "all 2s ease-out",
        }}
      />
    </div>
  );
};

export default TabletRoad;
