// components/BlogListCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames/bind";
import { Image as ImageTypes } from "@/app/_types";
import { Typography } from "@/app/_components";
import styles from "./BlogListCard.module.scss";

const cx = classnames.bind(styles);

interface BlogListCardProps {
  image: ImageTypes;
  title: string;
  subtitle: string;
  link: string;
}

export const BlogListCard: React.FC<BlogListCardProps> = ({
  image,
  title,
  subtitle,
  link,
}) => {
  // Calculamos sizes basado en los breakpoints y el layout:
  // - En móvil (< $medium): imagen ocupa una columna completa
  // - En tablet (< $xlarge): imagen ocupa 1/2 del espacio (2 columnas)
  // - En desktop: imagen es cuadrada de 90x90px
  const imageSizes = `
    (max-width: 768px) 100vw,
    (max-width: 1200px) 50vw,
    90px
  `;

  return (
    <Link href={`/blog/posts/${link}`} className={cx("blog-card")}>
      <div className={cx("blog-card__image-container")}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={imageSizes}
          className={cx("blog-card__image")}
        />
      </div>
      <div className={cx("blog-card__content")}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p2">{subtitle}</Typography>
      </div>
    </Link>
  );
};

export default BlogListCard;
