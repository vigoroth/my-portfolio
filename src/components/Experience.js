// src/components/Experience.js
import { 
  FaBriefcase, 
  FaBullseye,
  FaChartBar,
  FaUsers,
  FaCode
} from 'react-icons/fa';

// --- 1. Your updated Experience Data ---
const experiences = [
  {
    year: "2023 - Present",
    title: "CRM Data Scientist",
    company: "Elpen Pharma",
    description: [
      { text: "Analyzing sales and market data to discover insights and improve business strategies.", icon: 'bullseye' },
      { text: "Developing dashboards, reports, and bonus systems using historical data.", icon: 'chart' },
    ]
  },
  {
    year: "2022 - 2023",
    title: "Data Analyst",
    company: "IQVIA",
    description: [
      { text: "Conducted data analysis and reporting for healthcare clients, focusing on market trends and patient outcomes.", icon: 'chart' },
      { text: "Collaborated with cross-functional teams to implement data-driven solutions.", icon: 'users' },
    ]
  },
  {
    year: "2020 - 2021",
    title: "ERP Data Analyst",
    company: "Syscode Zougri & Co",
    description: [
      { text: "Applied in-depth knowledge of application components and query tools to streamline businessprocesses and achieve key performance objectives.", icon: 'users' },
      { text: "Collaborated with cross-functional teams to identify and implement process improvements,increasing operational efficiency by 20%.", icon: 'bullseye' },
    ]
  },
];

// --- 2. Icon Map ---
const bulletIconMap = {
  bullseye: <FaBullseye />,
  chart: <FaChartBar />,
  users: <FaUsers />,
  code: <FaCode />,
};


// --- 3. The Component (with Dark Theme) ---
const Experience = () => {
  return (
    // Updated section background
    <section id="experience" className="bg-[#111111] py-20">
      <div className="container mx-auto px-6">
        {/* Updated title color */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Career Journey
        </h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Updated timeline bar color */}
          <div className="absolute left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              
              {/* This node style already works well with a dark theme */}
              <div className="z-10 flex items-center justify-center bg-gray-800 text-white w-8 h-8 rounded-full border-4 border-[#111111]">
                  <FaBriefcase />
              </div>

              {/* Updated content card styles */}
              <div className={`w-5/12 bg-[#1C1C1E] rounded-lg shadow-lg p-6 border border-gray-800 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                {/* Updated text colors */}
                <p className="text-[#34D399] font-semibold text-sm">{exp.year}</p>
                <h3 className="text-xl font-bold text-gray-100 mt-1">{exp.title}</h3>
                <p className="text-lg text-gray-400 font-semibold">{exp.company}</p>
                
                <ul className={`mt-4 space-y-2`}>
                  {exp.description && exp.description.map((point, i) => (
                    <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                      <span className="text-[#34D399] mt-1">{bulletIconMap[point.icon]}</span>
                      <span className="text-gray-300">{point.text}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;