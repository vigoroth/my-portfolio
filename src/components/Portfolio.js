// src/components/Portfolio.js
import Link from 'next/link';
import { projects } from '../lib/projects'; 
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  // Get only the first 3 projects to feature on the main page
  const featuredProjects = projects.slice(0, 3);

  return (
    // UPDATED: Changed background to the primary dark color for consistency
    <section id="portfolio" className="bg-[#111111] py-20"> 
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Here are a few selected projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            href="/portfolio" 
            className="bg-[#34D399] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;