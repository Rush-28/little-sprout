
import React from 'react';
import { TEACHERS } from '../constants';

const Staff: React.FC = () => {
  return (
    <section className="py-24 bg-yellow-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Meet the Heart of Our School</h2>
          <p className="text-lg text-slate-500">Our educators are chosen for their warmth, qualifications, and passion for early childhood development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEACHERS.map((teacher) => (
            <div key={teacher.id} className="group flex flex-col items-center text-center">
              <div className="relative w-64 h-80 mb-8 rounded-[60px] overflow-hidden shadow-xl border-8 border-white group-hover:rotate-2 transition-transform duration-500">
                <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-6">
                  <div className="flex gap-2">
                    {teacher.certifications.map((cert, i) => (
                      <span key={i} className="bg-white/90 text-[8px] font-bold text-emerald-800 px-2 py-1 rounded-full uppercase">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-800 mb-1">{teacher.name}</h4>
              <p className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-4">{teacher.role}</p>
              <p className="text-slate-500 text-sm italic leading-relaxed max-w-xs">
                "{teacher.philosophy}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
