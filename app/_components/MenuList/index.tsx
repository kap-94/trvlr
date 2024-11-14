"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import classnames from "classnames/bind";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useScrollActiveSection from "@/app/_hooks/useScrollActiveSection";
import Icon, { IconName } from "@/app/_components/CustomIcon";
import { Typography } from "@/app/_components";
import { getPath } from "@/app/_utils";
import styles from "./MenuList.module.scss";

import {
  Compass,
  Map,
  Home,
  Mountain,
  Globe,
  Camera,
  Users,
  Mail,
  ChevronDown,
  Heart,
  Navigation,
} from "lucide-react";

gsap.registerPlugin(ScrollToPlugin);

export interface MenuItem {
  menu_item_id: number;
  menu_item_parent: number;
  title: string;
  url: string;
  target?: string;
  icon?: IconName;
  lucideIcon?: string;
  iconSource?: "custom" | "lucide";
  showDropdownIcon?: boolean;
  isSectionLink?: boolean;
}

interface MenuListProps {
  data: MenuItem[];
  frontPageID: number;
  onClick?: () => void;
  useActiveStyle?: boolean;
  orientation?: "horizontal" | "vertical";
  gap?: number;
  showBorders?: boolean;
}

const LUCIDE_ICONS: { [key: string]: LucideIcon } = {
  compass: Compass,
  map: Map,
  home: Home,
  mountain: Mountain,
  globe: Globe,
  camera: Camera,
  users: Users,
  mail: Mail,
  chevronDown: ChevronDown,
  heart: Heart,
  navigation: Navigation,
};

const cx = classnames.bind(styles);

const MenuList: React.FC<MenuListProps> = ({
  data,
  frontPageID,
  onClick,
  useActiveStyle = true,
  orientation = "horizontal",
  gap = 24,
  showBorders = false,
}) => {
  if (!data) return null;

  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLUListElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuItemRefs = useRef<Array<HTMLLIElement | null>>([]);

  const topMenuItems = data.filter((item) => item.menu_item_parent === 0);
  const submenuItems = data.filter((item) => item.menu_item_parent !== 0);
  const sectionIds = data
    .filter((item) => item.url.startsWith("#"))
    .map((item) => item.url.replace("#", ""));

  const activeSectionId = useScrollActiveSection(sectionIds);

  const menuStyle = {
    "--menu-gap": `${gap}px`,
  } as React.CSSProperties;

  const renderIcon = (menuItem: MenuItem) => {
    if (menuItem.iconSource === "lucide" && menuItem.lucideIcon) {
      const LucideIcon = LUCIDE_ICONS[menuItem.lucideIcon];
      return LucideIcon ? (
        <LucideIcon className={cx("menu__icon")} size={20} color="white" />
      ) : null;
    } else if (menuItem.icon) {
      return (
        <Icon
          icon={menuItem.icon}
          className={cx("menu__icon")}
          width={20}
          height={20}
          color="white"
        />
      );
    }
    return null;
  };
  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    hasSubmenu: boolean,
    menuItemId: number
  ) => {
    if (isMobile && hasSubmenu) {
      e.preventDefault();
      setActiveIndex(activeIndex === menuItemId ? null : menuItemId);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname !== "/") {
        router.push(`/${href}`);
      } else {
        handleScrollToSection(href);
      }
      setActiveIndex(menuItemId);
      if (onClick) {
        onClick();
      }
    } else {
      if (onClick) {
        onClick();
      }
    }
  };

  const handleScrollToSection = useCallback((href: string) => {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 120;
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: targetElement,
          offsetY: offset,
        },
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1360);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setActiveIndex(null);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (activeSectionId) {
      const activeItem = data.find(
        (item) => item.url === `#${activeSectionId}`
      );
      if (activeItem) {
        setActiveIndex(activeItem.menu_item_id);
      } else {
        setActiveIndex(null);
      }
    } else {
      setActiveIndex(null);
    }
  }, [activeSectionId, data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (pathname === "/" && window.location.hash) {
        const hash = window.location.hash;
        if (hash) {
          handleScrollToSection(hash);
        }
      }
    }
  }, [pathname, handleScrollToSection]);

  useEffect(() => {
    if (menuRef.current) {
      if (useActiveStyle && activeIndex !== null && menuItemRefs.current) {
        const activeItemIndex = topMenuItems.findIndex(
          (item) => item.menu_item_id === activeIndex
        );
        const activeItem = menuItemRefs.current[activeItemIndex];
        if (activeItem) {
          const menuElement = menuRef.current;
          const itemRect = activeItem.getBoundingClientRect();
          const menuRect = menuElement.getBoundingClientRect();

          const left = itemRect.left - menuRect.left;
          const width = itemRect.width;

          menuElement.style.setProperty("--indicator-left", `${left}px`);
          menuElement.style.setProperty("--indicator-width", `${width}px`);
        }
      } else {
        menuRef.current.style.setProperty("--indicator-width", `0px`);
      }
    }
  }, [useActiveStyle, activeIndex, topMenuItems]);

  const menu = topMenuItems.map((menuItem, index) => {
    const path = getPath(menuItem, frontPageID);
    const childSubmenuItems = submenuItems.filter(
      (item) => item.menu_item_parent === menuItem.menu_item_id
    );

    const hasSubmenu = childSubmenuItems.length > 0;
    const isActive = activeIndex === menuItem.menu_item_id;

    return (
      <li
        key={menuItem.menu_item_id}
        ref={(el) => {
          menuItemRefs.current[index] = el;
        }}
        className={cx("menu__item", {
          "menu__item--active": useActiveStyle && isActive,
          "menu__item--border":
            showBorders && index !== topMenuItems.length - 1,
        })}
      >
        <Link
          href={path}
          target={menuItem.target}
          className={cx("menu__link")}
          onClick={(e) =>
            handleMenuClick(e, path, hasSubmenu, menuItem.menu_item_id)
          }
        >
          {renderIcon(menuItem)}
          <Typography variant="p3" textTransform="uppercase">
            {menuItem.title}
          </Typography>
          {hasSubmenu && menuItem.showDropdownIcon !== false && (
            <ChevronDown
              size={14}
              className={cx("dropdown__icon")}
              color="white"
            />
          )}
        </Link>

        {hasSubmenu && (
          <ul
            className={cx("submenu", {
              "submenu--open": isActive,
              "submenu--vertical": orientation === "vertical",
            })}
          >
            {childSubmenuItems.map((submenuItem) => {
              const subpath = getPath(submenuItem, frontPageID);
              return (
                <li
                  key={submenuItem.menu_item_id}
                  className={cx("submenu__item")}
                >
                  <Link
                    href={subpath}
                    className={cx("submenu__link")}
                    onClick={onClick}
                    target={submenuItem.target}
                  >
                    {renderIcon(submenuItem)}
                    <Typography variant="p3" textTransform="uppercase">
                      {submenuItem.title}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </li>
    );
  });

  return (
    <ul
      ref={menuRef}
      className={cx("menu", {
        "menu--vertical": orientation === "vertical",
      })}
      style={menuStyle}
    >
      {menu}
    </ul>
  );
};

export default MenuList;
