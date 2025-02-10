'use client';

// Enable client-side features for scroll detection and animations

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/layout/NavBar';
import HeroSection from '../components/home/HeroSection';
import Footer from '@/components/layout/Footer';
import ContactForm from '../components/contact/ContactForm';
import MapComponent from '../components/shared/Map';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// Data
const programs = [
  {
    id: 1,
    title: 'Computer Science',
    icon: '💻',
    description: 'Learn programming, algorithms, and software development',
  },
  {
    id: 2,
    title: 'Business Administration',
    icon: '📊',
    description: 'Study management, marketing, and business strategy',
  },
  {
    id: 3,
    title: 'Engineering',
    icon: '⚡',
    description: 'Explore mechanical, electrical, and civil engineering',
  },
];

const features = [
  {
    id: 1,
    title: 'Modern Facilities',
    icon: '🏛️',
    description: 'State-of-the-art labs and classrooms',
  },
  {
    id: 2,
    title: 'Expert Faculty',
    icon: '👨‍🏫',
    description: 'Experienced professors and industry experts',
  },
  {
    id: 3,
    title: 'Career Support',
    icon: '🎯',
    description: 'Placement assistance and career guidance',
  },
];

// Updated data sections
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

const events = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "2024-06-15",
    description: "Join us for the latest in technology trends",
    category: "Event"
  },
  {
    id: 2,
    title: "New Computer Lab Inauguration",
    date: "2024-05-20",
    description: "State-of-the-art facilities for students",
    category: "News"
  },
  {
    id: 3,
    title: "Career Fair 2024",
    date: "2024-07-10",
    description: "Meet top employers and explore opportunities",
    category: "Event"
  },
];

const ProgramCard = ({ program, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
    >
      <span className="text-4xl">{program.icon}</span>
      <h3 className="text-xl font-bold text-[#FFC107] mt-4">{program.title}</h3>
      <p className="text-white/80 mt-2">{program.description}</p>
    </motion.div>
  );
};

function Home() {
  return (
    <main className="min-h-screen bg-[#034D27] text-white pt-16">
      <NavBar />
      <HeroSection />
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFC107] mb-12 text-center leading-tight">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-xl">
              <ContactForm />
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden">
              <MapComponent />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
