'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isContactActive, setIsContactActive] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Academics',
      path: '/academics',
      dropdown: [
        { title: 'Programs', path: '/academics/programs' },
        { title: 'Faculty', path: '/academics/faculty' },
        { title: 'Research', path: '/academics/research' },
        { title: 'Library', path: '/academics/library' },
      ]
    },
    {
      title: 'Admissions',
      path: '/admissions',
      dropdown: [
        { title: 'Apply Now', path: '/admissions/apply' },
        { title: 'Requirements', path: '/admissions/requirements' },
        { title: 'Scholarships', path: '/admissions/scholarships' },
        { title: 'FAQs', path: '/admissions/faqs' },
      ]
    },
    {
      title: 'Campus Life',
      path: '/campus-life',
      dropdown: [
        { title: 'Events', path: '/events' },
        { title: 'Student Clubs', path: '/campus-life#clubs' },
        { title: 'Sports', path: '/campus-life#sports' },
        { title: 'Housing', path: '/campus-life#housing' },
      ]
    },
    {
      title: 'Portals',
      path: '/portals',
      dropdown: [
        { title: 'Student Login', path: '/portals/student' },
        { title: 'Teacher Login', path: '/portals/teacher' },
        { title: 'Parent Portal', path: '/portals/parent' },
      ]
    },
    {
      title: 'Contact',
      path: '/contact',
    }
  ];

  useEffect(() => {
    // Remove the entire useEffect for contact section checking
  }, [pathname]);

  const handleContactClick = () => {
    setIsMenuOpen(false);
  };

  const handleDropdownClick = (path: string) => {
    router.push(path);
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };

  const isLinkActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#023D1F]/95 backdrop-blur-sm z-50 border-b border-[#FFC107]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl md:text-2xl text-[#FFC107]">
            Chenab Group of Colleges
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.path}
                  className={`${
                    isLinkActive(item.path) ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                  } transition-colors duration-300 py-2`}
                >
                  {item.title}
                  {item.dropdown && (
                    <span className="ml-1">▼</span>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-[#023D1F] border border-[#FFC107]/20 rounded-lg shadow-xl py-2 mt-2"
                  >
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <button
                        key={dropIndex}
                        onClick={() => handleDropdownClick(dropItem.path)}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-[#FFC107]/10 hover:text-[#FFC107] transition-colors duration-300"
                      >
                        {dropItem.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#FFC107]"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#FFC107]"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#FFC107]"
            />
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="absolute top-full left-0 right-0 bg-[#023D1F]/95 border-b border-[#FFC107]/20"
              >
                <div className="container mx-auto px-4 py-4">
                  {menuItems.map((item, index) => (
                    <div key={index} className="py-2">
                      <Link
                        href={item.path}
                        className={`${
                          isLinkActive(item.path) ? 'text-[#FFC107]' : 'text-white hover:text-[#FFC107]'
                        } transition-colors duration-300`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropItem, dropIndex) => (
                            <button
                              key={dropIndex}
                              onClick={() => handleDropdownClick(dropItem.path)}
                              className="block text-white/80 hover:text-[#FFC107] transition-colors duration-300"
                            >
                              {dropItem.title}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
} 