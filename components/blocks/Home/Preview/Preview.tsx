import useBetterMediaQuery from "../../../../hooks/useBetterMediaQuery";
import { tinaField } from "tinacms/dist/react";
import { PageComponentsPreview } from "./../../../../tina/__generated__/types";
import styles from "./Preview.module.scss";
export const Preview = ({ data }: { data: PageComponentsPreview }) => {
  const match = useBetterMediaQuery("(max-width: 700px)");
  const { title, subtitle, descBlock, video } = data;
  const getDriveFileId = (driveLink: string) => {
    const regex = /\/d\/([a-zA-Z0-9_-]+)|id=([a-zA-Z0-9_-]+)/;
    const match = driveLink.match(regex);
    return match ? match[1] || match[2] : null;
  };

  return (
    <section className={styles.preview}>
      <div className="container-fluid">
        <div className={styles.preview_headline}>
          <h1 data-tina-field={tinaField(data, "title")}>{title}</h1>
          <h5 data-tina-field={tinaField(data, "subtitle")}>{subtitle}</h5>
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
          {descBlock}
        </div>
      </div>
    </section>
  );
};
