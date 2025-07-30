import React from 'react';
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  PencilIcon,
  PaintBrushIcon,
  ChatBubbleBottomCenterTextIcon,
  PresentationChartBarIcon,
  MicrophoneIcon,
  BuildingLibraryIcon,
} from '@heroicons/react/24/outline';

// Define competition data with slightly more descriptive text for cards
const competitions = [
  { title: 'Hackathon', icon: <CodeBracketIcon className="h-10 w-10 text-blue-600 mb-3" />, description: "Code, innovate, and solve real-world problems in a high-energy environment." },
  { title: 'Ultimate Socio Technocrat', icon: <AcademicCapIcon className="h-10 w-10 text-green-600 mb-3" />, description: "Blend social awareness with technological solutions to drive meaningful change." },
  { title: 'Drawing', icon: <PencilIcon className="h-10 w-10 text-orange-600 mb-3" />, description: "Unleash your artistic vision and express yourself through captivating strokes." },
  { title: 'Painting', icon: <PaintBrushIcon className="h-10 w-10 text-red-600 mb-3" />, description: "Bring your imagination to life with vibrant colors and creative compositions." },
  { title: 'Debate', icon: <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-purple-600 mb-3" />, description: "Sharpen your arguments and articulate your views on pressing topics." },
  { title: 'Drama', icon: <PresentationChartBarIcon className="h-10 w-10 text-teal-600 mb-3" />, description: "Step onto the stage and captivate the audience with your dramatic flair." },
  { title: 'Speech', icon: <MicrophoneIcon className="h-10 w-10 text-indigo-600 mb-3" />, description: "Command the stage with powerful words and inspiring rhetoric." },
  { title: 'Youth Parliament', icon: <BuildingLibraryIcon className="h-10 w-10 text-amber-600 mb-3" />, description: "Experience parliamentary proceedings and debate policies like a true leader." },
];

// Testimonial data with placeholder images
const testimonialsData = [
  {
    name: "Aarav Sharma",
    feedback: "Participating in Abhyudaya was an incredible experience that broadened my horizons and connected me with like-minded individuals. Highly recommended!",
    image: "https://placehold.co/100x100/6A057F/ffffff?text=AS" // Darker purple
  },
  {
    name: "Sneha Patel",
    feedback: "The competitions pushed me to think creatively and collaborate effectively. I loved every moment and the vibrant atmosphere!",
    image: "https://placehold.co/100x100/F58634/ffffff?text=SP" // Vibrant orange
  },
  {
    name: "Rahul Mehta",
    feedback: "Truly an event to remember. I had so much fun and gained invaluable insights. Abhyudaya is a platform for true growth.",
    image: "https://placehold.co/100x100/007bff/ffffff?text=RM" // Bright blue
  },
  {
    name: "Priya Singh",
    feedback: "The organization was flawless, and the energy was infectious. Abhyudaya provided a fantastic opportunity to showcase my talents.",
    image: "https://placehold.co/100x100/28a745/ffffff?text=PS" // Success green
  },
];

// Timeline data
const timelineData = [
  { year: "2011", title: "Inception", desc: "Abhyudaya was founded with a vision to foster creativity and cultural exchange among students." },
  { year: "2015", title: "Intercollege Event", desc: "Expanded its reach, welcoming participants from various engineering colleges across Nagpur." },
  { year: "2023", title: "Tech + Cultural Merge", desc: "Integrated technical competitions with cultural events, broadening its scope and appeal." },
  { year: "2024", title: "Mega Fest", desc: "Achieved a milestone with over 1000 attendees, significant media coverage, and widespread acclaim." },
];

function Abhyudaya() {
  return (
    <div className="w-full font-inter antialiased"> {/* Apply Inter font globally, added antialiased */}

      {/* Hero Section: ABHYUDAYA */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-12 text-gray-800 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Subtle background pattern/texture - Adjusted color and size */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles-hero" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#C7D2FE" /> {/* Lighter blue for subtlety */}
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles-hero)" />
          </svg>
        </div>

        {/* Animated Heading */}
        <motion.h1
          initial={{ scale: 0.7, opacity: 0, y: -70 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.17, 0.67, 0.83, 0.67] }} /* More refined ease */
          className="text-7xl sm:text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-900 tracking-tight mb-4 text-center drop-shadow-lg"
        >
          ABHYUDAYA
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.17, 0.67, 0.83, 0.67] }}
          className="text-lg md:text-2xl text-blue-800 font-semibold text-center mb-4 animate-pulse-slow"
        >
          || यः करोत् मनोभवान् न तदा दुष्टम् ||
        </motion.p>

        {/* Decorative Tricolor Divider with subtle animation */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '120px', opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 120, damping: 10 }}
          className="flex gap-2 mt-4 mb-8 justify-center"
        >
          <div className="w-10 h-2.5 bg-orange-500 rounded-full shadow-md"></div>
          <div className="w-10 h-2.5 bg-white border border-gray-200 rounded-full shadow-md"></div>
          <div className="w-10 h-2.5 bg-green-600 rounded-full shadow-md"></div>
        </motion.div>

        {/* CTA Buttons with enhanced hover effects and subtle animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white font-bold rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-900 transition-all duration-300 ease-in-out transform text-lg"
          >
            VIEW HIGHLIGHTS
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-blue-600 text-blue-700 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out transform text-lg"
          >
            REGISTER NOW
          </motion.button>
        </motion.div>

        {/* About Section with improved readability and richer shadow */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl text-center bg-white/75 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-blue-100 transform hover:scale-[1.01] transition-transform duration-300"
        >
          <h2 className="text-3xl text-blue-900 font-extrabold mb-5">About Abhyudaya</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Abhyudaya</strong> is a collaborative social initiative conducted under the banner of Engineering India, where students
            from various engineering institutes across Nagpur come together to drive change and spread awareness on
            important social issues. This annual event fosters youth engagement through impactful campaigns, outreach
            programs, and community-driven activities. With the support of <strong className="text-blue-700">250+ coordinators</strong> and participation from over
            <strong className="text-blue-700"> 2500 students</strong>, Abhyudaya is a testament to unity, compassion, and the shared spirit of responsibility among
            future engineers.
          </p>
        </motion.div>
      </section>

      {/* Indian Knowledge Systems Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 px-6 py-20 text-center relative overflow-hidden">
        {/* Subtle background pattern - More defined grid */}
        <div className="absolute inset-0 opacity-8 pointer-events-none">
          <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-grid-iks" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M50 0H0V50H50V0ZM25 0H0V25H25V0ZM50 25H25V50H50V25Z" fill="#E0E7FF" /> {/* Lighter blue grid */}
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-grid-iks)" />
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-5 drop-shadow-md">
          Indian Knowledge Systems
        </h2>

        {/* Decorative Divider */}
        <div className="w-32 h-2 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full mx-auto mb-12 shadow-lg"></div>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Rooted in centuries of reasoning and harmony, Indian Knowledge Systems reflect the confluence of spirituality, science, and art — inspiring Abhyudaya’s theme last year.
        </p>

        {/* Knowledge Fields Grid with enhanced cards and subtle hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10">
          {["योग", "आयुर्वेद", "गणित", "संगीत"].map((field, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.18, ease: "easeOut" }}
              whileHover={{ scale: 1.07, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)", zIndex: 10, transition: { type: "spring", stiffness: 300, damping: 10 } }}
              className="bg-gradient-to-br from-blue-100 via-white to-indigo-100 shadow-xl rounded-3xl p-7 text-blue-900 font-extrabold text-xl border border-blue-200 flex flex-col items-center justify-center cursor-pointer transform transition-all duration-300 ease-in-out"
            >
              <span className="text-5xl md:text-6xl mb-4 animate-pulse-slow">{
                // Emojis for visual appeal
                index === 0 ? '🧘' :
                index === 1 ? '🌿' :
                index === 2 ? '🔢' :
                '🎶'
              }</span>
              {field}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competitions Section */}
      <section className="min-h-screen w-full px-4 py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 text-gray-900 relative overflow-hidden">
        {/* Decorative elements - Larger, more subtle */}
        <div className="absolute top-10 left-10 text-9xl opacity-5 rotate-12 pointer-events-none text-blue-300">🏆</div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-5 -rotate-12 pointer-events-none text-green-300">✨</div>

        <h2 className="text-5xl md:text-6xl text-blue-800 font-extrabold text-center mb-16 drop-shadow-lg leading-tight">
          Unleash Your Potential: <br /> Our Exciting Competitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.07,
                backgroundColor: "#ffffff",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeOut", type: "spring", stiffness: 300 }
              }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              className="bg-white/95 rounded-3xl shadow-xl p-8 transition-all flex flex-col items-center text-center border border-gray-100 hover:border-blue-400 cursor-pointer"
            >
              <motion.div
                initial={{ rotateY: 0 }}
                whileHover={{ rotateY: 360 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-6xl mb-5"
              >
                {comp.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-blue-900 tracking-wide">
                {comp.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {comp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cherished Memories Section */}
      <section className="min-h-screen w-full px-4 py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-900 relative overflow-hidden">
        {/* Decorative elements - Larger, more vibrant */}
        <div className="absolute top-5 right-5 text-9xl opacity-8 rotate-45 pointer-events-none text-pink-300">📸</div>
        <div className="absolute bottom-5 left-5 text-9xl opacity-8 -rotate-45 pointer-events-none text-purple-300">💖</div>

        <h2 className="text-5xl md:text-6xl text-center font-extrabold text-rose-800 mb-16 tracking-wide drop-shadow-lg leading-tight">
          Cherished Memories <br /> From Our Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)", transition: { duration: 0.3 } }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white/95 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 cursor-pointer border border-gray-100 transform hover:border-rose-300"
            >
              <img
                src={`/memories/${index + 1}.jpg`}
                alt={`Memory ${index + 1}`}
                className="w-full h-56 object-cover hover:scale-115 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FAD0C4/000000?text=Image+Missing"; }} // More appealing placeholder
              />
              <div className="p-5 text-center">
                <p className="text-sm text-gray-600 font-medium">Moment from Abhyudaya {2024 - (8 - (index + 1))}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full px-4 py-20 bg-gradient-to-br from-blue-50 via-white to-sky-100 text-gray-900 overflow-hidden">

        {/* 💬 Decorative Emoji Strip Along Right Margin (Desktop Only) - Enhanced opacity and colors */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 text-5xl opacity-15 pointer-events-none p-4">
          <span className="text-blue-400">💬</span>
          <span className="text-purple-400">✨</span>
          <span className="text-green-400">👍</span>
          <span className="text-orange-400">🌟</span>
        </div>

        {/* 🧡 Section Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-800 mb-16 drop-shadow-lg tracking-wide leading-tight">
          Voices of Abhyudaya <br /> What Our Participants Say
        </h2>

        {/* 👥 Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.18, ease: "easeOut" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }}
              className="bg-white/95 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-300 border border-blue-100 flex flex-col justify-between transform hover:border-blue-300"
            >
              <p className="text-gray-700 text-base italic mb-7 leading-relaxed">“{testimonial.feedback}”</p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-500 shadow-md transform hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x100/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${testimonial.name.split(' ').map(n => n[0]).join('')}`; }} // Random colorful placeholder on error
                />
                <h4 className="text-xl font-bold text-blue-800">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative w-full px-4 py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900 overflow-hidden">

        {/* 🌌 Decorative Background Icon - Enhanced opacity and colors */}
        <div className="absolute top-10 left-10 text-9xl opacity-10 select-none pointer-events-none text-purple-300">
          ⏳
        </div>
        <div className="absolute bottom-10 right-10 text-9xl opacity-10 select-none pointer-events-none text-indigo-300">
          🚀
        </div>

        {/* 🕰️ Timeline Title */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-800 text-center mb-16 tracking-wide drop-shadow-lg leading-tight">
          Abhyudaya Journey <br /> A Decade of Impact
        </h2>

        {/* 📍 Vertical Line Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line - Thicker and more prominent */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-6 border-blue-400 rounded-full shadow-inner"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -120 : 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: index * 0.25, ease: [0.17, 0.67, 0.83, 0.67] }} /* Smoother ease */
              className={`mb-16 flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse md:flex-row" : "flex-row"
              }`}
            >
              {/* Spacer for alignment on smaller screens */}
              <div className="hidden md:block w-5/12"></div>

              {/* 🔵 Dot Marker - Larger and more visually distinct */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-5 border-white shadow-xl z-10 flex items-center justify-center">
                <span className="text-white text-sm font-extrabold">{item.year.slice(2)}</span>
              </div>

              {/* 📝 Content Card - More refined shadow and border */}
              <div className={`w-full md:w-5/12 bg-white/95 rounded-3xl shadow-xl p-7 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 border border-blue-200 transform hover:scale-[1.02] ${
                index % 2 === 0 ? "text-right md:text-left" : "text-left"
              }`}>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  {item.title} (<span className="text-blue-600">{item.year}</span>)
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

// Main App component to render Abhyudaya
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Abhyudaya />
    </div>
  );
}

export default App;