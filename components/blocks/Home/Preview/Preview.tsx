import { tinaField } from "tinacms/dist/react";
import { PageComponentsPreview } from "./../../../../tina/__generated__/types";
import styles from "./Preview.module.scss";
import { useContext } from "react";
import { LangContext } from "@/components/LangSwitcher/LangSwitcher";
export const Preview = ({ data }: { data: PageComponentsPreview }) => {
  const {
    title,
    subtitle,
    titleEng,
    subtitleEng,
    descBlockEng,
    descBlock,
    video,
  } = data;
  const getDriveFileId = (driveLink: string) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)|id=([a-zA-Z0-9_-]+)/;
    const match = driveLink.match(regex);
    return match ? match[1] || match[2] : null;
  };
  const { lang } = useContext(LangContext);
  const { label } = lang;

  return (
    <section className={styles.preview}>
      <div className="container-fluid">
        <div className={styles.preview_headline}>
          <h1 data-tina-field={tinaField(data, "title")}>
            {label === "UA" ? title : titleEng}
          </h1>
          <h5 data-tina-field={tinaField(data, "subtitle")}>
            {label === "UA" ? subtitle : subtitleEng}
          </h5>
        </div>
        <div
          className={styles.preview_video}
          data-tina-field={tinaField(data, "video")}
        >
          <video
            src={
              video
                ? `https://drive.google.com/uc?id=${getDriveFileId(video)}`
                : "/video.mp4"
            }
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
        <div
          className={styles.preview_story}
          data-tina-field={tinaField(data, "descBlock")}
        >
          {label === "UA" ? descBlock : descBlockEng}
        </div>
      </div>
    </section>
  );
};
