import React from 'react';

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="text-gray-800 py-24 px-6 sm:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-400 pb-2">Skills</h2>
        <div className="space-y-5 text-lg leading-relaxed text-gray-900">
          <div className="flex items-start gap-3">
            <img
              src="https://img.icons8.com/color/48/code.png"
              alt="Programming"
              className="w-6 h-6 mt-1"/>
            <p>
              <span className="font-semibold">Programming Languages:</span> C, Python, Javascript, DSA With C
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="https://img.icons8.com/color/48/toolbox.png"
              alt="Developer Tools"
              className="w-6 h-6 mt-1"/>
            <p>
              <span className="font-semibold">Developer Tools:</span> Tableau, MS Excel, VS Code, Google Colab, GitHub
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="https://img.icons8.com/color/48/module.png"
              alt="Libraries"
              className="w-6 h-6 mt-1"/>
            <p>
              <span className="font-semibold">Libraries:</span> Matplotlib, Numpy, Pandas, TensorFlow, Keras
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="https://img.icons8.com/color/48/web.png"
              alt="Web Technologies"
              className="w-6 h-6 mt-1"/>
            <p>
              <span className="font-semibold">Web Technologies:</span> HTML, CSS, Node.js, Express.js, React.js, Tailwind CSS
            </p>
          </div>
          <div className="flex items-start gap-3">
            <img
              src="https://img.icons8.com/color/48/database.png"
              alt="Database"
              className="w-6 h-6 mt-1"/>
            <p>
              <span className="font-semibold">Database:</span> MongoDB, MySQL
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
