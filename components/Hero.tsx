
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Dark & Moody Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 12, ease: "easeOut" }}
          // src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&blur=1"
          src="/hero-bg.avif"
          className="w-full h-full object-cover grayscale-[40%]"
          alt="Atmospheric Culinary Plating"
        />
        {/* Layered Overlays for Depth */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505]" />
      </div>

      {/* Floating Element: Vertical Social Bar */}
      <div className="absolute left-8 bottom-32 hidden lg:flex flex-col items-center gap-8 z-20">
        <div className="vertical-text text-[10px] uppercase tracking-[0.6em] text-white/20 font-black">
          Follow the journey — @khattimethirasoi
        </div>
        <div className="w-[1px] h-24 bg-white/10" />
      </div>

      {/* Floating Element: Opening Status */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-4 z-20">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Rasoi Status</span>
          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
        </div>
        <div className="text-right">
          <p className="text-[#FDCD07] text-[10px] uppercase font-black tracking-widest">Now Serving</p>
          <p className="text-white/30 text-[9px] uppercase tracking-widest mt-1">5-L North Karachi</p>
        </div>
      </div>

      {/* Centered Content - Refined Scale */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center"
      >
        <div className="flex flex-col items-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center gap-6"
          >
            <div className="h-[1px] w-8 bg-white/30" />
            <span className="text-white text-[10px] font-black uppercase tracking-[0.8em]">
              Authentic Lahori Heritage
            </span>
            <div className="h-[1px] w-8 bg-white/30" />
          </motion.div>

          {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-black leading-[0.9] tracking-tighter text-white">
            KHATTI <br />
            <span className="text-[#FDCD07] italic block mt-3">METHI</span>
          </h1>  */}
          
          {/* <div className="">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-serif font-black leading-[0.9] tracking-tight text-white uppercase">
              <span className="text-6xl text-[#FDCD07]">KHATTI</span> <span className="text-6xl text-[#FDCD07]">Methi</span> <br />
              Rasoi
            </h1>
          </div> */}

          <div className="logo w-[36rem]">
              <img src="logo.png" alt="KM" className="w-full h-full object-contain"/>
          </div>

          {/*
          <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto uppercase tracking-[0.4em]">
            The artisanal balance of <br />
            imperial spice & silk sweetness.
          </p>
          */}
        </div>

        {/* Heritage Stats Elements */}
        <div className="flex gap-12 mt-4 mb-8 opacity-30 group">
          <div className="text-center">
            <p className="text-white text-xl font-serif italic mb-1">2025</p>
            <p className="text-[8px] uppercase tracking-widest">Established</p>
          </div>
          <div className="w-[1px] h-8 bg-white/20 self-center" />
          <div className="text-center">
            <p className="text-white text-xl font-serif italic mb-1">40+</p>
            <p className="text-[8px] uppercase tracking-widest">Spices Used</p>
          </div>
          <div className="w-[1px] h-8 bg-white/20 self-center" />
          <div className="text-center">
            <p className="text-white text-xl font-serif italic mb-1">North Karachi</p>
            <p className="text-[8px] uppercase tracking-widest">Location</p>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap gap-8 items-center justify-center"
        >
          <a 
            href="#menu" 
            className="group relative px-12 py-5 bg-[#FDCD07] text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-full overflow-hidden transition-all shadow-2xl hover:bg-white"
          >
            <span className="relative z-10">View Menu</span>
          </a>
          <a 
            href="#about" 
            className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-white transition-colors flex items-center gap-3"
          >
            Our Story <span className="text-[#FDCD07]">→</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Minimal Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#FDCD07]/50 to-transparent" />
      </motion.div>

      {/* Vignette Corner Texture */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] opacity-80" />
    </section>
  );
};

export default Hero;
