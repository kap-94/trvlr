"use client";

import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import { Button, Typography } from "@/app/_components";
import styles from "@/app/not-found.module.scss";

const cx = classNames.bind(styles);

export default function NotFound() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/blog");
  };

  return (
    <div className={cx("not-found")}>
      <div className={cx("not-found__content")}>
        <Typography variant="h1" className={cx("not-found__title")}>
          Blog Post Not Found
        </Typography>

        <Typography variant="p1" className={cx("not-found__description")}>
          We couldn't find the blog post you're looking for. The page might have
          been removed, renamed, or is temporarily unavailable.
        </Typography>

        <Button onClick={handleReturn} className={cx("not-found__button")}>
          Back to all Blog Posts
        </Button>
      </div>
    </div>
  );
}
