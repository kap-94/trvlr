import { Author, BlogPost, Category } from "../_types";
import { mockBlogCategories } from "./catalogues";

const currentDate = new Date().toISOString();

const authors: Author[] = [
  {
    id: 1,
    name: "Martha Rodríguez",
    slug: "martha-rodriguez",
    bio: "Travel expert and professional photographer with over 10 years of experience documenting destinations around the world.",
    avatar: {
      src: "/images/authors/martha-rodriguez.jpg",
      alt: "Martha Rodríguez",
    },
    // social: {
    //   twitter: "@pablokaram",
    //   instagram: "@pablokaramtravels"
    // }
  },
  {
    id: 2,
    name: "María González",
    slug: "maria-gonzalez",
    bio: "Travel writer specialized in sustainable tourism and cultural experiences.",
    avatar: {
      src: "/images/authors/maria-gonzalez.jpg",
      alt: "María González",
    },
    // social: {
    //   twitter: "@mariagonzalez",
    //   instagram: "@mariaviajes"
    // }
  },
  {
    id: 3,
    name: "Carlos Ruiz",
    slug: "carlos-ruiz",
    bio: "Chef and international gastronomy expert, specialized in documenting culinary traditions.",
    avatar: {
      src: "/images/authors/carlos-ruiz.jpg",
      alt: "Carlos Ruiz",
    },
    // social: {
    //   twitter: "@carlosruizchef",
    //   instagram: "@worldflavors"
    // }
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    // Base Entity Fields
    id: 1,
    createdAt: "2024-01-15T08:00:00Z",
    updatedAt: "2024-01-29T14:30:00Z",

    // Identity & URLs
    slug: "pack-like-pro",
    locale: "en-US",

    // Content Classification
    type: "featured",
    status: "published",
    visibility: "public",

    // Core Content
    title: "Pack Like a Pro: Tips for Efficient Travel",
    subtitle: "Maximize space and minimize stress",
    excerpt:
      "Good packing is key to stress-free travel. With these tips, you'll learn to optimize your luggage to enjoy every moment of your trip without complications.",
    introduction:
      "Good packing is key to stress-free travel. With these tips, you'll learn to optimize your luggage to enjoy every moment of your trip without complications.",
    content: [
      {
        order: 1,
        title: "Choose the Right Suitcase",
        body: "Everything starts with selecting the right suitcase. For short trips, a backpack or carry-on is ideal. For longer trips, opt for a hard-shell suitcase that offers greater protection. Make sure it's lightweight and easy to transport.",
        image: {
          src: "https://plus.unsplash.com/premium_photo-1723478589816-405a6c62510f?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Different types of travel suitcases",
          caption:
            "Selecting the right suitcase is the first step to a successful trip",
        },
      },
      {
        order: 2,
        title: "Make a Checklist",
        body: "Creating a list with essentials is fundamental: appropriate clothing, hygiene items, important documents, and chargers. Use apps like Google Keep to facilitate the process and ensure you don't forget anything.",
        link: {
          href: "/resources/travel-checklist",
          label: "Download our checklist",
        },
      },
    ],

    // Rich Metadata
    author: authors[0],
    coAuthors: [authors[1]],
    publishDate: "2024-01-29T10:00:00Z",
    readTime: 8,
    wordCount: 1200,

    // Media
    coverImage: {
      src: "https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Organized luggage for travel",
      caption: "A well-organized suitcase makes all the difference",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1524416117929-2dd85b124635?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Packing cubes",
        caption: "Packing cubes are essential for maintaining order",
      },
    ],

    // Categorization & Discovery
    categories: mockBlogCategories,
    primaryCategory: mockBlogCategories[0],
    tags: ["travel", "luggage", "tips", "organization", "suitcase"],
    highlights: [
      "Select the right suitcase for each type of trip",
      "Use packing cubes to maintain order",
      "Only take necessary toiletries",
      "Include a small emergency kit",
      "Save space for souvenirs or unexpected purchases",
    ],
    featured: true,
    eyebrow: "Essential Guide",

    // Related Content & Series
    series: {
      id: "travel-101",
      name: "Travel Fundamentals",
      order: 1,
    },
    relatedPosts: [
      {
        id: 2,
        title: "10 Must-Visit Destinations for 2024",
        slug: "must-visit-destinations-2024",
        image: {
          src: "/images/posts/destinations-2024-thumb.jpg",
          alt: "Tourist destinations 2024",
        },
      },
    ],

    // Technical Metadata
    seo: {
      title: "Ultimate Guide: How to Pack Like a Professional for Your Travels",
      description:
        "Learn professional techniques for packing your luggage efficiently and in an organized way. Practical tips for travelers.",
      keywords: ["packing", "luggage", "travel", "organization", "travel tips"],
      ogImage: {
        src: "/images/posts/pack-like-pro-og.jpg",
        alt: "Luggage Guide",
      },
      canonicalUrl: "https://yourtravelwebsite.com/blog/pack-like-pro",
    },
    analytics: {
      views: 15420,
      likes: 843,
      shares: 231,
      timeOnPage: 325,
      bounceRate: 0.23,
    },
    engagement: {
      likes: 843,
      comments: [],
      shares: 231,
      savedCount: 156,
    },

    // Versioning & History
    version: 1,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[0],
        timestamp: "2024-01-29T10:00:00Z",
      },
    ],
  },
  // {
  //   id: 2,
  //   createdAt: "2024-01-10T09:00:00Z",
  //   updatedAt: "2024-01-15T16:45:00Z",
  //   slug: "must-visit-destinations-2024",
  //   locale: "en-US",
  //   type: "featured",
  //   status: "published",
  //   visibility: "public",

  //   title: "10 Must-Visit Destinations for 2024",
  //   subtitle: "Discover the places that will define the year in travel",
  //   excerpt:
  //     "Discover the most exciting and unique destinations you must visit this year, from paradise beaches to vibrant cities.",
  //   introduction:
  //     "The world is full of amazing places to discover. We present a careful selection of trending destinations in 2024, combining iconic locations with hidden gems.",

  //   content: [
  //     {
  //       order: 1,
  //       title: "1. Iceland: Northern Lights and Adventure",
  //       body: "A destination that combines wild nature with unique experiences. From geysers to northern lights, Iceland offers otherworldly landscapes. The best time to visit is between September and March to see the aurora borealis.",
  //       image: {
  //         src: "/images/posts/iceland-aurora.jpg",
  //         alt: "Northern lights in Iceland",
  //         caption:
  //           "The northern lights are one of Iceland's most impressive spectacles",
  //       },
  //     },
  //     {
  //       order: 2,
  //       title: "2. Vietnam: Culture and Gastronomy",
  //       body: "A country that captivates with its rich cultural heritage, spectacular landscapes, and UNESCO World Heritage cuisine. From Ha Long Bay to the floating markets of the Mekong Delta.",
  //       image: {
  //         src: "/images/posts/vietnam-culture.jpg",
  //         alt: "Floating market in Vietnam",
  //         caption:
  //           "Floating markets are an essential part of daily life in Vietnam",
  //       },
  //     },
  //   ],

  //   author: authors[1],
  //   coAuthors: [authors[0]],
  //   publishDate: "2024-01-15T10:00:00Z",
  //   readTime: 12,
  //   wordCount: 2500,

  //   coverImage: {
  //     src: "/images/posts/destinations-2024-cover.jpg",
  //     alt: "Collage of 2024 tourist destinations",
  //     caption: "The most exciting destinations to explore in 2024",
  //   },
  //   gallery: [
  //     {
  //       src: "/images/posts/iceland-1.jpg",
  //       alt: "Landscapes of Iceland",
  //       caption: "The volcanic landscapes of Iceland",
  //     },
  //     {
  //       src: "/images/posts/vietnam-1.jpg",
  //       alt: "Streets of Hanoi",
  //       caption: "The lively streets of Hanoi's old quarter",
  //     },
  //   ],

  //   categories: [mockBlogCategories[0], mockBlogCategories[1]],
  //   primaryCategory: mockBlogCategories[0],
  //   tags: ["travel2024", "destinations", "adventure", "culture", "gastronomy"],
  //   highlights: [
  //     "Discover unique and unexplored destinations",
  //     "Experience fascinating cultures",
  //     "Try authentic local cuisine",
  //     "Experience unforgettable adventures",
  //   ],
  //   featured: true,
  //   eyebrow: "2024 Guide",

  //   series: {
  //     id: "destinations-2024",
  //     name: "2024 Destination Guides",
  //     order: 1,
  //   },

  //   seo: {
  //     title: "The 10 Best Travel Destinations for 2024 | Complete Guide",
  //     description:
  //       "Discover the most exciting destinations to travel in 2024. From northern lights in Iceland to floating markets in Vietnam.",
  //     keywords: [
  //       "2024 destinations",
  //       "travel",
  //       "tourism",
  //       "vacations",
  //       "travel guide",
  //     ],
  //     ogImage: {
  //       src: "/images/posts/destinations-2024-og.jpg",
  //       alt: "2024 Destinations",
  //     },
  //     canonicalUrl:
  //       "https://yourtravelwebsite.com/blog/must-visit-destinations-2024",
  //   },

  //   analytics: {
  //     views: 25630,
  //     likes: 1247,
  //     shares: 892,
  //     timeOnPage: 480,
  //     bounceRate: 0.18,
  //   },

  //   engagement: {
  //     likes: 1247,
  //     comments: [],
  //     shares: 892,
  //     savedCount: 734,
  //   },

  //   version: 2,
  //   revision: [
  //     {
  //       id: "rev-1",
  //       changes: "Initial publication",
  //       editor: authors[1],
  //       timestamp: "2024-01-15T10:00:00Z",
  //     },
  //     {
  //       id: "rev-2",
  //       changes: "Updated with new recommendations",
  //       editor: authors[0],
  //       timestamp: "2024-01-15T16:45:00Z",
  //     },
  //   ],
  // },
  {
    id: 3,
    createdAt: "2024-01-05T10:30:00Z",
    updatedAt: "2024-01-28T11:20:00Z",
    slug: "world-gastronomy",
    locale: "en-US",
    type: "featured",
    status: "published",
    visibility: "public",

    title: "Definitive Guide to World Gastronomy",
    subtitle: "A culinary journey through the most extraordinary flavors",
    excerpt:
      "A journey through the world's most extraordinary flavors, from Italian pasta to Japanese sushi. Discover the history and techniques behind the most emblematic dishes.",
    introduction:
      "Gastronomy is one of travel's greatest pleasures. In this guide, we'll explore each region's must-try dishes, their origins, and how to best enjoy them.",

    content: [
      {
        order: 1,
        title: "Italy: The Art of Pasta",
        body: "Italian pasta is much more than spaghetti with sauce. Each region has its unique specialties and traditional techniques that have been passed down through generations.",
        image: {
          src: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Artisanal Italian pasta",
          caption: "Fresh handmade pasta in a traditional Tuscan trattoria",
        },
      },
    ],

    author: authors[2],
    publishDate: "2024-01-28T11:00:00Z",
    readTime: 15,
    wordCount: 3000,

    coverImage: {
      src: "https://plus.unsplash.com/premium_photo-1666920345573-6b9699d90650?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Collage of international dishes",
      caption: "The diversity of world gastronomy in one image",
    },

    categories: [mockBlogCategories[0], mockBlogCategories[2]],
    primaryCategory: mockBlogCategories[2],
    tags: ["gastronomy", "culture", "cuisine", "traditions", "food"],

    highlights: [
      "Discover traditional dishes from each region",
      "Learn about ancient culinary techniques",
      "Discover unique ingredients and their history",
      "Explore iconic local markets",
    ],

    featured: false,
    eyebrow: "Gastronomic Guide",

    seo: {
      title: "Complete World Gastronomy Guide | Traditional Dishes",
      description:
        "Explore the world's most extraordinary flavors. From Italy to Japan, discover the history and techniques behind the most emblematic dishes.",
      keywords: [
        "gastronomy",
        "world cuisine",
        "traditional dishes",
        "food",
        "culture",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/world-gastronomy",
    },

    analytics: {
      views: 18750,
      likes: 945,
      shares: 623,
      timeOnPage: 540,
      bounceRate: 0.21,
    },

    engagement: {
      likes: 945,
      comments: [],
      shares: 623,
      savedCount: 528,
    },

    version: 1,
  },
  {
    id: 4,
    createdAt: "2024-01-01T08:15:00Z",
    updatedAt: "2024-01-25T09:30:00Z",
    slug: "backpacker-tips",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "Complete Guide for Backpackers",
    subtitle: "Amazing adventures on a limited budget",
    excerpt:
      "Everything you need to know to start your backpacking adventure, from budget to safety. Practical tips for traveling light and safe.",
    introduction:
      "Traveling as a backpacker is a unique experience that allows you to explore the world in an authentic and economical way. This guide will help you prepare for your next adventure.",

    content: [
      {
        order: 1,
        title: "Planning and Budget",
        body: "The key to a successful backpacking trip is smart planning and proper budget management. Learn to calculate daily expenses and find the best deals.",
        image: {
          src: "https://plus.unsplash.com/premium_photo-1680205897493-98243c7f11a5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Backpacker trip planning",
          caption: "Good planning is essential for backpacking",
        },
      },
      {
        order: 2,
        title: "Choose the Right Equipment",
        body: "The right backpack and essential equipment can make or break your trip. Discover what to bring and what to leave at home.",
        image: {
          src: "https://images.unsplash.com/photo-1698521688714-dc482eb1c769?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Essential equipment for backpackers",
          caption: "Basic recommended equipment for every backpacker",
        },
      },
      {
        order: 3,
        title: "Safety on the Road",
        body: "Essential tips for keeping your belongings and yourself safe during the trip. Includes insurance recommendations and documentation.",
      },
    ],

    author: authors[1],
    publishDate: "2024-01-25T09:00:00Z",
    readTime: 10,
    wordCount: 2200,

    coverImage: {
      src: "https://plus.unsplash.com/premium_photo-1679515470684-1f6af2858b67?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Backpacker on mountain",
      caption: "The freedom of backpacking",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1689982920184-2c3ddcf81160?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Popular hostels",
        caption: "The best hostels for backpackers",
      },
      {
        src: "https://plus.unsplash.com/premium_photo-1679691282550-c87e3975044d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Transportation options",
        caption: "Different transportation options for backpackers",
      },
    ],

    categories: [mockBlogCategories[0], mockBlogCategories[1]],
    primaryCategory: mockBlogCategories[1],
    tags: ["backpacker", "adventure", "budget", "travel", "tips"],

    highlights: [
      "Learn to travel on a low budget",
      "Essential safety tips",
      "Budget accommodation advice",
      "Recommended routes for backpackers",
    ],

    featured: false,
    eyebrow: "Basic Guide",

    series: {
      id: "budget-travel",
      name: "Low Budget Travel",
      order: 1,
    },

    seo: {
      title: "Complete Guide for Backpackers 2024 | Tips and Advice",
      description:
        "Learn everything you need to know about backpacking. Budget tips, safety, equipment, and more.",
      keywords: [
        "backpacker",
        "budget travel",
        "adventure",
        "budget",
        "travel tips",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/backpacker-tips",
    },

    analytics: {
      views: 12840,
      likes: 567,
      shares: 423,
      timeOnPage: 385,
      bounceRate: 0.25,
    },

    engagement: {
      likes: 567,
      comments: [],
      shares: 423,
      savedCount: 389,
    },

    version: 1,
  },
  {
    id: 5,
    createdAt: "2023-12-28T11:20:00Z",
    updatedAt: "2024-01-20T14:15:00Z",
    slug: "travel-photography-tips",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "Travel Photography: Capture Unforgettable Moments",
    subtitle: "Techniques and tips to improve your travel photos",
    excerpt:
      "Learn to capture the essence of your travels with professional photography tips, from landscapes to cultural portraits.",
    introduction:
      "Travel photography is more than taking pretty pictures; it's the art of telling stories and preserving unique memories from each destination. Discover how to improve your photography skills.",

    content: [
      {
        order: 1,
        title: "Essential Equipment",
        body: "Complete guide on photography equipment needed for different types of trips and budgets. From professional cameras to smartphones.",
        image: {
          src: "https://images.unsplash.com/photo-1552061902-146c1b6a3e51?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Professional photography equipment",
          caption: "Recommended equipment for travel photography",
        },
      },
      {
        order: 2,
        title: "Composition and Light",
        body: "Learn the basic principles of photographic composition and how to take advantage of natural light at different times of the day.",
        image: {
          src: "https://images.unsplash.com/photo-1661932912478-5d92f57db32b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Examples of photographic composition",
          caption: "Examples of composition in travel photography",
        },
      },
      {
        order: 3,
        title: "Editing and Post-processing",
        body: "Basic editing techniques to enhance your travel photos without losing naturalness. Recommended software and workflows.",
      },
    ],

    author: authors[0],
    coAuthors: [authors[1]],
    publishDate: "2024-01-20T14:00:00Z",
    readTime: 11,
    wordCount: 2800,

    coverImage: {
      src: "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Photographer in action",
      caption: "The art of capturing unique moments",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Example of landscape photography",
        caption: "Landscape photography at sunrise",
      },
      {
        src: "https://images.unsplash.com/photo-1507812335255-961c6cb5d7cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Example of cultural portrait",
        caption: "Cultural portrait in local market",
      },
    ],
    featuredVideo: {
      id: "tip-action-video",
      src: "/videos/photography-tips.mp4",
      title: "Photography Tips in Action",
      thumbnail: {
        src: "/images/posts/video-thumbnail.jpg",
        alt: "Photography tips",
      },
    },

    categories: [mockBlogCategories[0], mockBlogCategories[1]],
    primaryCategory: mockBlogCategories[1],
    tags: ["photography", "travel", "techniques", "equipment", "editing"],

    highlights: [
      "Learn basic and advanced techniques",
      "Photography composition tips",
      "Equipment guide for every budget",
      "Editing and post-processing tips",
    ],

    featured: false,
    eyebrow: "Photography Guide",

    series: {
      id: "travel-photography",
      name: "Travel Photography",
      order: 1,
    },

    seo: {
      title: "Travel Photography Guide | Techniques and Tips",
      description:
        "Improve your travel photography skills. Learn about equipment, composition, light, and editing.",
      keywords: [
        "photography",
        "travel",
        "photographic techniques",
        "editing",
        "photography equipment",
      ],
      canonicalUrl:
        "https://yourtravelwebsite.com/blog/travel-photography-tips",
    },

    analytics: {
      views: 9870,
      likes: 632,
      shares: 445,
      timeOnPage: 420,
      bounceRate: 0.22,
    },

    engagement: {
      likes: 632,
      comments: [],
      shares: 445,
      savedCount: 521,
    },

    version: 2,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[0],
        timestamp: "2024-01-20T14:00:00Z",
      },
      {
        id: "rev-2",
        changes: "Updated with new editing techniques",
        editor: authors[1],
        timestamp: "2024-01-20T14:15:00Z",
      },
    ],
  },
  {
    id: 6,
    createdAt: "2023-12-20T09:45:00Z",
    updatedAt: "2024-01-18T16:30:00Z",
    slug: "sustainable-travel",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "Sustainable Travel Guide: Explore with Consciousness",
    subtitle: "Responsible tourism for a better future",
    excerpt:
      "Discover how to travel responsibly and minimize your environmental impact while exploring the world. Practical tips for sustainable tourism.",
    introduction:
      "Sustainable tourism not only benefits the environment but also enriches your travel experience and supports local communities. Learn how to make a difference.",

    content: [
      {
        order: 1,
        title: "What is Sustainable Tourism?",
        body: "Sustainable tourism seeks to minimize negative impact on the environment and maximize benefits for local communities. It includes responsible travel practices and conscious decisions.",
        image: {
          src: "https://plus.unsplash.com/premium_photo-1684313874026-b26d35ae07e6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Sustainable tourism practices",
          caption:
            "Sustainable tourism benefits both the traveler and the destination",
        },
      },
      {
        order: 2,
        title: "Eco-friendly Accommodations",
        body: "Guide to finding and choosing accommodations that implement sustainable practices, from green hotels to eco-lodges.",
        image: {
          src: "https://images.unsplash.com/photo-1598638984719-4983523619c2?q=80&w=3416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Eco-lodge in nature",
          caption: "Eco-lodges offer unique and sustainable experiences",
        },
      },
      {
        order: 3,
        title: "Sustainable Transportation",
        body: "Transportation options with lower environmental impact and how to calculate and offset your carbon footprint during travels.",
      },
    ],

    author: authors[1],
    publishDate: "2024-01-18T16:00:00Z",
    readTime: 9,
    wordCount: 1800,

    coverImage: {
      src: "https://images.unsplash.com/photo-1591807105152-594ed605cc58?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Sustainable tourism in action",
      caption: "Traveling responsibly",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1591057153717-8ef861f42032?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Interaction with local communities",
        caption: "Sustainable tourism benefits local communities",
      },
      {
        src: "https://images.unsplash.com/photo-1590671911659-3ce95e8b91c5?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Conservation of natural areas",
        caption: "Preservation of ecosystems through responsible tourism",
      },
    ],

    categories: [mockBlogCategories[0], mockBlogCategories[1]],
    primaryCategory: mockBlogCategories[0],
    tags: [
      "sustainability",
      "ecotourism",
      "environment",
      "responsible",
      "communities",
    ],

    highlights: [
      "Learn about sustainable tourism",
      "Find eco-friendly accommodations",
      "Reduce your carbon footprint",
      "Support local communities",
    ],

    featured: true,
    eyebrow: "Responsible Tourism",

    series: {
      id: "sustainable-travel",
      name: "Responsible Tourism",
      order: 1,
    },

    seo: {
      title: "Complete Guide to Sustainable Travel | Responsible Tourism",
      description:
        "Learn how to travel sustainably and responsibly. Tips for minimizing your environmental impact while exploring the world.",
      keywords: [
        "sustainable tourism",
        "responsible travel",
        "ecotourism",
        "environment",
        "sustainability",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/sustainable-travel",
    },

    analytics: {
      views: 8940,
      likes: 723,
      shares: 512,
      timeOnPage: 395,
      bounceRate: 0.19,
    },

    engagement: {
      likes: 723,
      comments: [],
      shares: 512,
      savedCount: 478,
    },

    version: 2,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[1],
        timestamp: "2024-01-18T16:00:00Z",
      },
      {
        id: "rev-2",
        changes: "Updated with new sustainable resources",
        editor: authors[1],
        timestamp: "2024-01-18T16:30:00Z",
      },
    ],
  },
  {
    id: 7,
    createdAt: "2023-12-15T10:30:00Z",
    updatedAt: "2024-01-15T13:45:00Z",
    slug: "extreme-adventures",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "Extreme Sports Around the World",
    subtitle: "Guide for adrenaline enthusiasts",
    excerpt:
      "Complete guide to the best locations for extreme sports, from skydiving to deep diving. Includes safety tips and preparation.",
    introduction:
      "For adrenaline enthusiasts, each destination offers a new opportunity to test their limits and experience unique adventures. Discover the best places for each extreme sport.",

    content: [
      {
        order: 1,
        title: "Skydiving in Dubai",
        body: "The ultimate skydiving experience over Palm Jumeirah, with unparalleled views of the city of the future. Includes information about certified centers and requirements.",
        image: {
          src: "https://images.unsplash.com/photo-1523897776834-7053be56e54e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Skydiving over Palm Jumeirah",
          caption: "Jumping over Dubai's unique landscapes",
        },
      },
      {
        order: 2,
        title: "Surfing in Nazaré, Portugal",
        body: "Home to the world's biggest waves, Nazaré offers unique challenges for experienced surfers. Includes information about seasons and safety.",
        image: {
          src: "https://images.unsplash.com/photo-1718658617119-e382082f772e?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Giant waves in Nazaré",
          caption: "The legendary waves of Nazaré",
        },
      },
      {
        order: 3,
        title: "Climbing in Yosemite",
        body: "Rock climbing paradise, with routes for all levels. Detailed information about permits, seasons, and necessary equipment.",
      },
    ],

    author: authors[0],
    publishDate: "2024-01-15T13:00:00Z",
    readTime: 13,
    wordCount: 2600,

    coverImage: {
      src: "https://plus.unsplash.com/premium_photo-1661923734776-1a0417fb6a9f?q=80&w=3406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Extreme sports collage",
      caption: "Extreme adventures around the world",
    },
    gallery: [
      {
        src: "https://plus.unsplash.com/premium_photo-1661962915429-e902c54e6fdd?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Climbing El Capitan",
        caption: "Climbing the legendary walls of Yosemite",
      },
      {
        src: "https://images.unsplash.com/photo-1536430794875-04e65340fabc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Diving in Silfra, Iceland",
        caption: "Diving between tectonic plates in Silfra",
      },
    ],

    categories: [mockBlogCategories[0], mockBlogCategories[3]],
    primaryCategory: mockBlogCategories[3],
    tags: [
      "extreme sports",
      "adventure",
      "adrenaline",
      "skydiving",
      "surfing",
      "climbing",
    ],

    highlights: [
      "Best destinations for each sport",
      "Essential safety tips",
      "Required equipment guide",
      "Certification information",
    ],

    featured: true,
    eyebrow: "Extreme Adventure",

    series: {
      id: "extreme-sports",
      name: "Extreme Sports Guide",
      order: 1,
    },

    seo: {
      title: "World Guide to Extreme Sports | Destinations and Tips",
      description:
        "Discover the best destinations for extreme sports. From skydiving in Dubai to surfing in Nazaré.",
      keywords: [
        "extreme sports",
        "adventure",
        "skydiving",
        "surfing",
        "climbing",
        "adrenaline",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/extreme-adventures",
    },

    analytics: {
      views: 11250,
      likes: 892,
      shares: 634,
      timeOnPage: 445,
      bounceRate: 0.2,
    },

    engagement: {
      likes: 892,
      comments: [],
      shares: 634,
      savedCount: 567,
    },

    version: 3,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[0],
        timestamp: "2024-01-15T13:00:00Z",
      },
      {
        id: "rev-2",
        changes: "Updated with new destinations",
        editor: authors[0],
        timestamp: "2024-01-15T13:45:00Z",
      },
    ],
  },
  {
    id: 8,
    createdAt: "2023-12-10T08:15:00Z",
    updatedAt: "2024-01-12T11:30:00Z",
    slug: "budget-travel",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "Travel More for Less: Budget Guide 2024",
    subtitle: "Discover how to travel without spending a fortune",
    excerpt:
      "Proven strategies to maximize your travel budget without sacrificing incredible experiences. Practical tips and useful resources.",
    introduction:
      "Traveling doesn't have to be expensive. With the right strategies and smart planning, you can explore the world without spending a fortune.",
    content: [
      {
        order: 1,
        title: "Financial Planning",
        body: "Learn to create a realistic budget and discover useful tools for tracking expenses during your trip.",
        image: {
          src: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Budget travel planning",
          caption: "Good planning is key to traveling on a budget",
        },
      },
      {
        order: 2,
        title: "Affordable Flights",
        body: "Techniques and tools for finding the best flight prices, including using specialized search engines and mileage programs.",
      },
      {
        order: 3,
        title: "Alternative Accommodation",
        body: "Affordable but safe accommodation options, from hostels to house swapping and couchsurfing.",
      },
    ],

    author: authors[1],
    coAuthors: [authors[2]],
    publishDate: "2024-01-12T11:00:00Z",
    readTime: 10,
    wordCount: 2000,

    coverImage: {
      src: "https://images.unsplash.com/photo-1505164294036-5fad98506d20?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Traveler with backpack",
      caption: "Traveling economically but smartly",
    },
    gallery: [],

    categories: [mockBlogCategories[0], mockBlogCategories[1]],
    primaryCategory: mockBlogCategories[1],
    tags: ["budget", "savings", "budget travel", "tips", "planning"],

    highlights: [
      "Find flights at the best price",
      "Safe and affordable accommodation",
      "Eat well spending less",
      "Free activities at each destination",
    ],

    featured: false,
    eyebrow: "Budget Travel",

    series: {
      id: "budget-travel",
      name: "Low Budget Travel",
      order: 2,
    },

    seo: {
      title: "Complete Guide: How to Travel on a Budget in 2024",
      description:
        "Learn to travel more while spending less. Practical tips for finding cheap flights, affordable accommodation, and more.",
      keywords: [
        "budget travel",
        "low budget",
        "savings",
        "cheap flights",
        "hostels",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/budget-travel",
      ogImage: {
        src: "/images/posts/budget-travel-og.jpg",
        alt: "Budget Travel",
      },
    },

    analytics: {
      views: 14560,
      likes: 876,
      shares: 692,
      timeOnPage: 410,
      bounceRate: 0.21,
    },

    engagement: {
      likes: 876,
      comments: [],
      shares: 692,
      savedCount: 534,
    },

    version: 2,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[1],
        timestamp: "2024-01-12T11:00:00Z",
      },
      {
        id: "rev-2",
        changes: "Updated with new savings resources",
        editor: authors[2],
        timestamp: "2024-01-12T11:30:00Z",
      },
    ],
  },
  {
    id: 9,
    createdAt: "2023-12-05T09:20:00Z",
    updatedAt: "2024-01-10T15:45:00Z",
    slug: "cultural-destinations",
    locale: "en-US",
    type: "regular",
    status: "published",
    visibility: "public",

    title: "The 10 Most Fascinating Cultural Destinations",
    subtitle: "A journey through world heritage",
    excerpt:
      "Explore the cities with the richest cultural heritage and historical patrimony in the world. From ancient temples to modern artistic expressions.",
    introduction:
      "Immerse yourself in the history, art, and traditions of some of the planet's most fascinating places. Each destination offers a unique perspective on human culture.",

    content: [
      {
        order: 1,
        title: "Kyoto, Japan",
        body: "City of millennial temples and living traditions, Kyoto represents the essence of Japanese culture. Discover its zen gardens, tea ceremonies, and traditional festivals.",
        image: {
          src: "https://images.unsplash.com/photo-1512692723619-8b3e68365c9c?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Traditional temple in Kyoto",
          caption: "The Golden Temple, one of Kyoto's symbols",
        },
      },
      {
        order: 2,
        title: "Varanasi, India",
        body: "The world's oldest continuously inhabited city, Varanasi is India's spiritual heart. Experience the rituals on the Ganges and rich cultural life.",
        image: {
          src: "https://plus.unsplash.com/premium_photo-1697730291496-f1ed760a5f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          alt: "Ceremony on the Ganges River",
          caption: "Traditional ceremonies at dawn on the Ganges",
        },
      },
      {
        order: 3,
        title: "Rome, Italy",
        body: "The Eternal City, where every street tells a millennial story. Art, architecture, and gastronomy merge in a unique cultural experience.",
      },
    ],

    author: authors[2],
    publishDate: "2024-01-10T15:00:00Z",
    readTime: 14,
    wordCount: 2800,

    coverImage: {
      src: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Collage of cultural destinations",
      caption: "The world's most impressive cultural destinations",
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1705628078563-966777473473?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "The ancient city of Petra",
        caption: "Petra, the pink city of the desert",
      },
      {
        src: "https://images.unsplash.com/photo-1720766397488-81a83b54c32c?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Machu Picchu at dawn",
        caption: "Machu Picchu, the lost city of the Incas",
      },
    ],

    categories: [mockBlogCategories[0], mockBlogCategories[2]],
    primaryCategory: mockBlogCategories[0],
    tags: ["culture", "history", "heritage", "traditions", "art"],

    highlights: [
      "Explore UNESCO World Heritage sites",
      "Participate in traditional festivals",
      "Discover local gastronomy",
      "Appreciate art and architecture",
    ],

    featured: true,
    eyebrow: "Cultural Destinations",

    series: {
      id: "cultural-destinations",
      name: "World Heritage",
      order: 1,
    },

    seo: {
      title: "Top 10 Cultural Destinations in the World | Complete Guide",
      description:
        "Discover the world's most fascinating cultural destinations. History, art, and traditions in the most emblematic places.",
      keywords: [
        "cultural destinations",
        "heritage",
        "history",
        "art",
        "traditions",
      ],
      canonicalUrl: "https://yourtravelwebsite.com/blog/cultural-destinations",
      ogImage: {
        src: "/images/posts/cultural-destinations-og.jpg",
        alt: "World cultural destinations",
      },
    },

    analytics: {
      views: 13280,
      likes: 945,
      shares: 678,
      timeOnPage: 465,
      bounceRate: 0.18,
    },

    engagement: {
      likes: 945,
      comments: [],
      shares: 678,
      savedCount: 589,
    },

    version: 2,
    revision: [
      {
        id: "rev-1",
        changes: "Initial publication",
        editor: authors[2],
        timestamp: "2024-01-10T15:00:00Z",
      },
      {
        id: "rev-2",
        changes: "Updated with new cultural destinations",
        editor: authors[2],
        timestamp: "2024-01-10T15:45:00Z",
      },
    ],
  },
  // {
  //   id: 10,
  //   createdAt: "2023-12-01T10:45:00Z",
  //   updatedAt: "2024-01-05T13:20:00Z",
  //   slug: "european-capitals-guide",
  //   locale: "en-US",
  //   type: "regular",
  //   status: "published",
  //   visibility: "public",

  //   title: "Definitive Guide: European Capitals in 2024",
  //   subtitle: "The best of Europe in one trip",
  //   excerpt:
  //     "Everything you need to know to explore Europe's most emblematic cities this year. From Paris to Berlin, discover the best-kept secrets.",
  //   introduction:
  //     "Europe is a continent that combines millennial history with vibrant modernity. This guide will take you through its most fascinating capitals, revealing both iconic sites and hidden treasures.",

  //   content: [
  //     {
  //       order: 1,
  //       title: "Paris: Beyond the Eiffel Tower",
  //       body: "Discover the less touristy neighborhoods and hidden gems of the City of Light. From vintage markets to historic cafes.",
  //       image: {
  //         src: "/images/posts/paris-secret.jpg",
  //         alt: "Picturesque Paris alley",
  //         caption: "The secret corners of Paris",
  //       },
  //     },
  //     {
  //       order: 2,
  //       title: "Berlin: Art and Counterculture",
  //       body: "The German capital is an open-air museum of history and urban art. Explore its alternative galleries and unique nightlife.",
  //       image: {
  //         src: "/images/posts/berlin-art.jpg",
  //         alt: "Street art in Berlin",
  //         caption: "Urban art defines Berlin's spirit",
  //       },
  //     },
  //     {
  //       order: 3,
  //       title: "Rome: The Eternal City",
  //       body: "Beyond the Colosseum and Vatican, discover authentic Roman life in Trastevere and other traditional neighborhoods.",
  //       link: {
  //         href: "/resources/rome-local-guide",
  //         label: "Local guide to Rome",
  //       },
  //     },
  //   ],

  //   author: authors[1],
  //   coAuthors: [authors[0]],
  //   publishDate: "2024-01-05T13:00:00Z",
  //   readTime: 16,
  //   wordCount: 3200,

  //   coverImage: {
  //     src: "/images/posts/european-capitals-cover.jpg",
  //     alt: "Collage of European capitals",
  //     caption: "Europe's most emblematic capitals",
  //   },
  //   gallery: [
  //     {
  //       src: "/images/posts/amsterdam-canals.jpg",
  //       alt: "Amsterdam canals",
  //       caption: "The picturesque canals of Amsterdam",
  //     },
  //     {
  //       src: "/images/posts/prague-night.jpg",
  //       alt: "Prague illuminated",
  //       caption: "Prague's old town at nightfall",
  //     },
  //   ],

  //   categories: [mockBlogCategories[0], mockBlogCategories[1]],
  //   primaryCategory: mockBlogCategories[0],
  //   tags: ["europe", "cities", "culture", "travel", "history"],

  //   highlights: [
  //     "Discover local secrets",
  //     "Alternative urban routes",
  //     "Best times to visit",
  //     "Public transport tips",
  //   ],

  //   featured: true,
  //   eyebrow: "Europe Guide 2024",

  //   series: {
  //     id: "europe-guides",
  //     name: "Europe Guides",
  //     order: 1,
  //   },

  //   seo: {
  //     title: "Complete Guide to European Capitals 2024 | Tips and Routes",
  //     description:
  //       "Discover the best European capitals in 2024. Detailed guide with local tips, secret routes, and unique experiences.",
  //     keywords: [
  //       "europe",
  //       "european capitals",
  //       "europe travel",
  //       "europe guide",
  //       "european cities",
  //     ],
  //     canonicalUrl:
  //       "https://yourtravelwebsite.com/blog/european-capitals-guide",
  //     ogImage: {
  //       src: "/images/posts/europe-guide-og.jpg",
  //       alt: "Capitals of Europe",
  //     },
  //   },

  //   analytics: {
  //     views: 16890,
  //     likes: 1123,
  //     shares: 845,
  //     timeOnPage: 495,
  //     bounceRate: 0.17,
  //   },

  //   engagement: {
  //     likes: 1123,
  //     comments: [],
  //     shares: 845,
  //     savedCount: 678,
  //   },

  //   version: 3,
  //   revision: [
  //     {
  //       id: "rev-1",
  //       changes: "Initial publication",
  //       editor: authors[1],
  //       timestamp: "2024-01-05T13:00:00Z",
  //     },
  //     {
  //       id: "rev-2",
  //       changes: "Updated with new recommendations",
  //       editor: authors[0],
  //       timestamp: "2024-01-05T13:20:00Z",
  //     },
  //   ],
  // },
];

