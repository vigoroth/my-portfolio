// src/components/Skills.js
import { FaPython, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas, SiFastapi, SiPostgresql, SiTailwindcss } from 'react-icons/si';

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "Python", icon: <FaPython size={32} /> },
      { name: "SQL / PostgreSQL", icon: <SiPostgresql size={32} /> },
    ]
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "Scikit-learn", icon: <SiScikitlearn size={32} /> },
      { name: "Pandas", icon: <SiPandas size={32} /> },
      { name: "TensorFlow", icon: <SiTensorflow size={32} /> },
    ]
  },
  {
    title: "Backend & Frontend",
    skills: [
      { name: "FastAPI", icon: <SiFastapi size={32} /> },
      { name: "Next.js / React", icon: <FaReact size={32} /> },
      { name: "Node.js", icon: <FaNodeJs size={32} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={32} /> },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker size={32} /> },
      { name: "AWS", icon: <FaAws size={32} /> },
      { name: "Git", icon: <FaGitAlt size={32} /> },
    ]
  }
];

const Skills = () => {
  return (
    // 1. Updated section background
    <section id="skills" className="bg-[#111111] py-20">
      <div className="container mx-auto px-6">
        {/* 2. Updated title color */}
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category) => (
            // 3. Updated category card styles
            <div key={category.title} className="bg-[#1C1C1E] p-6 rounded-lg border border-gray-800">
              {/* 4. Updated category title color */}
              <h3 className="text-xl font-bold text-gray-100 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-2">
                    {/* 5. Updated icon color to accent green */}
                    <div className="text-[#34D399] text-2xl">{skill.icon}</div>
                    {/* 6. Updated skill name color */}
                    <p className="font-semibold text-sm text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;