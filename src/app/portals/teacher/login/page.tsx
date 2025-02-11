'use client';

import { motion } from 'framer-motion';
import LoginForm from '../../../../components/auth/LoginForm';
import NavBar from '../../../../components/layout/NavBar';
import Footer from '../../../../components/layout/Footer';

export default function TeacherPortalPage() {
  const handleSubmit = (data: any) => {
    console.log('Teacher login:', data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#034D27] to-[#023D1F]">
      <NavBar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-md mx-auto">
          <LoginForm portalType="teacher" onSubmit={handleSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  );
} 