// Sample Authors
// const authors: Author[] = [
//   {
//     id: 1,
//     name: "Pablo Karam",
//     slug: "pablo-karam",
//     bio: "Experto en viajes y fotógrafo profesional con más de 10 años de experiencia documentando destinos alrededor del mundo.",
//     avatar: {
//       src: "/images/authors/pablo-karam.jpg",
//       alt: "Pablo Karam",
//     },
//     // social: {
//     //   twitter: "@pablokaram",
//     //   instagram: "@pablokaramtravels"
//     // }
//   },
//   {
//     id: 2,
//     name: "María González",
//     slug: "maria-gonzalez",
//     bio: "Escritora de viajes especializada en turismo sostenible y experiencias culturales.",
//     avatar: {
//       src: "/images/authors/maria-gonzalez.jpg",
//       alt: "María González",
//     },
//     // social: {
//     //   twitter: "@mariagonzalez",
//     //   instagram: "@mariaviajes"
//     // }
//   },
//   {
//     id: 3,
//     name: "Carlos Ruiz",
//     slug: "carlos-ruiz",
//     bio: "Chef y experto en gastronomía internacional, especializado en documentar tradiciones culinarias.",
//     avatar: {
//       src: "/images/authors/carlos-ruiz.jpg",
//       alt: "Carlos Ruiz",
//     },
//     // social: {
//     //   twitter: "@carlosruizchef",
//     //   instagram: "@worldflavors"
//     // }
//   },
// ];

