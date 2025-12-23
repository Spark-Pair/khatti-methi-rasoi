
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Our Story', href: '#about' },
    { name: 'The Menu', href: '#menu' },
  ];

  return (
    <div className="fixed top-8 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`glass-pill pointer-events-auto rounded-full px-8 py-4 flex items-center justify-between gap-12 transition-all duration-500 max-w-6xl w-full border ${scrolled ? 'border-[#FDCD07]/40 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' : 'border-white/10'}`}
      >
        <a href="#home" className="flex items-center gap-3 group">
          <div className="logo h-10">
              <img src="logo.png" alt="KM" className="w-full h-full object-contain"/>
          </div>
        </a>

        <div className="flex gap-8 items-center">
          <div className="hidden md:flex gap-8">
            {links.map(link => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/70 hover:text-[#FDCD07] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FDCD07] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          <motion.a 
            href="#location" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-[#FDCD07] text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(253,205,7,0.2)] hover:shadow-[0_0_30px_rgba(253,205,7,0.4)] transition-all"
          >
            Visit Us
          </motion.a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
