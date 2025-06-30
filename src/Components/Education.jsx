import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="text-gray-800 py-20 px-6 sm:px-16">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-400 pb-2">Education</h2>
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500 bg-opacity-90">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science and Engineering (2022 - 2026)</h3>
            <p className="text-gray-600">MCKV Institue Of Engineering,Howrah</p>
            <p className="mt-2 text-gray-700">
              Currently pursuing Bachelor's degree in Computer Science and Engineering.
              Gaining skills in frontend, backend, data structures, and AI/ML technologies.
            </p>
            CGPA: 8.3 (Till 5th Semester)
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500 bg-opacity-90">
            <h3 className="text-xl font-semibold">Higher Secondary (12th) (2022) </h3>
            <p className="text-gray-600">St Anne`s High School,Patna</p>
            <p className="mt-2 text-gray-700">
              Studied Physics, Chemistry, Mathematics.
            </p>
            Percentage: 75%
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-yellow-500 bg-opacity-90">
            <h3 className="text-xl font-semibold">Secondary (10th) (2020)</h3>
            <p className="text-gray-600">Delhi Model Public School,Patna</p>
            <p className="mt-2 text-gray-700">
              Built a solid academic foundation and participated in extracurricular activities like chess and science fairs.
            </p>
             Percentage: 80.6%
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
