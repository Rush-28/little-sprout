
import React from 'react';

const Curriculum: React.FC = () => {
  const pillars = [
    {
      title: 'Montessori Inspired',
      description: 'Fostering independence and curiosity through self-directed activity and hands-on learning.',
      icon: '🪵',
      color: 'bg-amber-50',
      textColor: 'text-amber-600'
    },
    {
      title: 'Reggio Emilia',
      description: 'The child is a protagonist. We follow their interests to create project-based learning experiences.',
      icon: '🎨',
      color: 'bg-sky-50',
      textColor: 'text-sky-600'
    },
    {
      title: 'Nature-Centric',
      description: 'Daily outdoor activities in our organic garden to build respect for the environment.',
      icon: '🌿',
      color: 'bg-emerald-50',
      textColor: 'text-emerald-600'
    },
    {
      title: 'Emotional IQ',
      description: 'Prioritizing social skills, empathy, and emotional regulation in early childhood development.',
      icon: '💖',
      color: 'bg-rose-50',
      textColor: 'text-rose-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Our Teaching Philosophy</h2>
          <p className="text-lg text-slate-500">
            We don't just teach; we inspire. Our curriculum is a vibrant tapestry of proven methodologies designed to unlock every child's potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`${pillar.color} p-10 rounded-[40px] transition-all hover:-translate-y-2 hover:shadow-xl`}>
              <div className="text-5xl mb-6">{pillar.icon}</div>
              <h3 className={`text-xl font-bold mb-4 ${pillar.textColor}`}>{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-emerald-50 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold font-display text-emerald-900 mb-6">A Day at Little Sprouts</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center font-bold text-emerald-600">01</div>
                <div>
                  <h4 className="font-bold text-emerald-800">Arrival & Circle Time</h4>
                  <p className="text-sm text-emerald-700/70">Social greeting, weather check, and intention setting.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center font-bold text-emerald-600">02</div>
                <div>
                  <h4 className="font-bold text-emerald-800">Unstructured Exploration</h4>
                  <p className="text-sm text-emerald-700/70">Children choose from prepared learning stations.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center font-bold text-emerald-600">03</div>
                <div>
                  <h4 className="font-bold text-emerald-800">Outdoor Play & Garden Lab</h4>
                  <p className="text-sm text-emerald-700/70">Physical activity and nature observation.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
             <div className="aspect-video bg-emerald-100 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                <img src="https://picsum.photos/seed/classroom/800/600" className="w-full h-full object-cover" alt="Classroom" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform cursor-pointer">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-emerald-500 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
