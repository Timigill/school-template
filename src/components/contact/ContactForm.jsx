'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#034D27',
          color: '#FFC107',
          border: '1px solid #FFC107',
        },
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#034D27',
          color: '#FFC107',
          border: '1px solid #FFC107',
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white/10 rounded-xl p-6 backdrop-blur-sm space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#FFC107] mb-6">
        Send Message
      </h2>

      <div>
        <label className="block text-[#FFC107] mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-[#FFC107] mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
          placeholder="Your email"
        />
      </div>

      <div>
        <label className="block text-[#FFC107] mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
          placeholder="Message subject"
        />
      </div>

      <div>
        <label className="block text-[#FFC107] mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 resize-none"
          placeholder="Your message"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 rounded-lg font-bold transition-all ${
          isLoading
            ? 'bg-[#FFC107]/50 cursor-not-allowed'
            : 'bg-[#FFC107] hover:bg-[#FFC107]/90'
        } text-[#034D27]`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>
    </motion.form>
  );
}
