'use client';

import { useState } from 'react';
import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState('admission');

  const faqCategories = [
    { id: 'admission', name: 'Admission Process' },
    { id: 'requirements', name: 'Requirements' },
    { id: 'financial', name: 'Financial Information' },
    { id: 'international', name: 'International Students' }
  ];

  const faqs = {
    admission: [
      {
        question: "How do I apply for admission?",
        answer: "You can apply online through our admissions portal. Create an account, fill out the application form, upload required documents, and pay the application fee."
      },
      {
        question: "What is the application deadline?",
        answer: "The main application deadline for Fall 2024 is September 30, 2024. However, we recommend applying early as admissions are competitive."
      },
      {
        question: "How long does the admission process take?",
        answer: "The complete admission process typically takes 4-6 weeks from application submission to final decision."
      },
      {
        question: "Can I apply for multiple programs?",
        answer: "Yes, you can apply for up to three programs in order of preference on a single application."
      }
    ],
    requirements: [
      {
        question: "What are the basic eligibility requirements?",
        answer: "For undergraduate programs, you need a minimum of 60% marks in Intermediate or equivalent. Graduate programs require 16 years of education with a minimum 2.5 CGPA."
      },
      {
        question: "Is an entry test mandatory?",
        answer: "Yes, all applicants must take the college entry test. The minimum passing score is 50%."
      },
      {
        question: "What documents are required?",
        answer: "Required documents include academic certificates, CNIC/B-Form, photographs, and character certificate. International students need additional documentation."
      },
      {
        question: "Do I need English language proficiency?",
        answer: "Yes, international students need IELTS (5.5) or equivalent. Local students may take our English proficiency test."
      }
    ],
    financial: [
      {
        question: "What are the tuition fees?",
        answer: "Tuition fees vary by program. Please check our fee structure page for detailed information."
      },
      {
        question: "Are scholarships available?",
        answer: "Yes, we offer merit-based scholarships, need-based financial aid, and sports scholarships."
      },
      {
        question: "Is there a fee payment plan?",
        answer: "Yes, students can pay their fees in installments. Details are provided upon admission."
      },
      {
        question: "What is the application fee?",
        answer: "The application fee is PKR 2,500 (non-refundable)."
      }
    ],
    international: [
      {
        question: "Do you accept international students?",
        answer: "Yes, we welcome international students from all countries."
      },
      {
        question: "Is there housing available for international students?",
        answer: "Yes, we provide on-campus housing facilities for international students."
      },
      {
        question: "What visa support do you provide?",
        answer: "We assist international students with visa documentation and provide admission letters for visa applications."
      },
      {
        question: "Are there special scholarships for international students?",
        answer: "Yes, we offer specific scholarships for international students based on merit and country of origin."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h1>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#FFC107] text-[#034D27]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-6 cursor-pointer">
                  <h3 className="text-lg font-semibold text-white pr-6">{faq.question}</h3>
                  <span className="text-[#FFC107] transition-transform duration-300 group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-white/80">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-[#FFC107] mb-4">Still Have Questions?</h2>
            <p className="text-white/80 mb-6">
              Contact our admissions team for any additional questions or concerns.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-[#FFC107] text-[#034D27] py-3 px-8 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300">
                Contact Admissions
              </button>
              <button className="bg-white/10 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 