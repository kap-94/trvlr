"use client";

import { CardHOCProps } from "./interfaces";

import {
  Card as CardHOC,
  CardDescription,
  CardImage,
  CardTitle,
  CardFooter,
  CardHeader,
  CardBody,
} from "./components";

export {
  CardDescription,
  CardBody,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "./components";

export const Card: CardHOCProps = Object.assign(CardHOC, {
  Description: CardDescription,
  Body: CardBody,
  Footer: CardFooter,
  Header: CardHeader,
  Image: CardImage,
  Title: CardTitle,
});

export default Card;
