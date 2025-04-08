import { HeaderProps, FooterProps, LayoutVariantsGridItem } from "@/app/_types";

export const headerData: HeaderProps = {
  frontPageID: "38",
  data: {
    menuDataPrimary: [
      {
        menu_item_id: 738,
        menu_item_parent: 0,
        title: "Travel Guides",
        target: "_self",
        url: "/trips",
        iconSource: "lucide",
        // lucideIcon: "map", // El icono de mapa tiene más sentido para guías de viaje
      },
      {
        menu_item_id: 737,
        menu_item_parent: 0,
        title: "Explorer's Blog",
        target: "_self",
        url: "/blog",
      },

      // Submenu items for "Destinations"
    ],
    menuDataSecondary: [
      {
        menu_item_id: 742,
        menu_item_parent: 0,
        title: "Why Travel ?",
        target: "_self",
        url: "/why-travel",
        iconSource: "lucide",
        lucideIcon: "compass",
        // lucideIcon: "map",
        // icon: "clock",
      },
    ],
    dropdownItems: [
      {
        id: "lenguages",
        options: [
          { label: "EN", value: "EN" },
          { label: "ES", value: "ES" },
        ],
        selected: { label: "EN", value: "EN" },
      },
    ],
    buttonItems: [
      {
        id: "sign-in",
        children: "SIGN IN",
      },
    ],
    logos: {
      defaultLogo: {
        url: "/images/trvlr-logo.png",
        href: "/",
        alt: "logo",
        width: 124,
        height: 44,
      },
      light: {
        url: "/images/trvlr-logo.png",
        href: "/",
        alt: "logo",
        width: 124,
        height: 44,
      },
      lightMobile: {
        url: "/images/trvlr-logo.png",
        href: "/",
        alt: "logo",
        width: 124,
        height: 44,
      },
      dark: {
        url: "/images/trvlr-logo.png",
        href: "//",
        alt: "logo",
        width: 124,
        height: 44,
      },
    },
  },
};

export const footerData: FooterProps = {
  light: true,

  menuDataPrimary: [
    {
      menu_item_id: 7,
      menu_item_parent: 0,
      title: "Travel Guides",
      target: "_self",
      url: "/trips",
      iconSource: "lucide",
      // lucideIcon: "map", // El icono de mapa tiene más sentido para guías de viaje
    },
    {
      menu_item_id: 8,
      menu_item_parent: 0,
      title: "Explorer's Blog",
      target: "_self",
      url: "/blog",
    },

    // Submenu items for "Destinations"
  ],
  menuDataSecondary: [
    {
      menu_item_id: 9,
      menu_item_parent: 0,
      title: "Why Travel ?",
      target: "_self",
      url: "/why-travel",
      iconSource: "lucide",
      lucideIcon: "compass",
      // lucideIcon: "map",
      // icon: "clock",
    },
  ],
  frontPageID: "12345",
  options: {
    copyright_name: "Travlr",
    copyright_french: "Travlr", // Alternative language option
    logo: {
      url: "/images/trvlr-logo.png",
      alt: "Travlr Logo",
      width: 124,
      height: 44,
    },
    social_links: [
      {
        site: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/travrl",
      },
      {
        site: "Youtube",
        icon: "youtube",
        link: "https://www.tiktok.com/@travrl",
      },
      {
        site: "Tiktok",
        icon: "tiktok",
        link: "https://www.twitter.com/travrl",
      },
    ],
  },
};

export const layoutItems: LayoutVariantsGridItem[] = [
  {
    type: "image",
    src: "/images/amusement-park-night.jpg",
    alt: "Amusement park illuminated at night",
  },
  {
    type: "text",
    title: "The Magic of Cities After Dark",
    paragraph:
      "When the sun sets, cities transform into enchanting wonderlands of lights and possibilities.",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2023/08/02/174305-851138233_tiny.mp4",
    placeholderImage: "/images/city-at-night-placeholder.png",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531402581960-f0a304148a1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGphenolMjBiYXJ8ZW58MHwwfDB8fHww",
    alt: "Jazz bar with warm lighting and atmospheric ambiance",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2019/02/01/21116-315137080_tiny.mp4",
    placeholderImage: "/images/city-at-night-placeholder-2.png",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1550487221-3750d2cb0b3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    alt: "Urban skyline illuminated in the night with vibrant city lights",
  },
];

export const heroSlides = [
  {
    video_url: "https://cdn.pixabay.com/video/2024/10/18/236893_large.mp4",
    image: {
      url: "/images/artic-ship.png",
      alt: "Artic Ship",
    },
  },
];

export const blogHeroSlide = [
  {
    image: {
      url: "/images/traveler.jpg",
      alt: "Jungle Backpacker",
    },
  },
];
