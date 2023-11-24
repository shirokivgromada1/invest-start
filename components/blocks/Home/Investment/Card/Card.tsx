import styles from "./Card.module.scss";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
interface CardProps {
  index: number;
  title: string;
  description: string;
}
export const Card = ({ index, title, description }: CardProps) => {
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <div className={styles.card}>
      <div>{index < 10 ? `0${index}` : index}.</div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{label === "UA" ? "Детальніше..." : "Read more..."}</button>
    </div>
  );
};
