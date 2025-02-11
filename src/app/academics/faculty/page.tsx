'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function FacultyPage() {
  const departments = [
    {
      name: "Computer Science",
      faculty: [
        {
          name: "Dr. Sarah Johnson",
          position: "Department Head",
          qualification: "Ph.D. in Computer Science",
          specialization: "Artificial Intelligence",
          image: "/images/faculty/sarah-johnson.jpg" // Add actual image path
        },
        {
          name: "Prof. Michael Chen",
          position: "Senior Professor",
          qualification: "Ph.D. in Software Engineering",
          specialization: "Software Architecture",
          image: "/images/faculty/michael-chen.jpg"
        },
        // Add more faculty members
      ]
    },
    {
      name: "Business Administration",
      faculty: [
        {
          name: "Dr. James Wilson",
          position: "Department Head",
          qualification: "Ph.D. in Business Management",
          specialization: "Strategic Management",
          image: "/images/faculty/james-wilson.jpg"
        },
        {
          name: "Prof. Emily Brown",
          position: "Associate Professor",
          qualification: "Ph.D. in Finance",
          specialization: "Financial Management",
          image: "/images/faculty/emily-brown.jpg"
        },
        // Add more faculty members
      ]
    },
    // Add more departments
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Our Faculty
        </h1>

        {departments.map((department, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold text-[#FFC107] mb-8">
              {department.name} Department
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {department.faculty.map((member, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all">
                  <div className="mb-4 relative">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                      <div className="bg-gray-300 w-full h-full">
                        {/* Add actual image when available */}
                        <div className="flex items-center justify-center h-full text-gray-500">
                          👤
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-[#FFC107] font-medium mb-2">{member.position}</p>
                  <div className="space-y-2 text-white/80">
                    <p>{member.qualification}</p>
                    <p>Specialization: {member.specialization}</p>
                  </div>

                  <button className="w-full mt-4 bg-[#FFC107] text-[#034D27] py-2 px-4 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
} 