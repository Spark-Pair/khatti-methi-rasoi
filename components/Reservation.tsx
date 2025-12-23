
import React from 'react';
import { motion } from 'framer-motion';

const Location: React.FC = () => {
  return (
    <section id="location" className="px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 border border-white/5 relative overflow-hidden"
      >
        {/* Animated Background Rings */}
        <div className="absolute -top-24 -right-24 w-64 h-64 border border-[#FDCD07]/10 rounded-full animate-pulse" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <span className="text-[#FDCD07] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Visit Our Rasoi</span>
              <h2 className="text-5xl md:text-6xl font-serif font-black mb-6">Come <span className="text-[#FDCD07] italic">Experience</span> It</h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                We believe true Lahori hospitality shouldn't be gated by bookings. We welcome all walk-ins in the true spirit of the Walled City.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-[#FDCD07]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FDCD07] group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[#FDCD07] text-[10px] uppercase font-black tracking-widest mb-1">Karachi Destination</h4>
                  <p className="text-white text-lg font-serif italic">Sector 5-L, North Karachi, Karachi</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-full border border-[#FDCD07]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FDCD07] group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[#FDCD07] text-[10px] uppercase font-black tracking-widest mb-1">Rasoi Hours</h4>
                  <p className="text-white text-lg font-serif italic">Monday — Sunday <br /> 12:30 PM — 11:30 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <motion.a 
                href="https://maps.google.com" 
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-10 py-5 group hover:border-[#FDCD07]/40 transition-all"
              >
                <span className="text-xs uppercase font-black tracking-widest">Get Directions</span>
                <span className="text-[#FDCD07] group-hover:translate-x-2 transition-transform">→</span>
              </motion.a>
            </div>
          </div>

          <div className="relative">
            {/* Aesthetic Map Placeholder */}
            <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative group">
              <div className="absolute inset-0 bg-[radial-gradient(#FDCD07_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-4 h-4 bg-[#FDCD07] rounded-full shadow-[0_0_20px_#FDCD07]"
                />
                <span className="ml-4 text-[10px] uppercase font-black tracking-[0.3em] text-white/40">North Karachi • KMR</span>
              </div>
              <div className="absolute inset-0 border-4 border-[#FDCD07]/10 rounded-[3rem] pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
