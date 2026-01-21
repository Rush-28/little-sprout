
import React, { useState } from 'react';

const VirtualTour: React.FC = () => {
  const [activeArea, setActiveArea] = useState('classroom');
  
  const areas = [
    { id: 'classroom', title: 'Creative Classrooms', img: 'https://picsum.photos/seed/class1/1200/800', description: 'Open, sun-lit spaces designed with Montessori learning materials.' },
    { id: 'play', title: 'The Enchanted Garden', img: 'https://picsum.photos/seed/garden1/1200/800', description: 'Safe outdoor play area with sand pits, slides, and our organic veggie patch.' },
    { id: 'nap', title: 'Cozy Corner', img: 'https://picsum.photos/seed/nap1/1200/800', description: 'A quiet, dim-lit sanctuary for restful naps and afternoon storytime.' },
    { id: 'gym', title: 'Mini Gym', img: 'https://picsum.photos/seed/gym1/1200/800', description: 'Soft-padded room for physical coordination and rainy day play.' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Explore Our Little World</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Can't visit in person yet? Take a 360° virtual walk through our premium facilities designed for growing minds.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/4 space-y-4">
            {areas.map(area => (
              <button
                key={area.id}
                onClick={() => setActiveArea(area.id)}
                className={`w-full p-6 text-left rounded-3xl transition-all ${
                  activeArea === area.id ? 'bg-sky-500 text-white shadow-xl shadow-sky-100' : 'bg-slate-50 text-slate-600 hover:bg-sky-50'
                }`}
              >
                <h4 className="font-bold mb-1">{area.title}</h4>
                <p className={`text-[10px] uppercase font-bold tracking-widest ${activeArea === area.id ? 'text-sky-100' : 'text-slate-400'}`}>Click to View</p>
              </button>
            ))}
          </div>
          
          <div className="lg:w-3/4">
            <div className="relative aspect-video rounded-[40px] overflow-hidden group shadow-2xl">
              {areas.map(area => (
                <div 
                  key={area.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${activeArea === area.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img src={area.img} className="w-full h-full object-cover" alt={area.title} />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-12 text-white">
                    <h3 className="text-2xl font-bold font-display mb-2">{area.title}</h3>
                    <p className="text-slate-200 text-sm max-w-xl">{area.description}</p>
                  </div>
                </div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                 <div className="w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <div className="text-3xl text-white">🔄</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
