'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Exploring advanced AI algorithms and applications in real-world scenarios.",
      projects: [
        "Neural Networks for Pattern Recognition",
        "Natural Language Processing Systems",
        "Computer Vision Applications"
      ],
      image: "/images/research/ai-ml.jpg"
    },
    {
      title: "Environmental Sustainability",
      description: "Research focused on sustainable practices and environmental conservation.",
      projects: [
        "Renewable Energy Solutions",
        "Waste Management Systems",
        "Green Building Technologies"
      ],
      image: "/images/research/environmental.jpg"
    },
    {
      title: "Business Innovation",
      description: "Studying modern business practices and innovative management strategies.",
      projects: [
        "Digital Transformation",
        "Sustainable Business Models",
        "Market Analysis Studies"
      ],
      image: "/images/research/business.jpg"
    }
  ];

  const publications = [
    {
      title: "Advanced Machine Learning Applications in Education",
      authors: "Dr. Sarah Johnson, Prof. Michael Chen",
      journal: "International Journal of Computer Science",
      year: 2023,
      doi: "10.1234/ijcs.2023.001"
    },
    {
      title: "Sustainable Business Practices in Developing Economies",
      authors: "Dr. James Wilson, Prof. Emily Brown",
      journal: "Business Management Review",
      year: 2023,
      doi: "10.1234/bmr.2023.002"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Research & Innovation
        </h1>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
                <div className="mb-4 h-48 rounded-lg overflow-hidden bg-gray-700">
                  {/* Add actual images later */}
                  <div className="w-full h-full flex items-center justify-center text-white/60">
                    Research Image
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-white/80 mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.projects.map((project, idx) => (
                    <p key={idx} className="text-white/70 flex items-center">
                      <span className="text-[#FFC107] mr-2">•</span>
                      {project}
                    </p>
                  ))}
                </div>
                <button className="w-full mt-4 bg-[#FFC107] text-[#034D27] py-2 px-4 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Publications */}
        <section>
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Recent Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">{pub.title}</h3>
                <div className="space-y-2 text-white/80">
                  <p><span className="text-[#FFC107]">Authors:</span> {pub.authors}</p>
                  <p><span className="text-[#FFC107]">Journal:</span> {pub.journal}</p>
                  <p><span className="text-[#FFC107]">Year:</span> {pub.year}</p>
                  <p><span className="text-[#FFC107]">DOI:</span> {pub.doi}</p>
                </div>
                <button className="mt-4 bg-[#FFC107] text-[#034D27] py-2 px-4 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                  View Publication
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 