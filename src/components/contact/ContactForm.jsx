'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import toast from 'react-hot-toast';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success toast
        toast.success('Message sent successfully!', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#034D27',
            color: '#FFC107',
            border: '1px solid #FFC107',
          },
          icon: '✉️',
        });

        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
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
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className={`w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border ${
              errors.firstName ? 'border-red-500' : 'border-transparent'
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className={`w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border ${
              errors.lastName ? 'border-red-500' : 'border-transparent'
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 border ${
            errors.email ? 'border-red-500' : 'border-transparent'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className={`w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60 resize-none border ${
            errors.message ? 'border-red-500' : 'border-transparent'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#FFC107] text-[#034D27] py-4 rounded-lg font-bold transition-all ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#FFC107]/90'
        }`}
      >
        {isSubmitting ? (
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
    </form>
  );
}

export default ContactForm;
