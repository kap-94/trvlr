import { Image } from "@/app/_types";

export interface Author {
  id: number;
  name: string;
  slug: string;
  avatar?: Image;
  bio?: string;
}
