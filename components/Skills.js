import { CERTIFICATE_LINKS } from '../lib/utils/constants';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Javascript', 'Typescript', 'C', 'C++', 'Java', 'Python', 'SQL']
    },
    {
      category: 'Frontend',
      skills: ['ReactJs', 'NextJs', 'React Native', 'Redux', 'Recoil', 'Zustand', 'TailwindCSS', 'MUI']
    },
    {
      category: 'Backend',
      skills: ['NodeJs', 'NestJs', 'ExpressJs', 'WebSocket']
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'Prisma ORM', 'MySQL']
    },
    {
      category: 'DevOps',
      skills: ['Docker', 'CI/CD with Github Actions', 'AWS', 'Cloudflare Workers']
    },
    {
      category: 'Other Tools & Technologies',
      skills: ['LLMs', 'Redis', 'Kafka', 'Serverless Functions and Architecture', 'WebRTC', 'Supabase']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Certificates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">HackerRank</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={CERTIFICATE_LINKS.HACKERRANK_FRONTEND} 
                    className="text-primary-light dark:text-primary-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontend Developer
                  </a>
                </li>
                <li>
                  <a 
                    href={CERTIFICATE_LINKS.HACKERRANK_PROBLEM_SOLVING} 
                    className="text-primary-light dark:text-primary-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Problem Solving (Intermediate)
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold mb-2">Qwiklabs</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={CERTIFICATE_LINKS.QWIKLABS_DEVOPS} 
                    className="text-primary-light dark:text-primary-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevOps Essentials
                  </a>
                </li>
                <li>
                  <a 
                    href={CERTIFICATE_LINKS.QWIKLABS_CLOUD} 
                    className="text-primary-light dark:text-primary-dark hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Cloud Essentials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}