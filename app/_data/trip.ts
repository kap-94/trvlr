import { Country, TravelCategory, Trip } from "@/app/_types";
import { mockCountries } from "./catalogues";

const getCountryBySlug = (slug: string): Country => {
  const country = mockCountries.find((country) => country.slug === slug);
  if (!country) {
    throw new Error(`Country with slug ${slug} not found`);
  }
  return country;
};

export const tripsMockup: Trip[] = [
  {
    // Base Entity Properties
    id: "tropical-thailand",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    // Basic Trip Info
    title: "Thailand: A Tropical Getaway",
    subtitle: "Discover the beauty, culture, and adventure of Thailand",
    slug: "tropical-thailand",
    description:
      "Thailand is a country that seamlessly blends modernity and tradition. Whether you're exploring the bustling streets of Bangkok or the tranquil temples of Chiang Mai, there's something for every traveler.",
    largeInspirationalText:
      "From the tranquil beaches of the south to the bustling streets of Bangkok, Thailand invites you to immerse yourself in a land where tradition meets adventure.",
    category: [
      TravelCategory.CULTURAL,
      TravelCategory.BEACH,
      TravelCategory.FOOD_WINE,
    ],
    countries: [getCountryBySlug("thailand")],

    // Location Information
    mainLocation: {
      id: 1,
      name: "Bangkok",
      type: "city",
      excerpt:
        "The vibrant capital of Thailand, known for its temples and nightlife.",
      coordinates: {
        latitude: 13.7563,
        longitude: 100.5018,
      },
      country: getCountryBySlug("thailand"),
      image: {
        src: "https://plus.unsplash.com/premium_photo-1693149386423-2e4e264712e5?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Aerial view of Bangkok's skyline at night with illuminated skyscrapers and the Chao Phraya River",
      },
      link: {
        url: "https://www.tourismthailand.org/Destinations/Provinces/Bangkok/219",
        title: "Explore Bangkok",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Chiang Mai",
        type: "city",
        excerpt: "Known for its ancient temples and relaxed atmosphere.",
        coordinates: {
          latitude: 18.7883,
          longitude: 98.9853,
        },
        country: getCountryBySlug("thailand"),
        image: {
          src: "https://images.unsplash.com/photo-1721038469784-abf8eb8d4653?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient Wat Phra Singh temple in Chiang Mai surrounded by tropical gardens and traditional Lanna architecture",
        },
        link: {
          url: "https://www.tourismthailand.org/Destinations/Provinces/Chiang-Mai/101",
          title: "Discover Chiang Mai",
        },
      },
      {
        id: 3,
        name: "Phuket",
        type: "region",
        excerpt: "The largest island in Thailand, famous for its beaches.",
        coordinates: {
          latitude: 7.8804,
          longitude: 98.3923,
        },
        country: getCountryBySlug("thailand"),
        image: {
          src: "https://images.unsplash.com/photo-1659688575649-46f47e2f0886?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Pristine white sand beach of Phuket with turquoise waters and traditional longtail boats",
        },
        link: {
          url: "https://www.tourismthailand.org/Destinations/Provinces/Phuket/350",
          title: "Visit Phuket",
        },
      },
      {
        id: 4,
        name: "Krabi",
        type: "region",
        excerpt:
          "A destination with paradise beaches and spectacular rock formations.",
        coordinates: {
          latitude: 8.0863,
          longitude: 98.9063,
        },
        country: getCountryBySlug("thailand"),
        image: {
          src: "https://images.unsplash.com/photo-1673627114526-b83c09d3a760?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic limestone cliffs rising from the Andaman Sea at Railay Beach in Krabi during sunset",
        },
        link: {
          url: "https://www.tourismthailand.org/Destinations/Provinces/Krabi/344",
          title: "Experience Krabi",
        },
      },
      {
        id: 5,
        name: "Koh Samui",
        type: "region",
        excerpt: "A tropical island perfect for relaxation and luxury.",
        coordinates: {
          latitude: 9.512,
          longitude: 100.0134,
        },
        country: getCountryBySlug("thailand"),
        image: {
          src: "https://images.unsplash.com/photo-1543489822-c49534f3271f?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Luxury beachfront resort on Koh Samui with infinity pool overlooking the Gulf of Thailand",
        },
        link: {
          url: "https://www.tourismthailand.org/Destinations/Provinces/Ko-Samui/360",
          title: "Escape to Koh Samui",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Bangkok",
          type: "city",
          excerpt:
            "The vibrant capital of Thailand, known for its temples and nightlife.",
          coordinates: {
            latitude: 13.7563,
            longitude: 100.5018,
          },
          country: getCountryBySlug("thailand"),
        },
        activities: [
          {
            id: "bkk-001",
            name: "Grand Palace Tour",
            description: "Visit the stunning Grand Palace complex",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // // included: true,
          },
          {
            id: "bkk-002",
            name: "Wat Pho Temple",
            description: "Explore the Temple of the Reclining Buddha",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // // included: true,
          },
        ],
      },
    ],

    // Travel Details
    duration: { days: 10, nights: 9 },
    startDates: ["2024-03-01", "2024-03-15", "2024-04-01"],
    endDates: ["2024-03-07", "2024-03-21", "2024-04-07"],

    // Experience Details
    activities: [
      {
        id: "th-001",
        name: "Temple Tours",
        description: "Guided tours of ancient Buddhist temples",
        schedule: { duration: { value: 180, unit: "minutes" } },
        // // included: true,
      },
      {
        id: "th-002",
        name: "Cooking Class",
        description: "Learn to cook authentic Thai dishes",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // // included: true,
      },
    ],
    highlights: [
      "Visit the Grand Palace in Bangkok",
      "Experience traditional Thai massage",
      "Visit ethical elephant sanctuaries",
      "Learn Thai cooking techniques",
    ],
    included: [
      "Airport transfers",
      "Accommodation",
      "Daily breakfast",
      "Local guide",
      "Temple entrance fees",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
    ],

    // Cultural Information
    culturalNotes: {
      customs: [
        "Remove shoes before entering temples",
        "Dress modestly at religious sites",
        "Don't touch people's heads",
      ],
      etiquette: [
        "Greet with a wai (slight bow with palms together)",
        "Don't point with your feet",
        "Show respect for the royal family",
      ],
      localPhrases: [
        {
          original: "Sawadee ka/krap",
          pronunciation: "sa-wa-dee kaa/krap",
          translation: "Hello",
        },
        {
          original: "Khob khun ka/krap",
          pronunciation: "kop-kun-kaa/krap",
          translation: "Thank you",
        },
      ],
    },

    // Requirements & Preparation
    requirements: {
      visa: ["Tourist visa required for stays over 30 days"],
      vaccines: ["Routine vaccines", "Hepatitis A", "Typhoid recommended"],
      insurance: ["Travel insurance mandatory"],
      documents: ["Valid passport (6 months validity)", "Return flight ticket"],
      physical: [
        "Moderate fitness level",
        "Ability to walk for extended periods",
      ],
    },

    // Pricing & Booking
    pricing: {
      basePrice: { amount: 2499, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Accommodation",
      //   "Some meals",
      //   "Guide services",
      //   "Local transportation",
      // ],
      // supplements: {
      //   singleRoom: 500,
      //   peakSeason: 300,
      // },
      discounts: [
        {
          size: 200,
          discount: 150,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-03-01",
        endDate: "2024-03-07",
        spotsTotal: 15,
        spotsRemaining: 8,
      },
    ],

    // Media & Content
    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1704314315344-cd10b9779ce6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Thailand Tropical Beach",
      },
      gallery: [
        {
          src: "https://plus.unsplash.com/premium_photo-1681582960523-2b5ba7ed2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3S0FaNGpDZUlmMHx8ZW58MHx8fHx8",
          alt: "Serene coastal landscape with crystalline waves gently lapping against a pristine shoreline at sunset",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1681582960531-7b5de57fb276?q=80&w=3326&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic palm trees swaying in the ocean breeze against a backdrop of pristine white sand beach",
        },
        {
          src: "https://images.unsplash.com/photo-1513568720563-6a5b8c6caab3?q=80&w=2936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Atmospheric Asian street market illuminated at night, showcasing local culinary delights and cultural ambiance",
        },
        {
          src: "https://images.unsplash.com/photo-1509264899346-36caadec0f32?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Panoramic view of an idyllic tropical bay with turquoise waters merging into the distant horizon",
        },
        {
          src: "https://images.unsplash.com/photo-1442548520776-20acf66617df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Golden hour seascape capturing the sun's descent behind silhouetted tropical foliage",
        },
        {
          src: "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic limestone formations emerging from azure waters in a tranquil tropical seascape",
        },
        {
          src: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ethereal coastal twilight scene with palm trees silhouetted against a vibrant orange sky",
        },
        {
          src: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=3478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional wooden longtail boats moored in a picturesque bay with crystal-clear waters",
        },
      ],
      videos: [
        {
          url: "https://example.com/thailand-preview.mp4",
          thumbnail: {
            src: "https://example.com/thailand-preview-thumb.jpg",
            alt: "Video thumbnail",
          },
          title: "Thailand Travel Preview",
        },
      ],
      virtualTour: "https://example.com/thailand-virtual-tour",
    },

    // Reviews & Ratings
    reviews: [
      {
        id: "rev-001",
        authorName: "John Smith",
        rating: 5,
        title: "Amazing experience!",
        content:
          "The trip exceeded all expectations. The guides were knowledgeable and friendly.",
        createdAt: "2024-01-10",
      },
    ],
    rating: {
      average: 4.9,
      total: 150,
      distribution: {
        5: 100,
        4: 40,
        3: 8,
        2: 1,
        1: 1,
      },
    },

    // Additional Information
    faq: [
      {
        question: "What's the best time to visit Thailand?",
        answer:
          "November to February offers the best weather conditions with lower humidity and minimal rainfall.",
        category: "Planning",
      },
    ],

    // SEO & Analytics
    seo: {
      title: "Thailand: A Tropical Getaway | Luxury Travel Experience",
      description:
        "Discover the beauty of Thailand with our comprehensive tour package. Visit temples, beaches, and experience authentic Thai culture.",
      keywords: [
        "Thailand travel",
        "Thai culture",
        "Bangkok tour",
        "Thai temples",
      ],
      canonicalUrl: "https://example.com/trips/tropical-thailand",
      ogImage: {
        src: "https://example.com/thailand-og-image.jpg",
        alt: "Thailand Travel Experience",
      },
    },
    analytics: {
      views: 15000,
      uniqueViews: 12000,
      bookmarks: 500,
      shares: 300,
      clickThroughRate: 3.5,
      averageTimeOnPage: 240,
      conversionRate: 2.8,
    },

    // Related Content
    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Swiss Alps Adventure
    id: "swiss-alps-2024",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Swiss Alps Adventure",
    subtitle: "Majestic Peaks Await",
    slug: "swiss-alps-adventure",
    description:
      "Experience the majestic Swiss Alps with guided hiking tours, luxury accommodation, and breathtaking views of the Matterhorn.",
    largeInspirationalText:
      "Embrace the mountains and lose yourself in nature.",
    category: [
      TravelCategory.MOUNTAIN,
      TravelCategory.ADVENTURE,
      TravelCategory.LUXURY,
    ],
    countries: [getCountryBySlug("switzerland")],
    mapZoom: 7,
    mainLocation: {
      id: 1,
      name: "Zermatt",
      type: "city",
      excerpt:
        "A picturesque mountain resort town nestled beneath the iconic Matterhorn.",
      coordinates: {
        latitude: 46.0207,
        longitude: 7.7491,
        altitude: 1620,
      },
      country: getCountryBySlug("switzerland"),
      image: {
        src: "https://images.unsplash.com/photo-1662844240739-7f9e3c622ea3?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Majestic Matterhorn peak rising above Zermatt's alpine village with traditional chalets in winter",
      },
      link: {
        url: "https://www.zermatt.ch/en",
        title: "Discover Zermatt",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Interlaken",
        type: "city",
        excerpt: "Adventure sports hub surrounded by lakes and towering Alps.",
        coordinates: {
          latitude: 46.6863,
          longitude: 7.8632,
          altitude: 570,
        },
        country: getCountryBySlug("switzerland"),
        image: {
          src: "https://images.unsplash.com/photo-1693647667711-89c401166b07?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Panoramic view of Interlaken between Lake Thun and Lake Brienz with snow-capped mountains",
        },
        link: {
          url: "https://www.interlaken.ch/en",
          title: "Explore Interlaken",
        },
      },
      {
        id: 3,
        name: "Lucerne",
        type: "city",
        excerpt:
          "Charming city by the lake with stunning mountain views and medieval architecture.",
        coordinates: {
          latitude: 47.0502,
          longitude: 8.3093,
          altitude: 435,
        },
        country: getCountryBySlug("switzerland"),
        image: {
          src: "https://images.unsplash.com/photo-1566394552143-5ca9a19c01b3?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Historic Chapel Bridge and Water Tower in Lucerne with Alpine panorama in background",
        },
        link: {
          url: "https://www.luzern.com/en/",
          title: "Visit Lucerne",
        },
      },
      {
        id: 4,
        name: "St. Moritz",
        type: "city",
        excerpt:
          "Legendary alpine resort town known for luxury and winter sports.",
        coordinates: {
          latitude: 46.4908,
          longitude: 9.8355,
          altitude: 1822,
        },
        country: getCountryBySlug("switzerland"),
        image: {
          src: "https://images.unsplash.com/photo-1719891790897-17e034c4c236?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "St. Moritz lake and village illuminated at dusk with snow-covered peaks reflecting in water",
        },
        link: {
          url: "https://www.stmoritz.ch/en/",
          title: "Experience St. Moritz",
        },
      },
      {
        id: 5,
        name: "Grindelwald",
        type: "city",
        excerpt:
          "Stunning village gateway to the Jungfrau Region with dramatic mountain scenery.",
        coordinates: {
          latitude: 46.6244,
          longitude: 8.0344,
          altitude: 1034,
        },
        country: getCountryBySlug("switzerland"),
        image: {
          src: "https://images.unsplash.com/photo-1520681504224-093d46124820?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Grindelwald valley with traditional Swiss chalets and the mighty Eiger north face in background",
        },
        link: {
          url: "https://grindelwald.ch/en/",
          title: "Discover Grindelwald",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Zermatt",
          type: "city",
          excerpt: "A picturesque mountain resort town.",
          coordinates: {
            latitude: 46.0207,
            longitude: 7.7491,
            altitude: 1620,
          },
          country: getCountryBySlug("switzerland"),
        },
        activities: [
          {
            id: "zerm-001",
            name: "Matterhorn Observation",
            description: "Scenic viewing of the iconic Matterhorn",
            schedule: { duration: { value: 240, unit: "minutes" } },
            // // included: true,
          },
          {
            id: "zerm-002",
            name: "Welcome Dinner",
            description: "Traditional Swiss dinner experience",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // // included: true,
          },
        ],
      },
    ],

    duration: { days: 18, nights: 17 },
    startDates: ["2024-06-15", "2024-07-01", "2024-07-15"],
    endDates: ["2024-06-22", "2024-07-08", "2024-07-22"],

    activities: [
      {
        id: "swiss-001",
        name: "Guided Hiking",
        description: "Professional guided hiking tours",
        schedule: { duration: { value: 360, unit: "minutes" } },
        // // included: true,
      },
      {
        id: "swiss-002",
        name: "Cable Car Experience",
        description: "Scenic mountain views via cable car",
        schedule: { duration: { value: 120, unit: "minutes" } },
        // // included: true,
      },
    ],
    highlights: [
      "Matterhorn views",
      "Alpine hiking trails",
      "Swiss chocolate tasting",
      "Mountain cable car rides",
    ],
    included: [
      "Mountain guide",
      "Luxury accommodation",
      "Cable car passes",
      "Breakfast and dinner",
    ],
    excluded: [
      "International flights",
      "Personal equipment",
      "Travel insurance",
      "Lunch meals",
    ],

    culturalNotes: {
      customs: [
        "Punctuality is highly valued",
        "Greeting people formally",
        "Respect quiet hours",
      ],
      etiquette: [
        "Remove shoes when entering homes",
        "Maintain low voice in public",
        "Proper hiking etiquette",
      ],
      localPhrases: [
        {
          original: "Grüezi",
          pronunciation: "GROO-eh-tsee",
          translation: "Hello (formal)",
        },
        {
          original: "Danke",
          pronunciation: "DAHN-keh",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Schengen visa required for non-EU citizens"],
      vaccines: ["Routine vaccines", "COVID-19 requirements as applicable"],
      insurance: ["Mountain rescue insurance mandatory"],
      documents: ["Valid passport", "Travel insurance proof"],
      physical: ["Good fitness level", "Ability to hike at altitude"],
    },

    pricing: {
      basePrice: { amount: 2499, currency: "CHF" },
      // pricePerPerson: true,
      // included: [
      //   "Luxury accommodation",
      //   "Professional guides",
      //   "Cable car passes",
      //   "Half-board meals",
      // ],
      // supplements: {
      //   singleRoom: 800,
      //   peakSeason: 500,
      // },
      discounts: [
        {
          size: 300,
          discount: 200,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-06-15",
        endDate: "2024-06-22",
        spotsTotal: 12,
        spotsRemaining: 6,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1529669851596-ba9a5549af95?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Swiss Alps Landscape",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1662844240739-7f9e3c622ea3?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic aerial view of snow-capped mountains with dense forest in winter landscape",
        },
        {
          src: "https://images.unsplash.com/photo-1693647667711-89c401166b07?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic mountain peaks emerging through misty clouds in rugged wilderness",
        },
        {
          src: "https://images.unsplash.com/photo-1566394552143-5ca9a19c01b3?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Scenic mountain trail winding through vibrant autumn forest with golden foliage",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661963831427-50e24fadf5fb?q=80&w=2376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Pristine alpine lake reflecting snow-covered peaks and evergreen forest",
        },
        {
          src: "https://images.unsplash.com/photo-1719891790897-17e034c4c236?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Solitary cabin nestled in mountainous wilderness during winter snowfall",
        },
        {
          src: "https://images.unsplash.com/photo-1615462939429-4610c9c5f895?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Adventure campsite with tent overlooking vast mountain range at sunrise",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1664298150089-c28f06834283?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ethereal mountain peaks shrouded in morning mist against purple sky",
        },
        {
          src: "https://images.unsplash.com/photo-1520681504224-093d46124820?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Rustic mountain lodge surrounded by towering evergreen trees in snowy setting",
        },
      ],
      videos: [
        {
          url: "https://example.com/swiss-alps-preview.mp4",
          thumbnail: {
            src: "https://example.com/swiss-alps-thumb.jpg",
            alt: "Swiss Alps Preview",
          },
          title: "Swiss Alps Adventure Preview",
        },
      ],
      virtualTour: "https://example.com/swiss-alps-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Sarah Johnson",
        rating: 5,
        title: "Breathtaking experience!",
        content: "The views were incredible and the guides were exceptional.",
        createdAt: "2024-01-05",
      },
    ],
    rating: {
      average: 4.9,
      total: 120,
      distribution: {
        5: 90,
        4: 25,
        3: 4,
        2: 1,
        1: 0,
      },
    },

    faq: [
      {
        question: "What fitness level is required?",
        answer:
          "Moderate to good fitness level is recommended for hiking activities.",
        category: "Physical Requirements",
      },
      {
        question: "What's the best time to visit?",
        answer: "June to September offers the best hiking conditions.",
        category: "Planning",
      },
    ],

    seo: {
      title: "Swiss Alps Adventure | Luxury Mountain Experience",
      description:
        "Experience the majestic Swiss Alps with guided hiking tours and luxury accommodations.",
      keywords: ["Swiss Alps", "hiking", "Matterhorn", "mountain adventure"],
      canonicalUrl: "https://example.com/trips/swiss-alps-2024",
      ogImage: {
        src: "https://example.com/swiss-alps-og.jpg",
        alt: "Swiss Alps Experience",
      },
    },
    analytics: {
      views: 12000,
      uniqueViews: 9000,
      bookmarks: 400,
      shares: 250,
      clickThroughRate: 4.2,
      averageTimeOnPage: 280,
      conversionRate: 3.1,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Bali Wellness Retreat
    id: "bali-retreat",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Bali Wellness Retreat",
    subtitle: "Find Your Inner Peace",
    slug: "bali-wellness-retreat",
    description:
      "Immerse yourself in a week of yoga, meditation, and spiritual healing in the heart of Ubud's lush landscapes.",
    largeInspirationalText: "Reconnect with yourself in paradise.",
    category: [
      TravelCategory.WELLNESS,
      TravelCategory.CULTURAL,
      TravelCategory.EDUCATIONAL,
    ],

    mapZoom: 10,
    mainLocation: {
      id: 1,
      name: "Ubud",
      type: "city",
      excerpt: "Cultural heart of Bali, known for its arts and crafts.",
      coordinates: {
        latitude: -8.5069,
        longitude: 115.2621,
      },
      country: getCountryBySlug("indonesia"),
      image: {
        src: "https://images.unsplash.com/photo-1536146021566-627ce3c4d813?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Stunning terraced rice fields in Tegalalang with morning mist and palm trees",
      },
      link: {
        url: "https://ubud.id/",
        title: "Explore Ubud",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Canggu",
        type: "region",
        excerpt: "Trendy coastal town famous for surf and wellness.",
        coordinates: {
          latitude: -8.636,
          longitude: 115.1398,
        },
        country: getCountryBySlug("indonesia"),
        image: {
          src: "https://images.unsplash.com/photo-1525496649711-a6c069fc6a1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Black sand beach with surfers at sunset and traditional beach umbrellas",
        },
        link: {
          url: "https://bali.com/",
          title: "Discover Canggu",
        },
      },
      {
        id: 3,
        name: "Seminyak",
        type: "region",
        excerpt: "Luxury beach resorts and high-end dining.",
        coordinates: {
          latitude: -8.696,
          longitude: 115.1692,
        },
        country: getCountryBySlug("indonesia"),
        image: {
          src: "https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=2321&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Luxury beachfront resort with infinity pool overlooking ocean at sunset",
        },
        link: {
          url: "https://bali.com/",
          title: "Experience Seminyak",
        },
      },
      {
        id: 4,
        name: "Uluwatu",
        type: "region",
        excerpt: "Dramatic cliffs, sacred temples and world-class surfing.",
        coordinates: {
          latitude: -8.8291,
          longitude: 115.0849,
        },
        country: getCountryBySlug("indonesia"),
        image: {
          src: "https://images.unsplash.com/photo-1500213721845-709b85a28da0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient Uluwatu temple perched on cliff edge with dramatic ocean sunset",
        },
        link: {
          url: "https://bali.com/",
          title: "Visit Uluwatu",
        },
      },
      {
        id: 5,
        name: "Nusa Dua",
        type: "region",
        excerpt: "Gated resort area with pristine beaches and water sports.",
        coordinates: {
          latitude: -8.8005,
          longitude: 115.2333,
        },
        country: getCountryBySlug("indonesia"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Crystal clear waters and white sand beach with luxury resort facilities",
        },
        link: {
          url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/bali/nusa-dua",
          title: "Escape to Nusa Dua",
        },
      },
    ],
    countries: [getCountryBySlug("indonesia")],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Ubud",
          type: "city",
          excerpt: "Cultural heart of Bali, known for its arts and crafts.",
          coordinates: {
            latitude: -8.5069,
            longitude: 115.2621,
          },
          country: getCountryBySlug("indonesia"),
        },
        activities: [
          {
            id: "bali-001",
            name: "Welcome Ceremony",
            description: "Traditional Balinese blessing ceremony",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // included: true,
          },
          {
            id: "bali-002",
            name: "Sunset Yoga",
            description: "Gentle yoga session with mountain views",
            schedule: { duration: { value: 90, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-04-01", "2024-05-01", "2024-06-01"],
    endDates: ["2024-04-07", "2024-05-07", "2024-06-07"],
    activities: [
      {
        id: "bali-003",
        name: "Daily Yoga",
        description: "Morning and evening yoga sessions",
        schedule: { duration: { value: 90, unit: "minutes" } },
        // included: true,
      },
      {
        id: "bali-004",
        name: "Meditation Workshop",
        description: "Guided meditation and mindfulness",
        schedule: { duration: { value: 60, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Daily yoga sessions",
      "Meditation workshops",
      "Healing ceremonies",
      "Organic cooking classes",
    ],
    included: [
      "Luxury eco-resort accommodation",
      "Daily yoga classes",
      "Meditation sessions",
      "Organic meals",
    ],
    excluded: [
      "International flights",
      "Spa treatments",
      "Personal expenses",
      "Travel insurance",
    ],

    culturalNotes: {
      customs: [
        "Remove shoes before entering temples",
        "Dress modestly",
        "Respect holy sites",
      ],
      etiquette: [
        "Use right hand for eating",
        "Don't touch people's heads",
        "Proper temple attire",
      ],
      localPhrases: [
        {
          original: "Om Swastiastu",
          pronunciation: "ohm swah-stee-AHS-too",
          translation: "Hello (formal)",
        },
        {
          original: "Terima kasih",
          pronunciation: "tuh-REE-mah KAH-see",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Visa on arrival available", "30-day stay permitted"],
      vaccines: ["Routine vaccines", "Hepatitis A", "Typhoid recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Return flight ticket"],
      physical: ["Basic fitness level", "No yoga experience required"],
    },

    pricing: {
      basePrice: { amount: 1899, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Accommodation",
      //   "Yoga classes",
      //   "Meditation sessions",
      //   "Organic meals",
      // ],
      // supplements: {
      //   singleRoom: 400,
      //   peakSeason: 200,
      // },
      discounts: [
        {
          size: 150,
          discount: 100,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-04-01",
        endDate: "2024-04-07",
        spotsTotal: 16,
        spotsRemaining: 10,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1500213721845-709b85a28da0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Bali Retreat",
      },
      gallery: [
        {
          src: "https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic waterfall cascading down steep rocky cliffs in tropical forest setting",
        },
        {
          src: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient stone temple entrance with intricate carvings and moss-covered walls",
        },
        {
          src: "https://images.unsplash.com/photo-1525496649711-a6c069fc6a1b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Tranquil beach scene with traditional Balinese umbrellas and palm trees at sunset",
        },
        {
          src: "https://images.unsplash.com/photo-1536146021566-627ce3c4d813?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Scenic rice terraces with lush green paddies stretching across hillside",
        },
        {
          src: "https://images.unsplash.com/photo-1517363898874-737b62a7db91?q=80&w=2321&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Sacred monkey forest sanctuary with ancient temples and resident monkeys",
        },
        {
          src: "https://images.unsplash.com/photo-1528265417219-1a288ae08573?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Vibrant local market stalls displaying fresh tropical fruits and flowers",
        },
        {
          src: "https://images.unsplash.com/photo-1552301726-fba9cdb27083?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Balinese dancers performing in elaborate costumes and headdresses",
        },
        {
          src: "https://images.unsplash.com/photo-1500213721845-709b85a28da0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic cliffside temple Tanah Lot silhouetted against orange sunset sky",
        },
      ],
      videos: [
        {
          url: "https://example.com/bali-retreat-preview.mp4",
          thumbnail: {
            src: "https://example.com/bali-retreat-thumb.jpg",
            alt: "Retreat Preview",
          },
          title: "Bali Wellness Experience",
        },
      ],
      virtualTour: "https://example.com/bali-retreat-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Emma Wilson",
        rating: 5,
        title: "Life-changing experience",
        content: "The perfect blend of wellness, culture, and luxury.",
        createdAt: "2024-01-08",
      },
    ],
    rating: {
      average: 4.8,
      total: 95,
      distribution: {
        5: 75,
        4: 15,
        3: 5,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "Do I need prior yoga experience?",
        answer: "No prior experience needed. Classes suit all levels.",
        category: "Activities",
      },
      {
        question: "What's included in the meals?",
        answer: "Organic vegetarian and vegan options available.",
        category: "Food",
      },
    ],

    analytics: {
      views: 12000,
      uniqueViews: 9000,
      bookmarks: 400,
      shares: 250,
      clickThroughRate: 4.2,
      averageTimeOnPage: 280,
      conversionRate: 3.1,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Tokyo Cultural Experience
    id: "tokyo-cultural",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Tokyo Cultural Experience",
    subtitle: "Tradition Meets Modernity",
    slug: "tokyo-cultural-experience",
    description:
      "Discover the perfect blend of traditional and modern Japan with guided tours of temples, anime districts, and culinary adventures.",
    largeInspirationalText:
      "Experience the wonders of Tokyo, where every corner tells a story.",
    category: [
      TravelCategory.CULTURAL,
      TravelCategory.URBAN,
      TravelCategory.FOOD_WINE,
    ],

    countries: [getCountryBySlug("japan")],
    mapZoom: 12,
    mainLocation: {
      id: 1,
      name: "Shibuya",
      type: "city",
      excerpt: "Famous for its bustling streets and nightlife.",
      coordinates: {
        latitude: 35.6586,
        longitude: 139.7017,
      },
      country: getCountryBySlug("japan"),
      image: {
        src: "https://images.unsplash.com/photo-1559245718-212fba2d22e2?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Iconic Shibuya Crossing at night with neon lights and crowds crossing the intersection",
      },
      link: {
        url: "https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html",
        title: "Explore Shibuya",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Asakusa",
        type: "landmark",
        excerpt: "Home to the historic Senso-ji Temple.",
        coordinates: {
          latitude: 35.7148,
          longitude: 139.7967,
        },
        country: getCountryBySlug("japan"),
        image: {
          src: "https://images.unsplash.com/photo-1533219534096-bd7e79e0fbc6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Historic Senso-ji Temple's Kaminarimon Gate with giant red lantern and traditional architecture",
        },
        link: {
          url: "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
          title: "Discover Asakusa",
        },
      },
      {
        id: 3,
        name: "Akihabara",
        type: "landmark",
        excerpt: "Known for its anime and gaming culture.",
        coordinates: {
          latitude: 35.6996,
          longitude: 139.7745,
        },
        country: getCountryBySlug("japan"),
        image: {
          src: "https://images.unsplash.com/photo-1584117992567-a84ca619bb99?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Vibrant Akihabara street with colorful anime advertisements and electronic stores",
        },
        link: {
          url: "https://www.gotokyo.org/en/destinations/central-tokyo/akihabara/index.html",
          title: "Experience Akihabara",
        },
      },
      {
        id: 4,
        name: "Shinjuku",
        type: "city",
        excerpt: "Modern entertainment district with towering skyscrapers.",
        coordinates: {
          latitude: 35.6938,
          longitude: 139.7034,
        },
        country: getCountryBySlug("japan"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1722795256346-446f8f846b9e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Shinjuku's neon-lit streets and skyscrapers illuminated at night",
        },
        link: {
          url: "https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html",
          title: "Visit Shinjuku",
        },
      },
      {
        id: 5,
        name: "Tsukiji",
        type: "landmark",
        excerpt: "Famous for its outer market and fresh sushi restaurants.",
        coordinates: {
          latitude: 35.6654,
          longitude: 139.7707,
        },
        country: getCountryBySlug("japan"),
        image: {
          src: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=3480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional sushi chef preparing fresh seafood at Tsukiji Market",
        },
        link: {
          url: "https://www.gotokyo.org/en/destinations/central-tokyo/tsukiji/index.html",
          title: "Explore Tsukiji",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Shibuya",
          type: "city",
          excerpt: "Famous for its bustling streets and nightlife.",
          coordinates: {
            latitude: 35.6586,
            longitude: 139.7017,
          },
          country: getCountryBySlug("japan"),
        },
        activities: [
          {
            id: "tokyo-001",
            name: "Shibuya Crossing Experience",
            description: "World's busiest pedestrian crossing",
            schedule: { duration: { value: 60, unit: "minutes" } },
            // included: true,
          },
          {
            id: "tokyo-002",
            name: "Sushi Making Class",
            description: "Traditional sushi preparation lessons",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-03-15", "2024-04-01", "2024-04-15"],
    endDates: ["2024-03-21", "2024-04-07", "2024-04-21"],

    activities: [
      {
        id: "tokyo-003",
        name: "Temple Tours",
        description: "Visit ancient temples and shrines",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
      {
        id: "tokyo-004",
        name: "Anime District Tour",
        description: "Explore Akihabara's anime culture",
        schedule: { duration: { value: 180, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Authentic sushi experiences",
      "Traditional tea ceremonies",
      "Modern technology districts",
      "Ancient temples and shrines",
    ],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Local guide",
      "Public transport pass",
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
    ],

    culturalNotes: {
      customs: [
        "Bow when greeting",
        "Remove shoes indoors",
        "No tipping custom",
      ],
      etiquette: [
        "Queue orderly",
        "Quiet on public transport",
        "Use chopsticks properly",
      ],
      localPhrases: [
        {
          original: "こんにちは",
          pronunciation: "Konnichiwa",
          translation: "Hello",
        },
        {
          original: "ありがとう",
          pronunciation: "Arigatou",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Tourist visa required for many nationalities"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Hotel reservations"],
      physical: ["Ability to walk long distances", "Comfortable with crowds"],
    },

    pricing: {
      basePrice: { amount: 2899, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Accommodation",
      //   "Breakfast daily",
      //   "Guide services",
      //   "Transport pass",
      // ],
      // supplements: {
      //   singleRoom: 600,
      //   peakSeason: 400,
      // },
      discounts: [
        {
          size: 200,
          discount: 150,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-03-15",
        endDate: "2024-03-21",
        spotsTotal: 12,
        spotsRemaining: 8,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1711465582458-54909c517a2a?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Tokyo Skyline",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1559245718-212fba2d22e2?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Vibrant Shibuya Crossing at night with neon lights and crowds of people crossing",
        },
        {
          src: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Japanese temple gate with Mount Fuji in background during cherry blossom season",
        },
        {
          src: "https://images.unsplash.com/photo-1533219534096-bd7e79e0fbc6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Busy alleyway in Tokyo with traditional lanterns and modern neon signs at night",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1722795256346-446f8f846b9e?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Modern Tokyo skyline view at twilight with Tokyo Tower illuminated in orange",
        },
        {
          src: "https://images.unsplash.com/photo-1573455494060-c5595004fb6c?q=80&w=3480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Colorful display of fresh sushi and sashimi at Tsukiji fish market",
        },
        {
          src: "https://images.unsplash.com/photo-1522850403397-b0c8f2f75451?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Peaceful Zen garden with carefully raked sand and stone arrangements",
        },
        {
          src: "https://images.unsplash.com/photo-1584117992567-a84ca619bb99?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "High-tech Akihabara district with anime advertisements and electronic stores",
        },
        {
          src: "https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Japanese garden with red bridge and autumn maple trees",
        },
      ],
      videos: [
        {
          url: "https://example.com/tokyo-preview.mp4",
          thumbnail: {
            src: "https://example.com/tokyo-thumb.jpg",
            alt: "Tokyo Experience Preview",
          },
          title: "Tokyo Cultural Experience Preview",
        },
      ],
      virtualTour: "https://example.com/tokyo-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Michael Chang",
        rating: 5,
        title: "Perfect blend of old and new Japan",
        content:
          "Incredible experience with knowledgeable guides and amazing food.",
        createdAt: "2024-01-12",
      },
    ],
    rating: {
      average: 4.7,
      total: 85,
      distribution: {
        5: 60,
        4: 20,
        3: 5,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "Is English widely spoken?",
        answer: "English is spoken in major tourist areas and by guides.",
        category: "Language",
      },
      {
        question: "How much walking is involved?",
        answer: "Expect to walk 5-8 kilometers daily.",
        category: "Physical Activity",
      },
    ],

    seo: {
      title: "Tokyo Cultural Experience | Modern & Traditional Japan Tour",
      description:
        "Immerse yourself in Japanese culture with our comprehensive Tokyo tour package.",
      keywords: [
        "Tokyo tour",
        "Japanese culture",
        "cultural experience",
        "Japan travel",
      ],
      canonicalUrl: "https://example.com/trips/tokyo-cultural",
      ogImage: {
        src: "https://example.com/tokyo-og.jpg",
        alt: "Tokyo Cultural Experience",
      },
    },
    analytics: {
      views: 10000,
      uniqueViews: 7500,
      bookmarks: 350,
      shares: 200,
      clickThroughRate: 3.8,
      averageTimeOnPage: 260,
      conversionRate: 2.5,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Tanzania Safari Journey
    id: "safari-tanzania",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Tanzania Safari Journey",
    subtitle: "Witness Nature's Majesty",
    slug: "tanzania-safari-journey",
    description:
      "Witness the great migration in the Serengeti and experience luxury camping under the African stars.",
    largeInspirationalText: "Experience the thrill of the wild.",
    category: [
      TravelCategory.WILDLIFE,
      TravelCategory.ADVENTURE,
      TravelCategory.LUXURY,
    ],
    countries: [getCountryBySlug("tanzania")],
    mapZoom: 6,
    mainLocation: {
      id: 1,
      name: "Serengeti National Park",
      type: "nature",
      excerpt: "Famous for its wildlife and the Great Migration.",
      coordinates: {
        latitude: -2.3333,
        longitude: 34.8333,
      },
      country: getCountryBySlug("tanzania"),
      image: {
        src: "https://plus.unsplash.com/premium_photo-1664304476568-0266b152bf9c?q=80&w=3487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Great Migration spectacle with thousands of zebras and wildebeest crossing Serengeti plains",
      },
      link: {
        url: "https://www.tanzaniaparks.go.tz/national_parks/serengeti-national-park",
        title: "Explore Serengeti",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Ngorongoro Crater",
        type: "nature",
        excerpt: "One of the world's natural wonders.",
        coordinates: {
          latitude: -3.1884,
          longitude: 35.59,
        },
        country: getCountryBySlug("tanzania"),
        image: {
          src: "https://images.unsplash.com/photo-1516494982030-fda424f96b59?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Panoramic view of Ngorongoro Crater with wildlife grazing on the crater floor at sunset",
        },
        link: {
          url: "https://www.ncaa.go.tz/",
          title: "Discover Ngorongoro",
        },
      },
      {
        id: 3,
        name: "Tarangire National Park",
        type: "nature",
        excerpt: "Known for its large elephant population.",
        coordinates: {
          latitude: -3.8156,
          longitude: 35.7465,
        },
        country: getCountryBySlug("tanzania"),
        image: {
          src: "https://images.unsplash.com/photo-1645494797561-0f3c1fb1bbec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Herd of African elephants walking among ancient baobab trees in Tarangire National Park",
        },
        link: {
          url: "https://www.tanzaniaparks.go.tz/national_parks/tarangire-national-park",
          title: "Visit Tarangire",
        },
      },
      {
        id: 4,
        name: "Mount Kilimanjaro",
        type: "nature",
        excerpt:
          "Africa's highest peak and world's highest free-standing mountain.",
        coordinates: {
          latitude: -3.0674,
          longitude: 37.3556,
        },
        country: getCountryBySlug("tanzania"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1664304370557-233bccc0ac85?q=80&w=3480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic snow-capped peak of Mount Kilimanjaro rising above the African savanna",
        },
        link: {
          url: "https://www.tanzaniaparks.go.tz/national_parks/kilimanjaro-national-park",
          title: "Climb Kilimanjaro",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Serengeti National Park",
          type: "nature",
          excerpt: "Famous for its wildlife and the Great Migration.",
          coordinates: {
            latitude: -2.3333,
            longitude: 34.8333,
          },
          country: getCountryBySlug("tanzania"),
        },
        activities: [
          {
            id: "tz-001",
            name: "Welcome Briefing",
            description: "Safari orientation and safety briefing",
            schedule: { duration: { value: 60, unit: "minutes" } },
            // included: true,
          },
          {
            id: "tz-002",
            name: "Evening Game Drive",
            description: "First wildlife viewing experience",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-06-15", "2024-07-01", "2024-07-15"],
    endDates: ["2024-06-22", "2024-07-08", "2024-07-22"],

    activities: [
      {
        id: "tz-003",
        name: "Game Drives",
        description: "Daily wildlife viewing expeditions",
        schedule: { duration: { value: 360, unit: "minutes" } },
        // included: true,
      },
      {
        id: "tz-004",
        name: "Maasai Village Visit",
        description: "Cultural interaction with local tribe",
        schedule: { duration: { value: 180, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Great Migration viewing",
      "Big Five wildlife",
      "Luxury camping",
      "Maasai culture",
    ],
    included: [
      "Luxury tented accommodation",
      "All meals",
      "Game drives",
      "Park fees",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Personal items",
    ],

    culturalNotes: {
      customs: [
        "Respect wildlife",
        "Modest dress code",
        "Ask before photographing people",
      ],
      etiquette: [
        "Greet elders first",
        "Right hand for eating",
        "Respect local customs",
      ],
      localPhrases: [
        {
          original: "Jambo",
          pronunciation: "JAHM-boh",
          translation: "Hello",
        },
        {
          original: "Asante",
          pronunciation: "ah-SAHN-teh",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Tourist visa required", "Yellow fever certificate"],
      vaccines: ["Yellow fever", "Malaria prevention", "Routine vaccines"],
      insurance: ["Comprehensive travel insurance required"],
      documents: ["Valid passport", "Vaccination certificates"],
      physical: ["Comfortable with early mornings", "Basic fitness level"],
    },

    pricing: {
      basePrice: { amount: 4599, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Luxury accommodation",
      //   "All meals",
      //   "Game drives",
      //   "Professional guides",
      // ],
      // supplements: {
      //   singleRoom: 900,
      //   peakSeason: 700,
      // },
      discounts: [
        {
          size: 400,
          discount: 300,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-06-15",
        endDate: "2024-06-22",
        spotsTotal: 12,
        spotsRemaining: 6,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1645494797561-0f3c1fb1bbec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Serengeti Landscape",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1664270716975-33992d17fdb3?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Lone African lion walking through golden savanna grass in Serengeti National Park",
        },
        {
          src: "https://images.unsplash.com/photo-1645494797561-0f3c1fb1bbec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Herd of elephants crossing dusty plains with Mount Kilimanjaro in background",
        },
        {
          src: "https://images.unsplash.com/photo-1664270725996-40df8748fc90?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic giraffe family grazing on acacia trees in African savanna during sunset",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661843615544-b2c973491c8b?q=80&w=2802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Maasai warriors in vibrant red clothing performing ceremonial jump dance",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661963076203-0fda7f6ccf68?q=80&w=3396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Safari vehicle watching pride of lions resting under acacia tree in early morning light",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1664304476568-0266b152bf9c?q=80&w=3487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Zebra herd migrating across vast Serengeti plains during annual wildebeest migration",
        },
        {
          src: "https://images.unsplash.com/photo-1717402779245-7f6ad2290ec7?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Stunning African sunset over Ngorongoro Crater with silhouetted acacia trees",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661952476300-1f32e068126f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Luxury safari camp overlooking vast African plains with wildlife in distance",
        },
      ],
      videos: [
        {
          url: "https://example.com/tanzania-safari-preview.mp4",
          thumbnail: {
            src: "https://example.com/tanzania-thumb.jpg",
            alt: "Safari Preview",
          },
          title: "Tanzania Safari Experience",
        },
      ],
      virtualTour: "https://example.com/tanzania-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "David Anderson",
        rating: 5,
        title: "Once in a lifetime experience",
        content: "Incredible wildlife sightings and luxurious accommodations.",
        createdAt: "2024-01-10",
      },
    ],
    rating: {
      average: 5.0,
      total: 75,
      distribution: {
        5: 65,
        4: 10,
        3: 0,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "When is the best time to see the Great Migration?",
        answer: "June to October offers the best viewing opportunities.",
        category: "Wildlife",
      },
      {
        question: "What camera equipment should I bring?",
        answer: "A good zoom lens (minimum 300mm) is recommended.",
        category: "Photography",
      },
    ],

    seo: {
      title: "Tanzania Safari | Luxury Wildlife Experience",
      description:
        "Experience the ultimate African safari in Tanzania's renowned national parks.",
      keywords: ["Tanzania safari", "wildlife", "Serengeti", "luxury camping"],
      canonicalUrl: "https://example.com/trips/safari-tanzania",
      ogImage: {
        src: "https://example.com/tanzania-og.jpg",
        alt: "Tanzania Safari Experience",
      },
    },
    analytics: {
      views: 8000,
      uniqueViews: 6000,
      bookmarks: 450,
      shares: 300,
      clickThroughRate: 5.2,
      averageTimeOnPage: 320,
      conversionRate: 3.8,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Greek Islands Cruise
    id: "greece-islands",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Greek Islands Cruise",
    subtitle: "Sail Through Ancient Wonders",
    slug: "greek-islands-cruise",
    description:
      "Hop between the stunning Cycladic islands, exploring ancient ruins and enjoying Mediterranean cuisine.",
    largeInspirationalText: "Explore the beauty of Greece from the sea.",
    category: [
      TravelCategory.CRUISE,
      TravelCategory.CULTURAL,
      TravelCategory.BEACH,
    ],

    countries: [getCountryBySlug("greece")],
    mapZoom: 7,
    mainLocation: {
      id: 1,
      name: "Santorini",
      type: "region",
      excerpt: "Famous for its white-washed buildings and stunning sunsets.",
      coordinates: {
        latitude: 36.3932,
        longitude: 25.4615,
      },
      country: getCountryBySlug("greece"),
      image: {
        src: "https://plus.unsplash.com/premium_photo-1661915579393-fe1ea2b5b107?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Iconic blue domed church in Oia, Santorini, with panoramic caldera views at sunset",
      },
      link: {
        url: "https://www.santorini.gr/",
        title: "Discover Santorini",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Mykonos",
        type: "region",
        excerpt: "Known for its vibrant nightlife and beautiful beaches.",
        coordinates: {
          latitude: 37.4467,
          longitude: 25.3289,
        },
        country: getCountryBySlug("greece"),
        image: {
          src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Famous windmills of Mykonos at sunset with traditional Cycladic architecture",
        },
        link: {
          url: "https://www.mykonos.gr/",
          title: "Experience Mykonos",
        },
      },
      {
        id: 3,
        name: "Delos",
        type: "landmark",
        excerpt:
          "An archaeological site and the mythological birthplace of Apollo.",
        coordinates: {
          latitude: 37.3952,
          longitude: 25.2707,
        },
        country: getCountryBySlug("greece"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1661948738129-f87e7ba1f0d0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient ruins of Delos archaeological site with marble columns and historical remains",
        },
        link: {
          url: "https://www.visitgreece.gr/islands/cyclades/delos/",
          title: "Visit Delos",
        },
      },
      {
        id: 4,
        name: "Zakynthos",
        type: "region",
        excerpt: "Home to the famous Shipwreck Beach and blue caves.",
        coordinates: {
          latitude: 37.787,
          longitude: 20.8999,
        },
        country: getCountryBySlug("greece"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Iconic Navagio Beach with shipwreck surrounded by towering limestone cliffs",
        },
        link: {
          url: "https://www.grecia.info/es/islas-jonicas/zakynthos/",
          title: "Explore Zakynthos",
        },
      },
      {
        id: 5,
        name: "Milos",
        type: "region",
        excerpt:
          "Known for its unique volcanic landscapes and colorful beaches.",
        coordinates: {
          latitude: 36.747,
          longitude: 24.417,
        },
        country: getCountryBySlug("greece"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1661963725253-c0632ab8782d?q=80&w=3307&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Greek fishing village with colorful houses reflecting in crystal clear waters",
        },
        link: {
          url: "https://www.milos.gr/en/",
          title: "Discover Milos",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Santorini",
          type: "region",
          excerpt:
            "Famous for its white-washed buildings and stunning sunsets.",
          coordinates: {
            latitude: 36.3932,
            longitude: 25.4615,
          },
          country: getCountryBySlug("greece"),
        },
        activities: [
          {
            id: "gr-001",
            name: "Oia Sunset Tour",
            description: "Watch famous Santorini sunset",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
          {
            id: "gr-002",
            name: "Wine Tasting",
            description: "Local vineyard experience",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-05-15", "2024-06-01", "2024-06-15"],
    endDates: ["2024-05-22", "2024-06-08", "2024-06-22"],

    activities: [
      {
        id: "gr-003",
        name: "Island Hopping",
        description: "Cruise between islands",
        schedule: { duration: { value: 480, unit: "minutes" } },
        // included: true,
      },
      {
        id: "gr-004",
        name: "Archaeological Tours",
        description: "Guided ancient site visits",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Santorini sunset views",
      "Ancient Delos ruins",
      "Mykonos windmills",
      "Mediterranean cuisine",
    ],
    included: [
      "Cruise accommodation",
      "All meals onboard",
      "Island excursions",
      "Professional guides",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Optional activities",
      "Gratuities",
    ],

    culturalNotes: {
      customs: [
        "Respect siesta times",
        "Modest dress in churches",
        "Greet with warmth",
      ],
      etiquette: [
        "No rush culture",
        "Late dinners normal",
        "Toast saying 'Yamas'",
      ],
      localPhrases: [
        {
          original: "Καλημέρα",
          pronunciation: "Kalimera",
          translation: "Good morning",
        },
        {
          original: "Ευχαριστώ",
          pronunciation: "Efharisto",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Schengen visa for non-EU citizens"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Return tickets"],
      physical: ["Able to walk on uneven surfaces", "Comfortable on boats"],
    },

    pricing: {
      basePrice: { amount: 3299, currency: "EUR" },
      // pricePerPerson: true,
      // included: [
      //   "Cabin accommodation",
      //   "All meals",
      //   "Guided tours",
      //   "Port transfers",
      // ],
      // supplements: {
      //   singleCabin: 800,
      //   peakSeason: 500,
      // },
      discounts: [
        {
          size: 300,
          discount: 200,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-05-15",
        endDate: "2024-05-22",
        spotsTotal: 20,
        spotsRemaining: 12,
      },
    ],

    media: {
      coverImage: {
        src: "https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Greek Islands",
      },
      gallery: [
        {
          src: "https://plus.unsplash.com/premium_photo-1661915579393-fe1ea2b5b107?q=80&w=3300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Classic blue domed church overlooking Santorini's caldera at sunset",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661962321084-64b087bf7c5d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Whitewashed buildings cascading down hillside with Aegean Sea views in Oia",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661948738129-f87e7ba1f0d0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Narrow cobblestone alley with traditional Greek architecture and blooming bougainvillea",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1688410049290-d7394cc7d5df?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Crystal clear turquoise waters of Navagio Beach with famous shipwreck in Zakynthos",
        },
        {
          src: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Panoramic view of Mykonos windmills at golden hour overlooking the harbor",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661963725253-c0632ab8782d?q=80&w=3307&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Charming seaside taverna with blue chairs and tables by the Mediterranean Sea",
        },
        {
          src: "https://images.unsplash.com/photo-1637170479800-47b5eeae5654?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "White and blue Greek Orthodox church with bell tower against clear blue sky",
        },
        {
          src: "https://images.unsplash.com/photo-1635430162812-bcfd1d75790b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Picturesque sunset over Santorini with traditional cycladic architecture silhouettes",
        },
      ],
      videos: [
        {
          url: "https://example.com/greek-islands-preview.mp4",
          thumbnail: {
            src: "https://example.com/greek-islands-thumb.jpg",
            alt: "Greek Islands Preview",
          },
          title: "Greek Islands Cruise Experience",
        },
      ],
      virtualTour: "https://example.com/greek-islands-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Sophie Martin",
        rating: 5,
        title: "Dream vacation come true",
        content: "Perfect combination of relaxation and cultural exploration.",
        createdAt: "2024-01-07",
      },
    ],
    rating: {
      average: 4.8,
      total: 90,
      distribution: {
        5: 70,
        4: 15,
        3: 5,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "Is seasickness common?",
        answer:
          "Waters are generally calm but bring medication if prone to motion sickness.",
        category: "Health",
      },
      {
        question: "What's the best time to visit?",
        answer: "May to September offers the best weather conditions.",
        category: "Planning",
      },
    ],

    seo: {
      title: "Greek Islands Cruise | Luxury Mediterranean Experience",
      description:
        "Experience the magic of the Greek Islands on our luxury cruise.",
      keywords: ["Greek Islands", "cruise", "Santorini", "Mykonos"],
      canonicalUrl: "https://example.com/trips/greece-islands",
      ogImage: {
        src: "https://example.com/greek-islands-og.jpg",
        alt: "Greek Islands Cruise",
      },
    },
    analytics: {
      views: 11000,
      uniqueViews: 8500,
      bookmarks: 600,
      shares: 400,
      clickThroughRate: 4.5,
      averageTimeOnPage: 300,
      conversionRate: 3.2,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Machu Picchu Explorer
    id: "peru-machu",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Machu Picchu Explorer",
    subtitle: "Journey to the Lost City",
    slug: "machu-picchu-explorer",
    description:
      "Trek the historic Inca Trail and discover the mysteries of Machu Picchu with expert local guides.",
    largeInspirationalText: "Unravel the secrets of the Inca civilization.",
    category: [
      TravelCategory.ADVENTURE,
      TravelCategory.CULTURAL,
      TravelCategory.EDUCATIONAL,
    ],

    countries: [getCountryBySlug("peru")],
    mapZoom: 7,

    mainLocation: {
      id: 1,
      name: "Machu Picchu",
      type: "landmark",
      excerpt: "Ancient Inca city set high in the Andes.",
      coordinates: {
        latitude: -13.1631,
        longitude: -72.545,
        altitude: 2430,
      },
      country: getCountryBySlug("peru"),
      image: {
        src: "https://images.unsplash.com/photo-1720766397488-81a83b54c32c?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Iconic view of Machu Picchu citadel at sunrise with Huayna Picchu mountain rising behind ancient stone structures",
      },
      link: {
        url: "https://www.machupicchu.gob.pe/",
        title: "Explore Machu Picchu",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Cusco",
        type: "city",
        excerpt: "Former capital of the Inca Empire with rich history.",
        coordinates: {
          latitude: -13.5319,
          longitude: -71.9675,
          altitude: 3399,
        },
        country: getCountryBySlug("peru"),
        image: {
          src: "https://images.unsplash.com/photo-1546458544-801cbd163951?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cusco's historic Plaza de Armas with colonial cathedral and illuminated fountain at dusk",
        },
        link: {
          url: "https://www.cuscoperu.com/en/travel/cusco/",
          title: "Discover Cusco",
        },
      },
      {
        id: 3,
        name: "Sacred Valley",
        type: "region",
        excerpt: "A region of stunning landscapes and ancient Incan sites.",
        coordinates: {
          latitude: -13.3167,
          longitude: -72.0975,
          altitude: 2792,
        },
        country: getCountryBySlug("peru"),
        image: {
          src: "https://images.unsplash.com/photo-1473455811944-fdd1b0f282f3?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Panoramic view of the Sacred Valley with ancient agricultural terraces and Andes mountains",
        },
        link: {
          url: "https://www.peru.travel/pe/atractivos/valle-sagrado",
          title: "Visit Sacred Valley",
        },
      },
      {
        id: 4,
        name: "Rainbow Mountain",
        type: "landmark",
        excerpt: "Stunning colored mountain range formed by mineral deposits.",
        coordinates: {
          latitude: -13.8697,
          longitude: -71.303,
          altitude: 5200,
        },
        country: getCountryBySlug("peru"),
        image: {
          src: "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=3390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Vinicunca Rainbow Mountain's vibrant natural colors striped across Andean peaks",
        },
        link: {
          url: "https://www.rainbowmountainperu.com/",
          title: "Experience Rainbow Mountain",
        },
      },
      {
        id: 5,
        name: "Ollantaytambo",
        type: "landmark",
        excerpt:
          "Ancient Inca fortress town with impressive stone architecture.",
        coordinates: {
          latitude: -13.2585,
          longitude: -72.2627,
          altitude: 2792,
        },
        country: getCountryBySlug("peru"),
        image: {
          src: "https://images.unsplash.com/photo-1658755633537-fd67f2773d4d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Massive stone terraces and ruins of Ollantaytambo Inca fortress with mountain backdrop",
        },
        link: {
          url: "https://www.cuscoperu.com/en/travel/sacred-valley-of-the-incas/archaeological-centers/ollantaytambo/",
          title: "Discover Ollantaytambo",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 2,
          name: "Cusco",
          type: "city",
          excerpt: "Former capital of the Inca Empire with rich history.",
          coordinates: {
            latitude: -13.5319,
            longitude: -71.9675,
            altitude: 3399,
          },
          country: getCountryBySlug("peru"),
        },
        activities: [
          {
            id: "mp-001",
            name: "Cusco City Tour",
            description: "Historical city exploration",
            schedule: { duration: { value: 240, unit: "minutes" } },
            // included: true,
          },
          {
            id: "mp-002",
            name: "Welcome Dinner",
            description: "Traditional Peruvian cuisine",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-04-15", "2024-05-01", "2024-05-15"],
    endDates: ["2024-04-21", "2024-05-07", "2024-05-21"],

    activities: [
      {
        id: "mp-003",
        name: "Inca Trail Trek",
        description: "4-day trek to Machu Picchu",
        schedule: { duration: { value: 960, unit: "minutes" } },
        // included: true,
      },
      {
        id: "mp-004",
        name: "Archaeological Tours",
        description: "Guided ruins exploration",
        schedule: { duration: { value: 360, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Machu Picchu sunrise",
      "Inca Trail trek",
      "Sacred Valley exploration",
      "Cusco historical sites",
    ],
    included: [
      "Professional guides",
      "All accommodations",
      "Most meals",
      "Entrance fees",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal equipment",
      "Some meals",
    ],

    culturalNotes: {
      customs: [
        "Respect sacred sites",
        "Ask before photographing locals",
        "Participate in ceremonies respectfully",
      ],
      etiquette: [
        "Greet with handshakes",
        "Learn basic Spanish phrases",
        "Respect altitude adjustment",
      ],
      localPhrases: [
        {
          original: "Hola",
          pronunciation: "OH-lah",
          translation: "Hello",
        },
        {
          original: "Gracias",
          pronunciation: "GRAH-see-ahs",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Tourist visa waiver for many countries"],
      vaccines: ["Altitude medication recommended", "Routine vaccines"],
      insurance: ["Travel insurance mandatory"],
      documents: ["Valid passport", "Immigration card"],
      physical: ["Good fitness level", "Altitude acclimation"],
    },

    pricing: {
      basePrice: { amount: 2799, currency: "USD" },
      // pricePerPerson: true,
      // included: ["Guided trek", "Equipment", "Accommodations", "Most meals"],
      // supplements: {
      //   singleRoom: 400,
      //   peakSeason: 300,
      // },
      discounts: [
        {
          size: 200,
          discount: 150,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-04-15",
        endDate: "2024-04-21",
        spotsTotal: 16,
        spotsRemaining: 10,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1720766397488-81a83b54c32c?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Machu Picchu",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1658755633537-fd67f2773d4d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Machu Picchu ancient citadel at dawn with Huayna Picchu mountain in background and misty peaks",
        },
        {
          src: "https://images.unsplash.com/photo-1648862134614-097ffcea8059?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Stone terraces and agricultural platforms of Machu Picchu with dramatic mountain views",
        },
        {
          src: "https://images.unsplash.com/photo-1546458544-801cbd163951?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cusco's Plaza de Armas with colonial architecture and cathedral illuminated at night",
        },
        {
          src: "https://images.unsplash.com/photo-1568805647831-79a19e414f21?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Colorful traditional Peruvian textiles with intricate patterns displayed in market",
        },
        {
          src: "https://images.unsplash.com/photo-1720766397488-81a83b54c32c?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient Incan stone wall with precise mortarless joints in Cusco's historic center",
        },
        {
          src: "https://images.unsplash.com/photo-1545330785-15356daae141?q=80&w=3390&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Llama grazing on terraces of Machu Picchu with morning fog rolling through valleys",
        },
        {
          src: "https://images.unsplash.com/photo-1717801556175-3a22bd4a0360?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Sacred Valley panoramic view with Andes mountains and agricultural terraces",
        },
        {
          src: "https://images.unsplash.com/photo-1552254734-af3260181c6e?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Rainbow Mountain (Vinicunca) with its colorful mineral stripes against blue sky",
        },
      ],
      videos: [
        {
          url: "https://example.com/machu-picchu-preview.mp4",
          thumbnail: {
            src: "https://example.com/machu-picchu-thumb.jpg",
            alt: "Machu Picchu Preview",
          },
          title: "Machu Picchu Adventure",
        },
      ],
      virtualTour: "https://example.com/machu-picchu-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "James Wilson",
        rating: 5,
        title: "Life-changing experience",
        content: "The trek was challenging but incredibly rewarding.",
        createdAt: "2024-01-09",
      },
    ],
    rating: {
      average: 4.9,
      total: 80,
      distribution: {
        5: 65,
        4: 12,
        3: 3,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "How difficult is the trek?",
        answer: "Moderate to challenging, requires good fitness level.",
        category: "Physical",
      },
      {
        question: "How do I prepare for altitude?",
        answer: "Arrive 2-3 days early in Cusco for acclimatization.",
        category: "Health",
      },
    ],

    seo: {
      title: "Machu Picchu Explorer | Ultimate Inca Trail Experience",
      description:
        "Discover the mysteries of Machu Picchu on our guided trek adventure.",
      keywords: ["Machu Picchu", "Inca Trail", "Peru trek", "ancient ruins"],
      canonicalUrl: "https://example.com/trips/peru-machu",
      ogImage: {
        src: "https://example.com/machu-picchu-og.jpg",
        alt: "Machu Picchu Explorer",
      },
    },
    analytics: {
      views: 9500,
      uniqueViews: 7000,
      bookmarks: 550,
      shares: 350,
      clickThroughRate: 4.8,
      averageTimeOnPage: 310,
      conversionRate: 3.5,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Iceland Aurora Adventure
    id: "iceland-aurora",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Iceland Aurora Adventure",
    subtitle: "Chase the Northern Lights",
    slug: "iceland-aurora-adventure",
    description:
      "Chase the Northern Lights and explore Iceland's dramatic landscapes, from geysers to glaciers.",
    largeInspirationalText: "Experience the magic of Iceland.",
    category: [
      TravelCategory.ADVENTURE,
      TravelCategory.ECOTOURISM,
      TravelCategory.PHOTOGRAPHY,
    ],
    countries: [getCountryBySlug("iceland")],
    mapZoom: 7,
    mainLocation: {
      id: 1,
      name: "Reykjavik",
      type: "city",
      excerpt: "The vibrant capital of Iceland.",
      coordinates: {
        latitude: 64.1355,
        longitude: -21.8954,
      },
      country: getCountryBySlug("iceland"),
      image: {
        src: "https://images.unsplash.com/photo-1529888401193-0185ba39ba15?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Colorful city of Reykjavik with Hallgrímskirkja church rising above the cityscape",
      },
      link: {
        url: "https://visitreykjavik.is/",
        title: "Discover Reykjavik",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Þingvellir National Park",
        type: "nature",
        excerpt: "A UNESCO World Heritage site with stunning landscapes.",
        coordinates: {
          latitude: 64.2559,
          longitude: -21.129,
        },
        country: getCountryBySlug("iceland"),
        image: {
          src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic rift valley of Þingvellir where two tectonic plates meet",
        },
        link: {
          url: "https://www.thingvellir.is/en/",
          title: "Explore Þingvellir",
        },
      },
      {
        id: 3,
        name: "Vatnajökull National Park",
        type: "nature",
        excerpt: "Home to Europe's largest glacier.",
        coordinates: {
          latitude: 64.0164,
          longitude: -16.9759,
        },
        country: getCountryBySlug("iceland"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1675484743424-288808877324?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ice cave within Vatnajökull glacier with crystal blue ice formations",
        },
        link: {
          url: "https://www.vatnajokulsthjodgardur.is/en",
          title: "Visit Vatnajökull",
        },
      },
      {
        id: 4,
        name: "Jökulsárlón",
        type: "nature",
        excerpt: "Spectacular glacial lagoon with floating icebergs.",
        coordinates: {
          latitude: 64.0784,
          longitude: -16.2306,
        },
        country: getCountryBySlug("iceland"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1664298686680-dd1d0e2a9f13?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Diamond Beach near Jökulsárlón with black sand and crystal ice blocks",
        },
        link: {
          url: "https://icelagoon.is/",
          title: "Experience Jökulsárlón",
        },
      },
      {
        id: 5,
        name: "Kirkjufell",
        type: "landmark",
        excerpt: "Iceland's most photographed mountain with nearby waterfalls.",
        coordinates: {
          latitude: 64.9407,
          longitude: -23.3069,
        },
        country: getCountryBySlug("iceland"),
        image: {
          src: "https://images.unsplash.com/photo-1576277747552-32882dcf0d9e?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Iconic Kirkjufell mountain reflected in still waters during sunset",
        },
        link: {
          url: "https://www.west.is/en/place/kirkjufell-mountain",
          title: "Discover Kirkjufell",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Reykjavik",
          type: "city",
          excerpt: "The vibrant capital of Iceland.",
          coordinates: {
            latitude: 64.1355,
            longitude: -21.8954,
          },
          country: getCountryBySlug("iceland"),
        },
        activities: [
          {
            id: "ice-001",
            name: "City Tour",
            description: "Explore Reykjavik highlights",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
          {
            id: "ice-002",
            name: "Aurora Photography Workshop",
            description: "Learn northern lights photography",
            schedule: { duration: { value: 240, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-09-15", "2024-10-01", "2024-10-15"],
    endDates: ["2024-09-21", "2024-10-07", "2024-10-21"],

    activities: [
      {
        id: "ice-003",
        name: "Northern Lights Hunt",
        description: "Guided aurora viewing excursions",
        schedule: { duration: { value: 300, unit: "minutes" } },
        // included: true,
      },
      {
        id: "ice-004",
        name: "Glacier Walk",
        description: "Guided glacier exploration",
        schedule: { duration: { value: 360, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Northern Lights viewing",
      "Golden Circle tour",
      "Glacier walking",
      "Geothermal springs",
    ],
    included: [
      "Hotel accommodation",
      "Breakfast daily",
      "Northern lights tours",
      "Photography workshops",
    ],
    excluded: [
      "International flights",
      "Personal equipment",
      "Some meals",
      "Travel insurance",
    ],

    culturalNotes: {
      customs: [
        "Remove shoes when entering homes",
        "Bathing etiquette at pools",
        "Respect nature",
      ],
      etiquette: [
        "Punctuality is valued",
        "Environmental consciousness",
        "Quiet speaking in nature",
      ],
      localPhrases: [
        {
          original: "Halló",
          pronunciation: "HAL-low",
          translation: "Hello",
        },
        {
          original: "Takk",
          pronunciation: "TAHK",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Schengen visa for non-EU citizens"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Travel insurance mandatory"],
      documents: ["Valid passport", "Return flight ticket"],
      physical: ["Moderate fitness level", "Comfort in cold weather"],
    },

    pricing: {
      basePrice: { amount: 3499, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Accommodation",
      //   "Guided tours",
      //   "Photography workshops",
      //   "Some meals",
      // ],
      // supplements: {
      //   singleRoom: 600,
      //   peakSeason: 400,
      // },
      discounts: [
        {
          size: 250,
          discount: 200,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-09-15",
        endDate: "2024-09-21",
        spotsTotal: 12,
        spotsRemaining: 8,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Northern Lights over Iceland",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1529888401193-0185ba39ba15?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Stunning Kirkjufell mountain reflected in calm waters during midnight sun",
        },
        {
          src: "https://images.unsplash.com/photo-1465353471565-b77e538f34c9?q=80&w=2880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Powerful Seljalandsfoss waterfall with pathway behind the cascading water",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Northern Lights dancing over snow-covered landscape with starry sky",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1675484743424-288808877324?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Crystal-blue ice cave interior with smooth, sculpted walls and natural light",
        },
        {
          src: "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Black sand beach at Reynisfjara with dramatic basalt columns and sea stacks",
        },
        {
          src: "https://images.unsplash.com/photo-1455448972184-de647495d428?q=80&w=3291&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Geothermal steam rising from colorful mineral pools at Hverir geothermal area",
        },
        {
          src: "https://images.unsplash.com/photo-1491466424936-e304919aada7?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Massive Skógafoss waterfall with rainbow and tiny human figure for scale",
        },
        {
          src: "https://images.unsplash.com/photo-1498866363999-1afe374cb87f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Floating icebergs in Jökulsárlón glacier lagoon under dramatic sky",
        },
      ],
      videos: [
        {
          url: "https://example.com/iceland-preview.mp4",
          thumbnail: {
            src: "https://example.com/iceland-thumb.jpg",
            alt: "Iceland Adventure Preview",
          },
          title: "Iceland Aurora Adventure",
        },
      ],
      virtualTour: "https://example.com/iceland-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Lisa Thompson",
        rating: 5,
        title: "Magical northern lights experience",
        content: "Incredible adventure with perfect photo opportunities.",
        createdAt: "2024-01-08",
      },
    ],
    rating: {
      average: 4.8,
      total: 70,
      distribution: {
        5: 55,
        4: 12,
        3: 3,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "When is the best time to see the Northern Lights?",
        answer: "September to April offers the best viewing opportunities.",
        category: "Planning",
      },
      {
        question: "What camera equipment should I bring?",
        answer: "DSLR camera, tripod, and wide-angle lens recommended.",
        category: "Photography",
      },
    ],

    seo: {
      title: "Iceland Aurora Adventure | Northern Lights Photography Tour",
      description: "Experience the magic of the Northern Lights in Iceland.",
      keywords: ["Northern Lights", "Iceland", "photography tour", "aurora"],
      canonicalUrl: "https://example.com/trips/iceland-aurora",
      ogImage: {
        src: "https://example.com/iceland-og.jpg",
        alt: "Iceland Aurora Adventure",
      },
    },
    analytics: {
      views: 9000,
      uniqueViews: 6800,
      bookmarks: 480,
      shares: 320,
      clickThroughRate: 4.6,
      averageTimeOnPage: 290,
      conversionRate: 3.4,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Vietnam Heritage Tour
    id: "vietnam-culture",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Vietnam Heritage Tour",
    subtitle: "Discover rich culture and history",
    slug: "vietnam-heritage-tour",
    description:
      "From Hanoi to Ho Chi Minh City, discover Vietnam's rich culture, history, and incredible cuisine.",
    largeInspirationalText:
      "Embark on a journey through Vietnam's vibrant heritage.",
    category: [
      TravelCategory.CULTURAL,
      TravelCategory.FOOD_WINE,
      TravelCategory.EDUCATIONAL,
    ],
    countries: [getCountryBySlug("vietnam")],
    mapZoom: 5,
    mainLocation: {
      id: 1,
      name: "Hanoi",
      type: "city",
      excerpt: "The capital city known for its centuries-old architecture.",
      coordinates: {
        latitude: 21.0285,
        longitude: 105.8542,
      },
      country: getCountryBySlug("vietnam"),
      image: {
        src: "https://images.unsplash.com/photo-1553851919-596510268b99?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Vibrant street life in Hanoi's Old Quarter with traditional vendors and local cuisine",
      },
      link: {
        url: "https://vietnam.travel/places-to-go/northern-vietnam/ha-noi",
        title: "Discover Hanoi",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Hoi An",
        type: "city",
        excerpt:
          "Ancient town known for its preserved architecture and vibrant lanterns.",
        coordinates: {
          latitude: 15.8801,
          longitude: 108.338,
        },
        country: getCountryBySlug("vietnam"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1690960644375-6f2399a08ebc?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional boats with colorful lanterns on Thu Bon River in Hoi An Ancient Town",
        },
        link: {
          url: "https://vietnam.travel/places-to-go/central-vietnam/hoi-an",
          title: "Experience Hoi An",
        },
      },
      {
        id: 3,
        name: "Ho Chi Minh City",
        type: "city",
        excerpt: "The largest city known for its bustling atmosphere.",
        coordinates: {
          latitude: 10.8231,
          longitude: 106.6297,
        },
        country: getCountryBySlug("vietnam"),
        image: {
          src: "https://images.unsplash.com/photo-1670313582227-9e7494abe679?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dynamic nightlife and traffic trails in downtown Ho Chi Minh City",
        },
        link: {
          url: "https://www.vietnam.travel/places-to-go/southern-vietnam/ho-chi-minh-city",
          title: "Explore Ho Chi Minh City",
        },
      },
      {
        id: 4,
        name: "Ha Long Bay",
        type: "nature",
        excerpt:
          "UNESCO World Heritage site with thousands of limestone islands.",
        coordinates: {
          latitude: 20.9101,
          longitude: 107.1839,
        },
        country: getCountryBySlug("vietnam"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1692731798042-c0cfec5c38fa?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dramatic limestone karsts rising from emerald waters in Ha Long Bay",
        },
        link: {
          url: "https://vietnam.travel/places-to-go/northern-vietnam/ha-long",
          title: "Visit Ha Long Bay",
        },
      },
      {
        id: 5,
        name: "Sapa",
        type: "nature",
        excerpt: "Mountain town famous for rice terraces and ethnic culture.",
        coordinates: {
          latitude: 22.3364,
          longitude: 103.8438,
        },
        country: getCountryBySlug("vietnam"),
        image: {
          src: "https://images.unsplash.com/photo-1568436144035-1f476075bed2?q=80&w=3562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Stunning terraced rice fields cascading down mountainsides in Sapa Valley",
        },
        link: {
          url: "https://www.vietnam.travel/places-to-go/northern-vietnam/sapa",
          title: "Discover Sapa",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Hanoi",
          type: "city",
          excerpt: "The capital city known for its centuries-old architecture.",
          coordinates: {
            latitude: 21.0285,
            longitude: 105.8542,
          },
          country: getCountryBySlug("vietnam"),
        },
        activities: [
          {
            id: "vn-001",
            name: "Old Quarter Walking Tour",
            description: "Explore historic Hanoi",
            schedule: { duration: { value: 240, unit: "minutes" } },
            // included: true,
          },
          {
            id: "vn-002",
            name: "Street Food Tour",
            description: "Traditional Vietnamese cuisine",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-02-15", "2024-03-01", "2024-03-15"],
    endDates: ["2024-02-24", "2024-03-10", "2024-03-24"],

    activities: [
      {
        id: "vn-003",
        name: "Cooking Classes",
        description: "Learn Vietnamese cuisine",
        schedule: { duration: { value: 180, unit: "minutes" } },
        // included: true,
      },
      {
        id: "vn-004",
        name: "Temple Visits",
        description: "Explore ancient temples",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Hanoi's Old Quarter",
      "Hoi An Ancient Town",
      "Cu Chi Tunnels",
      "Mekong Delta",
    ],
    included: [
      "Hotel accommodation",
      "Daily breakfast",
      "Cooking classes",
      "Local guides",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Some meals",
    ],

    culturalNotes: {
      customs: [
        "Remove shoes before entering homes",
        "Dress modestly at temples",
        "Respect elders",
      ],
      etiquette: [
        "Use both hands when passing items",
        "Ask permission before photos",
        "No public displays of affection",
      ],
      localPhrases: [
        {
          original: "Xin chào",
          pronunciation: "sin chow",
          translation: "Hello",
        },
        {
          original: "Cảm ơn",
          pronunciation: "kam un",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Visa required for most nationalities"],
      vaccines: ["Hepatitis A", "Typhoid recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Visa"],
      physical: ["Comfortable with walking", "Heat tolerance"],
    },

    pricing: {
      basePrice: { amount: 1799, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Accommodation",
      //   "Domestic flights",
      //   "Cooking classes",
      //   "Guided tours",
      // ],
      // supplements: {
      //   singleRoom: 400,
      //   peakSeason: 300,
      // },
      discounts: [
        {
          size: 150,
          discount: 100,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-02-15",
        endDate: "2024-02-24",
        spotsTotal: 16,
        spotsRemaining: 10,
      },
    ],

    media: {
      coverImage: {
        src: "https://plus.unsplash.com/premium_photo-1661854008793-8ce54b2e622b?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Vietnam Heritage",
      },
      gallery: [
        {
          src: "https://plus.unsplash.com/premium_photo-1692731797429-29f36ab2bd68?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Terraced rice fields in Mu Cang Chai with morning mist rolling through mountains",
        },
        {
          src: "https://images.unsplash.com/photo-1527577440030-436a36b07401?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Vietnamese wooden boats with lanterns floating in Hoi An Ancient Town at dusk",
        },
        {
          src: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Limestone karst formations rising from emerald waters in Ha Long Bay",
        },
        {
          src: "https://images.unsplash.com/photo-1553851919-596510268b99?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Bustling street food market in Hanoi's Old Quarter with local vendors",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1691960159059-04976913256a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Woman in traditional conical hat harvesting rice in vibrant green paddy field",
        },
        {
          src: "https://images.unsplash.com/photo-1489659429806-4069d3fcde9a?q=80&w=3514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Historic Imperial City in Hue with traditional Vietnamese architecture and red gates",
        },
        {
          src: "https://images.unsplash.com/photo-1526139334526-f591a54b477c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Motorcycles streaming through busy intersection in Ho Chi Minh City at night",
        },
        {
          src: "https://images.unsplash.com/photo-1537113235536-4be2d071fa33?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ancient temple complex at My Son Sanctuary with intricate brick carvings",
        },
      ],
      videos: [
        {
          url: "https://example.com/vietnam-preview.mp4",
          thumbnail: {
            src: "https://example.com/vietnam-thumb.jpg",
            alt: "Vietnam Heritage Preview",
          },
          title: "Vietnam Cultural Experience",
        },
      ],
      virtualTour: "https://example.com/vietnam-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Robert Chen",
        rating: 5,
        title: "Perfect cultural immersion",
        content: "Amazing food, friendly people, and rich history.",
        createdAt: "2024-01-11",
      },
    ],
    rating: {
      average: 4.7,
      total: 85,
      distribution: {
        5: 65,
        4: 15,
        3: 5,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "Is the food very spicy?",
        answer: "Spice levels can be adjusted to preference.",
        category: "Food",
      },
      {
        question: "What's the best time to visit?",
        answer: "October to December offers the best weather.",
        category: "Planning",
      },
    ],

    seo: {
      title: "Vietnam Heritage Tour | Cultural & Culinary Experience",
      description:
        "Experience Vietnam's rich cultural heritage and amazing cuisine.",
      keywords: [
        "Vietnam tour",
        "cultural heritage",
        "Vietnamese food",
        "Hanoi",
      ],
      canonicalUrl: "https://example.com/trips/vietnam-culture",
      ogImage: {
        src: "https://example.com/vietnam-og.jpg",
        alt: "Vietnam Heritage Tour",
      },
    },
    analytics: {
      views: 8500,
      uniqueViews: 6500,
      bookmarks: 380,
      shares: 250,
      clickThroughRate: 4.2,
      averageTimeOnPage: 270,
      conversionRate: 3.0,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Tuscany Wine Experience
    id: "tuscany-wine",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Tuscany Wine Experience",
    subtitle: "Tour historic vineyards",
    slug: "tuscany-wine-experience",
    description:
      "Tour historic vineyards, learn from master sommeliers, and enjoy the finest Italian cuisine.",
    largeInspirationalText: "Indulge in the flavors of Tuscany.",
    category: [
      TravelCategory.FOOD_WINE,
      TravelCategory.CULTURAL,
      TravelCategory.LUXURY,
    ],

    countries: [getCountryBySlug("italy")],
    mapZoom: 8,
    mainLocation: {
      id: 1,
      name: "Florence",
      type: "city",
      excerpt: "The birthplace of the Renaissance.",
      coordinates: {
        latitude: 43.7696,
        longitude: 11.2558,
      },
      country: getCountryBySlug("italy"),
      image: {
        src: "https://plus.unsplash.com/premium_photo-1661962827254-d208b6ec327f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Iconic Florence Cathedral and Brunelleschi's Dome dominating the city skyline",
      },
      link: {
        url: "https://www.visitflorence.com/",
        title: "Discover Florence",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Siena",
        type: "city",
        excerpt: "Famous for its medieval architecture.",
        coordinates: {
          latitude: 43.3188,
          longitude: 11.3308,
        },
        country: getCountryBySlug("italy"),
        image: {
          src: "https://images.unsplash.com/photo-1724061863883-f08972f72a36?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Historic Piazza del Campo in Siena with its distinctive shell shape and medieval architecture",
        },
        link: {
          url: "https://www.visittuscany.com/en/destinations/siena/",
          title: "Explore Siena",
        },
      },
      {
        id: 3,
        name: "Chianti Region",
        type: "region",
        excerpt:
          "Famous wine region known for its scenic vineyards and historic wineries.",
        coordinates: {
          latitude: 43.5847,
          longitude: 11.3147,
        },
        country: getCountryBySlug("italy"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1676496046656-cdad44276497?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Rolling hills of Chianti covered with vineyard rows and traditional Tuscan cypress trees",
        },
        link: {
          url: "https://www.visittuscany.com/en/areas/chianti/",
          title: "Visit Chianti",
        },
      },
      {
        id: 4,
        name: "Val d'Orcia",
        type: "region",
        excerpt:
          "UNESCO World Heritage site known for its picturesque landscapes.",
        coordinates: {
          latitude: 43.0237,
          longitude: 11.6164,
        },
        country: getCountryBySlug("italy"),
        image: {
          src: "https://images.unsplash.com/photo-1694974247470-1f7bf1562fbe?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Iconic Tuscan landscape of Val d'Orcia with cypress-lined roads and rolling hills",
        },
        link: {
          url: "https://www.visittuscany.com/en/areas/val-dorcia/",
          title: "Experience Val d'Orcia",
        },
      },
      {
        id: 5,
        name: "San Gimignano",
        type: "city",
        excerpt:
          "Medieval hill town famous for its historic towers and world-renowned gelato.",
        coordinates: {
          latitude: 43.4684,
          longitude: 11.0434,
        },
        country: getCountryBySlug("italy"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1690494027059-05475ed0b2fa?q=80&w=3329&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Medieval towers of San Gimignano rising above the Tuscan countryside at sunset",
        },
        link: {
          url: "https://www.visittuscany.com/en/destinations/san-gimignano/",
          title: "Discover San Gimignano",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Florence",
          type: "city",
          excerpt: "The birthplace of the Renaissance.",
          coordinates: {
            latitude: 43.7696,
            longitude: 11.2558,
          },
          country: getCountryBySlug("italy"),
        },
        activities: [
          {
            id: "tw-001",
            name: "Welcome Wine Tasting",
            description: "Introduction to Tuscan wines",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // included: true,
          },
          {
            id: "tw-002",
            name: "Florence Walking Tour",
            description: "Historical city exploration",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-05-15", "2024-06-01", "2024-06-15"],
    endDates: ["2024-05-22", "2024-06-08", "2024-06-22"],

    activities: [
      {
        id: "tw-003",
        name: "Wine Tasting Sessions",
        description: "Guided tastings at historic vineyards",
        schedule: { duration: { value: 180, unit: "minutes" } },
        // included: true,
      },
      {
        id: "tw-004",
        name: "Cooking Classes",
        description: "Traditional Tuscan cuisine",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Premium wine tastings",
      "Historic vineyard tours",
      "Tuscan cooking classes",
      "Medieval town visits",
    ],
    included: [
      "Luxury accommodation",
      "Wine tastings",
      "Cooking classes",
      "Local transportation",
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Additional wines",
      "Travel insurance",
    ],

    culturalNotes: {
      customs: [
        "Wine tasting etiquette",
        "Proper dining customs",
        "Respect siesta times",
      ],
      etiquette: [
        "Greet with 'Buongiorno'",
        "No rushing meals",
        "Dress code for wineries",
      ],
      localPhrases: [
        {
          original: "Salute",
          pronunciation: "sah-LOO-tay",
          translation: "Cheers",
        },
        {
          original: "Grazie",
          pronunciation: "GRAT-tsee-eh",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Schengen visa for non-EU citizens"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Wine tasting notes"],
      physical: ["Walking on uneven terrain", "Stairs in historic buildings"],
    },

    pricing: {
      basePrice: { amount: 2999, currency: "EUR" },
      // pricePerPerson: true,
      // included: [
      //   "Luxury accommodation",
      //   "Wine tastings",
      //   "Expert guides",
      //   "Local transport",
      // ],
      // supplements: {
      //   singleRoom: 700,
      //   premiumWines: 500,
      // },
      discounts: [
        {
          size: 250,
          discount: 200,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-05-15",
        endDate: "2024-05-22",
        spotsTotal: 12,
        spotsRemaining: 8,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1552598715-7eeb9232a2ac?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Tuscan Vineyard",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1591877366919-bd43bbc6149f?q=80&w=2978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Rolling green hills of Val d'Orcia with cypress trees and traditional farmhouse at sunset",
        },
        {
          src: "https://images.unsplash.com/photo-1662634115426-a3c081e51e04?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Medieval towers of San Gimignano rising above the Tuscan countryside at golden hour",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1676496046656-cdad44276497?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Picturesque vineyard rows with rustic villa and blooming spring flowers in Chianti region",
        },
        {
          src: "https://images.unsplash.com/photo-1511443615772-da90b5f972d4?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Historic Ponte Vecchio bridge over Arno River in Florence during sunset",
        },
        {
          src: "https://images.unsplash.com/photo-1623873133836-30fdaeaa7f9d?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Italian pasta making with fresh ingredients on rustic wooden table",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661962262643-9d106f78406a?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Siena's Piazza del Campo with its distinctive shell shape and Torre del Mangia",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1677620406574-af0a784f0949?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Misty morning over Tuscan olive grove with ancient stone farmhouse",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1661962827254-d208b6ec327f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Florence Cathedral (Duomo) and Giotto's Campanile rising above city rooftops",
        },
      ],
      videos: [
        {
          url: "https://example.com/tuscany-preview.mp4",
          thumbnail: {
            src: "https://example.com/tuscany-thumb.jpg",
            alt: "Tuscany Experience Preview",
          },
          title: "Tuscany Wine Experience",
        },
      ],
      virtualTour: "https://example.com/tuscany-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Maria Garcia",
        rating: 5,
        title: "Wine lover's paradise",
        content: "Exceptional tastings and beautiful locations.",
        createdAt: "2024-01-10",
      },
    ],
    rating: {
      average: 4.9,
      total: 75,
      distribution: {
        5: 65,
        4: 8,
        3: 2,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "Do I need wine knowledge?",
        answer: "No prior knowledge required, suitable for all levels.",
        category: "Experience",
      },
      {
        question: "Can you accommodate dietary restrictions?",
        answer: "Yes, please inform us in advance.",
        category: "Food",
      },
    ],

    seo: {
      title: "Tuscany Wine Experience | Luxury Italian Wine Tour",
      description: "Discover Tuscany's finest wines and culinary traditions.",
      keywords: [
        "Tuscany wine",
        "Italian wine tour",
        "wine tasting",
        "Florence",
      ],
      canonicalUrl: "https://example.com/trips/tuscany-wine",
      ogImage: {
        src: "https://example.com/tuscany-og.jpg",
        alt: "Tuscany Wine Experience",
      },
    },
    analytics: {
      views: 7500,
      uniqueViews: 5500,
      bookmarks: 420,
      shares: 280,
      clickThroughRate: 4.5,
      averageTimeOnPage: 300,
      conversionRate: 3.2,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Arctic Polar Expedition
    id: "arctic-expedition",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Arctic Polar Expedition",
    subtitle: "Witness the wonders of the Arctic",
    slug: "arctic-polar-expedition",
    description:
      "Cruise through the Arctic Circle and witness polar bears, whales, and stunning glaciers.",
    largeInspirationalText:
      "Explore the pristine beauty of the Arctic wilderness.",
    category: [
      TravelCategory.ADVENTURE,
      TravelCategory.WILDLIFE,
      TravelCategory.PHOTOGRAPHY,
    ],

    countries: [getCountryBySlug("norway"), getCountryBySlug("greenland")],
    mapZoom: 3,
    mainLocation: {
      id: 1,
      name: "Svalbard",
      type: "region",
      excerpt:
        "A remote archipelago known for its rugged terrain and polar bears.",
      coordinates: {
        latitude: 78.2232,
        longitude: 15.6469,
      },
      country: getCountryBySlug("norway"),
      image: {
        src: "https://images.unsplash.com/photo-1587125297314-80229bcb6992?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dramatic Northern Lights display over Svalbard's pristine arctic wilderness",
      },
      link: {
        url: "https://en.visitsvalbard.com/",
        title: "Explore Svalbard",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Greenland Coast",
        type: "region",
        excerpt: "Famous for its massive ice sheets and stunning landscapes.",
        coordinates: {
          latitude: 71.7069,
          longitude: -42.6043,
        },
        country: getCountryBySlug("greenland"),
        image: {
          src: "https://images.unsplash.com/photo-1660699059420-b405780404a8?q=80&w=2907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Massive icebergs floating along Greenland's dramatic coastline in arctic waters",
        },
        link: {
          url: "https://visitgreenland.com/",
          title: "Discover Greenland",
        },
      },
      {
        id: 3,
        name: "Longyearbyen",
        type: "city",
        excerpt:
          "The world's northernmost settlement and gateway to the Arctic.",
        coordinates: {
          latitude: 78.2232,
          longitude: 15.6267,
        },
        country: getCountryBySlug("norway"),
        image: {
          src: "https://images.unsplash.com/photo-1621935617738-9c3b0229b5ca?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Colorful wooden houses of Longyearbyen nestled in snowy arctic valley",
        },
        link: {
          url: "https://en.visitsvalbard.com/longyearbyen",
          title: "Visit Longyearbyen",
        },
      },

      {
        id: 4,
        name: "Tromsø",
        type: "city",
        excerpt:
          "Norway's Arctic capital and prime location for Northern Lights viewing.",
        coordinates: {
          latitude: 69.6492,
          longitude: 18.9553,
        },
        country: getCountryBySlug("norway"),
        image: {
          src: "https://images.unsplash.com/photo-1537791281659-bb6bfd36e39f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Husky sledding adventure through snowy forests near Tromsø",
        },
        link: {
          url: "https://www.visittromso.no/en",
          title: "Discover Tromsø",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 3,
          name: "Longyearbyen",
          type: "city",
          excerpt:
            "The world's northernmost settlement and gateway to the Arctic.",
          coordinates: {
            latitude: 78.2232,
            longitude: 15.6267,
          },
          country: getCountryBySlug("norway"),
        },
        activities: [
          {
            id: "ae-001",
            name: "Expedition Briefing",
            description: "Safety and itinerary overview",
            schedule: { duration: { value: 120, unit: "minutes" } },
            // included: true,
          },
          {
            id: "ae-002",
            name: "Arctic Gear Fitting",
            description: "Equipment distribution and fitting",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-06-15", "2024-07-01", "2024-07-15"],
    endDates: ["2024-06-26", "2024-07-12", "2024-07-26"],

    activities: [
      {
        id: "ae-003",
        name: "Wildlife Watching",
        description: "Guided polar wildlife observation",
        schedule: { duration: { value: 480, unit: "minutes" } },
        // included: true,
      },
      {
        id: "ae-004",
        name: "Glacier Exploration",
        description: "Zodiac cruises near glaciers",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Polar bear sightings",
      "Midnight sun experience",
      "Glacier calving",
      "Arctic wildlife",
    ],
    included: [
      "Expedition vessel accommodation",
      "All meals onboard",
      "Expert guides",
      "Protective gear",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal items",
      "Gratuities",
    ],

    culturalNotes: {
      customs: [
        "Respect wildlife viewing guidelines",
        "Environmental protection",
        "Local communities",
      ],
      etiquette: [
        "Follow guide instructions",
        "Maintain silence near wildlife",
        "Proper gear usage",
      ],
      localPhrases: [
        {
          original: "Takk",
          pronunciation: "tahk",
          translation: "Thank you (Norwegian)",
        },
        {
          original: "Hej",
          pronunciation: "hay",
          translation: "Hello (Greenlandic)",
        },
      ],
    },

    requirements: {
      visa: ["Varies by nationality"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Comprehensive travel insurance mandatory"],
      documents: ["Valid passport", "Medical clearance"],
      physical: ["Good fitness level", "Cold weather tolerance"],
    },

    pricing: {
      basePrice: { amount: 6499, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Ship accommodation",
      //   "All meals",
      //   "Excursions",
      //   "Protective gear",
      // ],
      // supplements: {
      //   singleCabin: 2000,
      //   premiumCabin: 1500,
      // },
      discounts: [
        {
          size: 500,
          discount: 400,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-06-15",
        endDate: "2024-06-26",
        spotsTotal: 100,
        spotsRemaining: 65,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1663302310053-03e5a0554505?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Arctic Landscape",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1587125297314-80229bcb6992?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Northern Lights dancing across starlit sky with green and purple hues over snowy landscape",
        },
        {
          src: "https://images.unsplash.com/photo-1537442305377-124e384513d4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional glass igloo hotel under starry arctic sky perfect for Northern Lights viewing",
        },
        {
          src: "https://images.unsplash.com/photo-1537791281659-bb6bfd36e39f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Husky dog sled team running through snowy forest in winter wonderland",
        },
        {
          src: "https://images.unsplash.com/photo-1621935617738-9c3b0229b5ca?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Cozy wooden cabin glowing warmly in snow-covered arctic wilderness at dusk",
        },
        {
          src: "https://plus.unsplash.com/premium_photo-1671039654121-9047ffc439c3?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Majestic reindeer with full antlers standing in snowy arctic tundra",
        },
        {
          src: "https://images.unsplash.com/photo-1517784541475-54f13a036167?q=80&w=3502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Frozen lake surface with spectacular ice formations under arctic winter sky",
        },
        {
          src: "https://images.unsplash.com/photo-1493329306594-38b6b1cd381f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Midnight sun phenomenon creating golden light over arctic mountain landscape",
        },
        {
          src: "https://images.unsplash.com/photo-1660699059420-b405780404a8?q=80&w=2907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Snow-covered peaks reflecting in still arctic waters during polar twilight",
        },
      ],
      videos: [
        {
          url: "https://example.com/arctic-preview.mp4",
          thumbnail: {
            src: "https://example.com/arctic-thumb.jpg",
            alt: "Arctic Expedition Preview",
          },
          title: "Arctic Expedition Experience",
        },
      ],
      virtualTour: "https://example.com/arctic-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Peter Nilsson",
        rating: 5,
        title: "Once-in-a-lifetime experience",
        content: "Incredible wildlife encounters and professional crew.",
        createdAt: "2024-01-09",
      },
    ],
    rating: {
      average: 4.8,
      total: 50,
      distribution: {
        5: 40,
        4: 8,
        3: 2,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "What wildlife might we see?",
        answer: "Polar bears, whales, seals, and Arctic birds are common.",
        category: "Wildlife",
      },
      {
        question: "How cold does it get?",
        answer: "Summer temperatures range from -5°C to +5°C.",
        category: "Weather",
      },
    ],

    seo: {
      title: "Arctic Polar Expedition | Ultimate Arctic Wildlife Experience",
      description:
        "Experience the Arctic's pristine wilderness and amazing wildlife.",
      keywords: [
        "Arctic expedition",
        "polar bears",
        "wildlife cruise",
        "Svalbard",
      ],
      canonicalUrl: "https://example.com/trips/arctic-expedition",
      ogImage: {
        src: "https://example.com/arctic-og.jpg",
        alt: "Arctic Expedition",
      },
    },
    analytics: {
      views: 6000,
      uniqueViews: 4500,
      bookmarks: 350,
      shares: 200,
      clickThroughRate: 5.2,
      averageTimeOnPage: 340,
      conversionRate: 2.8,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  {
    // Dubai Luxury Escape
    id: "dubai-luxury",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
    status: "published",
    locale: "en",

    title: "Dubai Luxury Escape",
    subtitle: "Experience the height of luxury",
    slug: "dubai-luxury-escape",
    description:
      "Experience the height of luxury with desert safaris, shopping, and stays in world-class hotels.",
    largeInspirationalText: "Indulge in a world of luxury and adventure.",
    category: [
      TravelCategory.LUXURY,
      TravelCategory.URBAN,
      TravelCategory.ADVENTURE,
    ],
    countries: [getCountryBySlug("united-arab-emirates")],
    mapZoom: 11,
    mainLocation: {
      id: 1,
      name: "Dubai",
      type: "city",
      excerpt: "A city known for luxury shopping, ultramodern architecture.",
      coordinates: {
        latitude: 25.2048,
        longitude: 55.2708,
      },
      country: getCountryBySlug("united-arab-emirates"),
      image: {
        src: "https://images.unsplash.com/photo-1507020177664-e4eac8761972?q=80&w=2989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Iconic Burj Khalifa towering over downtown Dubai with modern skyline",
      },
      link: {
        url: "https://www.visitdubai.com/",
        title: "Discover Dubai",
      },
    },
    additionalLocations: [
      {
        id: 2,
        name: "Burj Al Arab",
        type: "landmark",
        excerpt: "Iconic sail-shaped hotel and symbol of modern Dubai.",
        coordinates: {
          latitude: 25.1412,
          longitude: 55.1853,
        },
        country: getCountryBySlug("united-arab-emirates"),
        image: {
          src: "https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?q=80&w=2742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Luxury Burj Al Arab hotel with its distinctive sail shape illuminated at twilight",
        },
        link: {
          url: "https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah",
          title: "Experience Burj Al Arab",
        },
      },
      {
        id: 3,
        name: "Palm Jumeirah",
        type: "landmark",
        excerpt: "Artificial archipelago with luxury resorts.",
        coordinates: {
          latitude: 25.1124,
          longitude: 55.139,
        },
        country: getCountryBySlug("united-arab-emirates"),
        image: {
          src: "https://images.unsplash.com/photo-1640808476588-e96ae8e7a419?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Aerial view of Palm Jumeirah showing the iconic palm tree design and luxury waterfront properties",
        },
        link: {
          url: "https://www.visitdubai.com/en/places-to-visit/palm-jumeirah",
          title: "Explore Palm Jumeirah",
        },
      },
      {
        id: 4,
        name: "Dubai Marina",
        type: "landmark",
        excerpt:
          "Stunning waterfront neighborhood with luxury yachts and dining.",
        coordinates: {
          latitude: 25.0819,
          longitude: 55.1367,
        },
        country: getCountryBySlug("united-arab-emirates"),
        image: {
          src: "https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Marina's glittering skyline and yacht harbor illuminated at night",
        },
        link: {
          url: "https://www.visitdubai.com/en/places-to-visit/dubai-marina",
          title: "Visit Dubai Marina",
        },
      },
      {
        id: 5,
        name: "Dubai Frame",
        type: "landmark",
        excerpt: "Architectural landmark offering views of old and new Dubai.",
        coordinates: {
          latitude: 25.2344,
          longitude: 55.3001,
        },
        country: getCountryBySlug("united-arab-emirates"),
        image: {
          src: "https://images.unsplash.com/photo-1558297787-f65ef5e3165d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Frame golden architectural marvel illuminated against dusk sky",
        },
        link: {
          url: "https://www.dubaiframe.ae/",
          title: "Experience Dubai Frame",
        },
      },
    ],
    itinerary: [
      {
        day: 1,
        location: {
          id: 1,
          name: "Dubai",
          type: "city",
          excerpt:
            "A city known for luxury shopping, ultramodern architecture.",
          coordinates: {
            latitude: 25.2048,
            longitude: 55.2708,
          },
          country: getCountryBySlug("united-arab-emirates"),
        },
        activities: [
          {
            id: "db-001",
            name: "Burj Khalifa Visit",
            description: "World's tallest building experience",
            schedule: { duration: { value: 180, unit: "minutes" } },
            // included: true,
          },
          {
            id: "db-002",
            name: "Welcome Dinner Cruise",
            description: "Dubai Creek luxury dinner cruise",
            schedule: { duration: { value: 240, unit: "minutes" } },
            // included: true,
          },
        ],
      },
    ],

    duration: { days: 10, nights: 9 },
    startDates: ["2024-09-15", "2024-10-01", "2024-10-15"],
    endDates: ["2024-09-21", "2024-10-07", "2024-10-21"],

    activities: [
      {
        id: "db-003",
        name: "Desert Safari",
        description: "Luxury desert experience",
        schedule: { duration: { value: 360, unit: "minutes" } },
        // included: true,
      },
      {
        id: "db-004",
        name: "Shopping Experience",
        description: "VIP mall and souk tours",
        schedule: { duration: { value: 240, unit: "minutes" } },
        // included: true,
      },
    ],
    highlights: [
      "Burj Khalifa observation deck",
      "Luxury desert camping",
      "Private yacht cruise",
      "VIP shopping experience",
    ],
    included: [
      "5-star accommodation",
      "Private transfers",
      "Desert safari",
      "Selected meals",
    ],
    excluded: [
      "International flights",
      "Personal expenses",
      "Optional activities",
      "Tourist tax",
    ],

    culturalNotes: {
      customs: [
        "Dress modestly in public",
        "Respect Ramadan customs",
        "Conservative behavior",
      ],
      etiquette: [
        "Use right hand for eating",
        "Limited public affection",
        "Photography restrictions",
      ],
      localPhrases: [
        {
          original: "As-salaam-alaikum",
          pronunciation: "as-sa-laam-a-lay-kum",
          translation: "Peace be upon you",
        },
        {
          original: "Shukran",
          pronunciation: "shuk-ran",
          translation: "Thank you",
        },
      ],
    },

    requirements: {
      visa: ["Tourist visa available on arrival for many nationalities"],
      vaccines: ["Routine vaccines recommended"],
      insurance: ["Travel insurance required"],
      documents: ["Valid passport", "Return ticket"],
      physical: ["Comfortable in heat", "Basic fitness level"],
    },

    pricing: {
      basePrice: { amount: 3999, currency: "USD" },
      // pricePerPerson: true,
      // included: [
      //   "Luxury accommodation",
      //   "Private transfers",
      //   "VIP experiences",
      //   "Selected meals",
      // ],
      // supplements: {
      //   singleRoom: 1000,
      //   peakSeason: 800,
      // },
      discounts: [
        {
          size: 300,
          discount: 250,
        },
      ],
    },
    availability: [
      {
        startDate: "2024-09-15",
        endDate: "2024-09-21",
        spotsTotal: 20,
        spotsRemaining: 12,
      },
    ],

    media: {
      coverImage: {
        src: "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Dubai Skyline",
      },
      gallery: [
        {
          src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=3264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Marina skyline at night with illuminated skyscrapers reflecting in water",
        },
        {
          src: "https://images.unsplash.com/photo-1507020177664-e4eac8761972?q=80&w=2989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Burj Khalifa piercing through clouds, world's tallest building dominating Dubai skyline",
        },
        {
          src: "https://images.unsplash.com/photo-1621019947792-add2f1a2dd88?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Luxury desert camp with traditional Arabian tents under starlit sky",
        },
        {
          src: "https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?q=80&w=2742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Mall's magnificent waterfall feature with diving sculptures",
        },
        {
          src: "https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Palm Jumeirah aerial view showing iconic palm tree shape and luxury resorts",
        },
        {
          src: "https://images.unsplash.com/photo-1640968272493-8bc83db2cf41?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional Dubai gold souk with glittering jewelry displays and ornate designs",
        },
        {
          src: "https://images.unsplash.com/photo-1558297787-f65ef5e3165d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Miracle Garden with colorful flower arrangements and architectural displays",
        },
        {
          src: "https://images.unsplash.com/photo-1549944850-84e00be4203b?q=80&w=3468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Dubai Frame architectural landmark glowing gold against evening sky",
        },
      ],
      videos: [
        {
          url: "https://example.com/dubai-preview.mp4",
          thumbnail: {
            src: "https://example.com/dubai-thumb.jpg",
            alt: "Dubai Luxury Preview",
          },
          title: "Dubai Luxury Experience",
        },
      ],
      virtualTour: "https://example.com/dubai-virtual-tour",
    },

    reviews: [
      {
        id: "rev-001",
        authorName: "Sarah Johnson",
        rating: 5,
        title: "Ultimate luxury experience",
        content: "Everything was perfectly organized and truly luxurious.",
        createdAt: "2024-01-12",
      },
    ],
    rating: {
      average: 4.7,
      total: 65,
      distribution: {
        5: 45,
        4: 15,
        3: 5,
        2: 0,
        1: 0,
      },
    },

    faq: [
      {
        question: "What's the best time to visit Dubai?",
        answer: "October to April offers the most pleasant weather.",
        category: "Planning",
      },
      {
        question: "What should I wear?",
        answer: "Modest, smart casual clothing is recommended.",
        category: "Culture",
      },
    ],

    seo: {
      title: "Dubai Luxury Escape | Premium Travel Experience",
      description:
        "Experience the ultimate in luxury with our exclusive Dubai tour.",
      keywords: [
        "Dubai luxury",
        "desert safari",
        "VIP experience",
        "UAE travel",
      ],
      canonicalUrl: "https://example.com/trips/dubai-luxury",
      ogImage: {
        src: "https://example.com/dubai-og.jpg",
        alt: "Dubai Luxury Escape",
      },
    },
    analytics: {
      views: 9500,
      uniqueViews: 7200,
      bookmarks: 480,
      shares: 320,
      clickThroughRate: 4.8,
      averageTimeOnPage: 310,
      conversionRate: 3.5,
    },

    relatedTrips: [],
    suggestedTrips: [],
  },
  // {
  //   // Great Barrier Reef Adventure
  //   id: "australia-reef",
  //   createdAt: "2024-01-01T00:00:00Z",
  //   updatedAt: "2024-01-15T00:00:00Z",
  //   status: "published",
  //   locale: "en",

  //   title: "Great Barrier Reef Adventure",
  //   subtitle: "Dive into the wonders of the reef",
  //   slug: "great-barrier-reef-adventure",
  //   description:
  //     "Dive into the world's largest coral reef system and explore the wonders of marine life.",
  //   largeInspirationalText:
  //     "Explore the vibrant underwater world of the Great Barrier Reef.",
  //   category: [
  //     TravelCategory.ADVENTURE,
  //     TravelCategory.ECOTOURISM,
  //     TravelCategory.WILDLIFE,
  //   ],

  //   countries: [getCountryBySlug("australia")],
  //   mainLocation: {
  //     id: 1,
  //     name: "Cairns",
  //     type: "city",
  //     excerpt: "Gateway to the Great Barrier Reef with beautiful beaches.",
  //     coordinates: {
  //       latitude: -16.9186,
  //       longitude: 145.7781,
  //     },
  //     country: getCountryBySlug("australia"),
  //   },
  //   additionalLocations: [
  //     {
  //       id: 2,
  //       name: "Whitsunday Islands",
  //       type: "nature",
  //       excerpt: "Famous for stunning beaches and marine parks.",
  //       coordinates: {
  //         latitude: -20.2844,
  //         longitude: 148.7384,
  //       },
  //       country: getCountryBySlug("australia"),
  //     },
  //     {
  //       id: 3,
  //       name: "Port Douglas",
  //       type: "city",
  //       excerpt: "Sophisticated coastal town with reef access.",
  //       coordinates: {
  //         latitude: -16.4834,
  //         longitude: 145.4649,
  //       },
  //       country: getCountryBySlug("australia"),
  //     },
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       location: {
  //         id: 1,
  //         name: "Cairns",
  //         type: "city",
  //         excerpt: "Gateway to the Great Barrier Reef with beautiful beaches.",
  //         coordinates: {
  //           latitude: -16.9186,
  //           longitude: 145.7781,
  //         },
  //         country: getCountryBySlug("australia"),
  //       },
  //       activities: [
  //         {
  //           id: "gbr-001",
  //           name: "Diving Orientation",
  //           description: "Safety briefing and equipment setup",
  //           schedule: { duration: { value: 120, unit: "minutes" } },
  //           // included: true,
  //         },
  //         {
  //           id: "gbr-002",
  //           name: "Sunset Sail",
  //           description: "Welcome cruise with marine biology talk",
  //           schedule: { duration: { value: 180, unit: "minutes" } },
  //           // included: true,
  //         },
  //       ],
  //     },
  //   ],

  //   duration: { days: 12, nights: 11 },
  //   startDates: ["2024-06-15", "2024-07-01", "2024-07-15"],
  //   endDates: ["2024-06-22", "2024-07-08", "2024-07-22"],

  //   activities: [
  //     {
  //       id: "gbr-003",
  //       name: "Scuba Diving",
  //       description: "Guided reef dives",
  //       schedule: { duration: { value: 360, unit: "minutes" } },
  //       // included: true,
  //     },
  //     {
  //       id: "gbr-004",
  //       name: "Marine Biology Tours",
  //       description: "Educational reef experiences",
  //       schedule: { duration: { value: 240, unit: "minutes" } },
  //       // included: true,
  //     },
  //   ],
  //   highlights: [
  //     "World-class diving spots",
  //     "Marine life encounters",
  //     "Island exploration",
  //     "Coral reef education",
  //   ],
  //   included: [
  //     "Dive equipment",
  //     "Accommodation",
  //     "Marine park fees",
  //     "Expert guides",
  //   ],
  //   excluded: [
  //     "International flights",
  //     "Travel insurance",
  //     "Personal expenses",
  //     "Additional activities",
  //   ],

  //   culturalNotes: {
  //     customs: [
  //       "Reef conservation practices",
  //       "Aboriginal land acknowledgment",
  //       "Marine protection rules",
  //     ],
  //     etiquette: [
  //       "Follow dive guide instructions",
  //       "No touching marine life",
  //       "Sustainable practices",
  //     ],
  //     localPhrases: [
  //       {
  //         original: "G'day",
  //         pronunciation: "guh-day",
  //         translation: "Hello",
  //       },
  //       {
  //         original: "Ta",
  //         pronunciation: "tah",
  //         translation: "Thanks",
  //       },
  //     ],
  //   },

  //   requirements: {
  //     visa: ["Tourist visa required"],
  //     vaccines: ["Routine vaccines recommended"],
  //     insurance: ["Dive insurance required"],
  //     documents: ["Valid passport", "Dive certification"],
  //     physical: ["Swimming ability", "Basic fitness level"],
  //   },

  //   pricing: {
  //     basePrice: { amount: 2899, currency: "AUD" },
  //     // pricePerPerson: true,
  //     // included: [
  //     //   "Accommodation",
  //     //   "Dive equipment",
  //     //   "Boat trips",
  //     //   "Expert guides",
  //     // ],
  //     // supplements: {
  //     //   singleRoom: 600,
  //     //   advancedDiving: 400,
  //     // },
  //     discounts: [
  //       {
  //         size: 200,
  //         discount: 150,
  //       },
  //     ],
  //   },
  //   availability: [
  //     {
  //       startDate: "2024-06-15",
  //       endDate: "2024-06-22",
  //       spotsTotal: 16,
  //       spotsRemaining: 10,
  //     },
  //   ],

  //   media: {
  //     coverImage: {
  //       src: "https://images.unsplash.com/photo-1475688621402-4257c812d6db",
  //       alt: "Great Barrier Reef",
  //     },
  //     gallery: [
  //       {
  //         src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba",
  //         alt: "Coral Reef",
  //       },
  //     ],
  //     videos: [
  //       {
  //         url: "https://example.com/reef-preview.mp4",
  //         thumbnail: {
  //           src: "https://example.com/reef-thumb.jpg",
  //           alt: "Reef Adventure Preview",
  //         },
  //         title: "Great Barrier Reef Experience",
  //       },
  //     ],
  //     virtualTour: "https://example.com/reef-virtual-tour",
  //   },

  //   reviews: [
  //     {
  //       id: "rev-001",
  //       authorName: "Mike Thompson",
  //       rating: 5,
  //       title: "Amazing marine life experience",
  //       content: "Professional guides and incredible diving spots.",
  //       createdAt: "2024-01-11",
  //     },
  //   ],
  //   rating: {
  //     average: 4.8,
  //     total: 70,
  //     distribution: {
  //       5: 55,
  //       4: 12,
  //       3: 3,
  //       2: 0,
  //       1: 0,
  //     },
  //   },

  //   faq: [
  //     {
  //       question: "Do I need diving certification?",
  //       answer:
  //         "Basic certification required for scuba diving, but snorkeling available for all.",
  //       category: "Requirements",
  //     },
  //     {
  //       question: "What marine life might we see?",
  //       answer: "Tropical fish, turtles, rays, and various coral species.",
  //       category: "Wildlife",
  //     },
  //   ],

  //   seo: {
  //     title: "Great Barrier Reef Adventure | Ultimate Diving Experience",
  //     description:
  //       "Explore the world's largest coral reef system in Australia.",
  //     keywords: [
  //       "Great Barrier Reef",
  //       "scuba diving",
  //       "marine life",
  //       "coral reef",
  //     ],
  //     canonicalUrl: "https://example.com/trips/australia-reef",
  //     ogImage: {
  //       src: "https://example.com/reef-og.jpg",
  //       alt: "Great Barrier Reef Adventure",
  //     },
  //   },
  //   analytics: {
  //     views: 8500,
  //     uniqueViews: 6300,
  //     bookmarks: 420,
  //     shares: 280,
  //     clickThroughRate: 4.6,
  //     averageTimeOnPage: 300,
  //     conversionRate: 3.2,
  //   },

  //   relatedTrips: [],
  //   suggestedTrips: [],
  // },
];
