import React from 'react';

const Resume: React.FC = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-4 py-8"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center max-w-6xl w-full">
        Resume
      </h2>

      <div className="w-full max-w-4xl border-2 border-gray-300 rounded-md overflow-hidden shadow-lg">
        <iframe
          src={`${process.env.PUBLIC_URL}/Resume.pdf`}
          className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
          title="Resume"
        />
      </div>

      <p className="mt-4 text-center">
        Can't see the resume?{' '}
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open Resume in a new tab
        </a>
      </p>
    </section>
  );
};

export default Resume;
