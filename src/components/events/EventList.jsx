'use client';

import { motion } from 'framer-motion';

export default function EventList({ events, selectedDate }) {
  const filteredEvents = selectedDate
    ? events.filter(event => event.date === selectedDate)
    : events;

  return (
    <div className="space-y-6">
      {filteredEvents.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/10 rounded-xl overflow-hidden backdrop-blur-sm"
        >
          <div className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-[#FFC107]/20 text-[#FFC107] rounded-full text-sm mb-4">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-[#FFC107] mb-2">
                  {event.title}
                </h3>
                <p className="text-white/80 mb-4">{event.description}</p>
                <div className="flex items-center gap-4 text-white/60">
                  <p>📅 {event.date}</p>
                  <p>⏰ {event.time}</p>
                  <p>📍 {event.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {filteredEvents.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-white/60"
        >
          No events found for the selected date.
        </motion.div>
      )}
    </div>
  );
} 