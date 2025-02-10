'use client';

import { motion } from 'framer-motion';
import NavBar from '@/components/layout/NavBar';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const programs = [
  {
    id: 1,
    title: "Computer Science",
    description: "Learn programming, algorithms, and software development",
    duration: "4 Years",
    icon: "💻"
  },
  {
    id: 2,
    title: "Business Administration",
    description: "Study management, marketing, and business strategy",
    duration: "4 Years",
    icon: "📊"
  },
  {
    id: 3,
    title: "Mechanical Engineering",
    description: "Focus on design, manufacturing, and mechanical systems",
    duration: "4 Years",
    icon: "⚙️"
  },
  {
    id: 4,
    title: "Electrical Engineering",
    description: "Study power systems, electronics, and control systems",
    duration: "4 Years",
    icon: "⚡"
  }
];

const successStories = [
  {
    name: "Sarah Johnson",
    batch: "2022",
    achievement: "Secured position at Google",
    quote: "The college provided me with the perfect platform to achieve my dreams."
  },
  {
    name: "Michael Chen",
    batch: "2021",
    achievement: "Founded successful startup",
    quote: "The entrepreneurship program gave me the confidence to start my own venture."
  },
  {
    name: "Priya Patel",
    batch: "2023",
    achievement: "Research publication in top journal",
    quote: "The research facilities and guidance were instrumental in my success."
  }
];

function AcademicsPage() {
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
              Academic Programs
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover our comprehensive range of academic programs designed to prepare you for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                {...fadeInUp}
                className="bg-white/10 p-8 rounded-lg"
              >
                <span className="text-4xl mb-4 block">{program.icon}</span>
                <h3 className="text-2xl font-bold text-[#FFC107] mb-2">
                  {program.title}
                </h3>
                <p className="text-white/80 mb-4">{program.description}</p>
                <div className="flex items-center gap-2 text-white/60">
                  <span>Duration:</span>
                  <span className="text-[#FFC107]">{program.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar Section */}
      <section id="calendar" className="py-16 bg-[#023D1F] scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Academic Calendar 2024
          </motion.h2>
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-6">
            {[
              { month: "January", event: "Spring Semester Begins (Jan 15)" },
              { month: "March", event: "Mid-term Examinations (Mar 1-10)" },
              { month: "May", event: "Spring Semester Finals (May 15-30)" },
              { month: "August", event: "Fall Semester Begins (Aug 15)" },
              { month: "October", event: "Mid-term Examinations (Oct 1-10)" },
              { month: "December", event: "Fall Semester Finals (Dec 15-30)" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-white/10 p-4 rounded-lg">
                <div className="w-32 text-[#FFC107] font-bold">{item.month}</div>
                <div className="flex-1 text-white/90">{item.event}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Success Section */}
      <section id="success" className="py-16 scroll-mt-20">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Student Success Stories
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white/10 p-6 rounded-lg"
              >
                <div className="w-20 h-20 bg-[#FFC107]/20 rounded-full mb-4 flex items-center justify-center mx-auto">
                  <span className="text-3xl">👨‍🎓</span>
                </div>
                <h3 className="text-xl font-bold text-[#FFC107] mb-2 text-center">{story.name}</h3>
                <p className="text-white/60 text-center mb-4">Batch of {story.batch}</p>
                <p className="text-white font-semibold mb-2 text-center">{story.achievement}</p>
                <p className="text-white/80 italic text-center">"{story.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-[#023D1F]">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Our Faculty
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Johnson", department: "Computer Science", experience: "15+ years" },
              { name: "Prof. Michael Chen", department: "Business", experience: "20+ years" },
              { name: "Dr. Emily Brown", department: "Engineering", experience: "12+ years" }
            ].map((faculty, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                className="bg-white/10 p-6 rounded-lg text-center"
              >
                <div className="w-24 h-24 bg-[#FFC107]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl">👨‍🏫</span>
                </div>
                <h3 className="text-xl font-bold text-[#FFC107] mb-2">{faculty.name}</h3>
                <p className="text-white/80">{faculty.department}</p>
                <p className="text-white/60">{faculty.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AcademicsPage;
