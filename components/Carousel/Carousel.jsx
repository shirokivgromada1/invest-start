import styles from "./Carousel.module.scss";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Carousel = ({ itemArray, inView, title }) => {
  const [isAnimated, setAnimated] = useState(false);

  var spin = keyframes`
	    to { transform: translateY(calc(-${(itemArray.length - 1) * 100}% - 2px)); }
	`;

  const AnimatedItem = styled.div`
    animation: ${inView && !isAnimated && spin} 2s ease-out forwards;
    transform: ${isAnimated
      ? `translateY(calc(-${(itemArray.length - 1) * 100}% - 2px))`
      : "none"};
  `;

  useEffect(() => {
    if (inView && !isAnimated) {
      const interval = setInterval(() => {
        setAnimated(true);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [inView, isAnimated]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_inner}>
        {itemArray.map((item, index) => (
          <AnimatedItem className={styles.carousel__item} key={"item" + index}>
            <h1>{item}</h1>
          </AnimatedItem>
        ))}
      </div>
      <span>{title}</span>
    </div>
  );
};

export default Carousel;
