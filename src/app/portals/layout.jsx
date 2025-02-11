'use client';

import { motion } from 'framer-motion';
import NavBar from '../../components/layout/NavBar';

export default function PortalLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#034D27]">
      <NavBar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
} 