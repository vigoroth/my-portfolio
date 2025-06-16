// app/projects/[slug]/page.js
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';

// --- 1. ICON IMPORTS (Corrected) ---
import { 
  FaPython, FaReact, FaDocker, FaBrain 
} from 'react-icons/fa';
import { 
  SiScikitlearn, SiPandas, SiFastapi, SiPostgresql 
} from 'react-icons/si';


// --- 2. ICON MAP (Corrected) ---
const techIconMap = {
  'Python': <FaPython />,
  'React': <FaReact />,
  'Docker': <FaDocker />,
  'Scikit-learn': <SiScikitlearn />,
  'Pandas': <SiPandas />,
  'FastAPI': <SiFastapi />,
  'XGBoost': <FaBrain />,
  'PostgreSQL': <SiPostgresql />,
};

// --- 3. FIX FOR Next.js 'params' ERROR ---
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// --- Helper function to get project data ---
function getProjectData(slug) {
  return projects.find(p => p.slug === slug);
}


// --- THE MAIN PAGE COMPONENT (with Dark Theme) ---
export default function ProjectPage({ params }) {
  const project = getProjectData(params.slug);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-100">Project Not Found</h1>
        <Link href="/" className="text-[#34D399] hover:underline mt-4 inline-block">
          &larr; Go Back Home
        </Link>
      </div>
    );
  }

  return (
    // Updated background
    <div className="bg-[#111111] min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-5/12">
            <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden bg-gray-800">
              {project.mainImage && project.mainImage.trim() !== '' ? (
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  [No Image Provided]
                </div>
              )}
            </div>
          </div>

          <div className="md:w-7/12">
            {/* Updated text colors */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100">{project.title}</h1>
            <p className="text-lg text-gray-400 mt-2">{project.description}</p>
            
            {/* Updated Tech Stack Section */}
            {project.techStack && project.techStack.length > 0 && (
              <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-100 mb-4">Tech Stack</h2>
                  <div className="flex flex-wrap gap-4">
                      {project.techStack.map(tech => {
                          const IconComponent = techIconMap[tech];
                          return (
                              <div key={tech} className="flex items-center gap-2 bg-gray-700 px-3 py-1 rounded-full">
                                  {IconComponent && <span className="text-[#34D399] text-xl">{IconComponent}</span>}
                                  <span className="font-semibold text-sm text-gray-200">{tech}</span>
                              </div>
                          );
                      })}
                  </div>
              </div>
            )}

            {/* Updated Project Overview Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-100 mb-4">Project Overview</h2>
                <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
                  <p>{project.fullDescription || "No description provided."}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Updated Buttons Section */}
        <div className="text-center mt-16">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#34D399] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block mr-4">
                  View on GitHub
              </a>
            )}
            <Link href="/portfolio" className="bg-transparent text-gray-300 font-bold py-3 px-8 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 inline-block">
                &larr; Back to All Projects
            </Link>
        </div>
      </div>
    </div>
  );
}