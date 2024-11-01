"use client";

import { FC, useCallback, useState } from "react";
import classNames from "classnames/bind";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Typography } from "@/app/_components";
import { TripData } from "@/app/_components/TripCard";
import styles from "./TripFilters.module.scss";
import { raleway } from "@/app/_fonts";

const cx = classNames.bind(styles);

interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  search: string;
  priceRange: PriceRange;
  minRating: number;
}

interface TripFiltersProps {
  className?: string;
  trips: TripData[];
  onFiltersChange: (filteredTrips: TripData[]) => void;
}

export const TripFilters: FC<TripFiltersProps> = ({
  trips,
  onFiltersChange,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    priceRange: {
      min: Math.min(...trips.map((trip) => trip.price)),
      max: Math.max(...trips.map((trip) => trip.price)),
    },
    minRating: 0,
  });

  const [initialPriceRange] = useState({
    min: Math.min(...trips.map((trip) => trip.price)),
    max: Math.max(...trips.map((trip) => trip.price)),
  });

  const applyFilters = useCallback(
    (currentFilters: FilterState) => {
      const filtered = trips.filter((trip) => {
        const searchMatch =
          trip.title
            .toLowerCase()
            .includes(currentFilters.search.toLowerCase()) ||
          trip.description
            .toLowerCase()
            .includes(currentFilters.search.toLowerCase());

        const priceMatch =
          trip.price >= currentFilters.priceRange.min &&
          trip.price <= currentFilters.priceRange.max;

        const ratingMatch = trip.rating >= currentFilters.minRating;

        return searchMatch && priceMatch && ratingMatch;
      });

      onFiltersChange(filtered);
    },
    [trips, onFiltersChange]
  );

  const handleFilterChange = (
    key: keyof FilterState,
    value: string | number | PriceRange
  ) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      search: "",
      priceRange: initialPriceRange,
      minRating: 0,
    };
    setFilters(defaultFilters);
    applyFilters(defaultFilters);
  };

  return (
    <div className={cx("filters", className)}>
      {/* Search bar - always visible */}
      <div className={cx("filters__search")}>
        <Search className={cx("filters__search-icon")} />
        <input
          type="text"
          value={filters.search}
          onChange={(e) => handleFilterChange("search", e.target.value)}
          placeholder="Search destinations..."
          className={cx("filters__search-input", raleway.className)}
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cx("filters__expand-button")}
        >
          <SlidersHorizontal
            className={cx("filters__expand-icon", {
              "filters__expand-icon--active": isExpanded,
            })}
          />
        </button>
      </div>

      {/* Expandable filters */}
      <div
        className={cx("filters__expanded", {
          "filters__expanded--active": isExpanded,
        })}
      >
        <div className={cx("filters__section")}>
          <Typography variant="h4" className={cx("filters__section-title")}>
            Price Range
          </Typography>
          <div className={cx("filters__price-range")}>
            <input
              type="range"
              min={initialPriceRange.min}
              max={initialPriceRange.max}
              value={filters.priceRange.min}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  ...filters.priceRange,
                  min: Number(e.target.value),
                })
              }
              className={cx("filters__range-input")}
            />
            <input
              type="range"
              min={initialPriceRange.min}
              max={initialPriceRange.max}
              value={filters.priceRange.max}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  ...filters.priceRange,
                  max: Number(e.target.value),
                })
              }
              className={cx("filters__range-input")}
            />
            <div className={cx("filters__price-labels")}>
              <span>${filters.priceRange.min.toLocaleString()}</span>
              <span>${filters.priceRange.max.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className={cx("filters__section")}>
          <Typography variant="h4" className={cx("filters__section-title")}>
            Minimum Rating
          </Typography>
          <div className={cx("filters__rating")}>
            {[0, 3, 3.5, 4, 4.5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleFilterChange("minRating", rating)}
                className={cx("filters__rating-button", {
                  "filters__rating-button--active":
                    filters.minRating === rating,
                })}
              >
                {rating === 0 ? "All" : `${rating}+`}
              </button>
            ))}
          </div>
        </div>

        <button onClick={resetFilters} className={cx("filters__reset")}>
          <X className={cx("filters__reset-icon")} />
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default TripFilters;
