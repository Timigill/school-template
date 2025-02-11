'use client';

import { useRouter } from 'next/navigation';
import NavBar from '../../components/layout/NavBar';
import Footer from '../../components/layout/Footer';

export default function AdmissionsPage() {
  const router = useRouter();

  const sections = [
    {
      id: 'apply',
      title: 'Apply Now',
      description: 'Start your journey with us. Apply for admission to your desired program.',
      icon: '📝',
      features: [
        'Online Application Process',
        'Document Requirements',
        'Application Deadlines',
        'Step-by-step Guide'
      ]
    },
    {
      id: 'requirements',
      title: 'Admission Requirements',
      description: 'Check the eligibility criteria and required documents for admission.',
      icon: '📋',
      features: [
        'Academic Requirements',
        'Required Documents',
        'English Proficiency',
        'Additional Requirements'
      ]
    },
    {
      id: 'scholarships',
      title: 'Scholarships',
      description: 'Explore various scholarship opportunities and financial aid options.',
      icon: '🎓',
      features: [
        'Merit-based Scholarships',
        'Need-based Financial Aid',
        'Sports Scholarships',
        'International Scholarships'
      ]
    },
    {
      id: 'faqs',
      title: 'FAQs',
      description: 'Find answers to commonly asked questions about admissions.',
      icon: '❓',
      features: [
        'Application Process',
        'Document Requirements',
        'Deadlines & Dates',
        'Financial Information'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Admissions
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <div 
              key={section.id}
              id={section.id} 
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all"
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
                onClick={() => router.push(`/admissions/${section.id}`)}
                className="w-full mt-6 bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
              >
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