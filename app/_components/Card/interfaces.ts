import { FC } from "react";
import { CardProps } from "./components/Card";
import { CardBodyProps } from "./components/CardBody";
import { CardDescriptionProps } from "./components/CardDescription";
import { CardFooterProps } from "./components/CardFooter";
import { CardHeaderProps } from "./components/CardHeader";
import { CardImageProps } from "./components/CardImage";
import { CardTitleProps } from "./components/CardTitle";

export type travelCategory =
  | "adventure"
  | "cultural"
  | "leisure"
  | "business"
  | "educational"
  | "wellness"
  | "culinary"
  | "nature"
  | "waterSports"
  | "amusementParks"
  | "sailing"
  | "shopping"
  | "nightlife";

export interface CardData {
  id: string;
  travelCategory: travelCategory;
  title: string;
  subtitle?: string;
  description?: string;
  image?: { src: string; alt: string };
}

export interface CardDataContextProps {
  data: CardData;
}

export interface CardHOCProps extends FC<CardProps> {
  Body: FC<CardBodyProps>;
  Description: FC<CardDescriptionProps>;
  Footer: FC<CardFooterProps>;
  Header: FC<CardHeaderProps>;
  Image: FC<CardImageProps>;
  Title: FC<CardTitleProps>;
}
