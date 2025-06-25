import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-blue-300 py-8 flex justify-center space-x-6 text-3xl">
      <a
        href="https://www.linkedin.com/in/isaiah-alcayde/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-blue-700" />
      </a>
      <a
        href="https://github.com/IsaiahWut"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className="text-black" />
      </a>
    </div>
  );
}
