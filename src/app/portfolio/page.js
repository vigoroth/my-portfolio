// app/portfolio/page.js

"use client"; 

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTechs = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      // Safety check for techStack
      if (project.techStack) {
        project.techStack.forEach(tech => techSet.add(tech));
      }
    });
    return ['All', ...Array.from(techSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(project => project.techStack && project.techStack.includes(activeFilter));
  }, [activeFilter]);

  
  return (
    // 1. Updated main background
    <div className="bg-[#111111] min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* 2. Updated header text colors */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100">All Projects</h1>
          <p className="text-lg text-gray-400 mt-2">
            A gallery of my work. Use the filters to sort by technology.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          
          <aside className="md:w-1/4 lg:w-1/5">
            {/* 3. Updated sidebar title color */}
            <h2 className="text-xl font-bold text-gray-100 mb-4">Filter by Tech</h2>
            <div className="flex flex-wrap md:flex-col gap-2">
              {allTechs.map(tech => (
                <button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  // 4. Updated filter button styles
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                    activeFilter === tech 
                      ? 'bg-[#34D399] text-black' 
                      : 'bg-[#1C1C1E] text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </aside>

          <div className="md:w-3/4 lg:w-4/5">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* The ProjectCard component is already styled for dark mode */}
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              // 5. Updated "No projects found" message styles
              <div className="text-center py-16 bg-[#1C1C1E] rounded-lg border border-gray-800">
                <p className="text-gray-400">No projects found for this technology.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* 6. Updated "Back" button style */}
        <div className="text-center mt-16">
          <Link href="/#home" className="bg-transparent text-gray-300 font-bold py-3 px-8 rounded-full border-2 border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-300 inline-block">
            &larr; Back to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
}