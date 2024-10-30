// blogData.ts

import { FooterProps } from "../_components/Footer";
import { HeaderProps } from "../_components/Header/interfaces";
import { LayoutVariantsGridItem } from "../_components/LayoutVariantsGrid";
import { TripCardData } from "../_components/TripCard";

export interface BlogPost {
  id: number;
  type: "featured" | "list";
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  link: string;
  eyebrow?: string; // Opcional, solo para FeaturedCard
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    type: "featured",
    title: "Guías de Destinos",
    subtitle: "Explora lugares fascinantes",
    description:
      "Mapas y detalles históricos de destinos populares para planificar tu próximo viaje.",
    imageSrc:
      // "https://plus.unsplash.com/premium_photo-1722859220312-0f4db78d3087?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzdGlub3N8ZW58MHwwfDB8fHww",
      // "https://plus.unsplash.com/premium_photo-1683141079772-acf46d5e2ebb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmxkJTIwdHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D",
      // "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmxkJTIwdHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D",
      // "https://plus.unsplash.com/premium_photo-1679822641052-5294e03cecd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmxkJTIwdHJhdmVsJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D",
      // "https://plus.unsplash.com/premium_photo-1661304658033-31774515dd9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvcmxkJTIwdHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1592576220873-300e4ca593e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmxkJTIwdHJhdmVsJTIwcGVvcGxlfGVufDB8MHwwfHx8MA%3D%3D",
    link: "/blog/1",
    eyebrow: "Destino Destacado",
  },
  {
    id: 2,
    type: "featured",
    title: "Tips de Empaque",
    subtitle: "Empaca de manera inteligente",
    description:
      "Consejos prácticos para organizar tu maleta eficientemente según el tipo de viaje.",
    imageSrc:
      "https://images.unsplash.com/photo-1485809052957-5113b0ff51af?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRyYXZlbCUyMGJhY2twYWNrfGVufDB8MHwwfHx8MA%3D%3D",
    link: "/blog/2",
    eyebrow: "Consejos Útiles",
  },
  {
    id: 3,
    type: "list",
    title: "Fotografía de Viajes",
    subtitle: "Captura momentos únicos",
    description:
      "Guías sobre técnicas fotográficas y recomendaciones de equipos para viajeros.",
    imageSrc:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8MHwwfHx8MA%3D%3D",
    link: "/blog/3",
  },
  {
    id: 4,
    type: "list",
    title: "Experiencias Personales",
    subtitle: "Relatos y anécdotas",
    description:
      "Historias y reflexiones sobre vivencias durante tus aventuras alrededor del mundo.",
    imageSrc:
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwaW4lMjBhJTIwbW91bnRhaW58ZW58MHwwfDB8fHww",
    link: "/blog/4",
  },
  {
    id: 5,
    type: "list",
    title: "Recomendaciones de Apps y Tecnología",
    subtitle: "Herramientas para viajeros",
    description:
      "Reseñas de aplicaciones y gadgets que facilitan la planificación y disfrute de tus viajes.",
    imageSrc:
      "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMGFwcHN8ZW58MHwwfDB8fHww",
    link: "/blog/5",
  },
  {
    id: 6,
    type: "list",
    title: "Sostenibilidad y Viajes Responsables",
    subtitle: "Viaja cuidando el planeta",
    description:
      "Prácticas ecoamigables y destinos eco-turísticos para minimizar tu huella ambiental.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1682091719534-00aff71fd130?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHN1c3RhaW5hYmxlJTIwdHJhdmVsfGVufDB8MHwwfHx8MA%3D%3D",
    link: "/blog/6",
  },
  {
    id: 7,
    type: "list",
    title: "Entretenimiento y Conectividad",
    subtitle: "Mantente conectado en ruta",
    description:
      "Consejos para disfrutar de entretenimiento y mantener la conectividad durante tus viajes.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1663013473293-d1c26e765a5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbCUyMHNlY3VyaXR5fGVufDB8MHwwfHx8MA%3D%3D",
    link: "/blog/7",
  },
  {
    id: 8,
    type: "list",
    title: "Seguridad y Preparación",
    subtitle: "Viaja seguro",
    description:
      "Información sobre seguros de viaje, documentos necesarios y medidas de seguridad esenciales.",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1664476932214-b2f924e89d93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwc2FmZXRpbmVzc3xlbnwwfDB8MHx8fDA%3D",
    link: "/blog/8",
  },
  {
    id: 9,
    type: "list",
    title: "Consejos Prácticos de Viaje",
    subtitle: "Prepárate para todo",
    description:
      "Recomendaciones sobre adaptadores, requisitos eléctricos y otros aspectos prácticos para tus viajes.",
    imageSrc:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
    link: "/blog/9",
  },
  {
    id: 10,
    type: "list",
    title: "Estilo y Moda en los Viajes",
    subtitle: "Viaja con estilo",
    description:
      "Ideas para mantener tu estilo personal durante los viajes y conocer las últimas tendencias de moda.",
    imageSrc:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
    link: "/blog/10",
  },
];

