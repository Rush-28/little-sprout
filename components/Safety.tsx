
import React from 'react';

const Safety: React.FC = () => {
  const safetyFeatures = [
    { title: 'Authorized Entry', description: 'Bio-metric access points restricted to parents and vetted staff.', icon: '🔐' },
    { title: 'Medical Response', description: 'Certified first-aid staff on-site and nearby hospital partnership.', icon: '🩹' },
    { title: 'Safe Sanitize', description: 'Hospital-grade UVC cleaning and safe-touch surface coatings.', icon: '✨' },
    { title: 'Campus Security', description: 'Professional security personnel managing all entry/exit points.', icon: '🛡️' },
  ];

  return (
    <section className="py-24 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="text-sky-600 font-bold text-sm tracking-widest uppercase mb-4 block">Safety Excellence</span>
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-8 leading-tight">A Secure Foundation for Learning</h2>
            <p className="text-slate-600 mb-10 text-lg">
              Creating a secure environment is our highest commitment. We implement the gold standard in school safety protocols to ensure peace of mind for our families.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {safetyFeatures.map((feature, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-sky-100 shadow-sm">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="font-bold text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-200/50 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/safety/800/800" 
                alt="Safe environment" 
                className="relative z-10 w-full h-auto rounded-[80px] border-[12px] border-white shadow-2xl"
              />
              <div className="absolute top-10 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">✅</div>
                <div className="pr-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Campus Status</p>
                  <p className="text-sm font-bold text-emerald-600">Secure & Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
