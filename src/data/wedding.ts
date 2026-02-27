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

export const galleryImages: GalleryImage[] = [
  {
    id: "img1",
    src: "/images/IMG_4062.jpg",
    alt: "Beautiful wedding moment",
    category: "engagement",
  },
  {
    id: "img2",
    src: "/images/IMG_4188.jpg",
    alt: "Romantic couple portrait",
    category: "prewedding",
  },
  {
    id: "img3",
    src: "/images/IMG_4191.jpg",
    alt: "Candid wedding moments",
    category: "prewedding",
  },

  {
    id: "img5",
    src: "/images/IMG_4719.jpg",
    alt: "Wedding ceremony highlights",
    category: "family",
  },
  {
    id: "img6",
    src: "/images/IMG_4720.jpg",
    alt: "Family gathering moments",
    category: "family",
  },
];
