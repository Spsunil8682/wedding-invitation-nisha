import { WeddingEvent, GalleryImage } from "@/types";

export const weddingDate = new Date("2026-04-23T10:00:00");

export const coupleNames = {
  bride: "Nisha",
  groom: "Sunil",
};
export const MapUrl = "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic";
export const weddingEvents: WeddingEvent[] = [
  {
    id: "lagan",
    name: "Lagan",
    date: "18 April 2026",
    time: "7:00 PM",
    location: " Kundaliya Charandas",
    description: "The auspicious beginning of our wedding ceremonies",
    icon: "🌸",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "mataji-pujan",
    name: "Mataji Pujan",
    date: "19 April 2026",
    time: "8:00 AM",
    location: " Kundaliya Charandas",
    description: "Sacred prayers and blessings from the divine mother",
    icon: "🙏",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "mehendi",
    name: "Mehendi",
    date: "21 April 2026",
    time: "11:00 AM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Beautiful henna ceremony with intricate designs",
    icon: "🎨",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "haldi",
    name: "Haldi Ceremony",
    date: "22 April 2026",
    time: "11:00 AM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Traditional turmeric ceremony for purification and blessings",
    icon: "💛",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "sangeet",
    name: "Sangeet",
    date: "22 April 2026",
    time: "8:00 PM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Musical celebration with dance, songs, and entertainment",
    icon: "🎶",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "wedding-feast",
    name: "Wedding Feast",
    date: "23 April 2026",
    time: "5:00 PM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Wedding feast with delicious traditional cuisine",
    icon: "🍽",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "reception",
    name: "Reception",
    date: "23 April 2026",
    time: "8:00 PM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Grand reception celebration with family and friends",
    icon: "🎉",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
  {
    id: "phera",
    name: "Phera",
    date: "24 April 2026",
    time: "3:00 AM",
    location: "Maa ganga complex Kundaliya Charandas",
    description: "Sacred wedding ceremony with seven vows around the holy fire",
    icon: "🎊",
    mapUrl: "https://maps.app.goo.gl/S8CGiT3CkbfpfKxx9?g_st=ic",
  },
];

// Date translations
export const dateTranslations = {
  en: {
    "18 April 2026": "18 April 2026",
    "19 April 2026": "19 April 2026",
    "21 April 2026": "21 April 2026",
    "22 April 2026": "22 April 2026",
    "23 April 2026": "23 April 2026",
    "24 April 2026": "24 April 2026",
  },
  hi: {
    "18 April 2026": "18 अप्रैल 2026",
    "19 April 2026": "19 अप्रैल 2026",
    "21 April 2026": "21 अप्रैल 2026",
    "22 April 2026": "22 अप्रैल 2026",
    "23 April 2026": "23 अप्रैल 2026",
    "24 April 2026": "24 अप्रैल 2026",
  },
};

// Time translations
export const timeTranslations = {
  en: {
    "7:00 PM": "7:00 PM",
    "8:00 AM": "8:00 AM",
    "11:00 AM": "11:00 AM",
    "8:00 PM": "8:00 PM",
    "5:00 PM": "5:00 PM",
    "3:00 AM": "3:00 AM",
  },
  hi: {
    "7:00 PM": "शाम 7:00 बजे",
    "8:00 AM": "सुबह 8:00 बजे",
    "11:00 AM": "सुबह 11:00 बजे",
    "8:00 PM": "शाम 8:00 बजे",
    "5:00 PM": "शाम 5:00 बजे",
    "3:00 AM": "सुबह 3:00 बजे",
  },
};

// Location translations
export const locationTranslations = {
  en: {
    " Kundaliya Charandas": " Kundaliya Charandas",
    "Maa ganga complex Kundaliya Charandas":
      "Maa ganga complex Kundaliya Charandas",
  },
  hi: {
    " Kundaliya Charandas": " कुंडलिया चरणदास",
    "Maa ganga complex Kundaliya Charandas":
      "माँ गंगा कॉम्प्लेक्स कुंडलिया चरणदास",
  },
};

export const galleryImages: GalleryImage[] = [
  {
    id: "img1",
    src: "/images/family/1.jpg",
    alt: "Family portrait",
    category: "family",
  },
  {
    id: "img2",
    src: "/images/family/2.jpg",
    alt: "Family gathering moments",
    category: "family",
  },
  {
    id: "img3",
    src: "/images/family/3.jpg",
    alt: "Family celebration",
    category: "family",
  },
  {
    id: "img4",
    src: "/images/family/4.webp",
    alt: "Family bonding moments",
    category: "family",
  },

  {
    id: "img5",
    src: "/images/family/6.jpg",
    alt: "Family celebration moments",
    category: "family",
  },
];