// export const mockBlogPosts: BlogPost[] = [
//   {
//     // Base Entity Fields
//     id: 1,
//     createdAt: "2024-01-15T08:00:00Z",
//     updatedAt: "2024-01-29T14:30:00Z",

//     // Identity & URLs
//     slug: "empacar-como-pro",
//     locale: "es-MX",

//     // Content Classification
//     type: "featured",
//     status: "published",
//     visibility: "public",

//     // Core Content
//     title: "Empacar como un Pro: Consejos para Viajes Eficientes",
//     subtitle: "Maximiza el espacio y minimiza el estrés",
//     excerpt:
//       "Empacar bien es clave para viajar sin estrés. Con estos consejos, aprenderás a optimizar tu equipaje para disfrutar de cada momento del viaje sin complicaciones.",
//     introduction:
//       "Empacar bien es clave para viajar sin estrés. Con estos consejos, aprenderás a optimizar tu equipaje para disfrutar de cada momento del viaje sin complicaciones.",
//     content: [
//       {
//         order: 1,
//         title: "Elige la Maleta Correcta",
//         body: "Todo comienza con seleccionar la maleta adecuada. Para viajes cortos, una mochila o maleta de mano es ideal. Para viajes largos, opta por una maleta rígida que ofrezca mayor protección. Asegúrate de que sea ligera y fácil de transportar.",
//         image: {
//           src: "https://plus.unsplash.com/premium_photo-1723478589816-405a6c62510f?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Diferentes tipos de maletas para viaje",
//           caption:
//             "Seleccionar la maleta adecuada es el primer paso para un viaje exitoso",
//         },
//       },
//       {
//         order: 2,
//         title: "Haz una Lista de Verificación",
//         body: "Crear una lista con lo esencial es fundamental: ropa adecuada, artículos de higiene, documentos importantes y cargadores. Usa apps como Google Keep para facilitar el proceso y asegurarte de no olvidar nada.",
//         link: {
//           href: "/recursos/checklist-viaje",
//           label: "Descarga nuestra checklist",
//         },
//       },
//     ],

