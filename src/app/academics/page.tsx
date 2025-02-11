'use client';

import { useRouter } from 'next/navigation';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function AcademicsPage() {
  const router = useRouter();

  const academicSections = [
    {
      title: "Programs",
      description: "Explore our diverse range of academic programs and courses.",
      icon: "🎓",
      link: "/academics/programs",
      features: [
        "Undergraduate Programs",
        "Graduate Programs",
        "Professional Certifications",
        "Online Courses"
      ]
    },
    {
      title: "Faculty",
      description: "Meet our distinguished faculty members and academic staff.",
      icon: "👨‍🏫",
      link: "/academics/faculty",
      features: [
        "Department Heads",
        "Professors",
        "Research Supervisors",
        "Industry Experts"
      ]
    },
    {
      title: "Research",
      description: "Discover our research initiatives and scholarly activities.",
      icon: "🔬",
      link: "/academics/research",
      features: [
        "Research Centers",
        "Current Projects",
        "Publications",
        "Research Opportunities"
      ]
    },
    {
      title: "Library",
      description: "Access our extensive collection of academic resources.",
      icon: "📚",
      link: "/academics/library",
      features: [
        "Digital Resources",
        "Physical Collection",
        "Study Spaces",
        "Research Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Academics
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {academicSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all cursor-pointer"
              onClick={() => router.push(section.link)}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{section.icon}</span>
                <h2 className="text-2xl font-bold text-[#FFC107]">{section.title}</h2>
              </div>
              
              <p className="text-white/80 mb-6">{section.description}</p>
              
              <ul className="space-y-2">
                {section.features.map((feature, idx) => (
                  <li key={idx} className="text-white/70 flex items-center">
                    <span className="text-[#FFC107] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                className="w-full mt-6 bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
              >
                Explore {section.title}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 