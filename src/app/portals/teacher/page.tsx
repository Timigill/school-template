'use client';

import { motion } from 'framer-motion';
import LoginForm from '../../../components/auth/LoginForm';
import NavBar from '../../../components/layout/NavBar';
import Footer from '../../../components/layout/Footer';

export default function TeacherPortalPage() {
  const handleSubmit = (data: any) => {
    console.log('Teacher login:', data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Teacher Portal
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Welcome Section */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-[#FFC107] mb-6">Welcome, Teacher</h2>
              <p className="text-white/80 mb-4">
                Access your teaching dashboard to manage classes, grades, and student information.
              </p>
              <ul className="space-y-3 text-white/80">
                <li>• Manage your class schedule</li>
                <li>• Update student grades</li>
                <li>• Access teaching resources</li>
                <li>• Communicate with parents</li>
                <li>• View announcements</li>
              </ul>
            </div>

            {/* Login Form */}
            <div>
              <LoginForm portalType="teacher" onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 