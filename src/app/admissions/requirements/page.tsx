'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function RequirementsPage() {
  const academicRequirements = [
    {
      program: "Undergraduate Programs",
      requirements: [
        "Minimum 60% marks in Intermediate or equivalent",
        "No third division in SSC",
        "Passing score in college entry test",
        "Proficiency in English language"
      ]
    },
    {
      program: "Graduate Programs",
      requirements: [
        "16 years of education with minimum 2.5 CGPA",
        "Relevant academic background",
        "Passing score in graduate admission test",
        "Two letters of recommendation"
      ]
    }
  ];

  const documents = [
    {
      category: "Academic Documents",
      items: [
        "SSC Certificate and Detailed Marks Certificate",
        "HSSC Certificate and Detailed Marks Certificate",
        "Previous degrees and transcripts",
        "Equivalence certificate (for foreign qualifications)"
      ]
    },
    {
      category: "Personal Documents",
      items: [
        "CNIC/B-Form (original and copies)",
        "Passport size photographs",
        "Character certificate",
        "Domicile certificate"
      ]
    },
    {
      category: "Additional Requirements",
      items: [
        "Migration certificate (if applicable)",
        "NOC from previous institution",
        "Sports certificates (for sports quota)",
        "Income certificate (for financial aid)"
      ]
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Age Requirements",
      description: "17-25 years for undergraduate programs, No age limit for graduate programs"
    },
    {
      title: "Academic Background",
      description: "Must have completed previous education from recognized institutions"
    },
    {
      title: "Language Proficiency",
      description: "Minimum IELTS 5.5 or equivalent for international students"
    },
    {
      title: "Entry Test",
      description: "Mandatory college entry test with minimum 50% score"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Admission Requirements
        </h1>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-3">{criteria.title}</h3>
                <p className="text-white/80">{criteria.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Academic Requirements</h2>
          <div className="space-y-8">
            {academicRequirements.map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-4">{program.program}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.requirements.map((req, idx) => (
                    <li key={idx} className="text-white/80 flex items-center">
                      <span className="text-[#FFC107] mr-2">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Required Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documents.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-white/80 flex items-center">
                      <span className="text-[#FFC107] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section>
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Ready to Apply?</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
            <p className="text-white/80 mb-6">
              If you meet the requirements and have all the necessary documents, 
              you can proceed with your application.
            </p>
            <button 
              onClick={() => window.location.href = '/admissions/apply'}
              className="bg-[#FFC107] text-[#034D27] py-3 px-8 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
            >
              Apply Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 