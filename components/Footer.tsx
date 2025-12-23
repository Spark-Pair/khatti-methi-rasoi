
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              {/* <div className="w-8 h-8 rounded-full border-2 border-[#FDCD07] flex items-center justify-center font-serif text-[#FDCD07] font-black text-xs">KM</div>
              <h3 className="text-2xl font-serif text-white font-black tracking-widest uppercase">KHATTI METHI</h3> */}
              <div className="logo h-10">
                  <img src="logo.png" alt="KM" className="w-full h-full object-contain"/>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm font-light uppercase tracking-widest">
              From the walled city of Lahore to the shores of Karachi. A culinary journey of duality, heritage, and imperial spice.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#FDCD07] font-black">Our Palette</h4>
            <ul className="space-y-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
              <li><a href="#about" className="hover:text-white transition-colors">The Heritage</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">The Menu</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Visit Karachi</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase tracking-[0.5em] text-[#FDCD07] font-black">Location</h4>
            <p className="text-gray-500 text-xs tracking-widest leading-loose font-medium">
              Sector 5-L<br />
              North Karachi, KARACHI, PAKISTAN<br />
              MON — SUN: 12:30PM — 11:30PM
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 text-center space-y-4">
          <p className="text-[9px] uppercase tracking-[0.8em] font-black text-gray-700">
            Website © {new Date().getFullYear()} Designed & Developed by <span className="text-[#FDCD07]">SparkPair</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
