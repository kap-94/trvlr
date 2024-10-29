"use client";
import React, { useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./ImageGrid.module.scss";

const cx = classNames.bind(styles);

interface ImageGridProps {
  images: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const closeLightbox = () => {
    setOpen(false);
  };

  return (
    <div className={cx("image-grid")}>
      <div className={cx("image-grid__container")}>
        {images.map((image, index) => (
          <div
            key={index}
            className={cx("image-grid__item")}
            onClick={() => openLightbox(index)}
          >
            {image.href ? (
              <a href={image.href}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={300}
                  height={200}
                  className={cx("image-grid__image")}
                />
              </a>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={300}
                height={200}
                className={cx("image-grid__image")}
              />
            )}
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          index={currentIndex}
          close={closeLightbox}
          slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            },
          }}
        />
      )}
    </div>
  );
};

export default ImageGrid;
