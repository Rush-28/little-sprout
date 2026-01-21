
import React from 'react';
import { EVENTS } from '../constants';

const EventsCalendar: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Upcoming Adventures</h2>
            <p className="text-lg text-slate-500">There is always something exciting happening at Little Sprouts.</p>
          </div>
          <button className="px-8 py-3 rounded-2xl bg-slate-50 text-slate-500 font-bold border border-slate-200 hover:bg-sky-50 hover:text-sky-600 transition-all">
            Download Yearly Calendar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map(event => (
            <div key={event.id} className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl mb-6 ${
                event.type === 'field-trip' ? 'bg-emerald-50 text-emerald-500' :
                event.type === 'social' ? 'bg-yellow-50 text-amber-500' : 'bg-sky-50 text-sky-500'
              }`}>
                {event.type === 'field-trip' ? '🚌' : event.type === 'social' ? '🎈' : '🍎'}
              </div>
              <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">
                {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <h4 className="text-xl font-bold font-display text-slate-800 mb-3">{event.title}</h4>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{event.description}</p>
              <button className="text-sky-600 text-sm font-bold flex items-center gap-2 group">
                Add to Calendar <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
