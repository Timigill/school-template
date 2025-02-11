'use client';

import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function ApplyPage() {
  const applicationSteps = [
    {
      title: "Create an Account",
      description: "Sign up for our admissions portal to begin your application process.",
      icon: "👤"
    },
    {
      title: "Fill Application Form",
      description: "Complete the online application form with your personal and academic details.",
      icon: "📝"
    },
    {
      title: "Upload Documents",
      description: "Submit required documents including transcripts and certificates.",
      icon: "📎"
    },
    {
      title: "Pay Application Fee",
      description: "Submit the application processing fee through our secure payment system.",
      icon: "💳"
    }
  ];

  const requiredDocuments = [
    "Secondary School Certificate (SSC) or equivalent",
    "Higher Secondary Certificate (HSC) or equivalent",
    "Character Certificate from last attended institution",
    "Valid CNIC/B-Form",
    "Passport size photographs",
    "Domicile Certificate"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Apply Now
        </h1>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Required Documents</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((doc, index) => (
                <li key={index} className="text-white/80 flex items-center">
                  <span className="text-[#FFC107] mr-2">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application Form */}
        <section>
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Start Application</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <p className="text-white/80 mb-6">
              Ready to begin your journey with us? Click the button below to start your application process.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="bg-[#FFC107] text-[#034D27] py-3 px-8 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                Start New Application
              </button>
              <button className="bg-white/10 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
                Continue Application
              </button>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#FFC107] mb-8">Important Dates</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="text-[#FFC107] font-semibold mb-2">Application Deadline</h3>
                <p className="text-white">September 30, 2024</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="text-[#FFC107] font-semibold mb-2">Document Submission</h3>
                <p className="text-white">October 15, 2024</p>
              </div>
              <div className="border border-white/10 rounded-lg p-4">
                <h3 className="text-[#FFC107] font-semibold mb-2">Classes Begin</h3>
                <p className="text-white">January 15, 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 