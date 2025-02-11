'use client';

import { useState } from 'react';
import NavBar from '../../../../components/layout/NavBar';
import Footer from '../../../../components/layout/Footer';

export default function ParentLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent login:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <span className="text-5xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h1 className="text-3xl font-bold text-white mb-2">Parent Login</h1>
              <p className="text-white/60">Monitor your child's progress</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-white mb-2">Parent Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-white mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-white/10 bg-white/5 text-[#FFC107] focus:ring-[#FFC107]"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
                    Remember me
                  </label>
                </div>
                <a href="/portals/parent/forgot-password" className="text-sm text-[#FFC107] hover:text-[#FFD54F] transition-colors">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-white/80">
              <p>New parent? {' '}
                <a href="/portals/parent/signup" className="text-[#FFC107] hover:text-[#FFD54F] transition-colors">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 