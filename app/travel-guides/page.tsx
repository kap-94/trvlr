import {
  BlogPreview,
  TravelGuideDescription,
  TravelGuideImages,
  TravelGuideMap,
} from "@/app/_modules";

const images = [
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    // href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    // href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    // href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    // href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    // href: "/link-a-destino-1", // Opcional
  },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
  //     alt: "Descripción de la imagen 2",
  //   },
];

const travelGuideData = {
  title: "Thailand: A Tropical Getaway",
  subtitle: "Discover the beauty, culture, and adventure of Thailand",
  description:
    "Thailand is a country that seamlessly blends modernity and tradition. Whether you’re exploring the bustling streets of Bangkok or the tranquil temples of Chiang Mai, there’s something for every traveler.",
  mainImageUrl:
    "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww",
  bestTimeToVisit: "November to February",
  averageCost: "Approximately $50 - $150 per day",
  currency: "Thai Baht (THB)",
  foodHighlights: ["Pad Thai", "Tom Yum Goong", "Som Tum", "Khao Soi"],
  culture:
    "Thailand is a country rich in traditions, deeply rooted in Buddhism. The people are known for their hospitality, and festivals like Songkran and Loy Krathong bring vibrant colors to life.",
  transportation:
    "Thailand has a well-connected public transportation system, with buses, tuk-tuks, and taxis available in most cities. Long-distance travel is best done via trains or domestic flights.",
  visaInfo:
    "Most travelers can enter Thailand visa-free for up to 30 days. However, it is important to check specific requirements based on your country of origin.",
  safetyTips:
    "Thailand is generally a safe destination for tourists, but it’s advisable to avoid unlicensed taxis and be mindful of your belongings in crowded areas.",
  author: "John Doe",
  authorLink: "/author/john-doe",
  largeInspirationalText:
    "From the tranquil beaches of the south to the bustling streets of Bangkok, Thailand invites you to immerse yourself in a land where tradition meets adventure. Experience the warmth of the Thai people and the breathtaking beauty of its landscapes.",
};

const locations = [
  {
    id: 1,
    slug: "bangkok",
    title: "Bangkok",
    excerpt:
      "The vibrant capital of Thailand, known for its temples and nightlife.",
    latitude: "13.7563",
    longitude: "100.5018",
    buttonLink: {
      url: "https://www.tourismthailand.org/",
      title: "Discover Bangkok",
    },
    image: {
      url: "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww",
      alt: "Location Image",
    },
  },
  {
    id: 2,
    slug: "chiang-mai",
    title: "Chiang Mai",
    excerpt: "Known for its ancient temples and relaxed atmosphere.",
    latitude: "18.7883",
    longitude: "98.9853",
    buttonLink: {
      url: "https://www.chiangmai.net/",
      title: "Explore Chiang Mai",
    },
    image: {
      url: "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww",
      alt: "Location Image",
    },
  },
  {
    id: 3,
    slug: "phuket",
    title: "Phuket",
    excerpt: "The largest island in Thailand, famous for its beaches.",
    latitude: "7.8804",
    longitude: "98.3923",
    buttonLink: { url: "https://www.phuket.com/", title: "Visit Phuket" },
    image: {
      url: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaWxhbmR8ZW58MHwwfDB8fHww",
      alt: "Location Image",
    },
  },
  {
    id: 4,
    slug: "krabi",
    title: "Krabi",
    excerpt:
      "A destination with paradise beaches and spectacular rock formations.",
    latitude: "8.0863",
    longitude: "98.9063",
    buttonLink: {
      url: "https://www.tourismthailand.org/",
      title: "Explore Krabi",
    },
    image: {
      url: "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww",
      alt: "Location Image",
    },
  },
  {
    id: 5,
    slug: "koh-samui",
    title: "Koh Samui",
    excerpt: "A tropical island perfect for relaxation and luxury.",
    latitude: "9.5120",
    longitude: "100.0134",
    buttonLink: {
      url: "https://www.kohsamui.com/",
      title: "Discover Koh Samui",
    },
    image: {
      url: "https://images.unsplash.com/photo-1519915247718-1703f9c6bb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRoYWlsYW5kfGVufDB8fDB8fHww",
      alt: "Location Image",
    },
  },
];

const mapCenter: [number, number] = [13.7563, 100.5018]; // Centro inicial en Bangkok
const mapZoom = 5; // Nivel de zoom inicial

export default function TravelGuide() {
  return (
    <main>
      <TravelGuideImages
        title="Explore Thailand's Top Destinations"
        subtitle="Discover the most incredible places for your next adventure in Thailand"
        images={images}
      />

      <TravelGuideDescription data={travelGuideData} />

      <TravelGuideMap
        heading={{
          // eyebrow: "Guía de Viajes",
          title: "Explora Tailandia",
          subtitle: "Descubre los mejores destinos turísticos",
        }}
        locations={locations}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
      />
      <BlogPreview />
    </main>
  );
}
