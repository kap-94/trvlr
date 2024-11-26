"use client";

import { FC, useEffect, useState, useCallback, useRef } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import classNames from "classnames/bind";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { Autocomplete, Button, RegionSelect } from "@/app/_components";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import { useDestinationSearch } from "@/app/_hooks/useDestinationSearch";
import { raleway } from "@/app/_fonts";
import styles from "./SearchForm.module.scss";

const cx = classNames.bind(styles);

const regions = [
  { label: "Flexible search", image: "/illustrations/world.svg" },
  { label: "México", image: "/illustrations/mx.svg" },
  { label: "North America", image: "/illustrations/north-america.svg" },
  { label: "United States", image: "/illustrations/us.svg" },
  { label: "Africa", image: "/illustrations/africa.svg" },
  { label: "Europe", image: "/illustrations/europe.svg" },
];

interface SearchFormProps {
  onSubmit?: (values: any) => void;
  size?: "small" | "large";
  inputPlaceholder?: string;
}

interface SearchFormValues {
  destination: string;
}

const validationSchema = Yup.object().shape({
  destination: Yup.string(),
});

const initialValues: SearchFormValues = {
  destination: "",
};

const BaseSearchForm: FC<SearchFormProps> = ({
  onSubmit,
  size = "large",
  inputPlaceholder = "Barcelona, Bali, New York...",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownReady, setIsDropdownReady] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState<"bottom" | "top">(
    "top"
  );
  const { items, isLoading, searchDestinations } = useDestinationSearch();

  const calculateDropdownPosition = useCallback(() => {
    if (!formRef.current) return "bottom";

    const formRect = formRef.current.getBoundingClientRect();
    const dropdownHeight = 300;
    const viewportHeight = window.innerHeight;
    const headerHeight = 116;
    const spaceBelow = viewportHeight - formRect.bottom;
    const spaceAbove = formRect.top - headerHeight;

    return spaceBelow < dropdownHeight && spaceAbove > spaceBelow
      ? "top"
      : "bottom";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isDropdownVisible) {
        const newPosition = calculateDropdownPosition();
        setDropdownPosition(newPosition);
      }
    };

    const handleResize = () => {
      if (isDropdownVisible) {
        const newPosition = calculateDropdownPosition();
        setDropdownPosition(newPosition);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [calculateDropdownPosition, isDropdownVisible]);

  const dropdownRef = useOutsideClick((event: MouseEvent) => {
    const inputElement = inputRef.current;
    if (
      inputElement &&
      event.target instanceof Node &&
      inputElement.contains(event.target)
    ) {
      return;
    }
    handleDropdownClose();
  });

  const handleInputClick = useCallback(() => {
    if (!isDropdownVisible) {
      const position = calculateDropdownPosition();
      setDropdownPosition(position);
      setIsDropdownVisible(true);
      requestAnimationFrame(() => {
        setIsDropdownReady(true);
      });
    }
  }, [calculateDropdownPosition, isDropdownVisible]);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownReady(false);
    setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  }, []);

  const handleInputChange = (
    value: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue("destination", value);
    if (!isDropdownVisible) {
      handleInputClick();
    }
    if (value) {
      searchDestinations(value);
    }
  };

  const handleFormSubmit = (
    values: SearchFormValues,
    { resetForm }: FormikHelpers<SearchFormValues>
  ) => {
    if (onSubmit) {
      onSubmit(values);
    }

    // Si es "Flexible search", navegar directamente a /trips
    if (values.destination === "Flexible search") {
      router.push("/trips");
      handleDropdownClose();
      resetForm();
      return;
    }

    // Para otros casos, mantener la lógica original
    const params = new URLSearchParams(searchParams.toString());

    if (values.destination) {
      params.set("search", values.destination);
    } else {
      params.delete("search");
    }

    router.push(`/trips?${params.toString()}`);
    handleDropdownClose();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ setFieldValue, values }) => {
        const destinationValue = values.destination || "";

        return (
          <Form
            ref={formRef}
            id="search-card-form"
            className={cx("form", { small: size === "small" })}
          >
            <div className={cx("form__container")}>
              <div className={cx("form__input-group", "form__destination")}>
                <label className={cx("form__label")}>Destination</label>
                <input
                  ref={inputRef}
                  type="text"
                  value={destinationValue}
                  onChange={(e) =>
                    handleInputChange(e.target.value, setFieldValue)
                  }
                  onClick={handleInputClick}
                  placeholder={inputPlaceholder}
                  className={cx("form__input", raleway.className)}
                />

                {isDropdownVisible && destinationValue.length === 0 && (
                  <div
                    ref={dropdownRef}
                    className={cx("form__dropdown-wrapper", {
                      "form__dropdown-wrapper--ready": isDropdownReady,
                      [`form__dropdown-wrapper--${dropdownPosition}`]: true,
                    })}
                    onMouseDown={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <RegionSelect
                      isSmall={size === "small"}
                      regions={regions}
                      position={dropdownPosition}
                      onCloseDropdown={handleDropdownClose}
                      onSelectRegion={(region) => {
                        setFieldValue("destination", region);
                        handleDropdownClose();
                      }}
                    />
                  </div>
                )}

                {isDropdownVisible &&
                  destinationValue.length > 0 &&
                  (items.length > 0 || isLoading) && (
                    <div
                      ref={dropdownRef}
                      className={cx("form__dropdown-wrapper", {
                        "form__dropdown-wrapper--ready": isDropdownReady,
                        [`form__dropdown-wrapper--${dropdownPosition}`]: true,
                      })}
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Autocomplete
                        items={items}
                        isLoading={isLoading}
                        size={size}
                        onSelect={(value) => {
                          setFieldValue("destination", value);
                          handleDropdownClose();
                        }}
                        position={dropdownPosition}
                      />
                    </div>
                  )}
              </div>

              <Button
                icon={{ source: "lucide", name: "search" }}
                type="submit"
                className={cx("form__button")}
              >
                Search
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export const SearchForm = dynamic(() => Promise.resolve(BaseSearchForm), {
  ssr: false,
  loading: () => (
    <div className={cx("form")}>
      <div className={cx("form__container")}>
        <div className={cx("form__input-group", "form__destination")}>
          <label className={cx("form__label")}>Destination</label>
          <input
            type="text"
            placeholder="Barcelona, Bali, New York..."
            className={cx("form__input", raleway.className)}
            disabled
          />
        </div>
        <Button
          icon={{ source: "lucide", name: "search" }}
          isDisabled
          className={cx("form__button")}
        >
          Search
        </Button>
      </div>
    </div>
  ),
});

export default SearchForm;
