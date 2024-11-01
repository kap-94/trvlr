import { HeroTextContent, Typography } from "@/app/_components";
import { BlogArticleList, HeroVideo } from "@/app/_modules";

export const mockPosts = [
  {
    id: 1,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Stunning view of Santorini's white buildings and blue domes",
    },
    title: "Hidden Gems of Santorini: Beyond the Tourist Trail",
    subtitle: "Greece",
    excerpt:
      "Discover the authentic side of Santorini through local villages, family-owned vineyards, and secret sunset spots that most tourists never see.",
    location: [{ id: 1, name: "Greece" }],
    slug: "hidden-gems-santorini",
    tags: ["Europe", "Islands", "Culture"],
    date: new Date("2024-03-15"),
    categories: [{ id: 1, name: "Cultural", slug: "cultural" }],
  },
  {
    id: 2,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Traditional Japanese temple during cherry blossom season",
    },
    title: "A Week in Kyoto: Cherry Blossom Season Guide",
    subtitle: "Japan",
    excerpt:
      "Experience the magic of hanami in Japan's cultural capital, with insider tips on the best viewing spots and local festivals.",
    location: [{ id: 2, name: "Japan" }],
    slug: "kyoto-cherry-blossom-guide",
    tags: ["Asia", "Culture", "Seasonal"],
    date: new Date("2024-03-20"),
    categories: [{ id: 2, name: "Seasonal", slug: "seasonal" }],
  },
  {
    id: 3,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Dramatic mountain peaks of Torres del Paine",
    },
    title: "Trekking Patagonia: Ultimate Adventure Guide",
    subtitle: "Chile",
    excerpt:
      "From planning your route to choosing the right gear, everything you need to know about conquering Patagonia's legendary trails.",
    location: [{ id: 3, name: "Chile" }],
    slug: "patagonia-trekking-guide",
    tags: ["South America", "Adventure", "Nature"],
    date: new Date("2024-03-25"),
    categories: [{ id: 3, name: "Adventure", slug: "adventure" }],
  },
  {
    id: 4,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Colorful spice market in Marrakech medina",
    },
    title: "Marrakech Food Tour: A Culinary Journey",
    subtitle: "Morocco",
    excerpt:
      "Navigate the bustling souks and hidden food gems of Marrakech, from street food to high-end restaurants.",
    location: [{ id: 4, name: "Morocco" }],
    slug: "marrakech-food-guide",
    tags: ["Africa", "Food", "Culture"],
    date: new Date("2024-03-30"),
    categories: [{ id: 4, name: "Food", slug: "food" }],
  },
  {
    id: 5,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Overwater bungalows in crystal clear waters",
    },
    title: "Luxury for Less: Maldives on a Budget",
    subtitle: "Maldives",
    excerpt:
      "How to experience the paradise of the Maldives without breaking the bank, including local island stays and guesthouse options.",
    location: [{ id: 5, name: "Maldives" }],
    slug: "maldives-budget-guide",
    tags: ["Asia", "Beach", "Budget"],
    date: new Date("2024-04-01"),
    categories: [{ id: 5, name: "Budget Travel", slug: "budget" }],
  },
  {
    id: 6,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Northern Lights dancing over Icelandic landscape",
    },
    title: "Chasing the Northern Lights in Iceland",
    subtitle: "Iceland",
    excerpt:
      "A photographer's guide to capturing the aurora borealis, including the best locations and camera settings.",
    location: [{ id: 6, name: "Iceland" }],
    slug: "iceland-northern-lights",
    tags: ["Europe", "Photography", "Nature"],
    date: new Date("2024-04-05"),
    categories: [{ id: 6, name: "Photography", slug: "photography" }],
  },
  {
    id: 7,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Busy street scene in Hanoi's Old Quarter",
    },
    title: "Street Food Safari: Vietnam's Culinary Secrets",
    subtitle: "Vietnam",
    excerpt:
      "From pho to banh mi, explore Vietnam's incredible street food scene with tips from local chefs.",
    location: [{ id: 7, name: "Vietnam" }],
    slug: "vietnam-street-food",
    tags: ["Asia", "Food", "Culture"],
    date: new Date("2024-04-10"),
    categories: [{ id: 4, name: "Food", slug: "food" }],
  },
  {
    id: 8,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Lions resting in Serengeti National Park",
    },
    title: "Ultimate Safari Guide: Tanzania's Wildlife",
    subtitle: "Tanzania",
    excerpt:
      "Plan the perfect African safari, from choosing the right season to spotting the Big Five in their natural habitat.",
    location: [{ id: 8, name: "Tanzania" }],
    slug: "tanzania-safari-guide",
    tags: ["Africa", "Wildlife", "Adventure"],
    date: new Date("2024-04-15"),
    categories: [{ id: 7, name: "Wildlife", slug: "wildlife" }],
  },
  {
    id: 9,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Sunrise over Machu Picchu",
    },
    title: "Beyond Machu Picchu: Peru's Hidden Trails",
    subtitle: "Peru",
    excerpt:
      "Discover lesser-known Incan ruins and mountain trails that offer equally spectacular views without the crowds.",
    location: [{ id: 9, name: "Peru" }],
    slug: "peru-hidden-trails",
    tags: ["South America", "Adventure", "History"],
    date: new Date("2024-04-20"),
    categories: [{ id: 3, name: "Adventure", slug: "adventure" }],
  },
  {
    id: 10,
    image: {
      url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXlhfGVufDB8MHwwfHx8Mg%3D%3D",
      alt: "Scenic road through New Zealand countryside",
    },
    title: "New Zealand by Campervan: The Ultimate Road Trip",
    subtitle: "New Zealand",
    excerpt:
      "Your complete guide to planning the perfect New Zealand road trip, from choosing your vehicle to the best routes.",
    location: [{ id: 10, name: "New Zealand" }],
    slug: "new-zealand-road-trip",
    tags: ["Oceania", "Road Trip", "Nature"],
    date: new Date("2024-04-25"),
    categories: [{ id: 8, name: "Road Trips", slug: "road-trips" }],
  },
];

export const mockCategories = [
  { id: 1, name: "Cultural", slug: "cultural" },
  { id: 2, name: "Seasonal", slug: "seasonal" },
  { id: 3, name: "Adventure", slug: "adventure" },
  { id: 4, name: "Food", slug: "food" },
  { id: 5, name: "Budget Travel", slug: "budget" },
  { id: 6, name: "Photography", slug: "photography" },
  { id: 7, name: "Wildlife", slug: "wildlife" },
  { id: 8, name: "Road Trips", slug: "road-trips" },
];

export const mockLocations = [
  { id: 1, name: "Greece" },
  { id: 2, name: "Japan" },
  { id: 3, name: "Chile" },
  { id: 4, name: "Morocco" },
  { id: 5, name: "Maldives" },
  { id: 6, name: "Iceland" },
  { id: 7, name: "Vietnam" },
  { id: 8, name: "Tanzania" },
  { id: 9, name: "Peru" },
  { id: 10, name: "New Zealand" },
];

const slidesData = [
  {
    image: {
      url: "https://plus.unsplash.com/premium_photo-1661808783954-8079b10583fd?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Travel Image",
    },
  },
];

export default function Blogs() {
  return (
    <main>
      <HeroVideo slidesData={slidesData} contentPosition="bottom-left">
        <HeroTextContent
          eyebrow={"Tips, Hacks & Inspiration"}
          title={"The Ultimate Traveler's Blog"}
        />
      </HeroVideo>

      <BlogArticleList
        categories={mockCategories}
        posts={mockPosts}
        locations={mockLocations}
      />
    </main>
  );
}
