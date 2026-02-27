export interface WeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  icon: string;
  mapUrl?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "engagement" | "prewedding" | "family";
}

export interface RSVPFormData {
  name: string;
  phone: string;
  message: string;
}

export interface RSVPFormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
