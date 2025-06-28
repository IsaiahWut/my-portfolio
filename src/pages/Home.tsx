import React from 'react';
import me from '../assets/headshot.jpg';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex justify-center items-center bg-white px-6"
    >
      <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-24">
        <motion.div
          className="flex-col text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-blue-500">
            Hello, I am Isaiah Alcayde
          </h1>
          <p className="text-3xl mt-10 text-blue-700 font-medium">
            <Typewriter
              words={[
                'I build fun and useful projects',
                'I enjoy working out',
                'I collect retro video games',
                'I like to DJ and create mixes',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </motion.div>
        <motion.img
          src={me}
          alt="Professional headshot of me"
          className="w-96 h-96 object-cover rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Home;