export const featuredTripsData: TripCardData[] = [
  {
    id: "1",
    moreInfo:
      "This trip offers an exclusive helicopter ride over the stunning Alps, giving you a bird's eye view of the snow-capped mountains and lush valleys below.",
    title: "A Serene Journey Over the Alps",
    subtitle: "Majestic Peaks Await",
    description:
      "Discover the majesty of the Alps from above, capturing the serene beauty of snow-covered peaks and tranquil blue skies.",
    travelCategory: "nature",
    image: {
      src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
      alt: "Alps Mountain View",
    },
    countries: ["Switzerland", "France", "Italy"], // Países de los Alpes
  },
  {
    id: "5",
    moreInfo:
      "This guided jungle trek takes you to hidden waterfalls off the beaten path, offering a chance to swim in crystal-clear waters and enjoy picnic lunches in nature's finest settings.",
    title: "The Hidden Waterfalls",
    subtitle: "Nature's Secret Gems",
    description:
      "Explore breathtaking waterfalls nestled in the heart of the jungle, where the sound of cascading water rejuvenates your soul.",
    travelCategory: "adventure",
    image: {
      src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
      alt: "Hidden Waterfall",
    },
    countries: ["Costa Rica", "Panama", "Belize"], // Países con selvas exuberantes y cascadas en Centroamérica
  },
  {
    id: "6",
    moreInfo:
      "Take a desert safari with expert guides who will lead you through sand dunes, offer insights into local culture, and arrange a stargazing session in the serene desert night.",
    title: "A Journey Through the Desert",
    subtitle: "Golden Sands and Starry Nights",
    description:
      "Experience the vastness of the desert, with rolling dunes by day and a sky full of stars by night.",
    travelCategory: "adventure",
    image: {
      // src: "https://images.unsplash.com/photo-1526994387180-9557a434b046?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vcm9jY298ZW58MHwwfDB8fHww",
      src: "https://images.unsplash.com/photo-1706203644207-74179c8796fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vcm9jY298ZW58MHwwfDB8fHwwX ",
      alt: "Desert Landscape",
    },
    countries: ["Morocco", "Egypt", "Jordan"], // Países con desiertos emblemáticos en el norte de África y Medio Oriente
  },

  {
    id: "4",
    moreInfo:
      "Enjoy a personalized wellness experience by the ocean, including beach yoga sessions, private massages, and curated spa treatments. Ideal for unwinding and finding inner peace.",
    title: "Serenity by the Ocean",
    subtitle: "Waves and Relaxation",
    description:
      "Unwind on a secluded beach, where gentle waves kiss the shore and the sound of the ocean calms your spirit.",
    travelCategory: "wellness",
    image: {
      // src: "https://images.unsplash.com/photo-1619382803627-a1d7b7218224?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1hbGRpdmVzfGVufDB8MHwwfHx8MA%3D%3D",
      src: "https://images.unsplash.com/photo-1509619159938-4efea8aa33c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdXJpdGl1c3xlbnwwfDB8MHx8fDA%3D",

      alt: "Secluded Beach",
    },
    countries: ["Maldives", "Seychelles", "Mauritius"], // Países con playas aisladas y paradisíacas en el Océano Índico
  },
  {
    id: "3",
    moreInfo:
      "This wellness retreat in a remote forest offers daily guided meditation, forest therapy walks, and access to natural hot springs.",
    title: "Mystical Mornings in the Forest",
    subtitle: "A Whispering Calm",
    description:
      "Embark on a journey through the misty forest, where the quiet rustling of leaves underfoot leads you to hidden wonders.",
    travelCategory: "wellness",
    image: {
      src: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
      alt: "Misty Forest",
    },
    countries: ["Finland", "Sweden"], // Países conocidos por sus densos bosques en Europa
  },

  {
    id: "2",
    moreInfo:
      "Embark on an exhilarating adventure along the coastal cliffs, with guided hikes, panoramic viewpoints, and expert tips for capturing the perfect sunset photo.",
    title: "Sunset at the Edge of the World",
    subtitle: "Cliffs by the Sea",
    description:
      "Watch the golden hues of sunset reflecting off the rugged cliffs by the sea, creating a breathtaking view that you'll never forget.",
    travelCategory: "adventure",
    image: {
      src: "https://images.unsplash.com/photo-1500456759136-362ab38eec6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
      alt: "Cliffs at Sunset",
    },
    countries: ["Scotland", "Ireland", "Norway"], // Países con impresionantes acantilados costeros cercanos
  },
];

export const headerData: HeaderProps = {
  frontPageID: "38",
  data: {
    menuDataPrimary: [
      {
        menu_item_id: 738,
        menu_item_parent: 0,
        title: "Travel Guides",
        target: "/_self",
        url: "/travel-guides",
        icon: "compass",
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
        menu_item_id: 737,
        menu_item_parent: 0,
        // title: "Blog & Beyond",
        title: "Explorer's Blog",
        target: "_self",
        url: "/blog",
        icon: "grid-view",
      },

      // Submenu items for "Destinations"
    ],
    menuDataSecondary: [
      {
        menu_item_id: 742,
        menu_item_parent: 0,
        title: "When To Travel",
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
      target: "/packages",
      url: "/packages",
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
      target: "/blog",
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
    alt: "Una increíble puesta de sol",
  },
  {
    type: "text",
    title: "Explora el Mundo",
    paragraph:
      "Descubre los lugares más hermosos del planeta y disfruta de aventuras inolvidables. Descubre los lugares más hermosos del planeta.",
  },
  {
    type: "video",
    src: "https://cdn.pixabay.com/video/2023/08/02/174305-851138233_tiny.mp4",
    placeholderImage: "/city-at-night-placeholder.png",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1531402581960-f0a304148a1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGphenolMjBiYXJ8ZW58MHwwfDB8fHww",
    alt: "Una increíble puesta de sol",
  },
  {
    type: "video",
    // src: "/tokio-night.mp4",
    src: "https://cdn.pixabay.com/video/2019/02/01/21116-315137080_tiny.mp4",
    placeholderImage: "/city-at-night-placeholder-2.png",
  },
  {
    type: "image",
    // src: "https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGRpbm5lciUyMGF0JTIwbmlnaHR8ZW58MHwwfDB8fHww",
    src: "https://images.unsplash.com/photo-1550487221-3750d2cb0b3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
  },
];
