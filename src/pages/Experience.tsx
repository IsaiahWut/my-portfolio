import React from 'react';
import ACM from '../assets/ACM@UCR.png';
import KATI from '../assets/KatiSS.png';
import CSE from '../assets/CSEAISS.png';

type ExperienceItem = {
  date: string;
  title: string;
  location: string;
  description: string;
  description2: string;
  projects?: {
    name: string;
    liveUrl: string;
    url: string;
    image: string;
  }[];
};

const experiences: ExperienceItem[] = [
  {
    date: 'January 2025 - June 2025',
    title: 'ACM Web Developer',
    location: 'Riverside',
    description:
      'Collaborated with a 10+ developer team to build a responsive, informative website using modern frontend frameworks.',
    description2:
      'Contributed to two projects, resolved issues, and implemented enhancements for usability and design.',
    projects: [
      {
        name: 'UCR CSE-AI Resources Website',
        liveUrl: 'https://learnai.cs.ucr.edu/',
        url: 'https://github.com/acm-ucr/CSE-AI-resources',
        image: CSE,
      },
      {
        name: 'Katipunan PSO Website',
        liveUrl: 'https://katipunanpso.ucrhighlanders.org/',
        url: 'https://github.com/acm-ucr/katipunan-pso-website',
        image: KATI,
      },
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center bg-white px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center max-w-6xl w-full">
        Experience
      </h2>

      <div className="relative border-l-4 border-blue-500 pl-4 sm:pl-6 md:pl-8 w-full max-w-4xl py-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 sm:mb-16 relative last:mb-0">
            {/* Dot */}
            <div className="absolute -left-12 sm:-left-16 md:-left-20 top-1 w-5 sm:w-6 h-5 sm:h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

            {/* Timeline Content */}
            <time className="text-xs sm:text-sm text-gray-500">{exp.date}</time>

            {/* Title with Logo */}
            <div className="flex items-center gap-3 sm:gap-4 mt-2 mb-2">
              <img
                src={ACM}
                alt="ACM Logo"
                className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                {exp.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 italic">
              {exp.location}
            </p>
            <p className="text-sm sm:text-base text-gray-700 mt-1">
              {exp.description}
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              {exp.description2}
            </p>

            {/* Projects Grid */}
            {exp.projects && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                {exp.projects.map((project, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-[1.02]"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 sm:h-48 md:h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      {/* Project name linking to live site */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-semibold text-blue-600 hover:underline break-words"
                      >
                        {project.name}
                      </a>

                      {/* GitHub link below */}
                      <div className="mt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-xs sm:text-sm"
                        >
                          View on GitHub →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
