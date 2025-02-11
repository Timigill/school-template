'use client';

import { motion } from 'framer-motion';
import LoginForm from '../../../components/auth/LoginForm';
import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function ParentPortalPage() {
  const handleSubmit = (data: any) => {
    console.log('Parent login:', data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Parent Portal
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Welcome Section */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-[#FFC107] mb-6">Welcome, Parent</h2>
              <p className="text-white/80 mb-4">
                Stay connected with your child's academic journey through our parent portal.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• View academic progress</li>
                <li>• Track attendance records</li>
                <li>• Access fee statements</li>
                <li>• Communicate with teachers</li>
                <li>• View school announcements</li>
              </ul>
            </div>

            {/* Login Form */}
            <div>
              <LoginForm portalType="parent" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 