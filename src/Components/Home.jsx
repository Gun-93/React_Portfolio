import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white">
      <img
        src="/bgg.jpeg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"/>
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 flex flex-col items-center justify-start h-full px-6 pt-40">

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 flex justify-center">
          <div className="w-48 h-48 sm:w-72 sm:h-72 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="/image.jpg"
              alt="Your Profile"
              className="w-full h-full object-cover"/>
          </div>
        </motion.div>

        <div className="text-center max-w-xl">
          <h1 className="text-2xl sm:text-3xl font-bold">
            <Typewriter
              words={['Gun Keshri', 'Frontend Developer', 'ML Enthusiast']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}/>
          </h1>

          <p className="text-base sm:text-lg mt-2">
            3rd Year Student &nbsp; || &nbsp; B-Tech &nbsp; || &nbsp; CSE'26
            &nbsp; || &nbsp; Frontend Developer || Machine Learning
          </p>

          <p className="text-sm mt-2">
            HTML &nbsp; || &nbsp; CSS &nbsp; || &nbsp; JavaScript &nbsp; || &nbsp; Tailwind CSS
          </p>

          <p className="text-sm mt-3 text-gray-300">
            Howrah, West Bengal &nbsp; · &nbsp;
          </p>
        </div>

        <motion.a
          href="/Gun_Keshri.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="mt-4 inline-block px-6 py-2 rounded-md text-white bg-gray-800 hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:ring-offset-2 transition-all duration-300 ease-in-out shadow-lg">
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;

