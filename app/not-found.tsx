"use client";

import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import { Button, Typography } from "@/app/_components";
import styles from "./not-found.module.scss";

const cx = classNames.bind(styles);

export default function NotFound() {
  const router = useRouter();

  const handleReturn = () => {
    router.push("/");
  };

  return (
    <div className={cx("not-found")}>
      <div className={cx("not-found__content")}>
        <Typography variant="h1" className={cx("not-found__title")}>
          Page Not Found
        </Typography>

        <Typography variant="p1" className={cx("not-found__description")}>
          We couldn't find the page you're looking for. The page might have been
          removed, renamed, or is temporarily unavailable.
        </Typography>

        <Button onClick={handleReturn} className={cx("not-found__button")}>
          Return Home
        </Button>
      </div>
    </div>
  );
}
