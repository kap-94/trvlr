import React from "react";
import classNames from "classnames/bind";
import { Typography } from "@/app/_components";
import styles from "./Spinner.module.scss";

const cx = classNames.bind(styles);

type SpinnerVariant = "button" | "inline" | "page";

interface SpinnerProps {
  variant?: SpinnerVariant;
  className?: string;
  particleCount?: number;
  color?: string;
  text?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  variant = "inline",
  className,
  particleCount = 3,
  color,
  text,
}) => {
  const spinnerClasses = cx(
    "spinner",
    `spinner--${variant}`,
    {
      "spinner--custom-color": color,
      "spinner--with-text": text,
    },
    className
  );

  const renderContent = () => {
    switch (variant) {
      case "button":
        return (
          <>
            <div className={cx("spinner__core")} />
            {Array.from({ length: particleCount }).map((_, index) => (
              <div
                key={`particle-${index}`}
                className={cx("spinner__particle")}
                style={
                  {
                    "--particle-delay": `${index * 0.15}s`,
                    "--particle-duration": `${0.8}s`,
                    transform: `rotate(${(360 / particleCount) * index}deg)`,
                  } as React.CSSProperties
                }
              />
            ))}
          </>
        );

      case "inline":
        return (
          <>
            {[1, 2, 3].map((index) => (
              <div
                key={`ring-${index}`}
                className={cx("spinner__ring")}
                style={
                  {
                    "--ring-duration": `${0.8 + index * 0.1}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </>
        );

      case "page":
        return (
          <>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={`segment-${index}`}
                className={cx("spinner__segment")}
                style={
                  {
                    "--segment-delay": `${index * 0.3}s`,
                    "--segment-opacity": `${0.2 + index * 0.1}`,
                    transform: `rotate(${index * 90}deg)`,
                  } as React.CSSProperties
                }
              />
            ))}
          </>
        );
    }
  };

  return (
    <div className={cx("spinner-container")}>
      <div className={cx("spinner-wrapper")}>
        <div
          className={spinnerClasses}
          style={
            color
              ? ({ "--spinner-color": color } as React.CSSProperties)
              : undefined
          }
          role="status"
          aria-label={text || "Cargando"}
        >
          {renderContent()}
        </div>
        {text && (
          <Typography
            variant="p2"
            fontWeight={600}
            textTransform="uppercase"
            className={cx("spinner__text")}
          >
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Spinner;
