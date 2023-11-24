import { tinaField } from "tinacms/dist/react";
import { PageComponentsCommunity } from "./../../../../tina/__generated__/types";
import styles from "./Community.module.scss";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";

export const Community = ({ data }: { data: PageComponentsCommunity }) => {
  const { title, titleEng, subtitleEng, subtitle, image } = data;
  const { lang } = useContext(LangContext);
  const { label } = lang;
  return (
    <section className={styles.community}>
      <div className="container-fluid">
        <div
          className={styles.community_inner}
          style={{ backgroundImage: `url(${image})` }}
          data-tina-field={tinaField(data, "image")}
        >
          <h2 data-tina-field={tinaField(data, "title")}>
            {label === "UA" ? title : titleEng}
          </h2>
          <p data-tina-field={tinaField(data, "subtitle")}>
            {label === "UA" ? subtitle : subtitleEng}
          </p>
        </div>
      </div>
    </section>
  );
};
