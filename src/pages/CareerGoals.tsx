const CareerGoals = () => {
  return (
    <section
      id="career-goals"
      className="min-h-screen bg-gray-100 px-4 py-16 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
        Career Goals
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 w-full max-w-6xl">
        <div className="border-4 border-blue-400 rounded-lg p-6 sm:p-8 shadow-md flex flex-col justify-center items-center text-center w-full">
          <p className="text-lg text-gray-700 leading-relaxed">
            I’m passionate about using technology to build meaningful,
            user-centered products—especially in areas like mental health,
            productivity, and accessibility. In the short term, I’m focused on
            deepening my skills in full-stack development with React, Next.js
            and modern AI integrations such as Gemini.
            <br />
            <br />
            My long-term goal is to become a lead engineer working on products
            that drive positive social impact. I aspire to be part of
            collaborative, mission-driven teams that prioritize inclusive
            design, clean architecture, and intuitive user experiences.
            <br />
            <br />
            I strongly value user-centric design, ethical development, and
            responsible use of emerging technologies—especially as we navigate a
            future where the boundaries between innovation, privacy, and
            security are increasingly blurred.
            <br />
            <br />
            I strive to create meaningful projects that not only make a positive
            impact on people’s lives but also intellectually challenge and
            motivate me. My goal is to build solutions that are both purposeful
            and personally fulfilling.
            <br />
            <br />
            Ultimately, I want to build tools that not only solve real-world
            problems, but also empower and uplift the people who use them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;
