import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-2">Projects</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">Personal Portfolio (React)</h3>
          <p className="text-gray-700 mb-1">
            A responsive personal portfolio website built using React. It showcases my skills, projects, and contact information with a modern UI, optimized for all devices.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> React, Tailwind CSS, Responsive Design
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">Food Delivery Web Website with AI Recommendation</h3>
          <p className="text-gray-700 mb-1">
            A full-stack food delivery website featuring an AI-powered recommendation system for users with dietary needs such as low-calorie and diabetic-friendly meals.
          </p>
          <p className="text-sm text-gray-600">
            <strong>Tech Stack:</strong> MERN Stack, Python (AI), REST API, Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
