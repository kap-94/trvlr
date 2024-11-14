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

  // Función para determinar el tamaño apropiado según el índice
  const getImageSizes = (index: number) => {
    const largeIndices = [0, 3];
    const isLarge = largeIndices.includes(index);

    // Esta string le dice al navegador qué tamaño de imagen cargar según el viewport
    return isLarge
      ? "(max-width: 480px) 100vw, " + // móvil: ancho completo
          "(max-width: 768px) 50vw, " + // tablet: mitad del viewport
          "calc(66.66vw - 32px)" // desktop: 2/3 del viewport menos el gap
      : "(max-width: 480px) 100vw, " + // móvil: ancho completo
          "(max-width: 768px) 33.33vw, " + // tablet: un tercio del viewport
          "calc(33.33vw - 32px)"; // desktop: un tercio del viewport menos el gap
  };

  return (
    <div className={cx("image-grid")}>
      <div className={cx("image-grid__container")}>
        {limitedImages.map((image, index) => {
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
                      sizes={getImageSizes(index)}
                      className={cx("image-grid__image")}
                      priority={index < 2} // Cargar con prioridad las primeras dos imágenes
                    />
                  </a>
                ) : (
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={getImageSizes(index)}
                    className={cx("image-grid__image")}
                    priority={index < 2} // Cargar con prioridad las primeras dos imágenes
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
