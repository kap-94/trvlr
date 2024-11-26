"use client";

import React, { useState, useRef, useEffect, FC, useMemo } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "react-intersection-observer";
import classnames from "classnames/bind";
import HeaderLogo from "./HeaderLogo";
import { HeaderProps, HeaderVariant } from "@/app/_types";
import { Button, MenuList, Hamburger, SearchForm } from "@/app/_components";
import styles from "./Header.module.scss";

const cx = classnames.bind(styles);

// Constants
const INTERSECTION_THRESHOLD = 0.8;
const INTERSECTION_MARGIN = "-56px 0px 0px 0px";

const useHeaderObserver = (
  isDefaultVariantRoute: boolean,
  setCurrentVariant: (variant: HeaderVariant) => void
) => {
  const observerInitialized = useRef(false);

  const { ref, inView, entry } = useInView({
    threshold: INTERSECTION_THRESHOLD,
    rootMargin: INTERSECTION_MARGIN,
    fallbackInView: false,
    skip: !isDefaultVariantRoute,
  });

  useEffect(() => {
    observerInitialized.current = false;

    if (!isDefaultVariantRoute) {
      setCurrentVariant("light");
      return;
    }

    setCurrentVariant("default");

    const timer = setTimeout(() => {
      const searchCardForm = document.getElementById("search-card-form");
      if (searchCardForm) {
        ref(searchCardForm);
        observerInitialized.current = true;
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [isDefaultVariantRoute, ref, setCurrentVariant]);

  useEffect(() => {
    if (!isDefaultVariantRoute || !observerInitialized.current || !entry)
      return;

    setCurrentVariant(inView ? "default" : "light");
  }, [inView, isDefaultVariantRoute, entry, setCurrentVariant]);

  return { inView, entry };
};

const HeaderClient: FC<HeaderProps> = ({
  data,
  frontPageID,
  translatedPages,
  variant,
  defaultVariantRoutes,
}) => {
  const pathname = usePathname();
  const isDefaultVariantRoute =
    defaultVariantRoutes?.includes(pathname) ?? false;

  const {
    buttonItems,
    dropdownItems,
    menuDataPrimary,
    menuDataSecondary,
    logos,
  } = data;

  const [currentVariant, setCurrentVariant] = useState<HeaderVariant>(
    isDefaultVariantRoute ? "default" : "light"
  );
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);

  useEffect(() => {
    if (isDefaultVariantRoute) {
      setCurrentVariant("default");
    } else {
      setCurrentVariant("light");
    }
  }, [isDefaultVariantRoute]);

  useHeaderObserver(isDefaultVariantRoute, setCurrentVariant);

  const { buttonMapping, dropdownMapping } = useMemo(
    () => ({
      buttonMapping: buttonItems.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {} as Record<string, (typeof buttonItems)[0]>),
      dropdownMapping: dropdownItems.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
      }, {} as Record<string, (typeof dropdownItems)[0]>),
    }),
    [buttonItems, dropdownItems]
  );

  const toggleMenu = () => {
    setHamburgerIsActive((prev) => !prev);
  };

  const closeMenu = () => {
    setHamburgerIsActive(false);
  };

  const headerClasses = useMemo(
    () =>
      cx("header", {
        default: currentVariant === "default",
        light: currentVariant === "light",
        open: hamburgerIsActive,
      }),
    [currentVariant, hamburgerIsActive]
  );

  const signInButton = useMemo(
    () =>
      buttonMapping["sign-in"] && (
        <Button
          key={buttonMapping["sign-in"].id}
          icon={{ source: "lucide", name: "user" }}
          className={cx("header__sign-in-button")}
          aria-label="Sign in"
        >
          Sign in
        </Button>
      ),
    [buttonMapping]
  );

  return (
    <header className={headerClasses} role="banner">
      <div className={cx("light-overlay")} />

      <div className={cx("header__inner-wrapper")}>
        <div
          className={cx("header__hamburger")}
          onClick={toggleMenu}
          role="button"
          aria-expanded={hamburgerIsActive}
          aria-controls="mobile-menu"
        >
          <Hamburger dark={false} active={hamburgerIsActive} />
        </div>

        <div className={cx("header__logo")}>
          <HeaderLogo
            data={logos}
            closeMenu={closeMenu}
            variant={currentVariant}
          />
        </div>

        <div
          className={cx("header__menu--primary", {
            "header__item--visible": currentVariant !== "light",
            "header__item--hidden": currentVariant === "light",
            "header__menu--hidden": currentVariant === "light",
          })}
        >
          <MenuList
            frontPageID={1}
            data={menuDataPrimary}
            onClick={closeMenu}
          />
        </div>

        <div
          className={cx("header__menu--primary", {
            "header__item--visible": currentVariant === "light",
            "header__item--hidden": currentVariant !== "light",
            "header__menu--hidden": currentVariant !== "light",
          })}
        >
          <MenuList
            frontPageID={1}
            data={menuDataPrimary}
            onClick={closeMenu}
          />
        </div>

        <div className={cx("header__menu--secondary")}>
          {currentVariant !== "light" && (
            <MenuList
              frontPageID={1}
              data={menuDataSecondary}
              onClick={closeMenu}
            />
          )}

          <div
            className={cx("header__search-form", {
              "header__item--visible": currentVariant === "light",
              "header__item--hidden": currentVariant !== "light",
            })}
          >
            {currentVariant === "light" && (
              <SearchForm
                size="small"
                inputPlaceholder="Where do you want to go?"
                onSubmit={(values: any) => {
                  // console.log("Search submitted:", values);
                }}
              />
            )}
          </div>

          {currentVariant !== "light" && signInButton}
        </div>

        <div
          className={cx("header__sign-in-button-container", {
            "header__item--visible": currentVariant === "light",
            "header__item--hidden": currentVariant !== "light",
          })}
        >
          {currentVariant === "light" && signInButton}
        </div>
      </div>

      <div
        className={cx("mobile", {
          "mobile--visible": hamburgerIsActive,
        })}
        id="mobile-menu"
        aria-hidden={!hamburgerIsActive}
      >
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

          {signInButton}
        </div>

        <div className={cx("mobile__menu")}>
          <MenuList
            data={[...menuDataPrimary, ...menuDataSecondary]}
            onClick={closeMenu}
            frontPageID={1}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderClient;
