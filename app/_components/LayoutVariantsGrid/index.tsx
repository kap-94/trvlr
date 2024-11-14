// components/LayoutVariantsGrid.tsx
import React from "react";
import Image from "next/image";
import classnames from "classnames/bind";
import { Typography } from "@/app/_components";
import {
  LayoutVariantsGridItem,
  LayoutVariantsGridProps,
  LayoutVariant,
} from "@/app/_types";
import VideoPlayer from "../VideoPlayer";
import styles from "./LayoutVariantsGrid.module.scss";

const cx = classnames.bind(styles);

// Función helper para calcular sizes basado en el índice y la variante
const getImageSizes = (index: number, variant: LayoutVariant): string => {
  const defaultSize = "(max-width: 768px) 300px";

  const variantSizes: Record<LayoutVariant, Record<number, string>> = {
    variant1: {
      0: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 240px, 310px",
      1: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 380px, 380px",
      2: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 510px, 530px",
      3: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 480px, 520px",
      4: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 380px, 420px",
      5: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 300px, 336px",
    },
    variant2: {
      0: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 400px, 380px",
      1: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 280px, 300px",
      2: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 500px, 540px",
      3: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 500px, 540px",
      4: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 280px, 320px",
      5: "(max-width: 768px) 300px, (max-width: 1080px) 400px, (max-width: 1280px) 500px, 540px",
    },
    variant3: {
      0: "(max-width: 768px) 300px, (max-width: 1080px) 100%, (max-width: 1280px) 480px, 500px",
      1: "(max-width: 768px) 200px, (max-width: 1080px) 100%, (max-width: 1280px) 180px, 200px",
      2: "(max-width: 768px) 250px, (max-width: 1080px) 100%, (max-width: 1280px) 460px, 480px",
      3: "(max-width: 768px) 350px, (max-width: 1080px) 100%, (max-width: 1280px) 520px, 540px",
      4: "(max-width: 768px) 280px, (max-width: 1080px) 100%, (max-width: 1280px) 320px, 350px",
      5: "(max-width: 768px) 300px, (max-width: 1080px) 100%, (max-width: 1280px) 320px, 420px",
    },
  };

  return variantSizes[variant]?.[index] ?? defaultSize;
};

// Función para determinar la prioridad de carga
const shouldPrioritize = (index: number, variant: LayoutVariant): boolean => {
  const priorityIndexes: Record<LayoutVariant, number[]> = {
    variant1: [0, 1, 2],
    variant2: [0, 1, 2],
    variant3: [0, 3],
  };

  return priorityIndexes[variant]?.includes(index) ?? false;
};

// Función auxiliar para renderizar videos
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
        title={title ?? ""}
        placeholderImage={placeholderImage ?? ""}
        options={options}
      />
    </div>
  );
};

// Función auxiliar para renderizar imágenes
const renderImage = (
  item: Extract<LayoutVariantsGridItem, { type: "image" }>,
  index: number,
  variant: LayoutVariant
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
        sizes={getImageSizes(index, variant)}
        priority={shouldPrioritize(index, variant)}
        quality={90}
        style={{
          objectFit: "cover",
          objectPosition:
            variant === "variant1" && index === 5 ? "left" : "center",
        }}
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
        <Typography variant="h3" color="white">
          {title}
        </Typography>
        <Typography variant="p1" color="white">
          {paragraph}
        </Typography>
      </div>
    </div>
  );
};

const LayoutVariantsGrid: React.FC<LayoutVariantsGridProps> = ({
  items,
  variant,
}) => {
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
            return renderImage(item, index, variant);
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
