import styles from "./Card.module.scss";
interface CardProps {
  index: number;
  title: string;
  description: string;
}
export const Card = ({ index, title, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div>{index < 10 ? `0${index}` : index}.</div>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>Детальніше...</button>
    </div>
  );
};
