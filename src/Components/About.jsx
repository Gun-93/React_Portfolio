import React from 'react';
const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="text-gray-800 py-28 px-6 sm:px-16 min-h-screen bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-400 pb-2">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Hello! I'm <span className="text-black font-semibold">Gun Keshri</span>,
          a passionate <span className="text-blue-600">Frontend Developer</span> currently pursuing my B.Tech in
          Computer Science and Engineering (Graduating in 2026).
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I love building modern and responsive user interfaces. I have a strong foundation in
          <span className="text-black font-medium"> HTML, CSS, JavaScript, React</span>, and
          <span className="text-black font-medium"> Tailwind CSS</span>. I'm continuously learning and working to grow my skills.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I'm also working on becoming a <span className="text-black font-semibold">Full Stack Developer</span>.
          Currently, I'm building a semester-long project using
          <span className="text-black font-medium"> Node.js, Express.js, MySQL,</span> and
          <span className="text-black font-medium"> MongoDB</span>. It's still in progress, but it's helping me understand backend technologies deeply. It is a Team Work Project
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          I’m also interested in <span className="text-black font-semibold">Machine Learning and AI</span>,
          and I enjoy exploring how intelligent systems work and currently doing some projects on this.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          My hobby is playing <span className="text-black font-semibold">Chess</span>, which sharpens my strategic thinking and patience.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m always open to learning, collaborating, and building amazing things together. Let’s connect and grow in the tech journey!
        </p>
      </div>
    </section>
  );
};

export default About;
