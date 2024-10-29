"use client";
import { useState, useEffect, FC } from "react";
import classnames from "classnames/bind";
// import { convertLink, fixInvalidLink } from "@/app/utils";
import { HeaderProps } from "./interfaces";
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

const Header: FC<HeaderProps> = ({ data, frontPageID, translatedPages }) => {
  // const router = useRouter();
  // const selectedLanguage = router.locale;
  const selectedLanguage = "es";
  // let translatedUrlFr = fixInvalidLink(`${router.basePath}/fr`);
  // let translatedUrlEn = fixInvalidLink(`${router.basePath}/`);

  // if (translatedPages) {
  //   if (translatedPages.fr) {
  //     translatedUrlFr = convertLink(translatedPages.fr);
  //   }
  //   if (translatedPages.en) {
  //     translatedUrlEn = convertLink(translatedPages.en);
  //   }
  // }
  type HeaderVariant = "default" | "scrolled";

  const {
    buttonItems,
    dropdownItems,
    menuDataPrimary,
    menuDataSecondary,
    logos,
  } = data;

  const [currentVariant, setCurrentVariant] =
    useState<HeaderVariant>("default");
  const [hamburgerIsActive, setHamburgerIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  // Función para manejar la selección de la opción
  const handleDropdownToggle = (option: Option) => {
    setSelectedOption(option); // Actualiza el estado con la opción seleccionada
    console.log(`Opción seleccionada:`, option);
  };

  // Crea un objeto de mapeo para dropdownItems
  const dropdownMapping = dropdownItems.reduce((acc, item) => {
    acc[item.id] = item; // Mapeamos cada item por su id
    return acc;
  }, {} as Record<string, (typeof dropdownItems)[0]>);

  // Crea un objeto de mapeo para buttonItems
  const buttonMapping = buttonItems.reduce((acc, item) => {
    acc[item.id] = item; // Mapeamos cada item por su id
    return acc;
  }, {} as Record<string, (typeof buttonItems)[0]>);

  // const closeDropdowns = () => {
  //   setDropdownStates({ bookNow: false, int: false, giftCards: false });
  // };

  const toggleMenu = () => {
    setHamburgerIsActive(!hamburgerIsActive);
    // closeDropdowns();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setCurrentVariant("scrolled"); // Cambia a 'scrolled' cuando hay scroll
      } else {
        setCurrentVariant("default"); // Cambia a 'default' cuando no hay scroll
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        document.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const closeMenu = () => {
    setHamburgerIsActive(false);
  };

  return (
    <header
      key={"router.asPath"}
      className={cx("header", {
        default: currentVariant === "default",
        light: currentVariant === "scrolled",
        open: hamburgerIsActive,
      })}
    >
      <div className={cx("light-overlay")}></div>

      <div className={cx("header__inner-wrapper")}>
        <div className={cx("header__hamburger")} onClick={toggleMenu}>
          <Hamburger
            // dark={menuIsLight || headerDark}
            dark={false}
            active={hamburgerIsActive}
          />
        </div>

        {/* <div className={cx("header__nav")}> */}
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
              // frontPageID={frontPageID}
              frontPageID={1}
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
              // frontPageID={frontPageID}
              frontPageID={1}
              // data={menuDataPrimary.map(({ icon, ...rest }) => rest)}
              data={menuDataPrimary}
              onClick={closeMenu}
            />
          )}
        </div>

        <div className={cx("header__menu--secondary")}>
          {currentVariant !== "scrolled" && (
            <MenuList
              frontPageID={1}
              data={menuDataSecondary}
              onClick={closeMenu}
              // frontPageID={frontPageID}
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
              {/* {buttonMapping["sign-in"].children} */}
            </Button>
          )}
        </div>
        {/* </div> */}

        <div
          className={cx("header__sign-in-button-container", {
            "header__item--visible": currentVariant === "scrolled",
            "header__item--hidden": currentVariant !== "scrolled",
          })}
        >
          {currentVariant === "scrolled" && buttonMapping["sign-in"] && (
            <Button
              // size="small"
              key={buttonMapping["sign-in"].id}
              icon="user"
              className={cx("header__sign-in-button")}
            >
              {/* {buttonMapping["sign-in"].children} */}
              Sign in
              {/* {currentVariant !== "scrolled" && buttonMapping["sign-in"].children} */}
            </Button>
          )}
        </div>
      </div>

      <div className={cx("mobile")}>
        <div className={cx("mobile__header")}>
          <div className={cx("mobile__hamburger")} onClick={toggleMenu}>
            <Hamburger
              // dark={menuIsLight || headerDark}
              dark={false}
              active={hamburgerIsActive}
            />
          </div>

          <div className={cx("mobile__logo-container")}>
            <div className={cx("mobile__logo")}>
              <HeaderLogo
                data={logos}
                closeMenu={closeMenu}
                variant={"default"}
              />
            </div>
          </div>

          {buttonMapping["sign-in"] && (
            <Button
              key={buttonMapping["sign-in"].id}
              icon="user"
              className={cx("header__sign-in-button")}
            >
              {/* {buttonMapping["sign-in"].children} */}
              Sign in
            </Button>
          )}
        </div>

        <div className={cx("mobile__menu")}>
          <MenuList
            data={[...data.menuDataPrimary, ...data.menuDataSecondary]}
            onClick={closeMenu}
            // frontPageID={frontPageID}
            frontPageID={1}
          />
        </div>
      </div>

      {/* <PopUpNotification props={props} /> */}
    </header>
  );
};

export default Header;