//     // Rich Metadata
//     author: authors[0],
//     coAuthors: [authors[1]],
//     publishDate: "2024-01-29T10:00:00Z",
//     readTime: 8,
//     wordCount: 1200,

//     // Media
//     coverImage: {
//       src: "https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Equipaje organizado para viaje",
//       caption: "Una maleta bien organizada hace la diferencia",
//     },
//     gallery: [
//       {
//         src: "https://images.unsplash.com/photo-1524416117929-2dd85b124635?q=80&w=3431&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Cubos organizadores de equipaje",
//         caption:
//           "Los cubos organizadores son esenciales para mantener el orden",
//       },
//     ],

//     // Categorization & Discovery
//     categories: mockBlogCategories,
//     primaryCategory: mockBlogCategories[0],
//     tags: ["viajes", "equipaje", "consejos", "organización", "maleta"],
//     highlights: [
//       "Selecciona la maleta adecuada para cada tipo de viaje",
//       "Usa cubos organizadores para mantener el orden",
//       "Lleva solo los artículos de aseo necesarios",
//       "Incluye un pequeño kit de emergencia",
//       "Ahorra espacio para recuerdos o compras inesperadas",
//     ],
//     featured: true,
//     eyebrow: "Guía Esencial",

//     // Related Content & Series
//     series: {
//       id: "viajes-101",
//       name: "Fundamentos del Viaje",
//       order: 1,
//     },
//     relatedPosts: [
//       {
//         id: 2,
//         title: "Los 10 Destinos Imperdibles para 2024",
//         slug: "destinos-imperdibles-2024",
//         image: {
//           src: "/images/posts/destinos-2024-thumb.jpg",
//           alt: "Destinos turísticos 2024",
//         },
//       },
//     ],

