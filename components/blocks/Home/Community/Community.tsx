import useBetterMediaQuery from "../../../../hooks/useBetterMediaQuery";
import { tinaField } from "tinacms/dist/react";
import { PageComponentsCommunity } from "./../../../../tina/__generated__/types";
import styles from "./Community.module.scss";

export const Community = ({ data }: { data: PageComponentsCommunity }) => {
  const match = useBetterMediaQuery("(max-width: 700px)");
  const { title, subtitle, image } = data;

  return (
    <section className={styles.community}>
      <div className="container-fluid">
        <div
          className={styles.community_inner}
          style={{ backgroundImage: `url(${image})` }}
          data-tina-field={tinaField(data, "image")}
        >
          <h2 data-tina-field={tinaField(data, "title")}>{title}</h2>
          <p data-tina-field={tinaField(data, "subtitle")}>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
