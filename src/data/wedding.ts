import { WeddingEvent, GalleryImage } from "@/types";

export const weddingDate = new Date("2026-04-23T10:00:00");

export const coupleNames = {
  bride: "Nisha",
  groom: "Sunil",
};
export const MapUrl = "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6";
export const weddingEvents: WeddingEvent[] = [
  {
    id: "lagan",
    name: "Lagan",
    date: "10 April 2026",
    time: "7:00 PM",
    location: "Shree Ganesh Mandir Boliya Bujurg",
    description: "The auspicious beginning of our wedding ceremonies",
    icon: "🌸",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "mataji-pujan",
    name: "Mataji Pujan",
    date: "12 April 2026",
    time: "10:00 AM",
    location: "Mataji Mandir Boliya Bujurg",
    description: "Sacred prayers and blessings from the divine mother",
    icon: "🙏",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "haldi",
    name: "Haldi Ceremony",
    date: "21 April 2026",
    time: "2:00 PM",
    location: "Patidar Panchayat Bhavan",
    description: "Traditional turmeric ceremony for purification and blessings",
    icon: "💛",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "dj-night",
    name: "DJ Night",
    date: "21 April 2026",
    time: "8:00 PM",
    location: "Patidar Panchayat Bhavan",
    description: "Dance the night away with music, fun, and celebration",
    icon: "🎶",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "Mamera",
    name: "Mamera",
    date: "22 April 2026",
    time: "12:00 PM",
    location: "Patidar Panchayat Bhavan",
    description:
      "Together with love and tradition, we invite you to our Mamera celebration.  ",
    icon: "🎉",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "wedding-feast",
    name: "Wedding Feast",
    date: "22 April 2026",
    time: "5:00 PM",
    location: "Patidar Panchayat Bhavan",
    description: "Wedding feast with delicious traditional cuisine",
    icon: "🍽",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "bandoli",
    name: "Bandoli",
    date: "22 April 2026",
    time: "8:00 PM",
    location: "Groom House",
    description:
      "Join us for Banodi as we groove with love, music, and togetherness.",
    icon: "🌺",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "barat",
    name: "Barat",
    date: "23 April 2026",
    time: "11:00 AM",
    location: "Groom House",
    description: "Grand procession of the groom with family and friends",
    icon: "🐎",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
  },
  {
    id: "phera",
    name: "Phera",
    date: "23 April 2026",
    time: "3:00 PM",
    location: "Bride House",
    description: "Sacred wedding ceremony with seven vows around the holy fire",
    icon: "🎊",
    mapUrl: "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
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
