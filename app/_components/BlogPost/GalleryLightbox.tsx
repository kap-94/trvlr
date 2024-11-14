// GalleryLightbox.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import styles from "./GalleryLightbox.module.scss";
import { Typography } from "@/app/_components";

const cx = classNames.bind(styles);

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryLightboxProps {
  images: GalleryImage[];
  className?: string;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  className,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section className={cx("gallery", className)}>
      <Typography variant="h2">Gallery</Typography>
      <div className={cx("gallery__grid")}>
        {images?.map((image, index) => (
          <div
            key={index}
            className={cx("gallery__image-container")}
            onClick={() => openLightbox(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                openLightbox(index);
              }
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={cx("gallery__image")}
              sizes="(max-width: 768px) calc(100vw - 32px), (min-width: 769px) 300px"
            />
          </div>
        ))}
      </div>

      {isLightboxOpen && (
        <Lightbox
          open={isLightboxOpen}
          index={currentImageIndex}
          close={closeLightbox}
          controller={{ closeOnBackdropClick: true }}
          slides={images.map((image) => ({
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
    </section>
  );
};

export default GalleryLightbox;
