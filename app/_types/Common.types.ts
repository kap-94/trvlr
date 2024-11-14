export interface Link {
  url: string;
  title: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

export interface Image {
  src: string;
  alt: string;
  caption?: string;
  href?: string;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  src: string;
  duration?: number;
  thumbnail?: Image;
  category?: string;
  resolution?: string;
}
