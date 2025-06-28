const Resume = () => {
  return (
    <section
      id="resume"
      className="h-screen flex flex-col justify-center items-center bg-white"
    >
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <iframe
        src="/Resume.pdf"
        className="w-full max-w-4xl h-[80vh] border-2 border-gray-300"
        title="Resume"
      />
    </section>
  );
};

export default Resume;
