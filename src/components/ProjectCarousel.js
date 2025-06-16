// src/components/ProjectCarousel.js
"use client";

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ProjectCard from './ProjectCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectCarousel = ({ projects }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {projects.map(project => (
            <div className="embla__slide p-1" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Buttons */}
      <button
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        onClick={scrollPrev}
        aria-label="Previous Project"
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm text-gray-700 hover:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        onClick={scrollNext}
        aria-label="Next Project"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProjectCarousel;