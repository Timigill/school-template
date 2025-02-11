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
    setIsMenuOpen(false); // Close menu after click
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#023D1F]/95 backdrop-blur-sm z-50 border-b border-[#FFC107]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl md:text-2xl text-[#FFC107]">
            Chenab Group of Colleges
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-[#FFC107] hover:text-[#FFC107]/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current transition-transform"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-current transition-opacity"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-current transition-transform"
            />
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
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                className="absolute top-full left-0 right-0 bg-[#023D1F]/95 backdrop-blur-sm border-b border-[#FFC107]/20"
              >
                <motion.div 
                  className="container mx-auto px-4 py-4 flex flex-col space-y-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    href="/" 
                    className="text-white hover:text-[#FFC107] transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    href="/admissions" 
                    className="text-white hover:text-[#FFC107] transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link 
                    href="/academics" 
                    className="text-white hover:text-[#FFC107] transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Academics
                  </Link>
                  <Link 
                    href="/events" 
                    className="text-white hover:text-[#FFC107] transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events & News
                  </Link>
                  <a 
                    href="/#contact"
                    onClick={(e) => {
                      handleContactClick(e);
                      setIsMenuOpen(false);
                    }}
                    className="text-white hover:text-[#FFC107] transition-colors duration-300 py-2 cursor-pointer"
                  >
                    Contact
                  </a>
                </motion.div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
