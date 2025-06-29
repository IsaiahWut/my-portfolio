import { FaGraduationCap, FaUser, FaToolbox } from 'react-icons/fa';
import { FaComputer, FaFileCode } from 'react-icons/fa6';
import { LuBlocks } from 'react-icons/lu';
import { PiPipeWrench } from 'react-icons/pi';
import UCR from '../assets/UCRLogo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-gray-100 px-4 sm:px-6 md:px-12 py-10 sm:py-12 md:py-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center max-w-6xl w-full">
        About Me
      </h2>

      {/* Container for boxes */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        {/* Left column with Education and About Me */}
        <div className="flex flex-col space-y-10 w-full md:w-1/2">
          {/* Education box */}
          <div className="border-4 border-blue-400 rounded-lg p-6 sm:p-8 shadow-md flex flex-col justify-center items-center text-center w-full">
            <div className="flex items-center space-x-3 text-4xl sm:text-5xl font-semibold text-blue-600">
              <FaGraduationCap />
              <span>Education</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6 w-full max-w-xl">
              <div className="border border-blue-600 rounded p-2 flex items-center justify-center w-40 h-auto flex-shrink-0">
                <img
                  src={UCR}
                  alt="UCR Logo"
                  className="w-36 h-auto object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="text-lg sm:text-xl font-medium">
                  University of California, Riverside
                </div>
                <div className="mt-2 text-md sm:text-lg font-medium">
                  Bachelor's in Robotics
                </div>
                <div className="text-md sm:text-lg font-medium">
                  2023 - 2027
                </div>
              </div>
            </div>
          </div>

          {/* About Me box */}
          <div className="border-4 border-blue-400 rounded-lg p-6 sm:p-8 shadow-md flex flex-col justify-center items-center text-center w-full">
            <div className="flex items-center space-x-3 text-4xl sm:text-5xl font-semibold text-blue-600 mb-2">
              <FaUser />
              <span>Who Am I?</span>
            </div>
            <p className="text-base sm:text-lg mt-4 max-w-lg">
              Hello! I'm Isaiah, a robotics student learning more about computer
              engineering, mechanical engineering, and electrical engineering. I
              am fond of computer science and making useful and impactful
              projects. Outside of engineering, I enjoy DJing 🎧 and working out
              💪.
            </p>
          </div>
        </div>

        {/* Technical Skills box */}
        <div className="border-4 border-blue-400 rounded-lg p-6 sm:p-8 shadow-md flex flex-col justify-center items-center text-center w-full md:w-1/2 max-w-xl">
          {/* Title */}
          <div className="flex items-center space-x-3 text-4xl sm:text-5xl font-semibold text-blue-600 mb-6">
            <FaComputer />
            <span>Technical Skills</span>
          </div>

          {/* Content aligned to left */}
          <div className="flex flex-col w-full items-start text-left space-y-6 text-base sm:text-xl">
            {/* Languages */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-2">
                <div className="border border-blue-600 rounded p-1 flex items-center justify-center w-6 h-6">
                  <FaFileCode />
                </div>
                <span>Languages</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-8">
                {['Python', 'C++', 'TypeScript'].map((lang) => (
                  <div
                    key={lang}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-2">
                <div className="border border-blue-600 rounded p-1 flex items-center justify-center w-6 h-6">
                  <LuBlocks />
                </div>
                <span>Frameworks</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-8">
                {['React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((fw) => (
                  <div
                    key={fw}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {fw}
                  </div>
                ))}
              </div>
            </div>

            {/* Developer Tools */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-2">
                <div className="border border-blue-600 rounded p-1 flex items-center justify-center w-6 h-6">
                  <PiPipeWrench />
                </div>
                <span>Developer Tools</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-8">
                {['Git', 'GitHub', 'AgentStack', 'Vercel'].map((tool) => (
                  <div
                    key={tool}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Tools/Software */}
            <div className="flex flex-col">
              <div className="flex items-center space-x-3 mb-2">
                <div className="border border-blue-600 rounded p-1 flex items-center justify-center w-6 h-6">
                  <FaToolbox />
                </div>
                <span>Other Tools/Software</span>
              </div>
              <div className="flex flex-wrap gap-2 ml-8">
                {['SolidWorks', 'VSCode'].map((soft) => (
                  <div
                    key={soft}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm shadow-sm"
                  >
                    {soft}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
