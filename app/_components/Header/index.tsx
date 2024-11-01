"use client";
import React, { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";
import classnames from "classnames/bind";
import { HeaderProps, HeaderVariant } from "./interfaces";
import HeaderLogo from "./HeaderLogo";
import { Option } from "../Dropdown";
import {
  Button,
  MenuList,
  Hamburger,
  SearchTripsForm,
} from "@/app/_components";
import styles from "./Header.module.scss";

const cx = classnames.bind(styles);

const Header: FC<HeaderProps> = ({
  data,
  frontPageID,
  translatedPages,
  variant,
  defaultVariantRoutes,
}) => {
  const pathname = usePathname();

  // Check if current path should use default variant
  const isDefaultVariantRoute =
    defaultVariantRoutes?.includes(pathname) ?? false;

  const {
    buttonItems,
    dropdownItems,
    menuDataPrimary,
    menuDataSecondary,
    logos,
  } = data;

  // If variant prop is provided, use it
  // Otherwise, use "default" only for routes in defaultVariantRoutes, "scrolled" for all others
  const initialVariant: HeaderVariant =
    variant ?? (isDefaultVariantRoute ? "default" : "scrolled");

  const [currentVariant, setCurrentVariant] =
    useState<HeaderVariant>(initialVariant);
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleDropdownToggle = (option: Option) => {
    setSelectedOption(option);
    console.log(`Opción seleccionada:`, option);
  };

  const dropdownMapping = dropdownItems.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, (typeof dropdownItems)[0]>);

  const buttonMapping = buttonItems.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {} as Record<string, (typeof buttonItems)[0]>);

  const toggleMenu = () => {
    setHamburgerIsActive(!hamburgerIsActive);
  };

  useEffect(() => {
    // If variant prop is provided or we're not on a default variant route,
    // don't set up scroll listener - maintain either the forced variant or scrolled state
    if (variant || !isDefaultVariantRoute) {
      setCurrentVariant(variant ?? "scrolled");
      return;
    }

    // Only add scroll behavior for default variant routes
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setCurrentVariant("scrolled");
      } else {
        setCurrentVariant("default");
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize based on current scroll position
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [variant, isDefaultVariantRoute, pathname]);

  const closeMenu = () => {
    setHamburgerIsActive(false);
  };

  return (
    <header
      className={cx("header", {
        default: currentVariant === "default",
        light: currentVariant === "scrolled",
        open: hamburgerIsActive,
      })}
    >
      <div className={cx("light-overlay")}></div>

      <div className={cx("header__inner-wrapper")}>
        <div className={cx("header__hamburger")} onClick={toggleMenu}>
          <Hamburger dark={false} active={hamburgerIsActive} />
        </div>

        <div className={cx("header__logo")}>
          <HeaderLogo
            data={logos}
            closeMenu={closeMenu}
            variant={currentVariant}
          />
        </div>

        {currentVariant !== "scrolled" && (
          <div className={cx("header__menu--primary")}>
            <MenuList
              frontPageID={1}
              // frontPageID={frontPageID}
              data={menuDataPrimary}
              onClick={closeMenu}
            />
          </div>
        )}

        <div
          className={cx("header__menu--primary", {
            "header__item--visible": currentVariant === "scrolled",
            "header__item--hidden": currentVariant !== "scrolled",
          })}
        >
          {currentVariant === "scrolled" && (
            <MenuList
              frontPageID={1}
              // frontPageID={frontPageID}
              data={menuDataPrimary}
              onClick={closeMenu}
            />
          )}
        </div>

        <div className={cx("header__menu--secondary")}>
          {currentVariant !== "scrolled" && (
            <MenuList
              frontPageID={1}
              // frontPageID={frontPageID}
              data={menuDataSecondary}
              onClick={closeMenu}
            />
          )}

          <div
            className={cx("header__search-form", {
              "header__item--visible": currentVariant === "scrolled",
              "header__item--hidden": currentVariant !== "scrolled",
            })}
          >
            {currentVariant === "scrolled" && (
              <SearchTripsForm
                size="small"
                onSubmit={function (values: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
          </div>

          {currentVariant !== "scrolled" && buttonMapping["sign-in"] && (
            <Button
              key={buttonMapping["sign-in"].id}
              icon="user"
              className={cx("header__sign-in-button")}
            >
              Sign in
            </Button>
          )}
        </div>

        <div
          className={cx("header__sign-in-button-container", {
            "header__item--visible": currentVariant === "scrolled",
            "header__item--hidden": currentVariant !== "scrolled",
          })}
        >
          {currentVariant === "scrolled" && buttonMapping["sign-in"] && (
            <Button
              key={buttonMapping["sign-in"].id}
              icon="user"
              className={cx("header__sign-in-button")}
            >
              Sign in
            </Button>
          )}
        </div>
      </div>

      <div className={cx("mobile")}>
        <div className={cx("mobile__header")}>
          <div className={cx("mobile__hamburger")} onClick={toggleMenu}>
            <Hamburger dark={false} active={hamburgerIsActive} />
          </div>

          <div className={cx("mobile__logo-container")}>
            <div className={cx("mobile__logo")}>
              <HeaderLogo
                data={logos}
                closeMenu={closeMenu}
                variant="default"
              />
            </div>
          </div>

          {buttonMapping["sign-in"] && (
            <Button
              key={buttonMapping["sign-in"].id}
              icon="user"
              className={cx("header__sign-in-button")}
            >
              Sign in
            </Button>
          )}
        </div>

        <div className={cx("mobile__menu")}>
          <MenuList
            data={[...menuDataPrimary, ...menuDataSecondary]}
            onClick={closeMenu}
            // frontPageID={frontPageID}
            frontPageID={1}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
