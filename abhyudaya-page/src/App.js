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

const competitions = [
  { title: 'Hackathon', icon: <CodeBracketIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Ultimate Socio Technocrat', icon: <AcademicCapIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Drawing', icon: <PencilIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Painting', icon: <PaintBrushIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Debate', icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Drama', icon: <PresentationChartBarIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Speech', icon: <MicrophoneIcon className="h-8 w-8 text-blue-500 mb-2" /> },
  { title: 'Youth Parliament', icon: <BuildingLibraryIcon className="h-8 w-8 text-blue-500 mb-2" /> },
];

function App() {
  return (
    <div className="w-full">
      {/* Hero / About Section - full screen */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 px-6 py-12">
        <h1 className="text-9xl md:text-10xl font-extrabold text-blue-800 mb-6 tracking-wide">
          ABHYUDAYA
        </h1>

        <div className="flex gap-4 mb-10">
          <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded">
            VIEW HIGHLIGHTS
          </button>
          <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition rounded">
            REGISTER NOW
          </button>
        </div>

        <div className="max-w-2xl text-center">
          <h2 className="text-xl text-blue-700 font-semibold mb-2">About Abhyudaya</h2>
          <p className="text-sm text-gray-700">
            Abhyudaya is a collaborative social initiative conducted under the banner of Engineering India, where students
            from various engineering institutes across Nagpur come together to drive change and spread awareness on
            important social issues. This annual event fosters youth engagement through impactful campaigns, outreach
            programs, and community-driven activities. With the support of 250+ coordinators and participation from over
            2500 students, Abhyudaya is a testament to unity, compassion, and the shared spirit of responsibility among
            future engineers.
          </p>
        </div>
      </section>

      {/* Competitions Section - with Framer Motion animation */}
      <section className="min-h-screen w-full px-4 py-16 bg-gray-50 text-gray-800">
        <h2 className="text-3xl text-blue-600 font-bold text-center mb-8">Competitions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {competitions.map((comp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f3f4f6",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-5 transition-all flex flex-col items-center text-center"
            >
              {comp.icon}
              <h3 className="text-lg font-semibold mb-2 text-blue-700">{comp.title}</h3>
              <p className="text-sm text-gray-600">
                Join {comp.title} and test your skills in an exciting competition filled with innovation, challenge, and
                creativity.
              </p>
            </motion.div>
          ))}
        </div>

        {/* Memories Section */}
        <section className="min-h-screen w-full px-4 py-16 bg-white text-gray-800">
          <h2 className="text-3xl text-blue-600 font-bold text-center mb-8">Memories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 ease-in-out"
              >
                <img
                  src={`/memories/${index + 1}.jpg`}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-48 object-cover hover:brightness-110 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>




{/* Impact Section */}
<section className="py-16 bg-white text-blue-700 text-center">
  <h2 className="text-3xl font-bold mb-8">Impact at a Glance</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-4xl font-bold">
    <div>250+<p className="text-sm font-medium text-gray-600 mt-2">Coordinators</p></div>
    <div>10+<p className="text-sm font-medium text-gray-600 mt-2">Partner Colleges</p></div>
    <div>50+<p className="text-sm font-medium text-gray-600 mt-2">Events Conducted</p></div>
    <div>3000+<p className="text-sm font-medium text-gray-600 mt-2">Participants</p></div>
  </div>
</section>
          

         
                {/* Testimonials Section */}
        <section className="min-h-screen w-full px-4 py-16 bg-white text-gray-800">
           <h2 className="text-3xl text-blue-600 font-bold text-center mb-12">Testimonials</h2>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {[
           {
              name: "Aarav Sharma",
              feedback: "Participating in this event was an incredible experience. The organization and enthusiasm were top-notch!",
              image: "/testimonials/1.jpg"
          },
            {
              name: "Sneha Patel",
              feedback: "The competitions pushed me to think creatively and collaborate better. Loved every moment!",
              image: "/testimonials/2.jpg"
           },
            {
               name: "Rahul Mehta",
               feedback: "Truly an event to remember. I made new friends, learned new things, and had a lot of fun.",
               image: "/testimonials/3.jpg"
            }
              ].map((testimonial, index) => (
              <motion.div
                    key={index}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
                     whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }}
                     className="bg-gray-100 rounded-xl p-6 shadow-md transition-all duration-300"
           >
               <div className="flex items-center mb-4">
               <img
                     src={testimonial.image}
                     alt={testimonial.name}
                     className="w-12 h-12 rounded-full object-cover mr-4 border border-blue-500"
                />
                     <h4 className="text-lg font-semibold text-blue-700">{testimonial.name}</h4>
                     </div>
                     <p className="text-gray-600 text-sm">{testimonial.feedback}</p>
                     </motion.div>
                  ))}
                </div>



                {/* Behind-the-Scenes Video Section */}
<section className="w-full bg-gray-100 py-16 px-6">
  <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Abhyudaya in Action</h2>
  <div className="max-w-5xl mx-auto aspect-video overflow-hidden rounded-xl shadow-lg">
    <iframe
      src="https://www.instagram.com/reel/DH6ANkwSr_E/embed"
      title="Abhyudaya BTS"
      className="w-full h-full"
      allowFullScreen
    ></iframe>
  </div>
</section>


                 {/* Timeline Section */}
              <section className="bg-white py-16 px-4 text-gray-800">
                    <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Abhyudaya Timeline</h2>

                 <div className="relative max-w-4xl mx-auto">


                {/* Vertical line */}
                   <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-300"></div>

                 {/* Timeline Items */}
                   {[
                  { year: "2021", title: "Inception of Abhyudaya", desc: "The journey began with the aim to promote creativity and cultural expression." },
                  { year: "2022", title: "First Intercollege Event", desc: "Successfully hosted events welcoming participants from multiple colleges." },
                 { year: "2023", title: "Expanded to Tech + Cultural", desc: "Merged technical and cultural domains to widen participation." },
                 { year: "2024", title: "Mega Fest with 1000+ attendees", desc: "Achieved record-breaking turnout and media coverage." },
                   ].map((item, index) => (
                   <motion.div
                  key={index}
                  className="mb-10 flex flex-col md:flex-row items-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 text-right' : 'md:pl-8 text-left'}`}>
                  <h3 className="text-xl font-semibold text-blue-700">{item.year} - {item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md z-10"></div>
                <div className="hidden md:block w-full md:w-1/2"></div>
              </motion.div>
               ))}
              </div>
            </section>

            </section>


           </section>
          </section>
         </div>
         );
        }

export default App;
