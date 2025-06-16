// src/components/Hero.js
"use client"; 

// 1. We now need useState to manage visibility
import { useState } from 'react'; 
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin , FaGithub} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // 2. State to control when the buttons appear
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section id="home" className="bg-[#111111] py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2 text-center md:text-left">
          
          <TypeAnimation
            sequence={[
              'Kantiotis Nick',
              2000,
            ]}
            wrapper="h1"
            speed={60}
            className="text-5xl md:text-7xl font-bold text-gray-100"
            repeat={0}
          />
          
          <TypeAnimation
            sequence={[
              600,
              'Data Scientist',
              150,
              // 3. After typing is done, this function runs
              () => {
                setShowButtons(true);
              },
            ]}
            wrapper="h2"
            speed={60}
            className="text-2xl md:text-3xl text-gray-400 mt-2"
            repeat={0}
            // 4. This prop hides the cursor after the animation finishes
            cursor={false}
          />


          {/* 5. Buttons and Social Links are now wrapped in a conditional container */}
          {showButtons && (
            <div className="animate-fade-in">
              {/* Main Buttons Section */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href="Kantiotis_Nikolaos_CV_2025.pdf"
                  download
                  className="bg-[#34D399] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-center"
                >
                  Download CV
                </a>
                <a 
                  href="https://dione.lib.unipi.gr/xmlui/handle/unipi/17827"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent text-[#34D399] font-bold py-3 px-8 rounded-full border-2 bg-[#34D399] hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 text-center"
                >
                  View Master Thesis
                </a>
              </div>

              {/* Social Links Section */}
              <div className="mt-8 flex justify-center md:justify-start items-center gap-6">
                <a href="https://www.facebook.com/nikos.kantiotis.14" target="_blank" aria-label="facebook" className="text-gray-400 hover:text-[#34D399] transition-colors duration-300">
                  <FaFacebook size={28} />
                </a>
                <a href="https://www.instagram.com/nikosknts/" target="_blank" aria-label="Instagram" className="text-gray-400 hover:text-[#34D399] transition-colors duration-300">
                  <FaInstagram size={28} />
                </a>
                <a href="https://www.linkedin.com/in/nick-kantiotis/" target="_blank" aria-label="Linkedin" className="text-gray-400 hover:text-[#34D399] transition-colors duration-300">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://github.com/vigoroth" target="_blank" aria-label="Linkedin" className="text-gray-400 hover:text-[#34D399] transition-colors duration-300">
                  <FaGithub size={28} />
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
          <Image
            src="/images/test.png"
            alt="kantiotis Nick"
            width={800}
            height={1200}
            priority
            className="w-full h-auto max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
