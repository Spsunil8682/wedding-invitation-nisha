"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar, Heart } from "lucide-react";
import { weddingEvents } from "@/data/wedding";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const EventsSection = () => {
  const handleGetDirections = (mapUrl: string | undefined) => {
    if (mapUrl) {
      window.open(mapUrl, "_blank");
    }
  };

  return (
    <section id="events" className="py-20 px-4 bg-white">
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
            Wedding Programs
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
            Join us for a series of beautiful ceremonies and celebrations as we
            begin our journey together. Each event is special and we would love
            to have you there.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full flex flex-col relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-yellow-50/30 to-pink-50/30 border border-yellow-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-400 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
                </div>

                {/* Event Icon with Animated Background */}
                <div className="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-yellow-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <span className="text-2xl filter drop-shadow-sm">
                    {event.icon}
                  </span>
                </div>

                <div className="p-8 flex flex-col h-full">
                  {/* Event Header */}
                  <div className="mb-6">
                    <h3 className="font-playfair-display text-2xl font-bold text-gray-800 mb-3 group-hover:text-yellow-700 transition-colors duration-300">
                      {event.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Event Details with Enhanced Styling */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-yellow-100 group-hover:bg-white/80 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center shadow-sm">
                        <Calendar className="text-white" size={16} />
                      </div>
                      <span className="font-semibold text-gray-800">
                        {event.date}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-pink-100 group-hover:bg-white/80 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center shadow-sm">
                        <Clock className="text-white" size={16} />
                      </div>
                      <span className="font-semibold text-gray-800">
                        {event.time}
                      </span>
                    </div>

                    <div className="flex items-start gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-100 group-hover:bg-white/80 transition-all duration-300">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 flex items-center justify-center shadow-sm mt-0.5">
                        <MapPin className="text-white" size={16} />
                      </div>
                      <div className="font-semibold text-gray-800 leading-relaxed">
                        {event.location}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Button */}
                  <div className="mt-8 relative z-10">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleGetDirections(event.mapUrl)}
                      className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn relative z-20 cursor-pointer"
                      style={{ pointerEvents: "auto" }}
                    >
                      <MapPin
                        size={18}
                        className="group-hover/btn:animate-bounce"
                      />
                      <span>Get Directions</span>
                      <div className="w-2 h-2 bg-white/30 rounded-full group-hover/btn:animate-ping"></div>
                    </motion.button>
                  </div>
                </div>

                {/* Enhanced Hover Effect with Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none z-0"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline View for Mobile */}
        <div className="mt-16 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="font-playfair-display text-2xl font-bold text-gray-800 mb-4">
              Event Timeline
            </h3>
            <p className="text-gray-600">
              Here&apos;s a quick overview of our celebration schedule
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-pink-400 to-rose-400 rounded-full shadow-sm"></div>

            {/* Timeline Events */}
            <div className="space-y-8">
              {weddingEvents.map((event, index) => (
                <motion.div
                  key={`timeline-${event.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-6"
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl filter drop-shadow-sm">
                      {event.icon}
                    </span>
                  </div>

                  {/* Enhanced Event Info Card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="bg-gradient-to-br from-white via-yellow-50/20 to-pink-50/20 rounded-2xl p-6 shadow-yellow-100/50 shadow-lg border border-yellow-300/40 flex-1 hover:shadow-yellow-300/70 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm relative overflow-hidden cursor-pointer"
                  >
                    {/* Subtle Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-400/5 to-transparent rounded-full transform translate-x-10 -translate-y-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-400/5 to-transparent rounded-full transform -translate-x-8 translate-y-8"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <h4 className="font-playfair-display text-xl font-bold text-gray-800">
                          {event.name}
                        </h4>
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">{event.date}</span> at{" "}
                        <span className="font-medium">{event.time}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.location}
                      </div>
                    </div>

                    {/* Hover Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-yellow-50 to-pink-50 rounded-2xl p-8 border border-yellow-100">
            <h3 className="font-playfair-display text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Important Note
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please arrive 15-30 minutes before each ceremony begins.
              Traditional attire is encouraged but not mandatory. For any
              questions about the events, feel free to contact us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
