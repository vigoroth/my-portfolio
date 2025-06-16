// src/components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-[#111111] border-b border-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-center items-center">
        
        <div className="hidden md:flex space-x-8">
          {/* UPDATED: Added "/" before each hash to link back to the homepage */}
          <Link href="/#home" className="text-gray-300 hover:text-[#34D399] transition-colors duration-300 font-semibold">Home</Link>
          <Link href="/#about" className="text-gray-300 hover:text-[#34D399] transition-colors duration-300 font-semibold">About</Link>
          <Link href="/#portfolio" className="text-gray-300 hover:text-[#34D399] transition-colors duration-300 font-semibold">Portfolio</Link>
          <Link href="/#contact" className="text-gray-300 hover:text-[#34D399] transition-colors duration-300 font-semibold">Contact</Link>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
