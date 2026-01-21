
import React from 'react';
import { Milestone, ChildActivity } from '../types';

const MILESTONES: Milestone[] = [
  { id: '1', category: 'Social', title: 'Cooperates with peers during group play', status: 'achieved', dateAchieved: '2024-04-15' },
  { id: '2', category: 'Fine Motor', title: 'Uses scissors to cut along a straight line', status: 'achieved', dateAchieved: '2024-05-02' },
  { id: '3', category: 'Language', title: 'Identifies 5 new colors in nature', status: 'in-progress' },
  { id: '4', category: 'Cognitive', title: 'Stacks 8 blocks vertically without falling', status: 'upcoming' },
];

const ACTIVITIES: ChildActivity[] = [
  { id: '1', title: 'Nature Canvas', description: 'Used leaves and twigs to create an autumn landscape painting.', date: '2024-05-10', icon: '🍂' },
  { id: '2', title: 'Baking Day', description: 'Learned about measurements by making blueberry muffins.', date: '2024-05-08', icon: '🧁' },
  { id: '3', title: 'Seed Planting', description: 'Planted sunflower seeds in the organic garden.', date: '2024-05-05', icon: '🌻' },
];

const ChildProgressDashboard: React.FC = () => {
  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-emerald-50 rounded-[50px] p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center gap-12 border-8 border-white shadow-xl">
           <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-8 border-white shadow-lg bg-white">
             <img src="https://picsum.photos/seed/littleleo/400/400" alt="Child profile" className="w-full h-full object-cover" />
           </div>
           <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold font-display text-emerald-900 mb-2">Little Leo's Journey</h1>
              <p className="text-emerald-700 font-medium">Kindergarten Bloomers Class • Ms. Sarah Miller</p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                 <span className="bg-white/80 px-4 py-1 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-widest">Attendance: 98%</span>
                 <span className="bg-white/80 px-4 py-1 rounded-full text-xs font-bold text-emerald-600 uppercase tracking-widest">Mood: Joyful</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Milestone Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold font-display text-slate-800 flex items-center gap-3">
                <span className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">⭐</span>
                Developmental Milestones
              </h3>
              <button className="text-emerald-600 text-sm font-bold uppercase tracking-widest">View History</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MILESTONES.map(m => (
                <div key={m.id} className={`p-8 rounded-[40px] border-4 transition-all hover:scale-105 ${
                  m.status === 'achieved' ? 'bg-emerald-50 border-emerald-100' : 
                  m.status === 'in-progress' ? 'bg-sky-50 border-sky-100' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${
                      m.status === 'achieved' ? 'bg-emerald-200 text-emerald-700' : 
                      m.status === 'in-progress' ? 'bg-sky-200 text-sky-700' : 'bg-slate-200 text-slate-500'
                    }`}>
                      {m.category}
                    </span>
                    {m.status === 'achieved' && <span className="text-2xl">🏆</span>}
                  </div>
                  <h4 className="font-bold text-slate-800 leading-tight mb-4">{m.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {m.status === 'achieved' ? `Achieved on ${m.dateAchieved}` : m.status.replace('-', ' ')}
                    </span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                       <div className={`h-full transition-all duration-1000 ${
                         m.status === 'achieved' ? 'w-full bg-emerald-400' : 
                         m.status === 'in-progress' ? 'w-2/3 bg-sky-400' : 'w-0'
                       }`}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h4 className="text-2xl font-bold font-display mb-4">Teacher Observation</h4>
                 <p className="text-slate-300 italic mb-6">
                   "Leo has shown exceptional kindness this week. He noticed a friend was feeling lonely during recess and invited them to join his leaf-gathering project. His fine motor control with the paintbrushes is also visibly improving!"
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center font-bold">SM</div>
                    <span className="text-sm font-bold text-slate-400">- Ms. Sarah Miller</span>
                 </div>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10 text-6xl">📝</div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-display text-slate-800 flex items-center gap-3 mb-8">
              <span className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">🎨</span>
              This Week's Play
            </h3>
            
            <div className="space-y-6 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-1 before:bg-slate-100">
              {ACTIVITIES.map(activity => (
                <div key={activity.id} className="relative pl-14 group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-white border-4 border-slate-50 rounded-2xl flex items-center justify-center text-xl z-10 group-hover:scale-110 transition-transform shadow-sm">
                    {activity.icon}
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:bg-sky-50 transition-colors">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">{activity.date}</span>
                    <h5 className="font-bold text-slate-800 mb-2">{activity.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-4 bg-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-600 transition-all flex items-center justify-center gap-3">
              <span>Download Activity Pack</span>
              <span className="text-xl">📥</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChildProgressDashboard;
