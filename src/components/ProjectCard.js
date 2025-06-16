// src/components/ProjectCard.js
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1C1C1E] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 group flex flex-col">
      
      {/* --- UPDATED: The Image is now wrapped in a Link --- */}
      <Link href={`/projects/${project.slug}`} aria-label={`View case study for ${project.title}`}>
        {/* The 'cursor-pointer' class gives a visual cue that it's clickable */}
        <div className="relative w-full h-48 bg-gray-800 cursor-pointer">
          {project.mainImage && project.mainImage.trim() !== '' ? (
            <Image
              src={project.mainImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              [Project Image]
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack && project.techStack.slice(0, 4).map(tech => (
              <span key={tech} className="bg-gray-700 text-gray-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="font-semibold text-[#34D399] hover:text-green-400 transition-colors duration-300"
          >
            View Case Study &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;