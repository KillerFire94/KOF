import React, { useState } from 'react';
import { Sparkles, Wand2, RefreshCw } from 'lucide-react';
import { generateChristmasWish } from '../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';

const MagicCard: React.FC = () => {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!name.trim()) return;
    setLoading(true);
    setWish('');
    const result = await generateChristmasWish(name);
    setWish(result);
    setLoading(false);
  };

  return (
    <div className="relative z-10 w-full max-w-lg mx-auto p-1">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 rounded-2xl blur opacity-75 animate-pulse"></div>
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden">
        
        {/* Decorative corner */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl"></div>

        <h3 className="text-2xl font-christmas font-bold text-center text-white mb-6">
          <Sparkles className="inline-block w-6 h-6 text-yellow-400 mr-2" />
          Generador de Magia Navideña
          <Sparkles className="inline-block w-6 h-6 text-yellow-400 ml-2" />
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-serif text-slate-300 mb-2">¿Para quién es el deseo?</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Escribe un nombre (ej. Mamá, Juan)..."
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-white placeholder-slate-400 transition-all outline-none font-serif"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !name.trim()}
            className={`w-full py-3 px-6 rounded-lg font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
              loading || !name.trim() 
                ? 'bg-slate-700 cursor-not-allowed text-slate-400' 
                : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-green-500/30'
            }`}
          >
            {loading ? (
              <RefreshCw className="w-5 h-5 animate-spin" />
            ) : (
              <Wand2 className="w-5 h-5" />
            )}
            {loading ? 'Creando Magia...' : 'Generar Deseo Navideño'}
          </button>
        </div>

        <AnimatePresence>
          {wish && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-6 bg-white/5 border border-yellow-500/30 rounded-xl relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-slate-900 px-3 py-1 rounded-full border border-yellow-500/30">
                <span className="text-xl">🎁</span>
              </div>
              <p className="font-serif text-xl md:text-2xl text-center text-yellow-100 italic leading-relaxed">
                "{wish}"
              </p>
              <div className="mt-4 text-center">
                <span className="text-xs text-yellow-500/60 uppercase tracking-widest font-sans">
                  — Enviado desde el Polo Norte
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MagicCard;