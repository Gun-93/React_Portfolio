import React from 'react';
const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="text-gray-800 py-12 px-6 sm:px-12 pb-0">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 border-b border-gray-300 pb-2">Contact Me</h2>
        <div className="mb-8">
          <p className="text-base mb-1">
            <strong>Email:</strong>{' '}
            <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">gunpcity@gmail.com</a>
          </p>
          <p className="text-base mb-1">
            <strong>Location:</strong> Howrah, West Bengal, India
          </p>
          <p className="text-base">
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/gun-keshri-15918b293"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer">https://www.linkedin.com/in/gun-keshri-15918b293
            </a>
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"/>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"/>
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-4 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."/>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