//     // Technical Metadata
//     seo: {
//       title:
//         "Guía Definitiva: Cómo Empacar como un Profesional para tus Viajes",
//       description:
//         "Aprende técnicas profesionales para empacar tu equipaje de manera eficiente y organizada. Consejos prácticos para viajeros.",
//       keywords: [
//         "empacar",
//         "equipaje",
//         "viajes",
//         "organización",
//         "consejos de viaje",
//       ],
//       ogImage: {
//         src: "/images/posts/empacar-como-pro-og.jpg",
//         alt: "Guía de equipaje",
//       },
//       canonicalUrl: "https://tuwebdeviajes.com/blog/empacar-como-pro",
//     },
//     analytics: {
//       views: 15420,
//       likes: 843,
//       shares: 231,
//       timeOnPage: 325,
//       bounceRate: 0.23,
//     },
//     engagement: {
//       likes: 843,
//       comments: [],
//       shares: 231,
//       savedCount: 156,
//     },

//     // Versioning & History
//     version: 1,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[0],
//         timestamp: "2024-01-29T10:00:00Z",
//       },
//     ],
//   },
//   {
//     id: 2,
//     createdAt: "2024-01-10T09:00:00Z",
//     updatedAt: "2024-01-15T16:45:00Z",
//     slug: "destinos-imperdibles-2024",
//     locale: "es-MX",
//     type: "featured",
//     status: "published",
//     visibility: "public",

//     title: "Los 10 Destinos Imperdibles para 2024",
//     subtitle: "Descubre los lugares que definirán el año en viajes",
//     excerpt:
//       "Descubre los destinos más emocionantes y únicos que debes visitar este año, desde playas paradisíacas hasta ciudades vibrantes.",
//     introduction:
//       "El mundo está lleno de lugares asombrosos por descubrir. Te presentamos una selección cuidadosa de los destinos que están marcando tendencia en 2024, combinando lugares icónicos con gemas ocultas.",

//     content: [
//       {
//         order: 1,
//         title: "1. Islandia: Aurora Boreal y Aventura",
//         body: "Un destino que combina naturaleza salvaje con experiencias únicas. Desde géiseres hasta auroras boreales, Islandia ofrece paisajes de otro mundo. La mejor época para visitar es entre septiembre y marzo para ver las auroras boreales.",
//         image: {
//           src: "/images/posts/islandia-aurora.jpg",
//           alt: "Aurora boreal en Islandia",
//           caption:
//             "Las auroras boreales son uno de los espectáculos más impresionantes de Islandia",
//         },
//       },
//       {
//         order: 2,
//         title: "2. Vietnam: Cultura y Gastronomía",
//         body: "Un país que cautiva con su rica herencia cultural, paisajes espectaculares y una gastronomía que es Patrimonio de la Humanidad. Desde la bahía de Ha Long hasta los mercados flotantes del delta del Mekong.",
//         image: {
//           src: "/images/posts/vietnam-culture.jpg",
//           alt: "Mercado flotante en Vietnam",
//           caption:
//             "Los mercados flotantes son parte esencial de la vida diaria en Vietnam",
//         },
//       },
//     ],

//     author: authors[1],
//     coAuthors: [authors[0]],
//     publishDate: "2024-01-15T10:00:00Z",
//     readTime: 12,
//     wordCount: 2500,

//     coverImage: {
//       src: "/images/posts/destinos-2024-cover.jpg",
//       alt: "Collage de destinos turísticos 2024",
//       caption: "Los destinos más emocionantes para explorar en 2024",
//     },
//     gallery: [
//       {
//         src: "/images/posts/islandia-1.jpg",
//         alt: "Paisajes de Islandia",
//         caption: "Los paisajes volcánicos de Islandia",
//       },
//       {
//         src: "/images/posts/vietnam-1.jpg",
//         alt: "Calles de Hanoi",
//         caption: "Las animadas calles del casco antiguo de Hanoi",
//       },
//     ],

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[0],
//     tags: ["viajes2024", "destinos", "aventura", "cultura", "gastronomía"],
//     highlights: [
//       "Descubre destinos únicos y poco explorados",
//       "Experimenta culturas fascinantes",
//       "Prueba gastronomía local auténtica",
//       "Vive aventuras inolvidables",
//     ],
//     featured: true,
//     eyebrow: "Guía 2024",

//     series: {
//       id: "destinos-2024",
//       name: "Guías de Destinos 2024",
//       order: 1,
//     },

//     seo: {
//       title: "Los 10 Mejores Destinos para Viajar en 2024 | Guía Completa",
//       description:
//         "Descubre los destinos más emocionantes para viajar en 2024. Desde auroras boreales en Islandia hasta mercados flotantes en Vietnam.",
//       keywords: [
//         "destinos 2024",
//         "viajes",
//         "turismo",
//         "vacaciones",
//         "guía de viajes",
//       ],
//       ogImage: {
//         src: "/images/posts/destinos-2024-og.jpg",
//         alt: "Destinos 2024",
//       },
//       canonicalUrl: "https://tuwebdeviajes.com/blog/destinos-imperdibles-2024",
//     },

//     analytics: {
//       views: 25630,
//       likes: 1247,
//       shares: 892,
//       timeOnPage: 480,
//       bounceRate: 0.18,
//     },

//     engagement: {
//       likes: 1247,
//       comments: [],
//       shares: 892,
//       savedCount: 734,
//     },

//     version: 2,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[1],
//         timestamp: "2024-01-15T10:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevas recomendaciones",
//         editor: authors[0],
//         timestamp: "2024-01-15T16:45:00Z",
//       },
//     ],
//   },
//   {
//     id: 3,
//     createdAt: "2024-01-05T10:30:00Z",
//     updatedAt: "2024-01-28T11:20:00Z",
//     slug: "gastronomia-mundial",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Guía Definitiva de Gastronomía Mundial",
//     subtitle: "Un viaje culinario por los sabores más extraordinarios",
//     excerpt:
//       "Un recorrido por los sabores más extraordinarios del mundo, desde la pasta italiana hasta el sushi japonés. Descubre la historia y técnicas detrás de los platos más emblemáticos.",
//     introduction:
//       "La gastronomía es uno de los placeres más grandes del viaje. En esta guía, exploraremos los platos imperdibles de cada región, sus orígenes y cómo disfrutarlos al máximo.",

//     content: [
//       {
//         order: 1,
//         title: "Italia: El Arte de la Pasta",
//         body: "La pasta italiana es mucho más que espaguetis con salsa. Cada región tiene sus especialidades únicas y técnicas tradicionales que se han transmitido por generaciones.",
//         image: {
//           src: "https://images.unsplash.com/photo-1447279506476-3faec8071eee?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Pasta italiana artesanal",
//           caption:
//             "Pasta fresca hecha a mano en una tradicional trattoria toscana",
//         },
//       },
//     ],

//     author: authors[2],
//     publishDate: "2024-01-28T11:00:00Z",
//     readTime: 15,
//     wordCount: 3000,

//     coverImage: {
//       src: "https://plus.unsplash.com/premium_photo-1666920345573-6b9699d90650?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Collage de platos internacionales",
//       caption: "La diversidad de la gastronomía mundial en una imagen",
//     },

//     categories: [mockBlogCategories[0], mockBlogCategories[2]],
//     primaryCategory: mockBlogCategories[2],
//     tags: ["gastronomía", "cultura", "cocina", "tradiciones", "comida"],

//     highlights: [
//       "Descubre platos tradicionales de cada región",
//       "Aprende sobre técnicas culinarias ancestrales",
//       "Conoce ingredientes únicos y su historia",
//       "Explora mercados locales emblemáticos",
//     ],

//     featured: false,
//     eyebrow: "Guía Gastronómica",

//     seo: {
//       title: "Guía Completa de Gastronomía Mundial | Platos Tradicionales",
//       description:
//         "Explora los sabores más extraordinarios del mundo. Desde Italia hasta Japón, descubre la historia y técnicas detrás de los platos más emblemáticos.",
//       keywords: [
//         "gastronomía",
//         "cocina mundial",
//         "platos tradicionales",
//         "comida",
//         "cultura",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/gastronomia-mundial",
//     },

//     analytics: {
//       views: 18750,
//       likes: 945,
//       shares: 623,
//       timeOnPage: 540,
//       bounceRate: 0.21,
//     },

//     engagement: {
//       likes: 945,
//       comments: [],
//       shares: 623,
//       savedCount: 528,
//     },

