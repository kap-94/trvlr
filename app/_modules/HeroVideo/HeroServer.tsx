// components/Hero/HeroServer.tsx
import { ReactNode } from "react";
import { HeroClient } from "./HeroClient";

export interface Slide {
  video_url?: string;
  image: {
    url: string;
    alt?: string;
  };
}

interface Props {
  slidesData: Slide[];
  children?: ReactNode;
  contentPosition?:
    | "center"
    | "bottom-left"
    | "bottom-right"
    | "top-left"
    | "top-right"
    | "top-center"
    | "bottom-center";
}

export function HeroServer({
  slidesData,
  children,
  contentPosition = "center",
}: Props) {
  return (
    <HeroClient slidesData={slidesData} contentPosition={contentPosition}>
      {children}
    </HeroClient>
  );
}
