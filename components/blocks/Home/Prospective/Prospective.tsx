import styles from "./Prospective.module.scss";
import { PageComponentsProspective } from "@/tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import useBetterMediaQuery from "@/hooks/useBetterMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import classes from "./swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../../../assets/test-back.png";
import Image from "next/image";
import LeftArrow from "../../../../assets/arrow-left.svg";
import RightArrow from "../../../../assets/arrow-right.svg";
export const Prospective = ({ data }: { data: PageComponentsProspective }) => {
  const { title, sub1, sub2, photo1, photo2, photo3, photo4, photo5, photo6 } =
    data;
  const isTablet = useBetterMediaQuery(
    "((min-width: 705px) and (max-width: 890px))"
  );
  const isMobile = useBetterMediaQuery("(max-width: 704px)");
  return (
    <section className={styles.prospective}>
      <div className="container-fluid">
        <div className={styles.prospective__inner}>
          <div>
            {photo1 && (
              <Image
                src={photo1}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_1"
                data-tina-field={tinaField(data, "photo1")}
              />
            )}
          </div>
          <div>
            {photo2 && (
              <Image
                src={photo2}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_2"
                data-tina-field={tinaField(data, "photo2")}
              />
            )}
          </div>
          <div className={styles.prospective__inner_text}>
            <h1 data-tina-field={tinaField(data, "title")}>{title}</h1>
            <p data-tina-field={tinaField(data, "sub1")}>{sub1}</p>
            <p data-tina-field={tinaField(data, "sub2")}>{sub2}</p>
          </div>
          <div>
            {photo3 && (
              <Image
                src={photo3}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_3"
                data-tina-field={tinaField(data, "photo3")}
              />
            )}
          </div>
          <div>
            {photo4 && (
              <Image
                src={photo4}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_4"
                data-tina-field={tinaField(data, "photo4")}
              />
            )}
          </div>
          <div>
            {photo5 && (
              <Image
                src={photo5}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_5"
                data-tina-field={tinaField(data, "photo5")}
              />
            )}
          </div>
          <div>
            {photo6 && (
              <Image
                src={photo6}
                width={330}
                height={294}
                layout={"responsive"}
                alt="img_6"
                data-tina-field={tinaField(data, "photo6")}
              />
            )}
          </div>
        </div>
        <div className={styles.prospective__inner_slider}>
          <div className={`${classes.image_swiper_button_next}`}>
            <div>
              <RightArrow />
            </div>
          </div>
          <div className={`${classes.image_swiper_button_prev}`}>
            <div>
              <LeftArrow />
            </div>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            navigation={{
              nextEl: `.${classes.image_swiper_button_next}`,
              prevEl: `.${classes.image_swiper_button_prev}`,
              disabledClass: `${classes.swiper_button_disabled}`,
            }}
            modules={[Navigation]}
            speed={500}
          >
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_1"
                data-tina-field={tinaField(data, "photo1")}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_2"
                data-tina-field={tinaField(data, "photo2")}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_3"
                data-tina-field={tinaField(data, "photo3")}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_4"
                data-tina-field={tinaField(data, "photo4")}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_5"
                data-tina-field={tinaField(data, "photo5")}
              />
            </SwiperSlide>
            <SwiperSlide className={classes.swiper_slide}>
              <Image
                src={img1}
                width={400}
                height={300}
                alt="img_6"
                data-tina-field={tinaField(data, "photo6")}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
