'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to handle contact link click
  const handleContactClick = (e) => {
    if (pathname !== '/') {
      // If not on homepage, navigate to homepage with contact hash
      window.location.href = '/#contact';
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#023D1F]/95 backdrop-blur-sm z-50 border-b border-[#FFC107]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl md:text-2xl text-[#FFC107]">
            Chenab Group of Colleges
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#FFC107] hover:text-[#8CC63F] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#FFC107] transition-colors duration-300">
              Home
            </Link>
            <Link href="/admissions" className="text-white hover:text-[#FFC107] transition-colors duration-300">
              Admissions
            </Link>
            <Link href="/academics" className="text-white hover:text-[#FFC107] transition-colors duration-300">
              Academics
            </Link>
            <Link href="/events" className="text-white hover:text-[#FFC107] transition-colors duration-300">
              Events & News
            </Link>
            <a 
              href="/#contact" 
              onClick={handleContactClick}
              className="text-white hover:text-[#FFC107] transition-colors duration-300 cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-full left-0 right-0 bg-[#023D1F]/95 backdrop-blur-sm"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col space-y-4">
                    <Link href="/" className="text-white hover:text-[#FFC107] transition-colors duration-300">
                      Home
                    </Link>
                    <Link href="/admissions" className="text-white hover:text-[#FFC107] transition-colors duration-300">
                      Admissions
                    </Link>
                    <Link href="/academics" className="text-white hover:text-[#FFC107] transition-colors duration-300">
                      Academics
                    </Link>
                    <Link href="/events" className="text-white hover:text-[#FFC107] transition-colors duration-300">
                      Events & News
                    </Link>
                    <a 
                      href="/#contact"
                      onClick={handleContactClick}
                      className="text-white hover:text-[#FFC107] transition-colors duration-300 cursor-pointer"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
