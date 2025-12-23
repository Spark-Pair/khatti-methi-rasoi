
import React from 'react';
import { motion } from 'framer-motion';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  // Selecting three featured items based on specific IDs (Signature, Legendary, Imperial)
  const featuredItems = MENU_ITEMS.filter(item => ['1', '2', '3'].includes(item.id));

  return (
    <section id="menu" className="px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <span className="text-[#FDCD07] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Taste Perfection</span> */}
            <h2 className="text-5xl md:text-7xl font-serif font-black">Featured <span className="text-[#FDCD07] italic">Selections</span></h2>
          </motion.div>
          
          <div className="hidden md:block">
            <span className="text-right text-[#FDCD07] uppercase tracking-[0.5em] text-[10px] font-bold block mb-4">Taste Perfection</span>
            <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] font-bold border-r border-[#FDCD07] pr-6 text-nowrap">
              Handpicked House Favorites
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative rounded-[2rem] overflow-hidden border border-white/5 bg-black hover:border-[#FDCD07]/40 transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 py-1 px-3 bg-black/50 border border-[#FDCD07]/40 text-white rounded-full transition-all duration-500 group-hover:bottom-5">
                <h3 className="uppercase tracking-[0.2em] text-[10px] font-inter font-medium text-nowrap">
                  {item.name}
                </h3> 
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-black">
            Experience the full palette in our Rasoi
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
