import React, { useRef, useEffect } from 'react';

const Navbar = () => {
  const clickSoundRef = useRef(null);

  useEffect(() => {
    clickSoundRef.current = new Audio('/water-splash-46402.mp3');
  }, []);

  const playClickSound = () => {
    const sound = clickSoundRef.current;
    if (sound) {
      sound.currentTime = 0;
      sound.play().catch((err) => {
        console.log('Audio play blocked:', err);
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="text-lg font-semibold">Gun Keshri</div>
        <div className="flex space-x-8">
          <a href="#home" onClick={playClickSound} className="hover:text-blue-500 transition">Home</a>
          <a href="#about" onClick={playClickSound} className="hover:text-blue-500 transition">About</a>
          <a href="#education" onClick={playClickSound} className="hover:text-blue-500 transition">Education</a>
          <a href="#skills" onClick={playClickSound} className="hover:text-blue-500 transition">Skills</a>
          <a href="#projects" onClick={playClickSound} className="hover:text-blue-500 transition">Projects</a>
          <a href="#certificates" onClick={playClickSound} className="hover:text-blue-500 transition">Certificates</a>
          <a href="#contact" onClick={playClickSound} className="hover:text-blue-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
