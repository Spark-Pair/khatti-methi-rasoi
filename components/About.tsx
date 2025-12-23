
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -5]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section id="about" ref={sectionRef} className="px-6 relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <motion.span variants={itemVariants} className="text-[#FDCD07] uppercase tracking-[0.6em] text-[10px] font-black block border-l-2 border-[#FDCD07] pl-4">Legacy of Lahore</motion.span>
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-black leading-none">The Art of <br /><span className="text-[#FDCD07] italic">Lahori Balance</span></motion.h2>
            <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              From the bustling food streets of Lahore to the cosmopolitan pulse of Karachi, we preserve the artisanal duality of Pakistani flavor.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="group bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 hover:border-[#FDCD07]/40 transition-all">
              <div className="w-12 h-12 bg-[#FDCD07]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FDCD07]">
                <span className="text-[#FDCD07] group-hover:text-black font-serif font-bold italic">K</span>
              </div>
              <h4 className="text-[#FDCD07] font-serif text-2xl font-black mb-3 italic">Khatti (Zest)</h4>
              <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wider">The sharp tang of Lahori street spices and tamarind that ignites the palate.</p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ y: -10 }} className="group bg-[#0a0a0a] p-8 rounded-[2rem] border border-white/5 hover:border-[#FDCD07]/40 transition-all">
              <div className="w-12 h-12 bg-[#FDCD07]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FDCD07]">
                <span className="text-[#FDCD07] group-hover:text-black font-serif font-bold italic">M</span>
              </div>
              <h4 className="text-[#FDCD07] font-serif text-2xl font-black mb-3 italic">Methi (Silk)</h4>
              <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-wider">The velvety richness of dairy and jaggery that provides the royal finish.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content: Parallax Image Gallery */}
        <div className="lg:col-span-6 relative h-[600px] md:h-[800px] flex items-center justify-center">
          {/* Background Image Layer */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-20 right-0 w-2/3 aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 z-0 grayscale opacity-40"
          >
            <img 
              src="/public/about-1.avif" 
              className="w-full h-full object-cover"
              alt="Spices"
            />
          </motion.div>

          {/* Main Focused Image */}
          <div
            className="relative w-4/5 aspect-[4/5] rounded-[3rem] overflow-hidden border-4 border-[#FDCD07]/20 z-10 shadow-2xl cursor-pointer group hover:scale-[1.02] transition-all duration-300"
          >
            <img 
              src="/public/about-1.avif" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-[1.05]"
              alt="Chef Plating"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-white font-serif italic text-xl">"The Soul of the Rasoi lies in the Chef's hands."</p>
            </div>
          </div>

          {/* Floating Detail Image */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute top-20 left-0 w-1/2 aspect-square rounded-[2rem] overflow-hidden border border-[#FDCD07]/30 z-20 shadow-2xl"
          >
            <img 
              src="/public/about-1.avif" 
              className="w-full h-full object-cover"
              alt="Dish Detail"
            />
          </motion.div>
          
          {/* <div
            className="absolute bottom-20 -left-10 w-60 h-60 border border-[#FDCD07]/10 rounded-full pointer-events-none"
          /> */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute bottom-20 -left-10 w-60 h-60 border border-[#FDCD07]/10 rounded-[30%] pointer-events-none z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
