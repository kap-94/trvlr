"use client";

import { FC } from "react";
import Link from "next/link";
import { Map } from "lucide-react";
import { Typography } from "@/app/_components";
import classNames from "classnames/bind";
import styles from "./Autocomplete.module.scss";

const cx = classNames.bind(styles);

export interface AutocompleteItem {
  id: string;
  label: string;
  value: string;
  type: "country" | "trip" | "location" | "region";
  subtitle?: string;
  href?: string;
}

interface AutocompleteProps {
  items: AutocompleteItem[];
  isLoading: boolean;
  onSelect: (value: string) => void;
  size?: "small" | "large";
  position: "top" | "bottom";
}

export const Autocomplete: FC<AutocompleteProps> = ({
  items,
  isLoading,
  onSelect,
  size = "large",
  position,
}) => {
  // Filtramos solo los items de tipo 'trip'
  const tripItems = items.filter((item) => item.type === "trip");

  return (
    <div
      className={cx(
        "autocomplete-container",
        `autocomplete-container--${position}`,
        {
          [`autocomplete-container--small`]: size === "small",
        }
      )}
    >
      <ul className={cx("autocomplete-list")}>
        {isLoading ? (
          <li className={cx("autocomplete-item", "autocomplete-item--loading")}>
            <Typography
              variant="p1"
              fontWeight={500}
              className={cx("loading-dots")}
            >
              Searching trips
            </Typography>
          </li>
        ) : (
          tripItems.map((item) => (
            <Link
              key={item.id}
              href={item.href || "#"}
              className={cx("autocomplete-item")}
              onClick={(e) => {
                if (!item.href) {
                  e.preventDefault();
                }
                onSelect(item.value);
              }}
            >
              <Map className={cx("autocomplete-item__icon")} />
              <div className={cx("autocomplete-item__content")}>
                <Typography
                  variant="p2"
                  align="left"
                  className={cx("autocomplete-item__title")}
                >
                  {item.label}
                </Typography>
                {item.subtitle && (
                  <Typography
                    variant="p2"
                    align="left"
                    className={cx("autocomplete-item__subtitle")}
                  >
                    {item.subtitle}
                  </Typography>
                )}
              </div>
            </Link>
          ))
        )}
      </ul>
    </div>
  );
};

export default Autocomplete;
