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
        lucideIcon: "map", // El icono de mapa tiene más sentido para guías de viaje
      },
      {
        menu_item_id: 737,
        menu_item_parent: 0,
        title: "Explorer's Blog",
        target: "_self",
        url: "/blog",
        iconSource: "lucide",
        lucideIcon: "compass", // Compass representa mejor la exploración y el descubrimiento
      },

      // Submenu items for "Destinations"
    ],
    menuDataSecondary: [
      {
        menu_item_id: 742,
        menu_item_parent: 0,
        title: "Why Travel?",
        target: "#",
        url: "#",
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
        url: "/logo.svg",
        href: "/",
        alt: "logo",
        width: 64,
        height: 64,
      },
      light: {
        url: "/logo.svg",
        href: "/",
        alt: "logo",
        width: 64,
        height: 64,
      },
      lightMobile: {
        url: "/logo.svg",
        href: "/",
        alt: "logo",
        height: 46,
        width: 46,
      },
      dark: {
        url: "/logo.svg",
        href: "//",
        alt: "logo",
        height: 46,
        width: 46,
      },
    },
  },
};

export const footerData: FooterProps = {
  light: true,
  footerMenuData: [
    {
      menu_item_id: 38,
      menu_item_parent: 0,
      title: "Travel Guides",
      target: "_self",
      url: "/trips",
      showDropdownIcon: false,
    },
    // {
    //   menu_item_id: 737,
    //   menu_item_parent: 0,
    //   title: "Our Journey",
    //   target: "/blog",
    //   url: "/blog",
    //   icon: "boat",
    // },
    {
      menu_item_id: 37,
      menu_item_parent: 0,
      // title: "Blog & Beyond",
      title: "Explorer's Blog",
      target: "_self",
      url: "/blog",
    },
  ],
  frontPageID: "12345",
  options: {
    copyright_name: "Kotahi Travel",
    copyright_french: "Kotahi Voyage", // Alternative language option
    logo: {
      url: "/logo.svg",
      alt: "Kotahi Travel Logo",
      width: 160,
      height: 80,
    },
    social_links: [
      {
        site: "Instagram",
        icon: "instagram",
        link: "https://www.instagram.com/KotahiTravel",
      },
      {
        site: "Youtube",
        icon: "youtube",
        link: "https://www.tiktok.com/@KotahiTravel",
      },
      {
        site: "Tiktok",
        icon: "tiktok",
        link: "https://www.twitter.com/KotahiTravel",
      },
    ],
  },
};

export const layoutItems: LayoutVariantsGridItem[] = [
  {
    type: "image",
    src: "https://plus.unsplash.com/premium_photo-1701769001159-ab615ecee55a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFtdXNlbWVudCUyMHBhcmslMjBuaWdodHxlbnwwfDB8MHx8fDA%3D",
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
    placeholderImage: "/city-at-night-placeholder.png",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531402581960-f0a304148a1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGphenolMjBiYXJ8ZW58MHwwfDB8fHww",
    alt: "Jazz bar with warm lighting and atmospheric ambiance",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2019/02/01/21116-315137080_tiny.mp4",
    placeholderImage: "/city-at-night-placeholder-2.png",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1550487221-3750d2cb0b3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    alt: "Urban skyline illuminated in the night with vibrant city lights",
  },
];

export const heroSlides = [
  {
    video_url:
      // "https://cdn.pixabay.com/video/2020/01/25/31569-387675206.mp4",
      // "https://cdn.pixabay.com/video/2017/08/02/11087-228113789_large.mp4",
      // "https://cdn.pixabay.com/video/2023/08/12/175657-854054123_large.mp4",
      "https://cdn.pixabay.com/video/2024/10/18/236893_large.mp4",
    image: {
      url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=3344&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Travel Image",
    },
  },
];

export const blogHeroSlide = [
  {
    image: {
      url: "https://images.unsplash.com/photo-1648912024151-7bdb206b0547?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Travel Image",
    },
  },
];
