'use client';

import { motion } from 'framer-motion';
import NavBar from '@/components/layout/NavBar';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const events = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "March 15, 2024",
    description: "Join us for a day of technological innovation and insights from industry experts.",
    category: "Academic"
  },
  {
    id: 2,
    title: "Cultural Festival",
    date: "April 5-7, 2024",
    description: "Three days of music, dance, and artistic celebrations showcasing student talents.",
    category: "Cultural"
  },
  {
    id: 3,
    title: "Sports Week",
    date: "May 1-7, 2024",
    description: "Annual inter-college sports competition featuring various athletic events.",
    category: "Sports"
  }
];

const news = [
  {
    id: 1,
    title: "College Ranks #1 in Regional Rankings",
    date: "February 28, 2024",
    description: "Our institution has been recognized as the top college in the region for academic excellence."
  },
  {
    id: 2,
    title: "New Research Center Inauguration",
    date: "March 1, 2024",
    description: "State-of-the-art research facility opened to advance technological innovation."
  },
  {
    id: 3,
    title: "100% Placement Record",
    date: "March 5, 2024",
    description: "Final year students achieve complete placement with leading companies."
  }
];

function EventsPage() {
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
              Events & News
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay updated with the latest happenings and achievements at our college.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Upcoming Events
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <motion.div
                key={event.id}
                {...fadeInUp}
                className="bg-white/10 p-6 rounded-lg"
              >
                <div className="text-[#FFC107] text-sm font-bold mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-white/80 mb-4">{event.description}</p>
                <span className="inline-block bg-[#FFC107]/20 text-[#FFC107] px-3 py-1 rounded-full text-sm">
                  {event.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-[#023D1F]">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-12 text-center">
            Latest News
          </motion.h2>
          <div className="space-y-6">
            {news.map((item) => (
              <motion.div
                key={item.id}
                {...fadeInUp}
                className="bg-white/10 p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-32 text-[#FFC107] font-bold">{item.date}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            {...fadeInUp}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#FFC107] mb-6">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter to receive the latest updates about events and news.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-[#FFC107] text-[#034D27] px-8 py-3 rounded-lg font-bold"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default EventsPage;
