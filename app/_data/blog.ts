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
          src: "/images/blog-images/jungle-backpacker.jpg",
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
      src: "/images/blog-images/bowl.jpg",
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
          src: "/images/blog-images/girl-waiting-train.jpg",
          alt: "Girl waiting train",
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
      src: "/images/blog-images/backpackers.jpg",
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
        src: "/images/blog-images/girl-in-station.jpg",
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
          src: "/images/blog-images/bikes.jpg",
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
      src: "/images/blog-images/moto-jumping.jpg",
      alt: "Extreme sports",
      caption: "Extreme adventures around the world",
    },
    gallery: [
      {
        src: "/images/blog-images/quad-bike.jpg",
        alt: "Quad bike",
        caption: "Driving a quad bike",
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
          src: "/images/blog-images/buda-statue.jpg",
          alt: "Buda statue",
          caption: "Buda Statue",
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
];
