// src/components/Contact.js
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="bg-[#111111] text-gray-300 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-2">Get In Touch</h2>
        <p className="text-center text-gray-400 mb-10">
          Have a question or want to work together?
        </p>
        
        <div className="flex flex-col md:flex-row justify-between gap-16">

          <div className="md:w-1/2">
            <form 
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              {/* === THIS IS THE MOST IMPORTANT LINE === */}
              <input type="hidden" name="access_key" value="02565773-ceba-46d5-8972-32b7e5a7b954" /> 
              
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-400">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-[#1C1C1E] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399]" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-400">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-[#1C1C1E] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399]" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-400">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4" 
                  className="w-full px-3 py-2 bg-[#1C1C1E] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34D399]"></textarea>
              </div>
              <button type="submit" className="bg-[#34D399] text-black font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#34D399]" size={20}/>
                <span>nikoskantiotis@outlook.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#34D399]" size={20}/>
                <span>+30 (697) 6774272</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="font-semibold mb-3 text-gray-100">Find me on</h4>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="hover:text-[#34D399] transition-colors"><FaLinkedin size={24} /></a>
                <a href="#" aria-label="GitHub" className="hover:text-[#34D399] transition-colors"><FaGithub size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-20 pt-6 text-center text-gray-500 text-sm">
        <p>Copyright © {new Date().getFullYear()} Kantiotis Nick. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
