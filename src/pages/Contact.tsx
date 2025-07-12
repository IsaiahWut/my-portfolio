import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center max-w-6xl w-full">
        Contact
      </h2>

      {/* Mini Contact Card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 text-center mb-16">
        <h3 className="text-2xl font-semibold mb-2">Isaiah Alcayde</h3>
        <p className="text-gray-700 mb-1">📍 San Francisco, CA</p>
        <p className="text-gray-700 mb-1">
          📧{' '}
          <a
            href="mailto:isaiahalcayde@gmail.com"
            className="text-blue-600 hover:underline"
          >
            isaiahalcayde@gmail.com
          </a>
        </p>
        <a
          href="mailto:isaiahalcayde@gmail.com"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send a Message
        </a>
      </div>

      {/* Contact Icons and GitHub Stats */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:space-x-16 w-full max-w-6xl">
        {/* Left side: LinkedIn and GitHub icons stacked */}
        <div className="flex flex-row md:flex-col items-center md:items-center space-x-10 md:space-x-0 md:space-y-8 mb-12 md:mb-0 flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/isaiah-alcayde/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-blue-700 hover:text-blue-900 text-6xl md:text-8xl transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/IsaiahWut"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-800 hover:text-black text-6xl md:text-7xl transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Right side: GitHub stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
          <img
            src="https://github-readme-stats.vercel.app/api?username=IsaiahWut&theme=rose_pine&hide_border=false&include_all_commits=true&count_private=false"
            alt="GitHub Stats"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://nirzak-streak-stats.vercel.app/?user=IsaiahWut&theme=rose_pine&hide_border=false"
            alt="GitHub Streak Stats"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=IsaiahWut&theme=rose_pine&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            alt="GitHub Top Languages"
            className="rounded-lg shadow-lg w-full"
          />
          <img
            src="https://github-contributor-stats.vercel.app/api?username=IsaiahWut&limit=5&theme=dark&combine_all_yearly_contributions=true"
            alt="GitHub Contributor Stats"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
