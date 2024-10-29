// components/LayoutVariantsGrid.tsx

import React from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import { Typography } from "@/app/_components";
import VideoPlayer, { VideoPlayerProps } from "../VideoPlayer";
import styles from "./LayoutVariantsGrid.module.scss";

const cx = classnames.bind(styles);

type VideoItem = VideoPlayerProps & { type: "video" };

export type LayoutVariantsGridItem =
  | VideoItem
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "text";
      title: string;
      paragraph: string;
    };

export type LayoutVariantsGridProps = {
  items: LayoutVariantsGridItem[];
  variant: "variant1" | "variant2" | "variant3";
};

// Función auxiliar para renderizar imágenes
const renderVideo = (
  item: Extract<LayoutVariantsGridItem, { type: "video" }>,
  index: number
): JSX.Element => {
  const { src, options, title, placeholderImage } = item;
  const baseClass = cx("grid__item", `grid__item--${index}`);

  return (
    <div className={baseClass} key={index}>
      <VideoPlayer
        src={src}
        title={title}
        placeholderImage={placeholderImage}
        options={options}
      />
    </div>
  );
};

// Función auxiliar para renderizar imágenes
const renderImage = (
  item: Extract<LayoutVariantsGridItem, { type: "image" }>,
  index: number
): JSX.Element => {
  const { src, alt = "Image" } = item;
  const baseClass = cx("grid__item", `grid__item--${index}`);

  return (
    <div className={baseClass} key={index}>
      <Image
        src={src}
        alt={alt}
        className={cx("grid__image")}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

// Función auxiliar para renderizar textos
const renderText = (
  item: Extract<LayoutVariantsGridItem, { type: "text" }>,
  index: number
): JSX.Element => {
  const { title, paragraph } = item;
  const baseClass = cx("grid__item", `grid__item--${index}`);

  return (
    <div className={baseClass} key={index}>
      <div className={cx("grid__text-box")}>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="p1">{paragraph}</Typography>
      </div>
    </div>
  );
};

// Componente principal Server Component
const LayoutVariantsGrid: React.FC<LayoutVariantsGridProps> = ({
  items,
  variant,
}) => {
  // Asignar la clase correspondiente al grid según la variante
  const gridClass = cx("grid", {
    "grid--variant1": variant === "variant1",
    "grid--variant2": variant === "variant2",
    "grid--variant3": variant === "variant3",
  });

  return (
    <div className={gridClass}>
      {items.map((item, index) => {
        switch (item.type) {
          case "video":
            if (!item.src) {
              console.warn(
                `Video item at index ${index} is missing 'src' property.`
              );
              return null;
            }
            return renderVideo(item, index);
          case "image":
            if (!item.src) {
              console.warn(
                `Image item at index ${index} is missing 'src' property.`
              );
              return null;
            }
            return renderImage(item, index);
          case "text":
            if (!item.title || !item.paragraph) {
              console.warn(
                `Text item at index ${index} is missing 'title' or 'paragraph' property.`
              );
              return null;
            }
            return renderText(item, index);
          default:
            console.warn(
              `Unknown item type '${(item as any).type}' at index ${index}.`
            );
            return null;
        }
      })}
    </div>
  );
};

export default LayoutVariantsGrid;
