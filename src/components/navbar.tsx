import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ingredients', path: '/ingredients' },
    { name: 'Shop', path: '/shop' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#FDFDF5]/80 backdrop-blur-md px-6 py-4 border-b border-[#666666]/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-black text-[#666666] outline-none">
          <span className="text-[#FC8A17]">Poppa.</span>
        </Link>

        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-[#666666] text-xs font-bold tracking-[0.2em] uppercase hover:text-[#FC8A17] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-[#666666]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FDFDF5] py-12 flex flex-col items-center space-y-8 shadow-2xl border-t border-gray-100">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-2xl font-black text-[#666666] uppercase tracking-tighter"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;