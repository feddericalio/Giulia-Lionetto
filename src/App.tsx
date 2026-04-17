/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Linkedin, Facebook, ChevronLeft, ChevronRight } from 'lucide-react';

function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://lh3.googleusercontent.com/d/1snn6ydPllTzjsBlTw0_q2qW7A0-OKSNj",
    "https://lh3.googleusercontent.com/d/1jDz-twstHH1WUa7AJbWSB9NPdowK-2yH",
    "https://lh3.googleusercontent.com/d/1ch6UnZw3HHf_hClF3OGXUz9y07IAp6SQ",
    "https://lh3.googleusercontent.com/d/1pDJUpECKgwS3W8Fbb0dVGmplctmPMEeG",
  ];
  
  return (
    <div className="relative aspect-square overflow-hidden bg-[#eee] border-t-2 border-[#4A6741]">
      <img src={images[index]} className="w-full h-full object-contain" alt="Progetto" />
      <button onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 p-1 bg-white/50 border border-[#4A6741]/20"><ChevronLeft size={20} /></button>
      <button onClick={() => setIndex((i) => (i + 1) % images.length)} className="absolute right-2 top-1/2 p-1 bg-white/50 border border-[#4A6741]/20"><ChevronRight size={20} /></button>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9F8] text-[#1A1A1A] font-sans blueprint-grid">
      <nav className="fixed w-full z-50 bg-[#F8F9F8]/80 backdrop-blur-md p-6 flex justify-between items-center border-b border-[#4A6741]/20">
        <span className="font-sans font-medium text-lg text-[#6D4C7D] uppercase tracking-wider">Giulia Lionetto</span>
        <button className="text-sm border border-[#4A6741] px-4 py-2 hover:bg-[#4A6741] hover:text-white transition-colors uppercase tracking-widest text-[#4A6741]">
          Richiedi una consulenza
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-5xl md:text-6xl text-[#1A1A1A] mb-6 font-light">
            Ciao, sono Giulia.
            <br />
            <span className="text-[#6D4C7D] font-medium">Architetto & Interior Designer</span>
          </h1>
          <p className="text-lg text-[#555] mb-8 max-w-lg border-l-2 border-[#4A6741] pl-6">
            Progetto interni residenziali e commerciali curando ogni dettaglio, dal concept alla realizzazione, con un approccio che unisce estetica, funzione e identità.
          </p>
          <button className="bg-[#6D4C7D] text-white px-8 py-3 hover:opacity-90 transition shadow-[4px_4px_0px_#4A6741] uppercase tracking-widest text-xs">Richiedi una consulenza</button>
        </motion.div>
        
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src="https://www.studiotransit.com/wp-content/uploads/2023/03/GIULIA-LIONETTO-scaled.jpg" 
          alt="Giulia Lionetto" 
          className="w-full h-auto object-cover grayscale-[0.2] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
      </section>
      
      {/* About Section */}
      <section className="bg-[#F8F9F8] py-20 px-6 border-t border-[#4A6741]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-[#6D4C7D] mb-8 uppercase tracking-widest font-medium">Chi sono</h2>
          <p className="text-[#555] text-lg leading-relaxed">
            Ogni spazio racconta una storia. Il mio lavoro è darle forma. Specializzata in design d'interni, accompagno ogni progetto dalla prima idea fino alla sua realizzazione concreta. La mia base operativa si divide tra Roma e la Sicilia, ma seguo progetti in tutta Italia.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-[#4A6741]/20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl text-[#1A1A1A] mb-8 uppercase tracking-widest font-medium">COS'È UN'INTERNO ARCHITETTONICO</h2>
          <p className="text-[#555] text-lg leading-relaxed">
            Un interno non è semplicemente uno spazio chiuso. È il punto di incontro tra ciò che è dentro e ciò che è fuori, tra funzione e percezione. Ogni progetto nasce da questo equilibrio: costruire ambienti che dialogano con il contesto, superando la distinzione tra interno ed esterno. Perché l'architettura non separa. Connette.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-6 border-t border-[#4A6741]/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {['Progettazione interni', 'Ristrutturazioni', 'Consulenza progettuale'].map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2 }} className="border-t border-[#4A6741]/30 pt-6">
              <h3 className="text-xl mb-4 text-[#1A1A1A] uppercase tracking-wider">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Method Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#4A6741]/20">
        <h2 className="text-3xl text-[#1A1A1A] mb-12 uppercase tracking-widest font-medium">Come lavoro</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Ascolto e analisi', 'Concept progettuale', 'Sviluppo tecnico', 'Realizzazione'].map((step, idx) => (
            <motion.div key={idx} initial={{ height: 0 }} whileInView={{ height: 'auto' }} className="border-l-2 border-[#4A6741] pl-4 py-4">
              <span className="text-[#6D4C7D] font-mono">0{idx + 1}</span>
              <p className="font-medium text-[#1A1A1A] uppercase tracking-tighter text-sm">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Placeholder */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-[#4A6741]/20">
        <h2 className="text-3xl text-[#1A1A1A] mb-12 uppercase tracking-widest font-medium">Progetti</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCarousel />
          <motion.div whileHover={{ y: -10 }} className="aspect-square bg-[#eee] border-t-2 border-[#4A6741]"></motion.div>
          <motion.div whileHover={{ y: -10 }} className="aspect-square bg-[#eee] border-t-2 border-[#4A6741]"></motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-20 px-6 bg-[#6D4C7D] text-white text-center">
        <motion.div whileInView={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
          <h2 className="text-4xl md:text-6xl italic font-serif">"Lo spazio non si arreda.<br />Si interpreta."</h2>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-6 text-center border-t border-[#4A6741]">
        <p className="mb-6 uppercase tracking-widest text-xs">Interessato a una consulenza? Scrivimi e raccontami il tuo progetto.</p>
        <a href="mailto:giulia.lionetto.arch@gmail.com" className="text-[#6D4C7D] text-xl font-light">giulia.lionetto.arch@gmail.com</a>
        <div className="flex justify-center gap-6 mt-8 text-[#4A6741]">
          <Facebook /> <Instagram /> <a href="https://www.linkedin.com/in/giulia-lionetto-7a89b12a0/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </footer>
    </div>
  );
}
