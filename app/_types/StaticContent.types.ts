import { ButtonProps as ButtonItem } from "@/app/_components/Button";
import { DropdownProps as DropdownItem } from "@/app/_components/Dropdown";
import { IconName } from "../_components/CustomIcon";
import { MenuItem } from "@/app/_components/MenuList";
import { Logos } from "@/app/_components/Header/HeaderLogo";
import { VideoPlayerProps } from "../_components/VideoPlayer";

interface Data {
  buttonItems: ButtonItemWithId[];
  dropdownItems: DropdownItemWithId[];
  menuDataPrimary: MenuItem[];
  menuDataSecondary: MenuItem[];
  logos: Logos;
}

export type HeaderVariant = "default" | "light";

export interface HeaderProps {
  frontPageID: string;
  data: Data;
  translatedPages?: {
    es?: string;
    en?: string;
  };
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  variant?: HeaderVariant;
  defaultVariantRoutes?: string[];
}

export type ButtonItemWithId = ButtonItem & { id: string };
export type DropdownItemWithId = DropdownItem & { id: string };
// interface DropdownItemWithId extends DropdownItem {
//   id: string;
// }

interface Icon {
  icon: string;
  alt: string;
  width: number;
  height: number;
}

interface Logo {
  url: string;
  alt: string;
  width: number;
  height: number;
}

interface SocialLink {
  site: string;
  icon: IconName;
  link: string;
}

interface FooterOptions {
  copyright_name: string;
  copyright_french: string;
  logo: Logo;
  social_links: SocialLink[];
}

export interface FooterProps {
  light?: boolean;
  menuDataPrimary: MenuItem[]
  menuDataSecondary: MenuItem[];
  frontPageID: string;
  options: FooterOptions;
}
// app/_types/LayoutVariantsGrid.types.ts
export type VideoOptions = {
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean;
};

export type BaseGridItem = {
  id?: string | number;
};

export type VideoGridItem = BaseGridItem & {
  type: "video";
  src: string;
  title?: string;
  options?: VideoOptions;
  placeholderImage?: string;
};

export type ImageGridItem = BaseGridItem & {
  type: "image";
  src: string;
  alt?: string;
};

export type TextGridItem = BaseGridItem & {
  type: "text";
  title: string;
  paragraph: string;
};

export type LayoutVariantsGridItem =
  | VideoGridItem
  | ImageGridItem
  | TextGridItem;

export type LayoutVariant = "variant1" | "variant2" | "variant3";

export interface LayoutVariantsGridProps {
  items: LayoutVariantsGridItem[];
  variant: LayoutVariant;
}
