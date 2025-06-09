import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS, RESUME_LINK } from '../lib/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold text-primary-light dark:text-primary-dark">Neel Sanghvi</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href={SOCIAL_LINKS.LINKEDIN} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href={SOCIAL_LINKS.GITHUB} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href={SOCIAL_LINKS.EMAIL} 
              className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Neel Sanghvi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}