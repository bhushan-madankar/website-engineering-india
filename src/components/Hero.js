import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 py-12">
      <h1 className="text-9xl md:text-10xl font-extrabold text-blue-800 mb-6 tracking-wide">
        ABHYUDAYA
      </h1>

      <p className="text-2xl text-blue-700 font-semibold mt-6 text-center">
        || यः करोत् मनोभानं न तस्य दूषितम् ||
      </p>

      <br />

      <div className="flex gap-4 mb-10">
        <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded">
          VIEW HIGHLIGHTS
        </button>
        <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded">
          REGISTER NOW
        </button>
      </div>

      <p className="text-lg text-gray-600 text-center max-w-4xl leading-relaxed">
        Abhyudaya is not just an event; it's a movement that unites creativity,
        innovation, and collaboration. This annual multi-cultural fest brings
        together students from various colleges to showcase their talents in
        competitions ranging from hackathons to debates, painting to drama. With
        over 2500+ participants and 250+ coordinators, Abhyudaya has become the
        most anticipated student festival in the region.
      </p>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Join the Movement
        </h2>
        <p className="text-gray-600">
          Be part of something bigger. Create, compete, and connect.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
