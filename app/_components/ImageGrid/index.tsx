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
  // Limitar el número de imágenes a 8
  const limitedImages = images.slice(0, 8);

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
        {limitedImages.map((image, index) => {
          // Asignar clases "large" a los ítems 1 y 4 (índices 0 y 3)
          const largeIndices = [0, 3];
          const itemClass = largeIndices.includes(index)
            ? "image-grid__item--large"
            : "image-grid__item--normal";

          return (
            <div
              key={index}
              className={cx("image-grid__item", itemClass)}
              onClick={() => openLightbox(index)}
            >
              <div className={cx("image-grid__image-wrapper")}>
                {image.href ? (
                  <a href={image.href}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={cx("image-grid__image")}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </a>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={cx("image-grid__image")}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {open && (
        <Lightbox
          open={open}
          index={currentIndex}
          close={closeLightbox}
          controller={{ closeOnBackdropClick: true }}
          slides={limitedImages.map((image) => ({
            src: image.src,
            alt: image.alt,
          }))}
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
