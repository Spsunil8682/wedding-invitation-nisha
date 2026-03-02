"use client";

import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { coupleNames } from "@/data/wedding";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Heading */}
          <h2 className="font-dancing-script text-4xl md:text-5xl mb-4 text-yellow-300">
            {coupleNames.groom} & {coupleNames.bride}
          </h2>

          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Heart
              className="mx-4 text-pink-400"
              size={20}
              fill="currentColor"
            />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>

          {/* Wedding Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="mx-auto mb-3 text-yellow-400" size={24} />
              <h3 className="font-semibold text-lg mb-2">
                {t("footer.weddingDate")}
              </h3>
              <p className="text-gray-300">{t("hero.date")}</p>
            </div>

            <div className="text-center">
              <MapPin className="mx-auto mb-3 text-pink-400" size={24} />
              <h3 className="font-semibold text-lg mb-2">
                {t("footer.venue")}
              </h3>
              <p className="text-gray-300">{t("footer.venueAddress")}</p>
            </div>

            <div className="text-center">
              <Heart
                className="mx-auto mb-3 text-rose-400"
                size={24}
                fill="currentColor"
              />
              <h3 className="font-semibold text-lg mb-2">
                {t("footer.celebration")}
              </h3>
              <p className="text-gray-300">{t("footer.twoHearts")}</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h3 className="font-playfair-display text-2xl font-bold mb-6">
              {t("footer.contactUs")}
            </h3>
            <div className="flex justify-center">
              <div className="text-center">
                <h4 className="font-semibold text-yellow-300 mb-2">
                  {t("footer.contactInfo")}
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    <span>7987352052</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={16} />
                    <span>nisha225@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thank You Message */}
          <div className="mb-8">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t("footer.thankYou")}
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex items-center justify-center mb-4">
              <Heart
                className="text-pink-400 mr-2"
                size={16}
                fill="currentColor"
              />
              <span className="text-gray-400">{t("footer.madeWith")}</span>
              <Heart
                className="text-pink-400 ml-2"
                size={16}
                fill="currentColor"
              />
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 {coupleNames.groom} & {coupleNames.bride}.{" "}
              {t("footer.copyright")}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
