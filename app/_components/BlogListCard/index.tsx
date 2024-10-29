// components/BlogCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./BlogListCard.module.scss";

const cx = classnames.bind(styles);

interface BlogListCardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  link: string;
}

export const BlogListCard: React.FC<BlogListCardProps> = ({
  imageSrc,
  title,
  subtitle,
  link,
}) => {
  return (
    <Link href={link} className={cx("blog-card")}>
      <div className={cx("blog-card__image-container")}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={cx("blog-card__image")}
        />
      </div>
      <div className={cx("blog-card__content")}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p1">{subtitle}</Typography>
      </div>
    </Link>
  );
};

export default BlogListCard;
