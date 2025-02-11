'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function ScholarshipsPage() {
  const scholarshipTypes = [
    {
      title: "Merit Scholarships",
      description: "Based on academic excellence and achievements",
      criteria: [
        "Minimum 85% marks in previous degree",
        "Outstanding academic record",
        "No backlog of courses",
        "Full attendance record"
      ],
      coverage: "Up to 100% tuition fee waiver",
      icon: "🏆"
    },
    {
      title: "Need-Based Financial Aid",
      description: "Supporting students with financial constraints",
      criteria: [
        "Demonstrated financial need",
        "Family income below threshold",
        "Satisfactory academic performance",
        "Complete documentation of financial status"
      ],
      coverage: "Up to 75% tuition fee support",
      icon: "🤝"
    },
    {
      title: "Sports Scholarships",
      description: "For outstanding athletes and sports performers",
      criteria: [
        "National or regional level achievements",
        "Active participation in college sports",
        "Minimum academic requirements",
        "Physical fitness standards"
      ],
      coverage: "Up to 50% tuition fee waiver",
      icon: "⚽"
    },
    {
      title: "International Scholarships",
      description: "For international students with exceptional profiles",
      criteria: [
        "Strong academic background",
        "English language proficiency",
        "Letters of recommendation",
        "Extra-curricular achievements"
      ],
      coverage: "Varies by country and program",
      icon: "🌍"
    }
  ];

  const applicationProcess = [
    {
      step: "Submit Application",
      description: "Complete the online scholarship application form with required details."
    },
    {
      step: "Document Verification",
      description: "Submit supporting documents for verification of eligibility criteria."
    },
    {
      step: "Interview",
      description: "Shortlisted candidates may be called for an interview."
    },
    {
      step: "Final Selection",
      description: "Selected candidates will be notified through email and SMS."
    }
  ];

  const importantDates = [
    {
      event: "Application Opening",
      date: "August 1, 2024"
    },
    {
      event: "Application Deadline",
      date: "September 30, 2024"
    },
    {
      event: "Result Announcement",
      date: "October 15, 2024"
    },
    {
      event: "Documentation Deadline",
      date: "October 30, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Scholarships & Financial Aid
        </h1>

        {/* Scholarship Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Available Scholarships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarshipTypes.map((scholarship, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-4">{scholarship.icon}</span>
                  <h3 className="text-2xl font-semibold text-white">{scholarship.title}</h3>
                </div>
                <p className="text-white/80 mb-4">{scholarship.description}</p>
                <div className="mb-4">
                  <h4 className="text-[#FFC107] font-semibold mb-2">Eligibility Criteria:</h4>
                  <ul className="space-y-2">
                    {scholarship.criteria.map((criterion, idx) => (
                      <li key={idx} className="text-white/80 flex items-center">
                        <span className="text-[#FFC107] mr-2">•</span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-white font-semibold">Coverage: {scholarship.coverage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Application Process</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationProcess.map((step, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-4">
                  <h3 className="text-[#FFC107] font-semibold mb-2">Step {index + 1}: {step.step}</h3>
                  <p className="text-white/80">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Important Dates</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-[#FFC107] font-semibold mb-2">{item.event}</h3>
                  <p className="text-white">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Ready to Apply?</h2>
            <p className="text-white/80 mb-6">
              Start your scholarship application process today and take the first step towards your academic journey.
            </p>
            <button className="bg-[#FFC107] text-[#034D27] py-3 px-8 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
              Apply for Scholarship
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}