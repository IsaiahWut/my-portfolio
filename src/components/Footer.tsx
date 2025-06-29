import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-300 py-8 flex flex-col items-center space-y-4 text-center">
      <div className="flex justify-center space-x-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/isaiah-alcayde/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-blue-700 hover:text-blue-900 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/IsaiahWut"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-black hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
      </div>

      <a
        href="mailto:isaiahalcayde@gmail.com"
        className="text-gray-800 hover:text-blue-700 text-sm"
        aria-label="Email"
      >
        isaiahalcayde@gmail.com
      </a>

      <nav className="flex space-x-6 text-sm text-gray-700">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>

      <p className="text-xs text-gray-600 italic">
        &copy; {new Date().getFullYear()} Isaiah Alcayde. All rights reserved.
      </p>
    </footer>
  );
}
