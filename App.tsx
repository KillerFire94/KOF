import React from 'react';
import Snowfall from './components/Snowfall';
import MagicCard from './components/MagicCard';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#1a0b2e] to-black text-white">
      {/* Background Elements */}
      <Snowfall />
      
      {/* Moon / Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <main className="relative z-10 container mx-auto px-4 py-12 min-h-screen flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12 relative"
        >
          {/* Glowing Text Background */}
          <div className="absolute inset-0 blur-3xl bg-red-500/20 rounded-full" />
          
          <h1 className="relative font-christmas text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-400 to-yellow-600 drop-shadow-[0_2px_10px_rgba(234,179,8,0.5)]">
            Feliz Navidad
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="font-serif text-xl md:text-2xl text-blue-200 mt-4 tracking-wide italic"
          >
            Que la magia ilumine tus sueños
          </motion.p>
        </motion.div>

        {/* Floating Ornaments (Visual Decoration) */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-1/4 opacity-60 hidden md:block pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-900 shadow-lg border border-red-400/50"></div>
          <div className="w-1 h-20 bg-gray-400/50 absolute -top-20 left-1/2 -translate-x-1/2"></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1, ease: "easeInOut" }}
          className="absolute top-32 right-10 md:right-1/4 opacity-60 hidden md:block pointer-events-none"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-900 shadow-lg border border-green-400/50"></div>
          <div className="w-1 h-32 bg-gray-400/50 absolute -top-32 left-1/2 -translate-x-1/2"></div>
        </motion.div>

        {/* Interactive Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full"
        >
          <MagicCard />
        </motion.div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 text-center text-slate-500 text-sm font-serif"
        >
          <p>© 2024 Navidad Mágica. Creado con React & Gemini.</p>
        </motion.footer>

      </main>
    </div>
  );
};

export default App;