'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function LibraryPage() {
  const libraryServices = [
    {
      title: "Digital Resources",
      description: "Access to extensive online databases, e-books, and academic journals.",
      features: [
        "24/7 Online Access",
        "Research Databases",
        "E-book Collections",
        "Academic Journals",
        "Digital Archives"
      ],
      icon: "📱"
    },
    {
      title: "Physical Collection",
      description: "Extensive collection of books, journals, and reference materials.",
      features: [
        "Textbooks",
        "Reference Books",
        "Academic Journals",
        "Magazines",
        "Newspapers"
      ],
      icon: "📚"
    },
    {
      title: "Study Spaces",
      description: "Modern facilities for individual and group study sessions.",
      features: [
        "Individual Study Carrels",
        "Group Study Rooms",
        "Discussion Areas",
        "Quiet Zones",
        "Computer Labs"
      ],
      icon: "🏛️"
    },
    {
      title: "Library Services",
      description: "Professional assistance and support for academic research.",
      features: [
        "Research Assistance",
        "Inter-library Loans",
        "Printing & Scanning",
        "Bibliography Support",
        "Library Workshops"
      ],
      icon: "🔍"
    }
  ];

  const timings = [
    { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          College Library
        </h1>

        {/* Library Overview */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Welcome to Our Library</h2>
            <p className="text-white/80 mb-6">
              Our state-of-the-art library provides students and faculty with comprehensive resources
              for academic excellence. With both digital and physical collections, we support research,
              learning, and intellectual growth across all disciplines.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-[#FFC107] text-xl font-bold mb-2">50,000+</p>
                <p className="text-white/60">Books</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-[#FFC107] text-xl font-bold mb-2">100+</p>
                <p className="text-white/60">Digital Databases</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-[#FFC107] text-xl font-bold mb-2">500+</p>
                <p className="text-white/60">Study Spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* Library Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Library Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {libraryServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/70 flex items-center">
                      <span className="text-[#FFC107] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Library Hours */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Library Hours</h2>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <div className="space-y-4">
              {timings.map((time, index) => (
                <div key={index} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white font-medium">{time.day}</span>
                  <span className="text-white/80">{time.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Location */}
        <section>
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Contact & Location</h2>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3 text-white/80">
                  <p>📧 library@chenabcollege.edu</p>
                  <p>📞 +92-XXX-XXXXXXX</p>
                  <p>💬 Live Chat Available (Mon-Fri, 9 AM - 5 PM)</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                <p className="text-white/80">
                  Main Campus, Ground Floor<br />
                  Academic Block A<br />
                  Chenab College
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 