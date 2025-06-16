// src/components/Education.js
import { FaGraduationCap } from 'react-icons/fa';

// --- 1. Your Education Data ---
const educationHistory = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Piraeus",
    years: "2021 - 2023",
    description: "Thesis Title: Object Detection Analysis in Basketball Game Videos"
  },
  {
    degree: "Bachelor of Science: Statistic and Insurance Science",
    institution: "University of Piraeus",
    years: "2012 - 2020",
    description: "Specialized in A/B testing, developing statistical models to drive data-driven decision-making and optimize business strategies."
  },
];


// --- 2. The Component (with corrected background) ---
const Education = () => {
  return (
    // UPDATED: Changed background back to the primary dark color
    <section id="education" className="bg-[#111111] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Education
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
          
          {educationHistory.map((edu, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              
              {/* UPDATED: Border color now matches the new background */}
              <div className="z-10 flex items-center justify-center bg-gray-800 text-white w-8 h-8 rounded-full border-4 border-[#111111]">
                  <FaGraduationCap />
              </div>

              <div className={`w-5/12 bg-[#1C1C1E] rounded-lg shadow-lg p-6 border border-gray-800 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <p className="text-[#34D399] font-semibold text-sm">{edu.years}</p>
                <h3 className="text-xl font-bold text-gray-100 mt-1">{edu.degree}</h3>
                <p className="text-lg text-gray-400 font-semibold">{edu.institution}</p>
                <p className="text-gray-300 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;