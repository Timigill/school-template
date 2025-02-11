'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function AcademicProgramsPage() {
  const programs = [
    {
      title: "Computer Science",
      description: "A comprehensive program covering programming, algorithms, and software development.",
      duration: "4 Years",
      seats: 120,
      features: [
        "Modern Programming Languages",
        "Data Structures & Algorithms",
        "Software Engineering",
        "Artificial Intelligence",
        "Web Development"
      ]
    },
    {
      title: "Business Administration",
      description: "Develop business acumen and management skills for the modern corporate world.",
      duration: "4 Years",
      seats: 60,
      features: [
        "Marketing Management",
        "Financial Accounting",
        "Business Ethics",
        "Strategic Management",
        "Entrepreneurship"
      ]
    },
    // Add more programs as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Academic Programs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
              <h2 className="text-2xl font-bold text-[#FFC107] mb-4">{program.title}</h2>
              <p className="text-white/80 mb-4">{program.description}</p>
              
              <div className="flex justify-between mb-6">
                <span className="text-white/60">Duration: {program.duration}</span>
                <span className="text-white/60">Seats: {program.seats}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="text-white/80 flex items-center">
                    <span className="text-[#FFC107] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-6 bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 