import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, RESUME_LINK } from '../lib/utils/constants';

export default function Hero() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-primary-light dark:text-primary-dark font-medium mb-4">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Neel Sanghvi
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
                Building modern web applications with a focus on clean code, performance, and user experience.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="/#contact" className="btn-primary">
                  Get in touch
                </a>
                <a href={RESUME_LINK} target="_blank" className="btn-outline">
                  View Resume
                </a>
              </div>
              
              <div className="flex space-x-6 mt-8">
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
                  href={SOCIAL_LINKS.LINKEDIN} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href={SOCIAL_LINKS.EMAIL}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  aria-label="Email"
                >
                  <FaEnvelope className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-light dark:border-primary-dark shadow-xl">
              {/* Replace with your profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark flex items-center justify-center text-white text-4xl font-bold">
                NS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}