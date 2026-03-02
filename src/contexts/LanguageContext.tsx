"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "hi";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

// Translation data
const translations = {
  en: {
    // Hero Section
    "hero.title": "Nisha & Sunil",
    "hero.subtitle": "Together Forever",
    "hero.date": "April 23, 2026",
    "hero.location": "Kundaliya Charandas",
    "hero.countdown": "Countdown to Our Special Day",
    "hero.days": "Days",
    "hero.hours": "Hours",
    "hero.minutes": "Minutes",
    "hero.seconds": "Seconds",

    // Events Section
    "events.title": "Wedding Events",
    "events.subtitle": "Join us in celebrating our special moments",
    "events.viewLocation": "View Location",
    "events.timeline": "Event Timeline",
    "events.timelineSubtitle":
      "Here's a quick overview of our celebration schedule",
    "events.importantNote": "Important Note",
    "events.noteText":
      "Please arrive 15-30 minutes before each ceremony begins. Traditional attire is encouraged but not mandatory. For any questions about the events, feel free to contact us.",

    // Event Names and Descriptions
    "event.lagan.name": "Lagan",
    "event.lagan.description":
      "The auspicious beginning of our wedding ceremonies",
    "event.mataji-pujan.name": "Mataji Pujan",
    "event.mataji-pujan.description":
      "Sacred prayers and blessings from the divine mother",
    "event.mehendi.name": "Mehendi",
    "event.mehendi.description":
      "Beautiful henna ceremony with intricate designs",
    "event.haldi.name": "Haldi Ceremony",
    "event.haldi.description":
      "Traditional turmeric ceremony for purification and blessings",
    "event.sangeet.name": "Sangeet",
    "event.sangeet.description":
      "Musical celebration with dance, songs, and entertainment",
    "event.wedding-feast.name": "Wedding Feast",
    "event.wedding-feast.description":
      "Wedding feast with delicious traditional cuisine",
    "event.reception.name": "Reception",
    "event.reception.description":
      "Grand reception celebration with family and friends",
    "event.phera.name": "Phera",
    "event.phera.description":
      "Sacred wedding ceremony with seven vows around the holy fire",

    // Gallery Section
    "gallery.title": "Our Family",
    "gallery.subtitle":
      "Celebrating the bonds that unite us. These precious moments with our beloved family members showcase the love, traditions, and joy that make our wedding celebration complete.",
    "gallery.viewPhoto": "View Photo",
    "gallery.noPhotos": "No photos found in this category.",

    // RSVP Section
    "rsvp.title": "Be Part of Our Journey",
    "rsvp.subtitle":
      "Your presence means the world to us. Share your love, blessings, and kind words below.",
    "rsvp.fullName": "Full Name *",
    "rsvp.phoneNumber": "Phone Number *",
    "rsvp.specialMessage": "Special Message (Optional)",
    "rsvp.namePlaceholder": "Enter your full name",
    "rsvp.phonePlaceholder": "+91 98765 43210",
    "rsvp.messagePlaceholder":
      "Share your wishes, dietary requirements, or any special requests...",
    "rsvp.submit": "Send RSVP",
    "rsvp.submitting": "Submitting...",
    "rsvp.thankYou": "Thank You!",
    "rsvp.successMessage":
      "Your RSVP has been received successfully. We're so excited to celebrate with you!",
    "rsvp.needHelp": "Need Help?",
    "rsvp.helpText":
      "If you have any questions or need assistance with your RSVP, please don't hesitate to contact us directly.",
    "rsvp.nameRequired": "Name is required",
    "rsvp.phoneRequired": "Phone number is required",

    // Footer
    "footer.weddingDate": "Wedding Date",
    "footer.venue": "Venue",
    "footer.venueAddress":
      "Maa Ganga Complex Kundaliya Charandas, Garoth, Mandsaur (M.P)",
    "footer.celebration": "Celebration",
    "footer.twoHearts": "Two Hearts, One Journey",
    "footer.contactUs": "Contact Us",
    "footer.contactInfo": "Contact Information",
    "footer.thankYou":
      "Thank you for being part of our special day. Your love, support, and presence mean everything to us as we begin this beautiful journey together.",
    "footer.madeWith": "Made with love for our special day",
    "footer.copyright": "All rights reserved.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Something went wrong",
  },
  hi: {
    // Hero Section
    "hero.title": "निशा और सुनील",
    "hero.subtitle": "हमेशा के लिए साथ",
    "hero.date": "23 अप्रैल, 2026",
    "hero.location": "कुंडलिया चरणदास",
    "hero.countdown": "हमारे विशेष दिन की गिनती",
    "hero.days": "दिन",
    "hero.hours": "घंटे",
    "hero.minutes": "मिनट",
    "hero.seconds": "सेकंड",

    // Events Section
    "events.title": "विवाह समारोह",
    "events.subtitle": "हमारे विशेष क्षणों का जश्न मनाने में हमारे साथ जुड़ें",
    "events.viewLocation": "स्थान देखें",
    "events.timeline": "कार्यक्रम समयसारणी",
    "events.timelineSubtitle": "यहाँ हमारे उत्सव कार्यक्रम का त्वरित अवलोकन है",
    "events.importantNote": "महत्वपूर्ण सूचना",
    "events.noteText":
      "कृपया प्रत्येक समारोह शुरू होने से 15-30 मिनट पहले पहुंचें। पारंपरिक पोशाक को प्रोत्साहित किया जाता है लेकिन अनिवार्य नहीं है। कार्यक्रमों के बारे में किसी भी प्रश्न के लिए, कृपया हमसे संपर्क करने में संकोच न करें।",

    // Event Names and Descriptions
    "event.lagan.name": "लगन",
    "event.lagan.description": "हमारे विवाह समारोह की शुभ शुरुआत",
    "event.mataji-pujan.name": "माताजी पूजन",
    "event.mataji-pujan.description":
      "दिव्य माता से पवित्र प्रार्थना और आशीर्वाद",
    "event.mehendi.name": "मेहंदी",
    "event.mehendi.description": "जटिल डिजाइन के साथ सुंदर मेहंदी समारोह",
    "event.haldi.name": "हल्दी समारोह",
    "event.haldi.description":
      "शुद्धिकरण और आशीर्वाद के लिए पारंपरिक हल्दी समारोह",
    "event.sangeet.name": "संगीत",
    "event.sangeet.description": "नृत्य, गीत और मनोरंजन के साथ संगीत उत्सव",
    "event.wedding-feast.name": "विवाह भोज",
    "event.wedding-feast.description":
      "स्वादिष्ट पारंपरिक व्यंजनों के साथ विवाह भोज",
    "event.reception.name": "रिसेप्शन",
    "event.reception.description":
      "परिवार और दोस्तों के साथ भव्य रिसेप्शन उत्सव",
    "event.phera.name": "फेरा",
    "event.phera.description":
      "पवित्र अग्नि के चारों ओर सात वचनों के साथ पवित्र विवाह समारोह",

    // Gallery Section
    "gallery.title": "हमारा परिवार",
    "gallery.subtitle": "खुशियों भरे पारिवारिक पल",
    "gallery.viewPhoto": "फोटो देखें",
    "gallery.noPhotos": "इस श्रेणी में कोई फोटो नहीं मिली।",

    // RSVP Section
    "rsvp.title": "हमारी यात्रा का हिस्सा बनें",
    "rsvp.subtitle":
      "हमारे इस खास दिन पर आपका साथ हमारे लिए सबसे बड़ा उपहार है। नीचे अपने प्यार और शुभकामनाएँ साझा करें।",
    "rsvp.fullName": "पूरा नाम *",
    "rsvp.phoneNumber": "फोन नंबर *",
    "rsvp.specialMessage": "विशेष संदेश (वैकल्पिक)",
    "rsvp.namePlaceholder": "अपना पूरा नाम दर्ज करें",
    "rsvp.phonePlaceholder": "+91 98765 43210",
    "rsvp.messagePlaceholder":
      "अपनी शुभकामनाएं, आहार संबंधी आवश्यकताएं, या कोई विशेष अनुरोध साझा करें...",
    "rsvp.submit": "संदेश भेजें",
    "rsvp.submitting": "भेजा जा रहा है...",
    "rsvp.thankYou": "धन्यवाद!",
    "rsvp.successMessage":
      "आपका आर.एस.वी.पी सफलतापूर्वक प्राप्त हो गया है। हम आपके साथ जश्न मनाने के लिए बहुत उत्साहित हैं!",
    "rsvp.needHelp": "सहायता चाहिए?",
    "rsvp.helpText":
      "यदि आपके कोई प्रश्न हैं या आपको अपने आर.एस.वी.पी में सहायता की आवश्यकता है, तो कृपया सीधे हमसे संपर्क करने में संकोच न करें।",
    "rsvp.nameRequired": "नाम आवश्यक है",
    "rsvp.phoneRequired": "फोन नंबर आवश्यक है",

    // Footer
    "footer.weddingDate": "विवाह की तारीख",
    "footer.venue": "स्थान",
    "footer.venueAddress":
      "माँ गंगा कॉम्प्लेक्स कुंडलिया चरणदास, गरोठ, मंदसौर (म.प्र.)",
    "footer.celebration": "उत्सव",
    "footer.twoHearts": "दो दिल, एक यात्रा",
    "footer.contactUs": "हमसे संपर्क करें",
    "footer.contactInfo": "संपर्क जानकारी",
    "footer.thankYou":
      "हमारे विशेष दिन का हिस्सा बनने के लिए धन्यवाद। आपका प्यार, समर्थन और उपस्थिति हमारे लिए सब कुछ है जब हम इस सुंदर यात्रा की शुरुआत करते हैं।",
    "footer.madeWith": "हमारे इस शुभ अवसर पर आपका स्वागत है।",
    "footer.copyright": "सभी अधिकार सुरक्षित।",

    // Common
    "common.loading": "लोड हो रहा है...",
    "common.error": "कुछ गलत हुआ",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
