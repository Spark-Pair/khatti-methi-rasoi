
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center gap-12">
        {/* Pulsing Emblem */}
        {/* <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            opacity: 1 
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="w-24 h-24 rounded-full border-2 border-[#FDCD07] flex items-center justify-center font-serif text-[#FDCD07] font-black text-2xl shadow-[0_0_40px_rgba(253,205,7,0.2)]"
        >
          KM
        </motion.div> */}

        {/* Pulsing Emblem */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 1 
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className=""
        >
          <div className="logo h-14">
              <img src="logo.png" alt="KM" className="w-full h-full object-contain"/>
          </div>
        </motion.div>

        {/* Rounded Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ 
              duration: 2, 
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[#FDCD07] shadow-[0_0_10px_#FDCD07]"
          />
        </div>
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FDCD07] opacity-[0.05] blur-[100px] rounded-full" />
    </motion.div>
  );
};

export default Loader;
