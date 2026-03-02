"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Camera } from "lucide-react";
import Image from "next/image";
import { galleryImages } from "@/data/wedding";
import Button from "@/components/ui/Button";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1,
      );
    }
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-romantic">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Our Family
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-yellow-400"></div>
            <Heart
              className="mx-4 text-pink-400"
              size={24}
              fill="currentColor"
            />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-yellow-400"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the bonds that unite us. These precious moments with our
            beloved family members showcase the love, traditions, and joy that
            make our wedding celebration complete.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden max-h-[420px]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                      <Camera size={32} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">View Photo</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {galleryImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Camera size={64} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-500 text-lg">
              No photos found in this category.
            </p>
          </motion.div>
        )}

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                  >
                    <ChevronRight size={48} />
                  </button>
                </>
              )}

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={galleryImages[selectedImage]?.src || ""}
                    alt={galleryImages[selectedImage]?.alt || ""}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain rounded-lg"
                    unoptimized
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-4 text-white">
                  <p className="font-medium">
                    {galleryImages[selectedImage]?.alt}
                  </p>
                  <p className="text-sm opacity-75 capitalize">
                    {galleryImages[selectedImage]?.category} •{" "}
                    {selectedImage + 1} of {galleryImages.length}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;
