'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between">
      <div className="absolute inset-0">
        <Image
          src="/Task3.0.jpg"
          alt="Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#034D27]/90 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative container mx-auto px-4 pt-32 md:pt-40 flex-1">
        {/* Hero Content */}
        <motion.div {...fadeInUp} className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FFC107] leading-tight">
            Excellence in Education
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Empowering students with quality education and practical skills for a successful future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFC107] text-[#034D27] px-8 py-4 rounded-lg font-bold"
              >
                Apply Now
              </motion.button>
            </Link>
            <Link href="/academics">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-[#FFC107] text-[#FFC107] px-8 py-4 rounded-lg font-bold"
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          {...fadeInUp} 
          transition={{ delay: 0.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { number: "1000+", label: "Students" },
            { number: "50+", label: "Expert Faculty" },
            { number: "95%", label: "Placement Rate" },
            { number: "20+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FFC107]">{stat.number}</h3>
              <p className="text-white/80 mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section Container */}
      <div className="relative mt-20">
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute -top-20 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#FFC107] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#FFC107] rounded-full mt-2"></div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="bg-gradient-to-t from-[#023D1F] to-transparent pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { icon: "🎓", title: "Admissions Open", link: "/admissions" },
                { icon: "📅", title: "Academic Calendar", link: "/academics#calendar" },
                { icon: "🏆", title: "Student Success", link: "/academics#success" },
                { icon: "📰", title: "Latest News", link: "/events" }
              ].map((item, index) => (
                <Link key={index} href={item.link}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg group cursor-pointer"
                  >
                    <span className="text-xl md:text-2xl">{item.icon}</span>
                    <span className="text-sm md:text-base text-white group-hover:text-[#FFC107] transition-colors duration-300">
                      {item.title}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;