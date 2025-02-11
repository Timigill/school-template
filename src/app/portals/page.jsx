'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const portalOptions = [
  {
    title: 'Student Portal',
    icon: '👨‍🎓',
    description: 'Access your courses, grades, and academic resources',
    link: '/portals/student',
    features: ['Course Materials', 'Grades & Progress', 'Assignment Submission', 'Academic Calendar']
  },
  {
    title: 'Teacher Portal',
    icon: '👨‍🏫',
    description: 'Manage your classes, grades, and teaching resources',
    link: '/portals/teacher',
    features: ['Class Management', 'Grade Submission', 'Teaching Resources', 'Schedule Management']
  },
  {
    title: 'Parent Portal',
    icon: '👨‍👩‍👧‍👦',
    description: 'Monitor your child\'s academic progress and activities',
    link: '/portals/parent',
    features: ['Academic Progress', 'Attendance Records', 'Fee Management', 'Communication Hub']
  }
];

export default function PortalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-[#FFC107] text-center mb-12"
      >
        Welcome to CGC Portals
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {portalOptions.map((portal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white/10 rounded-xl p-6 border border-[#FFC107]/20 backdrop-blur-sm"
          >
            <div className="text-5xl mb-4 text-center">{portal.icon}</div>
            <h2 className="text-2xl font-bold text-[#FFC107] mb-3 text-center">{portal.title}</h2>
            <p className="text-white/80 mb-6 text-center">{portal.description}</p>
            
            <div className="space-y-3 mb-6">
              {portal.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center text-white/70">
                  <span className="text-[#FFC107] mr-2">✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <Link href={portal.link}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-[#FFC107] text-[#034D27] py-3 rounded-lg font-bold hover:bg-[#FFC107]/90 transition-colors"
              >
                Login
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 