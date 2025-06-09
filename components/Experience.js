import { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Neomenta Ltd.',
      position: 'Software Development Engineer',
      date: '02/2023 – 03/2025',
      location: 'Ahmedabad, India',
      technologies: 'ReactJs, Typescript, Redux, MUI, AWS, LLMs, MMKV, SQLite',
      responsibilities: [
        'Developed modular UI component library using design patterns and launched Template Store, reducing manual development effort by 50% and ensuring interface consistency.',
        'Implemented a WebSocket Pub/Sub for real-time messaging and collaborative editing with conflict resolution, ensuring seamless data sync and preventing data loss.',
        'Developed real-time tracking system using Google Maps API to monitor sales personnel locations and built enterprise analytics dashboard with React ChartJS to visualize performance metrics and user engagement data.',
        'Enhanced React Native app performance with MMKV and SQLite for efficient token management, caching, and offline chat functionality, improving data persistence and reducing application load times.',
        'Optimized UI performance using Web Vitals and replaced React Native Paper with a custom component, achieving 25% faster execution and reducing API calls for improved user experience.',
        'Built an LLM-based ticket categorization system using Amazon Bedrock (Sonnet 4 model), AWS Lambda, and S3, automating triage of 300+ monthly support tickets across UI, backend, and database teams.',
        'Achieved 99% classification accuracy, reducing manual analysis time by 600 minutes/month and minimizing routing errors through a self-improving feedback loop.',
        'Integrated AWS SES for auto info requests and CloudWatch for data quality metrics to improve ticket input and inform code enhancements.'
      ]
    },
    {
      id: 2,
      company: 'ShopBonanza',
      position: 'Frontend Developer Intern',
      date: '05/2022 – 07/2022',
      location: 'Remote, India',
      technologies: 'NextJs, Tailwind CSS',
      responsibilities: [
        'Designed a responsive landing page using NextJs and implemented secure user authentication with NextAuth, streamlining access management and enhancing user experience.',
        'Created an efficient cart system utilizing React Context API to manage user wishlist data, enhancing the shopping experience and product selection functionality.',
        'Optimized website performance and structure, achieving a 40% improvement in Search Engine Optimization (SEO) and visibility metrics.',
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-8 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Professional Experience</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company tabs for larger screens */}
          <div className="hidden lg:flex flex-col space-y-2 min-w-[200px]">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`text-left px-4 py-3 rounded-md transition-colors ${activeTab === exp.id ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                <p className="font-medium">{exp.company}</p>
                <p className="text-sm">{exp.position}</p>
              </button>
            ))}
          </div>

          {/* Company tabs for mobile screens */}
          <div className="lg:hidden flex overflow-x-auto pb-2 mb-4 gap-2">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-md transition-colors ${activeTab === exp.id ? 'bg-primary-light dark:bg-primary-dark text-white' : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Experience details */}
          <div className="flex-1">
            {experiences.map((exp) => (
              <div key={exp.id} className={`${activeTab === exp.id ? 'block' : 'hidden'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                  <p className="text-xl text-primary-light dark:text-primary-dark font-semibold mb-4">{exp.company}</p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaBriefcase className="mr-2" />
                      <span>{exp.technologies}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, index) => (
                      <li key={index} className="flex">
                        <span className="text-primary-light dark:text-primary-dark mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
