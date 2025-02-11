'use client';

import { useState } from 'react';
import NavBar from '../../../../components/layout/NavBar';
import Footer from '../../../../components/layout/Footer';

export default function ParentSignup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    studentId: '',
    relation: '',
    occupation: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Parent signup:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
              <h1 className="text-3xl font-bold text-white mb-2">Parent Registration</h1>
              <p className="text-white/60">Create your parent account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="studentId" className="block text-white mb-2">Student ID</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  placeholder="Enter your child's student ID"
                  required
                />
              </div>

              <div>
                <label htmlFor="relation" className="block text-white mb-2">Relation to Student</label>
                <select
                  id="relation"
                  name="relation"
                  value={formData.relation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors [&>option]:text-[#034D27] [&>option]:bg-white"
                  required
                >
                  <option value="" className="text-[#034D27]">Select Relation</option>
                  <option value="father" className="text-[#034D27]">Father</option>
                  <option value="mother" className="text-[#034D27]">Mother</option>
                  <option value="guardian" className="text-[#034D27]">Guardian</option>
                </select>
              </div>

              <div>
                <label htmlFor="occupation" className="block text-white mb-2">Occupation</label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-white mb-2">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
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
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-white mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
              >
                Create Account
              </button>
            </form>

            <div className="mt-6 text-center text-white/80">
              <p>Already have an account? {' '}
                <a href="/portals/parent/login" className="text-[#FFC107] hover:text-[#FFD54F] transition-colors">
                  Sign in
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