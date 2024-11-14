"use client";

import { useRouter } from "next/navigation";
import classNames from "classnames/bind";
import { Button, Typography } from "@/app/_components";
import styles from "./error.module.scss";

const cx = classNames.bind(styles);

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  const handleRetry = () => {
    // Primero intentamos resetear el error
    reset();

    // Si hay historial de navegación, volvemos a la página anterior
    if (window.history.length > 1) {
      router.back();
    } else {
      // Si no hay historial (ej: acceso directo a una página con error),
      // redirigimos a la home
      router.push("/");
    }
  };

  return (
    <div className={cx("error")}>
      <div className={cx("error__content")}>
        <Typography variant="h1" className={cx("error__title")}>
          Oops! Something went wrong.
        </Typography>

        <Typography variant="p1" className={cx("error__description")}>
          We apologize for the inconvenience. Please try again or contact
          support if the problem persists.
        </Typography>

        {/* <Typography variant="p2" className={cx("error__technical")}>
          {error.message}
        </Typography> */}

        <Button onClick={handleRetry} className={cx("error__button")}>
          <Typography variant="p3" textTransform="uppercase">
            Go Back
          </Typography>
        </Button>
      </div>
    </div>
  );
}