//     version: 1,
//   },
//   {
//     id: 4,
//     createdAt: "2024-01-01T08:15:00Z",
//     updatedAt: "2024-01-25T09:30:00Z",
//     slug: "mochilero-consejos",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Guía Completa para Viajeros Mochileros",
//     subtitle: "Aventuras increíbles con presupuesto limitado",
//     excerpt:
//       "Todo lo que necesitas saber para emprender tu aventura como mochilero, desde presupuesto hasta seguridad. Consejos prácticos para viajar ligero y seguro.",
//     introduction:
//       "Viajar como mochilero es una experiencia única que te permite explorar el mundo de manera auténtica y económica. Esta guía te ayudará a prepararte para tu próxima aventura.",

//     content: [
//       {
//         order: 1,
//         title: "Planificación y Presupuesto",
//         body: "La clave para un viaje exitoso como mochilero es la planificación inteligente y el manejo adecuado del presupuesto. Aprende a calcular gastos diarios y encontrar las mejores ofertas.",
//         image: {
//           src: "https://plus.unsplash.com/premium_photo-1680205897493-98243c7f11a5?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Planificación de viaje mochilero",
//           caption:
//             "Una buena planificación es esencial para el viaje mochilero",
//         },
//       },
//       {
//         order: 2,
//         title: "Elegir el Equipo Adecuado",
//         body: "La mochila correcta y el equipo esencial pueden hacer o deshacer tu viaje. Descubre qué llevar y qué dejar en casa.",
//         image: {
//           src: "https://images.unsplash.com/photo-1698521688714-dc482eb1c769?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Equipo esencial para mochileros",
//           caption: "Equipo básico recomendado para todo mochilero",
//         },
//       },
//       {
//         order: 3,
//         title: "Seguridad en el Camino",
//         body: "Tips esenciales para mantener seguros tus pertenencias y a ti mismo durante el viaje. Incluye recomendaciones de seguros y documentación.",
//         // link: {
//         //   href: "/recursos/seguridad-mochileros",
//         //   label: "Guía completa de seguridad",
//         // },
//       },
//     ],

//     author: authors[1],
//     publishDate: "2024-01-25T09:00:00Z",
//     readTime: 10,
//     wordCount: 2200,

//     coverImage: {
//       src: "https://plus.unsplash.com/premium_photo-1679515470684-1f6af2858b67?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Mochilero en montaña",
//       caption: "La libertad de viajar como mochilero",
//     },
//     gallery: [
//       {
//         src: "https://images.unsplash.com/photo-1689982920184-2c3ddcf81160?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Hostels populares",
//         caption: "Los mejores hostels para mochileros",
//       },
//       {
//         src: "https://plus.unsplash.com/premium_photo-1679691282550-c87e3975044d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Opciones de transporte",
//         caption: "Diferentes opciones de transporte para mochileros",
//       },
//     ],

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[1],
//     tags: ["mochilero", "aventura", "presupuesto", "viajes", "consejos"],

//     highlights: [
//       "Aprende a viajar con bajo presupuesto",
//       "Tips de seguridad esenciales",
//       "Consejos de alojamiento económico",
//       "Rutas recomendadas para mochileros",
//     ],

//     featured: false,
//     eyebrow: "Guía Básica",

//     series: {
//       id: "viajes-economicos",
//       name: "Viajes con Bajo Presupuesto",
//       order: 1,
//     },

//     seo: {
//       title: "Guía Completa para Viajeros Mochileros 2024 | Consejos y Tips",
//       description:
//         "Aprende todo lo necesario para viajar como mochilero. Consejos de presupuesto, seguridad, equipo y más.",
//       keywords: [
//         "mochilero",
//         "viajes económicos",
//         "aventura",
//         "presupuesto",
//         "consejos de viaje",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/mochilero-consejos",
//     },

//     analytics: {
//       views: 12840,
//       likes: 567,
//       shares: 423,
//       timeOnPage: 385,
//       bounceRate: 0.25,
//     },

//     engagement: {
//       likes: 567,
//       comments: [],
//       shares: 423,
//       savedCount: 389,
//     },

//     version: 1,
//   },
//   {
//     id: 5,
//     createdAt: "2023-12-28T11:20:00Z",
//     updatedAt: "2024-01-20T14:15:00Z",
//     slug: "fotografia-viajes-tips",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Fotografía de Viajes: Captura Momentos Inolvidables",
//     subtitle: "Técnicas y consejos para mejorar tus fotos de viaje",
//     excerpt:
//       "Aprende a capturar la esencia de tus viajes con consejos profesionales de fotografía, desde paisajes hasta retratos culturales.",
//     introduction:
//       "La fotografía de viajes es más que tomar fotos bonitas; es el arte de contar historias y preservar memorias únicas de cada destino. Descubre cómo mejorar tus habilidades fotográficas.",

//     content: [
//       {
//         order: 1,
//         title: "Equipo Esencial",
//         body: "Guía completa sobre el equipo fotográfico necesario para diferentes tipos de viajes y presupuestos. Desde cámaras profesionales hasta smartphones.",
//         image: {
//           src: "https://images.unsplash.com/photo-1552061902-146c1b6a3e51?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Equipo fotográfico profesional",
//           caption: "Equipo recomendado para fotografía de viajes",
//         },
//       },
//       {
//         order: 2,
//         title: "Composición y Luz",
//         body: "Aprende los principios básicos de composición fotográfica y cómo aprovechar la luz natural en diferentes momentos del día.",
//         image: {
//           src: "https://images.unsplash.com/photo-1661932912478-5d92f57db32b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Ejemplos de composición fotográfica",
//           caption: "Ejemplos de composición en fotografía de viajes",
//         },
//       },
//       {
//         order: 3,
//         title: "Edición y Post-procesado",
//         body: "Técnicas básicas de edición para mejorar tus fotos de viaje sin perder naturalidad. Software recomendado y flujos de trabajo.",
//         // link: {
//         //   href: "/recursos/edicion-fotos",
//         //   label: "Tutoriales de edición",
//         // },
//       },
//     ],

//     author: authors[0],
//     coAuthors: [authors[1]],
//     publishDate: "2024-01-20T14:00:00Z",
//     readTime: 11,
//     wordCount: 2800,

//     coverImage: {
//       src: "https://images.unsplash.com/photo-1579504344957-c09070053c7e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Fotógrafo en acción",
//       caption: "El arte de capturar momentos únicos",
//     },
//     gallery: [
//       {
//         src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Ejemplo de fotografía de paisaje",
//         caption: "Fotografía de paisaje al amanecer",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1507812335255-961c6cb5d7cd?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Ejemplo de retrato cultural",
//         caption: "Retrato cultural en mercado local",
//       },
//     ],
//     featuredVideo: {
//       id: "tip-action-video",
//       src: "/videos/tips-fotografia.mp4",
//       title: "Tips de Fotografía en Acción",
//       thumbnail: {
//         src: "/images/posts/video-thumbnail.jpg",
//         alt: "Tips de fotografía",
//       },
//     },

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[1],
//     tags: ["fotografía", "viajes", "técnicas", "equipo", "edición"],

//     highlights: [
//       "Aprende técnicas básicas y avanzadas",
//       "Consejos de composición fotográfica",
//       "Guía de equipo para cada presupuesto",
//       "Tips de edición y post-procesado",
//     ],

//     featured: false,
//     eyebrow: "Guía Fotográfica",

//     series: {
//       id: "fotografia-viajes",
//       name: "Fotografía de Viajes",
//       order: 1,
//     },

//     seo: {
//       title: "Guía de Fotografía de Viajes | Técnicas y Consejos",
//       description:
//         "Mejora tus habilidades en fotografía de viajes. Aprende sobre equipo, composición, luz y edición.",
//       keywords: [
//         "fotografía",
//         "viajes",
//         "técnicas fotográficas",
//         "edición",
//         "equipo fotográfico",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/fotografia-viajes-tips",
//     },

//     analytics: {
//       views: 9870,
//       likes: 632,
//       shares: 445,
//       timeOnPage: 420,
//       bounceRate: 0.22,
//     },

//     engagement: {
//       likes: 632,
//       comments: [],
//       shares: 445,
//       savedCount: 521,
//     },

//     version: 2,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[0],
//         timestamp: "2024-01-20T14:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevas técnicas de edición",
//         editor: authors[1],
//         timestamp: "2024-01-20T14:15:00Z",
//       },
//     ],
//   },
//   {
//     id: 6,
//     createdAt: "2023-12-20T09:45:00Z",
//     updatedAt: "2024-01-18T16:30:00Z",
//     slug: "viajes-sostenibles",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Guía de Viajes Sostenibles: Explora con Conciencia",
//     subtitle: "Turismo responsable para un futuro mejor",
//     excerpt:
//       "Descubre cómo viajar de manera responsable y minimizar tu impacto ambiental mientras exploras el mundo. Consejos prácticos para un turismo sostenible.",
//     introduction:
//       "El turismo sostenible no solo beneficia al medio ambiente, sino que también enriquece tu experiencia de viaje y apoya a las comunidades locales. Aprende cómo hacer la diferencia.",

//     content: [
//       {
//         order: 1,
//         title: "¿Qué es el Turismo Sostenible?",
//         body: "El turismo sostenible busca minimizar el impacto negativo en el medio ambiente y maximizar los beneficios para las comunidades locales. Incluye prácticas responsables de viaje y decisiones conscientes.",
//         image: {
//           src: "https://plus.unsplash.com/premium_photo-1684313874026-b26d35ae07e6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Prácticas de turismo sostenible",
//           caption:
//             "El turismo sostenible beneficia tanto al viajero como al destino",
//         },
//       },
//       {
//         order: 2,
//         title: "Alojamientos Eco-friendly",
//         body: "Guía para encontrar y elegir alojamientos que implementan prácticas sostenibles, desde hoteles verdes hasta eco-lodges.",
//         image: {
//           src: "https://images.unsplash.com/photo-1598638984719-4983523619c2?q=80&w=3416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Eco-lodge en medio de la naturaleza",
//           caption: "Los eco-lodges ofrecen experiencias únicas y sostenibles",
//         },
//       },
//       {
//         order: 3,
//         title: "Transporte Sostenible",
//         body: "Opciones de transporte con menor impacto ambiental y cómo calcular y compensar tu huella de carbono durante los viajes.",
//         // link: {
//         //   href: "/recursos/calculadora-carbono",
//         //   label: "Calcula tu huella de carbono",
//         // },
//       },
//     ],

//     author: authors[1],
//     publishDate: "2024-01-18T16:00:00Z",
//     readTime: 9,
//     wordCount: 1800,

