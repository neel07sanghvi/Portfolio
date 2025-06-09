export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-6">
              I'm a Full Stack Developer with experience in building modern web and mobile applications. I specialize in React, Next.js, Node.js, and related technologies.
            </p>
            <p className="text-lg mb-6">
              With a Bachelor's degree in Information Technology from Gujarat Technological University, I've worked on diverse projects ranging from enterprise analytics dashboards to real-time tracking systems and LLM-based ticket categorization.
            </p>
            <p className="text-lg mb-6">
              I enjoy solving complex problems and creating efficient, scalable solutions that deliver exceptional user experiences. When I'm not coding, I participate in competitive programming and contribute to technical communities.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">Education</h3>
              <p className="font-medium">Bachelor of Technology in Information Technology</p>
              <p className="text-gray-600 dark:text-gray-400">Gujarat Technological University | 2019-2023</p>
              <p className="text-gray-600 dark:text-gray-400">CGPA: 9.11</p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-2 text-primary-light dark:text-primary-dark">Achievements</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                <li>1st Place in ACM International Collegiate Programming Contest (ICPC) at university level</li>
                <li>Advanced to Regional Finals in ICPC</li>
                <li>Ranked 114th globally among 15,000+ participants on CodeChef</li>
                <li>Published technical article on Competitive Programming for GeeksForGeeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
