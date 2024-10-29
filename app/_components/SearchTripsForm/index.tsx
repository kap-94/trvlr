"use client";
import { FC, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import classNames from "classnames/bind";
import { Button, DestinationDropdown } from "@/app/_components";
import { useOutsideClick } from "@/app/_hooks/useOutsideClick";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";
import styles from "./SearchTripsForm.module.scss";

const cx = classNames.bind(styles);

const regions = [
  { label: "Flexible search", image: "/world.svg" },
  { label: "North America", image: "/north-america.svg" },
  { label: "México", image: "/mx.svg" },
  { label: "United States", image: "/us.svg" },
  { label: "Africa", image: "/africa.svg" },
  { label: "Europe", image: "/europe.svg" },
];

const validationSchema = Yup.object().shape({
  startDate: Yup.date().nullable(),
  endDate: Yup.date()
    .nullable()
    .min(Yup.ref("startDate"), "End date cannot be before start date"),
});

interface SearchTripsFormProps {
  onSubmit: (values: any) => void;
  size?: "small" | "large"; // Agregamos la prop size con opciones small o large
}

export const SearchTripsForm: FC<SearchTripsFormProps> = ({
  onSubmit,
  size = "large", // Valor predeterminado de 'large'
}) => {
  const initialValues = {
    destination: "",
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined,
    people: undefined as number | undefined,
  };

  const [dateRange, setDateRange] = useState<
    [Date | undefined, Date | undefined]
  >([undefined, undefined]);
  const [startDate, endDate] = dateRange;
  const [showDropdown, setShowDropdown] = useState(false);
  const [monthsToShow, setMonthsToShow] = useState(2); // Estado para controlar los meses a mostrar
  const [isMobileView, setIsMobileView] = useState(false); // Estado para controlar cuándo la pantalla es menor de 1032px

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1032) {
        setMonthsToShow(1); // Muestra 1 mes si la pantalla es menor de 1032px
        setIsMobileView(true); // Aplica `popperPlacement` y `portalId` si la pantalla es menor de 1032px
      } else {
        setMonthsToShow(2); // Muestra 2 meses si la pantalla es mayor de 1032px
        setIsMobileView(false); // Desactiva `popperPlacement` y `portalId` si la pantalla es mayor de 1032px
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llamada inicial para establecer el valor correcto

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDestinationClick = (destination: string) => {
    if (
      !destination ||
      regions.some(
        (region) => region.label.toLowerCase() === destination.toLowerCase()
      )
    ) {
      setShowDropdown(true);
    }
  };

  const handleDestinationChange = (
    value: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue("destination", value);

    if (
      value &&
      !regions.some(
        (region) => region.label.toLowerCase() === value.toLowerCase()
      )
    ) {
      setShowDropdown(false);
    } else if (!value) {
      setShowDropdown(true);
    }
  };

  const handleRegionSelect = (
    region: string,
    setFieldValue: (field: string, value: any) => void
  ) => {
    setFieldValue("destination", region);
    setShowDropdown(false);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const dropdownRef = useOutsideClick(() => setShowDropdown(false));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={cx("form", { small: size === "small" })}>
          {/* Campo de destino */}
          <div className={cx("form__input-group", "form__destination")}>
            <label htmlFor="destination" className={cx("form__label")}>
              Destination
            </label>
            <Field
              id="destination"
              name="destination"
              placeholder="Where to?"
              autoComplete="off"
              className={cx("form__input")}
              onClick={() => handleDestinationClick(values.destination)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleDestinationChange(e.target.value, setFieldValue)
              }
            />
            {showDropdown && (
              <div ref={dropdownRef}>
                <DestinationDropdown
                  regions={regions}
                  onSelectRegion={(region: string) =>
                    handleRegionSelect(region, setFieldValue)
                  }
                  onCloseDropdown={closeDropdown}
                />
              </div>
            )}
          </div>

          {/* Campos de fecha */}
          <div className={cx("form__input-group", "form__start-date")}>
            <label htmlFor="startDate" className={cx("form__label")}>
              Start Date
            </label>
            <DatePicker
              id="startDate"
              name="startDate"
              autoComplete="off"
              closeOnScroll={true}
              dateFormat="dd/MM/yyyy"
              endDate={endDate}
              monthsShown={monthsToShow}
              placeholderText="Add date..."
              selected={startDate}
              selectsStart
              startDate={startDate}
              onChange={(date: Date | null) => {
                setDateRange([date || undefined, endDate]);
                setFieldValue("startDate", date || undefined);
              }}
              onKeyDown={(e) => e.preventDefault()}
              {...(isMobileView && {
                popperPlacement: "bottom-start",
                portalId: "root-portal",
              })}
            />
          </div>

          <div className={cx("form__input-group", "form__end-date")}>
            <label htmlFor="endDate" className={cx("form__label")}>
              End Date
            </label>
            <DatePicker
              id="endDate"
              name="endDate"
              autoComplete="off"
              closeOnScroll={true}
              dateFormat="dd/MM/yyyy"
              minDate={startDate}
              monthsShown={monthsToShow}
              placeholderText="Add date..."
              selected={endDate}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              onChange={(date: Date | null) => {
                setDateRange([startDate, date || undefined]);
                setFieldValue("endDate", date || undefined);
              }}
              onKeyDown={(e) => e.preventDefault()}
              {...(isMobileView && {
                popperPlacement: "bottom-start",
                portalId: "root-portal",
              })}
            />
          </div>

          <div className={cx("form__input-group", "form__people")}>
            <label htmlFor="people" className={cx("form__label")}>
              People
            </label>
            <Field
              id="people"
              type="number"
              name="people"
              min={1}
              placeholder="How many?"
              className={cx("form__input")}
              autoComplete="off"
            />
          </div>

          <Button icon="search" type="submit" className={cx("form__button")}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchTripsForm;
