
import React from 'react';
import { DoodleIcons } from '../constants';
import { Page } from '../types';

interface HeroProps {
  onCTA: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onCTA }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:py-32 bg-emerald-50/30">
      <div className="absolute top-10 right-10 opacity-40 animate-pulse">
        <DoodleIcons.Sun />
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 transform rotate-12">
        <DoodleIcons.Flower />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-100 rounded-full">
              Premium Early Learning Center
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-display text-slate-900 leading-tight mb-6">
              Where <span className="text-emerald-600">Wonder</span> Begins & <span className="text-sky-500">Kindness</span> Grows
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              A nurturing space for little explorers to play, learn, and discover the world through our research-backed Montessori-inspired curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button 
                onClick={() => onCTA(Page.Admissions)}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full shadow-xl shadow-emerald-100 transition-all hover:scale-105 active:scale-95 text-lg"
              >
                Enroll Your Child
              </button>
              <button 
                onClick={() => onCTA(Page.VirtualTour)}
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-full border-2 border-slate-200 transition-all hover:border-emerald-200 text-lg"
              >
                Virtual Tour
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center md:justify-start space-x-8">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">500+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Happy Graduates</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-800">1:5</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Teacher Ratio</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
             {/* Main Hero Illustration Placeholder */}
             <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-white p-2 border-8 border-white group">
                <img 
                  src="https://picsum.photos/seed/nursery/1000/800" 
                  alt="Children playing" 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-medium italic">"Joyful learning through play every single day."</p>
                </div>
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-200/50 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce duration-[3000ms]">
                <div className="text-center">
                  <p className="text-3xl">🎨</p>
                  <p className="text-[10px] font-bold text-sky-700 uppercase">Creative</p>
                </div>
             </div>
             <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-yellow-200/50 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse">
                <div className="text-center">
                  <p className="text-3xl">🧪</p>
                  <p className="text-[10px] font-bold text-amber-700 uppercase">Discover</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
