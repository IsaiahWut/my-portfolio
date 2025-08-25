import { FaCode, FaEnvelopeOpenText, FaFireAlt, FaRobot } from 'react-icons/fa';
import { FaDraftingCompass } from 'react-icons/fa';

const projects = [
  {
    title: 'Task Organizer',
    description: 'A C++ task manager with filtering and automated unit tests.',
    tech: ['C++', 'Google Test'],
    github: 'https://github.com/IsaiahWut/CS100-TaskOrganizer',
    icon: <FaCode className="text-3xl text-blue-500" />,
  },
  {
    title: 'Gmail Agent Organizer',
    description:
      'Built an AI email organizer using Python, AgentStack, and Gmail API to auto-label, categorize, and reply to emails.',
    tech: ['Python', 'AgentStack', 'Gemini', 'Gmail API'],
    github: 'https://github.com/IsaiahWut/Gmail-Organizer-Agent',
    icon: <FaEnvelopeOpenText className="text-3xl text-red-500" />,
  },
  {
    title: 'Wildfire Risk Assessor',
    description:
      'Co-developed a web app achieving 85% accuracy in wildfire risk assessment using a custom algorithm analyzing 10+ weather parameters.',
    tech: ['Python', 'Flask', 'Gemini API', 'Google Geocoding API', 'HTML/CSS'],
    github: 'https://github.com/IsaiahWut/WildfireRiskAssessor',
    icon: <FaFireAlt className="text-3xl text-orange-500" />,
  },
  {
    title: 'Web Scraping and Automation Bot',
    description:
      'Built an automation bot using Selenium to auto-fill online forms, reducing manual effort and wait time by 80%.',
    tech: ['Python', 'Selenium'],
    github: 'https://github.com/IsaiahWut/Basic-Needs-WebForm-Filler',
    icon: <FaRobot className="text-3xl text-purple-500" />,
  },
  {
    title: 'Engineering Graphics and Design Project',
    description:
      'Modeled an inclusive playground carousel in SolidWorks with a focus on accessibility and manufacturability.',
    tech: ['SolidWorks'],
    github: 'https://github.com/IsaiahWut/ME9-Design-Project.git',
    icon: <FaDraftingCompass className="text-3xl text-gray-400" />,
  },
  {
    title: 'Current Project - Lum App',
    description:
      'Built "Lum", a Next.js web app recommending date ideas, gifts, and messages using user preferences, location, and Gemini AI integration, deployed on Vercel with Firebase backend.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Gemini API', 'Vercel'],
    github: 'https://github.com/IsaiahWut/lum-app.git',
    icon: <FaCode className="text-3xl text-green-500" />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center max-w-6xl w-full">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 text-left"
            >
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-2xl font-semibold text-blue-600">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
