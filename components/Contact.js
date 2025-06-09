import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is a dummy form handler since we don't have a real backend
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thanks for your message! I\'ll get back to you soon.'
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              Feel free to contact me for any work or suggestions below.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-primary-light dark:text-primary-dark w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a 
                    href="mailto:neel07sanghvi@gmail.com" 
                    className="text-lg font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    neel07sanghvi@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4">
                  <FaPhone className="text-primary-light dark:text-primary-dark w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <a 
                    href="tel:+918000189198" 
                    className="text-lg font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    +91 8000189198
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4">
                  <FaLinkedin className="text-primary-light dark:text-primary-dark w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/neelsanghvi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    linkedin.com/in/neelsanghvi
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 flex items-center justify-center mr-4">
                  <FaGithub className="text-primary-light dark:text-primary-dark w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                  <a 
                    href="https://github.com/neelsanghvi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary-light dark:hover:text-primary-dark transition-colors"
                  >
                    github.com/neelsanghvi
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Resume</h3>
              <p className="mb-4">You can view or download my resume from the link below:</p>
              <a 
                href="RESUME_LINK_PLACEHOLDER" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center"
              >
                View Resume
              </a>
            </div>
          </div>
          
          <div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
                
                {formStatus.submitted && (
                  <div className={`mt-4 p-3 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'}`}>
                    {formStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
