import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { RESUME_LINK } from '../lib/utils/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Experience', path: '/#experience' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800">
      <div className="container-custom py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500 dark:text-blue-400 hover:opacity-90 transition-opacity">
          NS.
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <a 
            href={RESUME_LINK} 
            target="_blank"
            className="btn-primary"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 py-4">
          <div className="container-custom">
            <ul className="space-y-4 font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="block hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a 
                  href={RESUME_LINK} 
                  target="_blank"
                  className="btn-primary inline-block mt-2"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}