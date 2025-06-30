import React from 'react';
const Certificates = () => {
  const CertificatesList = [
    {
      title: 'Html and CSS in one day',
      issuer: 'Udemy',
      
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Udemy',
      
    },
    {
      title: 'Machine Learning',
      issuer: 'Udemy',
      
    },
    {
      title: 'Python ',
      issuer: 'geeksforgeeks',
      link: '',
    },
  ];
  return (
    <section
      id="certificates"
      style={{
        backgroundImage: "url('/bgg.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      className="text-gray-800 py-24 px-6 sm:px-16 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-400 pb-2">Certificates</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CertificatesList.map((cert, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 shadow-md rounded-lg p-5 border border-gray-200">
              <h3 className="text-xl font-semibold mb-1">{cert.title}</h3>
              <p className="text-gray-600 mb-2">Issued by: {cert.issuer}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm">View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