//     coverImage: {
//       src: "https://images.unsplash.com/photo-1591807105152-594ed605cc58?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Turismo sostenible en acción",
//       caption: "Viajando de manera responsable",
//     },
//     gallery: [
//       {
//         src: "https://images.unsplash.com/photo-1591057153717-8ef861f42032?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Interacción con comunidades locales",
//         caption: "El turismo sostenible beneficia a las comunidades locales",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1590671911659-3ce95e8b91c5?q=80&w=3348&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Conservación de áreas naturales",
//         caption: "Preservación de ecosistemas a través del turismo responsable",
//       },
//     ],

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[0],
//     tags: [
//       "sostenibilidad",
//       "ecoturismo",
//       "medioambiente",
//       "responsable",
//       "comunidades",
//     ],

//     highlights: [
//       "Aprende sobre turismo sostenible",
//       "Encuentra alojamientos eco-friendly",
//       "Reduce tu huella de carbono",
//       "Apoya a comunidades locales",
//     ],

//     featured: true,
//     eyebrow: "Turismo Responsable",

//     series: {
//       id: "viajes-sostenibles",
//       name: "Turismo Responsable",
//       order: 1,
//     },

//     seo: {
//       title: "Guía Completa de Viajes Sostenibles | Turismo Responsable",
//       description:
//         "Aprende a viajar de manera sostenible y responsable. Consejos para minimizar tu impacto ambiental mientras exploras el mundo.",
//       keywords: [
//         "turismo sostenible",
//         "viajes responsables",
//         "ecoturismo",
//         "medio ambiente",
//         "sostenibilidad",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/viajes-sostenibles",
//     },

//     analytics: {
//       views: 8940,
//       likes: 723,
//       shares: 512,
//       timeOnPage: 395,
//       bounceRate: 0.19,
//     },

//     engagement: {
//       likes: 723,
//       comments: [],
//       shares: 512,
//       savedCount: 478,
//     },

//     version: 2,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[1],
//         timestamp: "2024-01-18T16:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevos recursos sostenibles",
//         editor: authors[1],
//         timestamp: "2024-01-18T16:30:00Z",
//       },
//     ],
//   },
//   {
//     id: 7,
//     createdAt: "2023-12-15T10:30:00Z",
//     updatedAt: "2024-01-15T13:45:00Z",
//     slug: "aventuras-extremas",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Deportes Extremos Alrededor del Mundo",
//     subtitle: "Guía para los amantes de la adrenalina",
//     excerpt:
//       "Guía completa de las mejores ubicaciones para practicar deportes extremos, desde paracaidismo hasta buceo profundo. Incluye consejos de seguridad y preparación.",
//     introduction:
//       "Para los amantes de la adrenalina, cada destino ofrece una nueva oportunidad de poner a prueba sus límites y vivir experiencias únicas. Descubre los mejores lugares para cada deporte extremo.",

//     content: [
//       {
//         order: 1,
//         title: "Paracaidismo en Dubai",
//         body: "La experiencia definitiva de paracaidismo sobre Palm Jumeirah, con vistas incomparables de la ciudad del futuro. Incluye información sobre centros certificados y requisitos.",
//         image: {
//           src: "https://images.unsplash.com/photo-1523897776834-7053be56e54e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Paracaidismo sobre Palm Jumeirah",
//           caption: "Saltando sobre los paisajes únicos de Dubai",
//         },
//       },
//       {
//         order: 2,
//         title: "Surf en Nazaré, Portugal",
//         body: "Hogar de las olas más grandes del mundo, Nazaré ofrece desafíos únicos para surfistas experimentados. Incluye información sobre temporadas y seguridad.",
//         image: {
//           src: "https://images.unsplash.com/photo-1718658617119-e382082f772e?q=80&w=3290&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Olas gigantes en Nazaré",
//           caption: "Las legendarias olas de Nazaré",
//         },
//       },
//       {
//         order: 3,
//         title: "Escalada en Yosemite",
//         body: "El paraíso de la escalada en roca, con rutas para todos los niveles. Información detallada sobre permisos, temporadas y equipo necesario.",
//         // link: {
//         //   href: "/recursos/guia-escalada",
//         //   label: "Guía completa de escalada",
//         // },
//       },
//     ],

//     author: authors[0],
//     publishDate: "2024-01-15T13:00:00Z",
//     readTime: 13,
//     wordCount: 2600,

//     coverImage: {
//       src: "https://plus.unsplash.com/premium_photo-1661923734776-1a0417fb6a9f?q=80&w=3406&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Collage de deportes extremos",
//       caption: "Aventuras extremas alrededor del mundo",
//     },
//     gallery: [
//       {
//         src: "https://plus.unsplash.com/premium_photo-1661962915429-e902c54e6fdd?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Escalada en El Capitán",
//         caption: "Escalando las paredes legendarias de Yosemite",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1536430794875-04e65340fabc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Buceo en Silfra, Islandia",
//         caption: "Buceo entre placas tectónicas en Silfra",
//       },
//     ],
//     // featuredVideo: {
//     //   src: "/videos/deportes-extremos-highlights.mp4",
//     //   title: "Los Mejores Momentos en Deportes Extremos",
//     //   thumbnail: {
//     //     src: "/images/posts/video-deportes-thumbnail.jpg",
//     //     alt: "Highlights de deportes extremos",
//     //   },
//     // },

//     categories: [mockBlogCategories[0], mockBlogCategories[3]],
//     primaryCategory: mockBlogCategories[3],
//     tags: [
//       "deportes extremos",
//       "aventura",
//       "adrenalina",
//       "paracaidismo",
//       "surf",
//       "escalada",
//     ],

//     highlights: [
//       "Mejores destinos para cada deporte",
//       "Consejos de seguridad esenciales",
//       "Guía de equipamiento necesario",
//       "Información sobre certificaciones",
//     ],

//     featured: true,
//     eyebrow: "Aventura Extrema",

//     series: {
//       id: "deportes-extremos",
//       name: "Guía de Deportes Extremos",
//       order: 1,
//     },

//     seo: {
//       title: "Guía Mundial de Deportes Extremos | Destinos y Consejos",
//       description:
//         "Descubre los mejores destinos para deportes extremos. Desde paracaidismo en Dubai hasta surf en Nazaré.",
//       keywords: [
//         "deportes extremos",
//         "aventura",
//         "paracaidismo",
//         "surf",
//         "escalada",
//         "adrenalina",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/aventuras-extremas",
//     },

//     analytics: {
//       views: 11250,
//       likes: 892,
//       shares: 634,
//       timeOnPage: 445,
//       bounceRate: 0.2,
//     },

//     engagement: {
//       likes: 892,
//       comments: [],
//       shares: 634,
//       savedCount: 567,
//     },

//     version: 3,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[0],
//         timestamp: "2024-01-15T13:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevos destinos",
//         editor: authors[0],
//         timestamp: "2024-01-15T13:45:00Z",
//       },
//     ],
//   },
//   {
//     id: 8,
//     createdAt: "2023-12-10T08:15:00Z",
//     updatedAt: "2024-01-12T11:30:00Z",
//     slug: "viajes-bajo-presupuesto",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Viaja más por Menos: Guía de Presupuesto 2024",
//     subtitle: "Descubre cómo viajar sin gastar una fortuna",
//     excerpt:
//       "Estrategias probadas para maximizar tu presupuesto de viaje sin sacrificar experiencias increíbles. Consejos prácticos y recursos útiles.",
//     introduction:
//       "Viajar no tiene que ser costoso. Con las estrategias correctas y una planificación inteligente, puedes explorar el mundo sin gastar una fortuna.",

//     content: [
//       {
//         order: 1,
//         title: "Planificación Financiera",
//         body: "Aprende a crear un presupuesto realista y descubre herramientas útiles para el seguimiento de gastos durante el viaje.",
//         image: {
//           src: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Planificación de viaje económico",
//           caption:
//             "Una buena planificación es clave para viajar con bajo presupuesto",
//         },
//       },
//       {
//         order: 2,
//         title: "Vuelos Económicos",
//         body: "Técnicas y herramientas para encontrar los mejores precios en vuelos, incluyendo el uso de buscadores especializados y programas de millas.",
//         // image: {
//         //   src: "/images/posts/vuelos-economicos.jpg",
//         //   alt: "Búsqueda de vuelos baratos",
//         //   caption: "Estrategias para encontrar vuelos económicos",
//         // },
//       },
//       {
//         order: 3,
//         title: "Alojamiento Alternativo",
//         body: "Opciones de alojamiento económico pero seguro, desde hostels hasta intercambio de casas y couchsurfing.",
//         // link: {
//         //   href: "/recursos/alojamiento-economico",
//         //   label: "Guía de alojamiento económico",
//         // },
//       },
//     ],

//     author: authors[1],
//     coAuthors: [authors[2]],
//     publishDate: "2024-01-12T11:00:00Z",
//     readTime: 10,
//     wordCount: 2000,

//     coverImage: {
//       src: "https://images.unsplash.com/photo-1505164294036-5fad98506d20?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Viajero con mochila",
//       caption: "Viajando de manera económica pero inteligente",
//     },
//     gallery: [
//       // {
//       //   src: "/images/posts/hostel-calidad.jpg",
//       //   alt: "Hostel moderno y limpio",
//       //   caption: "Los hostels modernos ofrecen buena calidad a bajo precio",
//       // },
//       // {
//       //   src: "/images/posts/comida-local.jpg",
//       //   alt: "Mercado local con comida típica",
//       //   caption: "Comer en mercados locales ahorra dinero y es más auténtico",
//       // },
//     ],

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[1],
//     tags: [
//       "presupuesto",
//       "ahorro",
//       "viajes económicos",
//       "consejos",
//       "planificación",
//     ],

//     highlights: [
//       "Encuentra vuelos al mejor precio",
//       "Alojamiento seguro y económico",
//       "Come bien gastando poco",
//       "Actividades gratuitas en cada destino",
//     ],

//     featured: false,
//     eyebrow: "Viajes Económicos",

//     series: {
//       id: "viajes-economicos",
//       name: "Viajes con Bajo Presupuesto",
//       order: 2,
//     },

