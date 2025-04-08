import { WhyTravelPageData } from "@/app/_modules/WhyTravel/types";

class TravelService {
  async getWhyTravelPageData(): Promise<WhyTravelPageData> {
    // In a real application, this would fetch data from an API
    // For demonstration, we'll return mock data

    return {
      title: "Why Travel?",
      subtitle:
        "Discover the transformative power of travel and how it enriches your life",
      coverImage: {
        src: "/images/why-travel/why-travel-hero.jpg",
        alt: "Person looking over a mountain vista with arms raised",
        width: 1920,
        height: 1080,
      },
      introduction:
        "Travel is more than just visiting new places—it's about the experiences that shape us, the perspectives we gain, and the memories we create along the way. It opens our eyes to different ways of life, challenges our assumptions, and connects us with the world and ourselves in profound ways.",
      benefits: [
        {
          title: "Personal Growth",
          description:
            "Travel takes you out of your comfort zone, building confidence, adaptability, and problem-solving skills that last a lifetime.",
          icon: "briefcase", // Updated to match available icon
        },
        {
          title: "Cultural Insight",
          description:
            "Experiencing different cultures firsthand fosters empathy and breaks down stereotypes, making us more open-minded global citizens.",
          icon: "compass", // Matches available icon
        },
        {
          title: "Mental Wellbeing",
          description:
            "Breaking from routine reduces stress and anxiety, while new experiences stimulate creativity and improve overall mental health.",
          icon: "spa", // Updated to match available icon
        },
        {
          title: "New Perspectives",
          description:
            "Seeing how others live challenges your worldview and helps you appreciate both differences and similarities across humanity.",
          icon: "eye", // Matches available icon
        },
        {
          title: "Lifelong Memories",
          description:
            "The experiences and connections made while traveling create stories and memories that you'll treasure for the rest of your life.",
          icon: "selfie", // Updated to match available icon
        },
        {
          title: "Mind Enrichment",
          description:
            "Travel is the best education, teaching history, geography, languages, and culture in ways no classroom can match.",
          icon: "book", // Updated to match available icon
        },
      ],
      sections: [
        {
          order: 1,
          title: "Broadening Your Horizons",
          body: "Travel exposes you to new cultures, traditions, and ways of life that challenge your perceptions and expand your worldview. Whether you're savoring street food in Bangkok, witnessing ancient rituals in Peru, or conversing with locals in a Moroccan market, these experiences help you understand the beautiful diversity of our world. Research shows that people who travel regularly develop greater cultural sensitivity and adaptability—skills increasingly valuable in our globalized society.",
          image: {
            src: "/images/why-travel/why-travel-horizons.jpg",
            alt: "Person engaging with locals in a foreign market",
            width: 800,
            height: 600,
          },
          link: {
            href: "/blog/cultural-immersion-tips",
            label: "Learn about cultural immersion",
          },
        },
        {
          order: 2,
          title: "Finding Personal Growth Through Challenges",
          body: "Travel inevitably presents challenges—navigating unfamiliar terrain, overcoming language barriers, or adapting to unexpected situations. These moments of discomfort are actually opportunities for tremendous personal growth. Each problem solved builds confidence and resilience. The solo traveler who successfully negotiates their way through a complex train system in Japan, the couple who finds their way back to their hotel after getting lost in Venice's winding streets—these experiences build character and self-reliance that extend far beyond the journey itself.",
          image: {
            src: "/images/why-travel/why-travel-growth.jpg",
            alt: "Traveler climbing a challenging mountain path",
            width: 800,
            height: 600,
          },
        },
        {
          order: 3,
          title: "Creating Connections Around the World",
          body: "Some of the most meaningful aspects of travel are the people you meet along the way. From fellow travelers who become lifelong friends to locals who share their homes and hearts, these human connections transcend borders and remind us of our shared humanity. In a world that can sometimes feel divided, travel builds bridges between cultures and creates a network of global understanding that makes the world feel both smaller and more wonderfully diverse at the same time.",
          image: {
            src: "/images/why-travel/why-travel-connections.jpg",
            alt: "Group of diverse travelers sharing a meal together",
            width: 800,
            height: 600,
          },
          link: {
            href: "/blog/meaningful-travel-connections",
            label: "Tips for connecting with locals",
          },
        },
        {
          order: 4,
          title: "Finding Perspective and Gratitude",
          body: "When you step outside your daily routine and see how others live around the world, it offers a powerful perspective shift. Whether witnessing extreme poverty in developing nations or observing different approaches to work-life balance, these experiences prompt reflection on your own life and values. Many travelers report a renewed sense of gratitude for what they have and a clearer understanding of what truly matters. This perspective often leads to meaningful life changes upon returning home—from career shifts to simpler living to increased community involvement.",
          image: {
            src: "/images/why-travel/why-travel-perspective.jpg",
            alt: "Person reflecting while watching a sunrise over ancient ruins",
            width: 800,
            height: 600,
          },
        },
      ],
      inspirationQuotes: [
        {
          text: "Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts.",
          author: "Mark Twain",
        },
        {
          text: "The world is a book and those who do not travel read only one page.",
          author: "Saint Augustine",
        },
        {
          text: "Travel isn't always pretty. It isn't always comfortable. Sometimes it hurts, it even breaks your heart. But that's okay. The journey changes you; it should change you.",
          author: "Anthony Bourdain",
        },
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          location: "Backpacked through Southeast Asia",
          avatar: {
            src: "/images/testimonial-1.jpg",
            alt: "Sarah Johnson",
            width: 60,
            height: 60,
          },
          text: "Traveling solo through Thailand, Vietnam, and Cambodia changed me in ways I never expected. I learned to trust my instincts, embrace uncertainty, and connect with people despite language barriers. Those three months gave me more confidence and clarity than years at my corporate job.",
        },
        {
          name: "Miguel Rodriguez",
          location: "Family trip across Europe",
          avatar: {
            src: "/images/testimonial-2.jpg",
            alt: "Miguel Rodriguez",
            width: 60,
            height: 60,
          },
          text: "Taking our children to Europe was the best educational investment we've ever made. Seeing them absorb history at the Colosseum, art at the Louvre, and practice their Spanish in Madrid was incredible. They gained perspective and curiosity that no classroom could provide.",
        },
        {
          name: "Akiko Tanaka",
          location: "Cultural exchange in South America",
          avatar: {
            src: "/images/testimonial-3.jpg",
            alt: "Akiko Tanaka",
            width: 60,
            height: 60,
          },
          text: "My homestay in Peru allowed me to experience life beyond the tourist attractions. Living with a local family, learning to cook traditional dishes, and participating in community events gave me authentic insights I would have missed otherwise. Those connections remain even years later.",
        },
      ],
      statistics: [
        {
          value: "78%",
          label:
            "of American travelers report that regular vacations positively contribute to their mental health, according to a Trivago survey conducted in 2024",
        },
        {
          value: "23%",
          label:
            "of global travelers are motivated by interest in culture and history, according to YouGov data",
        },
        {
          value: "75%",
          label:
            "consider travel experiences more important than material possessions, according to the Spring Global Rescue Traveler Sentiment and Safety Survey",
        },
        {
          value: "81%",
          label:
            "of travelers, especially Boomers, report improvements in their health or wellbeing while traveling, according to an AARP study",
        },
      ],
      relatedTrips: [
        {
          id: 1,
          title: "Bali Wellness Retreat",
          subtitle: "Find Your Inner Peace",
          description:
            "Immerse yourself in a week of yoga, meditation, and spiritual healing in the heart of Ubud's lush landscapes.",
          slug: "bali-wellness-retreat",
          coverImage: {
            src: "https://images.unsplash.com/photo-1500213721845-709b85a28da0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Bali Retreat",
            width: 800,
            height: 600,
          },
          rating: {
            average: 4.8,
            // total: 95,
            count: 95,
          },
          pricing: {
            basePrice: {
              amount: 1899,
              currency: "USD",
            },
            // discounts: []
          },
          // category: [],
          // countries: [],
          // duration: { days: 10, nights: 9 }
        },
        {
          id: 2,
          title: "Tokyo Cultural Experience",
          subtitle: "Tradition Meets Modernity",
          description:
            "Discover the perfect blend of traditional and modern Japan with guided tours of temples, anime districts, and culinary adventures.",
          slug: "tokyo-cultural-experience",
          coverImage: {
            src: "https://images.unsplash.com/photo-1711465582458-54909c517a2a?q=80&w=3544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Tokyo Skyline",
            width: 800,
            height: 600,
          },
          rating: {
            average: 4.7,
            // total: 85,
            count: 85,
          },
          pricing: {
            basePrice: {
              amount: 2899,
              currency: "USD",
            },
            // discounts: []
          },
          // category: [],
          // countries: [],
          // duration: { days: 10, nights: 9 }
        },
        {
          id: 3,
          title: "Tanzania Safari Journey",
          subtitle: "Witness Nature's Majesty",
          description:
            "Witness the great migration in the Serengeti and experience luxury camping under the African stars.",
          slug: "tanzania-safari-journey",
          coverImage: {
            src: "https://images.unsplash.com/photo-1645494797561-0f3c1fb1bbec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Serengeti Landscape",
            width: 800,
            height: 600,
          },
          rating: {
            average: 5.0,
            // total: 75,
            count: 75,
          },
          pricing: {
            basePrice: {
              amount: 4599,
              currency: "USD",
            },
            // discounts: []
          },
          // category: [],
          // countries: [],
          // duration: { days: 10, nights: 9 }
        },
      ],
      faqs: [
        {
          question: "How can I travel more sustainably?",
          answer:
            "Choose eco-friendly accommodations, reduce plastic use, travel by land when possible, support local businesses, respect local environments, and consider carbon offset programs for your flights. Small choices add up to make a big difference in preserving destinations for future travelers.",
        },
        {
          question: "Is solo travel safe?",
          answer:
            "Solo travel can be very safe with proper preparation. Research your destination thoroughly, stay aware of your surroundings, keep people informed of your whereabouts, trust your instincts, and take the same precautions you would in your home country. Many solo travelers find that people are generally kind and helpful worldwide.",
        },
        {
          question: "How can I afford to travel more?",
          answer:
            "Set a dedicated travel fund with automatic deposits, use flight deal alerts, travel during shoulder seasons, consider alternative accommodations like hostels or home exchanges, cook some meals rather than eating out for every meal, and prioritize experiences over souvenirs. Remember that meaningful travel experiences don't always require long-haul flights or luxury accommodations.",
        },
        {
          question: "How do I overcome language barriers while traveling?",
          answer:
            "Learn basic phrases in the local language, use translation apps like Google Translate, carry a pocket phrasebook, use visual communication when needed, seek out multilingual locals (especially in hotels and tourist areas), and remember that smiling and respectful body language go a long way in fostering communication.",
        },
      ],
      callToAction: {
        title: "Ready to Start Your Journey?",
        text: "Explore our curated travel guides, destination reviews, and trip planning resources to begin your next adventure.",
        buttonText: "Explore Destinations",
        buttonLink: "/trips",
        backgroundImage: {
          src: "/images/why-travel/cta-background.jpg",
          alt: "Travel landscape with mountains and lake",
          width: 1920,
          height: 1080,
        },
      },
    };
  }
}

export function createTravelService(): TravelService {
  return new TravelService();
}
