import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      {/* Title */}
      <h1 className="text-5xl font-bold text-blue-400 mb-6 tracking-wide">
        ABHYUDAYA
      </h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="px-6 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition rounded">
          VIEW HIGHLIGHTS
        </button>
        <button className="px-6 py-2 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition rounded">
          REGISTER NOW
        </button>
      </div>

      {/* About Section */}
      <div className="max-w-2xl text-center">
        <h2 className="text-xl text-blue-300 font-semibold mb-2">About Abhyudaya</h2>
        <p className="text-sm text-gray-300">
          Abhyudaya is the largest student-driven fest at Cummilā College, with 2500+ participants and 200+ coordinators. It encompasses a wide range of events across multiple technical and non-technical domains, offering a vibrant platform for students to showcase their talents.
        </p>
      </div>

      {/* Competitions Section */}
<section className="mt-16 w-full px-4 max-w-7xl mx-auto">
  <h2 className="text-3xl text-blue-400 font-bold text-center mb-8">Competitions</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      "Hackathon",
      "Ultimate-Socio Technocrat",
      "Drwaingt",
      "Painting",
      "Debate",
      "Drama",
      "Speech",
      "Youth Parliament",
    ].map((comp, index) => (
      <div key={index} className="bg-gray-800 text-white rounded-xl shadow-md p-5 hover:shadow-lg hover:bg-gray-700 transition">
        <h3 className="text-xl font-semibold mb-2 text-blue-300">{comp}</h3>
        <p className="text-sm text-gray-300">
          Join {comp} and test your skills in an exciting competition filled with innovation, challenge, and creativity.
        </p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}

export default App;
