'use client'

import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <button className="text-white focus:outline-none" onClick={toggleSidebar}>
        <FaAlignJustify className='text-2xl'/>
      </button>
      <h1 className="text-xl font-bold">Compiladores</h1>
    </header>
  );
};

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`bg-gray-200 p-4 h-screen fixed left-0 top-0 z-10 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-0'
      }`}
    >
      <div className="flex justify-center">
        <img src="https://umg.edu.gt/assets/umg.png" className="w-24 h-auto rounded-full shadow-lg" alt="UMG Logo" />
    </div>


      <h2 className="text-2xl font-bold mb-4 text-gray-800 m-4 text-center">Compiladores</h2>
<ul className="space-y-2 block grid-cols-1">
  <li className='py-4'>
    <a href="/" className="flex items-center text-gray-700 hover:text-cyan-700">
      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18M3 6h18M3 18h18"></path>
      </svg>
      <span>Tabla de Simbolos</span>
    </a>
  </li>
  <li className='py-4'>
    <a href="documentacion" className="flex items-center text-gray-700 hover:text-cyan-700">
      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 6h-4l-4-4H7L3 6H1v16h22V6z"></path>
        <path d="M18 6h-1V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM12 4h2v2h-2V4zM8 4h2v2H8V4zm12 16H4V8h16v12z"></path>
      </svg>
      <span>Documentación</span>
    </a>
  </li>
  <li className='py-4'>
    <a href="Github" className="flex items-center text-gray-700 hover:text-cyan-700">
      <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8L12 16"></path>
        <path d="M8 12L16 12"></path>
      </svg>
      <span>Git Hub</span>
    </a>
  </li>
</ul>

    </aside>
  );
};

const Content = () => {
  return (
    <main className="p-4">
      
      
    </main>
  );
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${isSidebarOpen ? 'translate-x-64' : ''}`}>
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className={`flex ${isSidebarOpen ? 'ml-64' : ''}`}>
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} />}
        <Content />
      </div>
    </div>
  );
};

export default App;



