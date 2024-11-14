import React, { useContext } from "react";
import Image, { ImageProps } from "next/image";
import classNames from "classnames/bind";
import { CardContext } from "./Card";
import styles from "../Card.module.scss";
import Typography from "../../Typography";

const cx = classNames.bind(styles);

export interface CardImageProps extends Omit<ImageProps, "src" | "alt"> {
  image?: { src: string; alt: string };
  className?: string;
  title?: string;
  subtitle?: string;
}

export const CardImage: React.FC<CardImageProps> = ({
  image,
  className,
  title,
  subtitle,
  ...imageProps // Spread any other ImageProps here
}) => {
  const { data } = useContext(CardContext);

  let imageToShow: { src: string; alt: string };
  const defaultImage = {
    src: "/man-in-the-sky.png",
    alt: "No Image",
  };

  if (image) {
    // imageToShow = image;
    imageToShow = image;
  } else if (data.coverImage) {
    // } else if (data.image) {
    imageToShow = data.coverImage;
    // imageToShow = data.image;
  } else {
    imageToShow = defaultImage;
  }

  return (
    <div className={`${cx("card__image-container")} ${className}`}>
      <Image
        src={imageToShow.src}
        alt={imageToShow.alt}
        className={cx("card__image")}
        {...imageProps} // Pass other props from Next.js Image
      />
      {title && subtitle && (
        <div className={cx("card__image-overlay")}>
          <Typography variant="h4" color="white">
            {title}
          </Typography>
          <Typography variant="p1" fontWeight={500} color="white">
            {subtitle}
          </Typography>
        </div>
      )}
    </div>
  );
};