//     seo: {
//       title: "Guía Completa: Cómo Viajar con Bajo Presupuesto en 2024",
//       description:
//         "Aprende a viajar más gastando menos. Consejos prácticos para encontrar vuelos baratos, alojamiento económico y más.",
//       keywords: [
//         "viajes económicos",
//         "bajo presupuesto",
//         "ahorro",
//         "vuelos baratos",
//         "hostels",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/viajes-bajo-presupuesto",
//       ogImage: {
//         src: "/images/posts/viajes-economicos-og.jpg",
//         alt: "Viajes económicos",
//       },
//     },

//     analytics: {
//       views: 14560,
//       likes: 876,
//       shares: 692,
//       timeOnPage: 410,
//       bounceRate: 0.21,
//     },

//     engagement: {
//       likes: 876,
//       comments: [],
//       shares: 692,
//       savedCount: 534,
//     },

//     version: 2,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[1],
//         timestamp: "2024-01-12T11:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevos recursos de ahorro",
//         editor: authors[2],
//         timestamp: "2024-01-12T11:30:00Z",
//       },
//     ],
//   },
//   {
//     id: 9,
//     createdAt: "2023-12-05T09:20:00Z",
//     updatedAt: "2024-01-10T15:45:00Z",
//     slug: "destinos-culturales",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Los 10 Destinos Culturales más Fascinantes",
//     subtitle: "Un viaje por el patrimonio mundial",
//     excerpt:
//       "Explora las ciudades con mayor riqueza cultural y patrimonio histórico del mundo. Desde antiguos templos hasta modernas expresiones artísticas.",
//     introduction:
//       "Sumérgete en la historia, el arte y las tradiciones de algunos de los lugares más fascinantes del planeta. Cada destino ofrece una perspectiva única de la cultura humana.",

//     content: [
//       {
//         order: 1,
//         title: "Kioto, Japón",
//         body: "Ciudad de templos milenarios y tradiciones vivas, Kioto representa la esencia de la cultura japonesa. Descubre sus jardines zen, ceremonias de té y festivales tradicionales.",
//         image: {
//           src: "https://images.unsplash.com/photo-1512692723619-8b3e68365c9c?q=80&w=3142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Templo tradicional en Kioto",
//           caption: "El Templo Dorado, uno de los símbolos de Kioto",
//         },
//       },
//       {
//         order: 2,
//         title: "Varanasi, India",
//         body: "La ciudad más antigua del mundo habitada continuamente, Varanasi es el corazón espiritual de India. Experimenta los rituales en el Ganges y la rica vida cultural.",
//         image: {
//           src: "https://plus.unsplash.com/premium_photo-1697730291496-f1ed760a5f1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//           alt: "Ceremonia en el río Ganges",
//           caption: "Ceremonias tradicionales al amanecer en el Ganges",
//         },
//       },
//       {
//         order: 3,
//         title: "Roma, Italia",
//         body: "La Ciudad Eterna, donde cada calle cuenta una historia milenaria. Arte, arquitectura y gastronomía se fusionan en una experiencia cultural única.",
//         // link: {
//         //   href: "/recursos/guia-roma",
//         //   label: "Guía completa de Roma",
//         // },
//       },
//     ],

//     author: authors[2],
//     publishDate: "2024-01-10T15:00:00Z",
//     readTime: 14,
//     wordCount: 2800,

//     coverImage: {
//       src: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "Collage de destinos culturales",
//       caption: "Los destinos culturales más impresionantes del mundo",
//     },
//     gallery: [
//       {
//         src: "https://images.unsplash.com/photo-1705628078563-966777473473?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "La ciudad antigua de Petra",
//         caption: "Petra, la ciudad rosa del desierto",
//       },
//       {
//         src: "https://images.unsplash.com/photo-1720766397488-81a83b54c32c?q=80&w=3130&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         alt: "Machu Picchu al amanecer",
//         caption: "Machu Picchu, la ciudad perdida de los Incas",
//       },
//     ],

//     categories: [mockBlogCategories[0], mockBlogCategories[2]],
//     primaryCategory: mockBlogCategories[0],
//     tags: ["cultura", "historia", "patrimonio", "tradiciones", "arte"],

//     highlights: [
//       "Explora sitios Patrimonio de la UNESCO",
//       "Participa en festivales tradicionales",
//       "Descubre la gastronomía local",
//       "Aprecia el arte y la arquitectura",
//     ],

//     featured: true,
//     eyebrow: "Destinos Culturales",

//     series: {
//       id: "destinos-culturales",
//       name: "Patrimonio Mundial",
//       order: 1,
//     },

//     seo: {
//       title: "Top 10 Destinos Culturales del Mundo | Guía Completa",
//       description:
//         "Descubre los destinos culturales más fascinantes del mundo. Historia, arte y tradiciones en los lugares más emblemáticos.",
//       keywords: [
//         "destinos culturales",
//         "patrimonio",
//         "historia",
//         "arte",
//         "tradiciones",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/destinos-culturales",
//       ogImage: {
//         src: "/images/posts/destinos-culturales-og.jpg",
//         alt: "Destinos culturales del mundo",
//       },
//     },

//     analytics: {
//       views: 13280,
//       likes: 945,
//       shares: 678,
//       timeOnPage: 465,
//       bounceRate: 0.18,
//     },

//     engagement: {
//       likes: 945,
//       comments: [],
//       shares: 678,
//       savedCount: 589,
//     },

//     version: 2,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[2],
//         timestamp: "2024-01-10T15:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevos destinos culturales",
//         editor: authors[2],
//         timestamp: "2024-01-10T15:45:00Z",
//       },
//     ],
//   },
//   {
//     id: 10,
//     createdAt: "2023-12-01T10:45:00Z",
//     updatedAt: "2024-01-05T13:20:00Z",
//     slug: "guia-ciudades-europa",
//     locale: "es-MX",
//     type: "regular",
//     status: "published",
//     visibility: "public",

//     title: "Guía Definitiva: Capitales Europeas en 2024",
//     subtitle: "Lo mejor de Europa en un solo viaje",
//     excerpt:
//       "Todo lo que necesitas saber para explorar las ciudades más emblemáticas de Europa este año. Desde París hasta Berlín, descubre los secretos mejor guardados.",
//     introduction:
//       "Europa es un continente que combina historia milenaria con modernidad vibrante. Esta guía te llevará por sus capitales más fascinantes, revelando tanto los sitios icónicos como los tesoros ocultos.",

//     content: [
//       {
//         order: 1,
//         title: "París: Más Allá de la Torre Eiffel",
//         body: "Descubre los barrios menos turísticos y las joyas ocultas de la Ciudad de la Luz. Desde mercadillos vintage hasta cafés históricos.",
//         image: {
//           src: "/images/posts/paris-secreto.jpg",
//           alt: "Callejón pintoresco de París",
//           caption: "Los rincones secretos de París",
//         },
//       },
//       {
//         order: 2,
//         title: "Berlín: Arte y Contracultura",
//         body: "La capital alemana es un museo al aire libre de historia y arte urbano. Explora sus galerías alternativas y vida nocturna única.",
//         image: {
//           src: "/images/posts/berlin-arte.jpg",
//           alt: "Arte callejero en Berlín",
//           caption: "El arte urbano define el espíritu de Berlín",
//         },
//       },
//       {
//         order: 3,
//         title: "Roma: La Ciudad Eterna",
//         body: "Más allá del Coliseo y el Vaticano, descubre la auténtica vida romana en el Trastevere y otros barrios tradicionales.",
//         link: {
//           href: "/recursos/guia-roma-local",
//           label: "Guía local de Roma",
//         },
//       },
//     ],

//     author: authors[1],
//     coAuthors: [authors[0]],
//     publishDate: "2024-01-05T13:00:00Z",
//     readTime: 16,
//     wordCount: 3200,

//     coverImage: {
//       src: "/images/posts/capitales-europeas-cover.jpg",
//       alt: "Collage de capitales europeas",
//       caption: "Las capitales más emblemáticas de Europa",
//     },
//     gallery: [
//       {
//         src: "/images/posts/amsterdam-canales.jpg",
//         alt: "Canales de Amsterdam",
//         caption: "Los pintorescos canales de Amsterdam",
//       },
//       {
//         src: "/images/posts/praga-noche.jpg",
//         alt: "Praga iluminada",
//         caption: "El casco antiguo de Praga al anochecer",
//       },
//     ],
//     // featuredVideo: {
//     //   src: "/videos/europa-highlights.mp4",
//     //   title: "Lo Mejor de las Capitales Europeas",
//     //   thumbnail: {
//     //     src: "/images/posts/video-europa-thumbnail.jpg",
//     //     alt: "Highlights de Europa",
//     //   },
//     // },

//     categories: [mockBlogCategories[0], mockBlogCategories[1]],
//     primaryCategory: mockBlogCategories[0],
//     tags: ["europa", "ciudades", "cultura", "viajes", "historia"],

//     highlights: [
//       "Descubre secretos locales",
//       "Rutas urbanas alternativas",
//       "Mejores épocas para visitar",
//       "Consejos de transporte público",
//     ],

//     featured: true,
//     eyebrow: "Guía Europa 2024",

//     series: {
//       id: "europa-guias",
//       name: "Guías de Europa",
//       order: 1,
//     },

//     seo: {
//       title: "Guía Completa de Capitales Europeas 2024 | Consejos y Rutas",
//       description:
//         "Descubre las mejores capitales europeas en 2024. Guía detallada con consejos locales, rutas secretas y experiencias únicas.",
//       keywords: [
//         "europa",
//         "capitales europeas",
//         "viajes europa",
//         "guía europa",
//         "ciudades europeas",
//       ],
//       canonicalUrl: "https://tuwebdeviajes.com/blog/guia-ciudades-europa",
//       ogImage: {
//         src: "/images/posts/europa-guia-og.jpg",
//         alt: "Capitales de Europa",
//       },
//     },

//     analytics: {
//       views: 16890,
//       likes: 1123,
//       shares: 845,
//       timeOnPage: 495,
//       bounceRate: 0.17,
//     },

//     engagement: {
//       likes: 1123,
//       comments: [],
//       shares: 845,
//       savedCount: 678,
//     },

//     version: 3,
//     revision: [
//       {
//         id: "rev-1",
//         changes: "Publicación inicial",
//         editor: authors[1],
//         timestamp: "2024-01-05T13:00:00Z",
//       },
//       {
//         id: "rev-2",
//         changes: "Actualización con nuevas recomendaciones",
//         editor: authors[0],
//         timestamp: "2024-01-05T13:20:00Z",
//       },
//     ],
//   },
// ];
