// components/FeaturedBlogCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames/bind";
import { Image as ImageType } from "@/app/_types";
import { Typography } from "@/app/_components";
import styles from "./FeaturedBlogCard.module.scss";

const cx = classnames.bind(styles);

interface FeaturedBlogCardProps {
  image: ImageType;
  eyebrow?: string;
  title: string;
  subtitle: string;
  link: string;
}

const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  image,
  eyebrow,
  title,
  subtitle,
  link,
}) => {
  // Calculamos sizes basado en los breakpoints y el layout:
  // - En móvil (< $medium): imagen ocupa el ancho completo
  // - En tablet (< $xlarge): imagen ocupa el ancho completo
  // - En desktop: imagen ocupa el 60% del contenedor de 1200px
  const imageSizes = `
    (max-width: 768px) 100vw,
    (max-width: 1200px) 100vw,
    720px
  `;

  return (
    <Link href={`/blog/posts/${link}`} className={cx("card")}>
      <div className={cx("card__image-wrapper")}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={imageSizes}
          className={cx("card__image")}
          // Podemos agregar priority a la primera imagen destacada
          // priority={true}
        />
      </div>
      <div className={cx("card__overlay")}>
        <div className={cx("card__text")}>
          <Typography variant="h5" color="white">
            {eyebrow}
          </Typography>
          <Typography variant="h3" color="white">
            {title}
          </Typography>
          <Typography variant="p1" color="white">
            {subtitle}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedBlogCard;
