'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '@/components/layout/NavBar';
import Calendar from '@/components/events/Calendar';
import EventList from '@/components/events/EventList';

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "2024-03-25",
    time: "09:00 AM",
    location: "College Ground",
    category: "Sports",
    description: "Join us for a day of athletic excellence and friendly competition.",
    image: "/events/sports-day.jpg"
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "2024-04-05",
    time: "10:00 AM",
    location: "Science Block",
    category: "Academic",
    description: "Showcasing innovative projects from our talented students.",
    image: "/events/science-expo.jpg"
  },
  {
    id: 3,
    title: "Cultural Festival",
    date: "2024-04-15",
    time: "05:00 PM",
    location: "Auditorium",
    category: "Cultural",
    description: "Celebrate diversity through music, dance, and art.",
    image: "/events/cultural-fest.jpg"
  }
];

const newsItems = [
  {
    id: 1,
    title: "CGC Ranks #1 in Regional Rankings",
    date: "2024-03-10",
    category: "Achievement",
    description: "Proud moment as our institution tops the regional rankings...",
    image: "/news/ranking.jpg"
  },
  {
    id: 2,
    title: "New Computer Lab Inauguration",
    date: "2024-03-15",
    category: "Infrastructure",
    description: "State-of-the-art computer lab with latest technology...",
    image: "/news/computer-lab.jpg"
  }
];

export default function EventsPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeTab, setActiveTab] = useState('events'); // 'events' or 'news'

  return (
    <main className="min-h-screen bg-[#034D27]">
      <NavBar />
      <div className="container mx-auto px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-[#FFC107] text-center mb-12"
        >
          Events & News
        </motion.h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 rounded-lg p-1 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'events'
                  ? 'bg-[#FFC107] text-[#034D27]'
                  : 'text-white hover:text-[#FFC107]'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'news'
                  ? 'bg-[#FFC107] text-[#034D27]'
                  : 'text-white hover:text-[#FFC107]'
              }`}
            >
              News
            </button>
          </div>
        </div>

        {activeTab === 'events' ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Calendar Component */}
            <div className="md:col-span-1">
              <Calendar
                events={upcomingEvents}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </div>

            {/* Events List */}
            <div className="md:col-span-2">
              <EventList
                events={upcomingEvents}
                selectedDate={selectedDate}
              />
            </div>
          </div>
        ) : (
          /* News Grid */
          <div className="grid md:grid-cols-2 gap-8">
            {newsItems.map((news) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    📰
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#FFC107]/20 text-[#FFC107] rounded-full text-sm mb-4">
                    {news.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#FFC107] mb-2">
                    {news.title}
                  </h3>
                  <p className="text-white/80 mb-4">{news.description}</p>
                  <p className="text-white/60 text-sm">{news.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
