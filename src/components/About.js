// src/components/About.js
import Image from 'next/image';
import { FaBriefcase, FaGraduationCap, FaLightbulb, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-[#111111] py-20">
      <div className="container mx-auto px-6">
        
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-16">

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="/images/test2.jpg"
                alt="Your Name"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-[#34D399] shadow-lg"
              />
            </div>
          </div>

          <div className="md:w-2/3">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#34D399] mt-1 mr-4"><FaBriefcase size={20} /></span>
                <p className="text-gray-300">
                  As a <strong className="font-semibold text-gray-100">Data Analyst at Elpen Pharma</strong>, I specialize in bridging the gap between complex data and clear business strategy.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#34D399] mt-1 mr-4"><FaGraduationCap size={20} /></span>
                <p className="text-gray-300">
                  {/* CORRECTED: Replaced the apostrophe in "Bachelor's" */}
                  My academic background includes a <strong className="font-semibold text-gray-100">Master&apos;s in Computer Science</strong> and a <strong className="font-semibold text-gray-100">Bachelor&apos;s in Statistics & Insurance Science</strong>, providing a robust analytical and technical skill set.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#34D399] mt-1 mr-4"><FaLightbulb size={20} /></span>
                <p className="text-gray-300">
                  I thrive in environments where I can leverage statistical modeling and <strong className="font-semibold text-gray-100">machine learning</strong> to solve challenging, real-world problems.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-[#34D399] mt-1 mr-4"><FaLaptopCode size={20} /></span>
                <p className="text-gray-300">
                  Driven by a passion for uncovering the stories hidden within data and using them to create <strong className="font-semibold text-gray-100">impactful results</strong>.
                </p>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="#portfolio" 
                className="bg-transparent text-gray-300 font-bold py-3 px-8 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
