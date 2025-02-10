'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import NavBar from '@/components/layout/NavBar';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Data
const admissionRequirements = [
  { id: 1, title: "Academic Records", description: "Minimum 60% in previous qualification", icon: "📚" },
  { id: 2, title: "Entrance Test", description: "Clear college entrance examination", icon: "✍️" },
  { id: 3, title: "Documents", description: "Valid ID, photographs, certificates", icon: "📋" },
  { id: 4, title: "Interview", description: "Personal interview with faculty", icon: "🤝" },
];

const courses = [
  { id: 1, title: "Computer Science", duration: "4 Years", intake: "120 seats", icon: "💻" },
  { id: 2, title: "Business Administration", duration: "4 Years", intake: "60 seats", icon: "📊" },
  { id: 3, title: "Mechanical Engineering", duration: "4 Years", intake: "60 seats", icon: "⚙️" },
  { id: 4, title: "Electrical Engineering", duration: "4 Years", intake: "60 seats", icon: "⚡" },
];

function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-[#034D27] text-white pt-16">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-[#023D1F]">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-[#FFC107] mb-6">
              Join Our College
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Take the first step towards your future. Apply now for admission to our prestigious programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Admission Requirements
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionRequirements.map((req) => (
              <motion.div
                key={req.id}
                {...fadeInUp}
                className="bg-white/10 p-6 rounded-lg"
              >
                <span className="text-4xl mb-4 block">{req.icon}</span>
                <h3 className="text-xl font-bold text-[#FFC107] mb-2">{req.title}</h3>
                <p className="text-white/80">{req.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#023D1F]">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Apply Now
          </motion.h2>
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
              <select 
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              >
                <option value="">Select Program</option>
                {courses.map(course => (
                  <option key={course.id} value={course.title}>{course.title}</option>
                ))}
              </select>
              <div className="space-y-4">
                <label className="block text-white/90">Upload Documents</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer bg-white/20 px-4 py-3 rounded-lg text-white hover:bg-white/30 transition-colors">
                    <span>Academic Transcripts</span>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-white/20 px-4 py-3 rounded-lg text-white hover:bg-white/30 transition-colors">
                    <span>ID Proof</span>
                    <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                  </label>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#FFC107] text-[#034D27] py-4 rounded-lg font-bold"
              >
                Submit Application
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default AdmissionsPage;
