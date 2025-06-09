import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PROJECT_LINKS } from '../lib/utils/constants';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Event Management System',
      description: 'A full-stack event ticketing solution with secure payment processing and real-time seat selection, providing functionality comparable to BookMyShow.',
      details: 'Introduced a monorepo architecture using Turborepo with Docker containerization and integrated NextAuth for secure authentication with multiple sign-in options.',
      technologies: ['Turborepo', 'NextJs', 'Typescript', 'Tailwind CSS', 'NestJs', 'Prisma', 'PostgreSQL', 'Docker'],
      sourceCode: PROJECT_LINKS.EVENT_MANAGEMENT,
      demoLink: null,
      image: '/images/project-event.jpg'
    },
    {
      id: 2,
      title: 'Sa Re Ga Ma',
      description: 'A comprehensive music bot with Play, Pause, Resume, Skip, and Stop commands for seamless music playbook control.',
      details: 'Utilized YouTube\'s algorithm and Puppeteer framework within NodeJs to create an automated recommendation system for enhanced user experience, resulting in a 10x user growth.',
      technologies: ['NodeJs', 'Puppeteer'],
      sourceCode: PROJECT_LINKS.SAREGAMA,
      demoLink: null,
      image: '/images/project-music.jpg'
    },
    {
      id: 3,
      title: 'Covid Help',
      description: 'Led a web application to assist Covid-19 affected individuals with posting, commenting, and location-based filtering to connect users with support resources.',
      details: 'Created an intuitive interface providing seamless access to emergency contact information for government hospitals across India, supporting hundreds of users.',
      technologies: ['ReactJs', 'NodeJs', 'ExpressJs', 'SCSS', 'MongoDB'],
      sourceCode: PROJECT_LINKS.COVID_HELP,
      demoLink: null,
      image: '/images/project-covid.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-8 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Projects</h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <div className="card overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark opacity-90 flex items-center justify-center text-white text-2xl font-bold">
                    {project.title}
                  </div>
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.details}</p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 px-6 pb-6">
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <FaGithub className="mr-2" />
                      Source Code
                    </a>
                  )}

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-light dark:text-primary-dark hover:underline"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}