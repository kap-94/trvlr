import React from "react";
import styles from "./TravelGuideImages.module.scss";
import classNames from "classnames/bind";
import { ImageGrid, SectionHeading } from "@/app/_components";

const cx = classNames.bind(styles);

interface TravelGuideImagesProps {
  title: string;
  subtitle?: string;
  images: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
}

const TravelGuideImages: React.FC<TravelGuideImagesProps> = ({
  title,
  subtitle,
  images,
}) => {
  return (
    <section className={cx("travel-guide-images")}>
      <div className={cx("travel-guide-images__header")}>
        <SectionHeading title={title} subtitle={subtitle} />
      </div>
      <div className={cx("travel-guide-images__grid")}>
        <ImageGrid images={images} />
      </div>
    </section>
  );
};

// Exportar el componente por defecto
export default TravelGuideImages;
