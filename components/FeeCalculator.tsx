
import React, { useState, useEffect } from 'react';

const FeeCalculator: React.FC = () => {
  const [grade, setGrade] = useState<'Pre-School' | 'Pre-K' | 'Kindergarten'>('Pre-School');
  const [afterSchool, setAfterSchool] = useState(false);
  const [transport, setTransport] = useState(false);
  const [total, setTotal] = useState(0);

  const baseFees = {
    'Pre-School': 1200,
    'Pre-K': 1000,
    'Kindergarten': 900
  };

  useEffect(() => {
    let t = baseFees[grade];
    if (afterSchool) t += 250;
    if (transport) t += 150;
    setTotal(t);
  }, [grade, afterSchool, transport]);

  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 max-w-2xl mx-auto">
      <h3 className="text-3xl font-bold font-display text-center mb-8">Fee Estimator</h3>
      
      <div className="space-y-8">
        <div>
          <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Select Academic Program</label>
          <div className="grid grid-cols-3 gap-3">
            {(['Pre-School', 'Pre-K', 'Kindergarten'] as const).map(g => (
              <button
                key={g}
                onClick={() => setGrade(g)}
                className={`py-3 px-2 rounded-2xl text-xs font-bold transition-all border-2 ${
                  grade === g ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-50 text-slate-500 border-slate-100 hover:border-emerald-200'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider">Additional Services</label>
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => setAfterSchool(!afterSchool)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌙</span>
              <div>
                <p className="font-bold text-slate-700">After School Enrichment</p>
                <p className="text-[10px] text-slate-400">Until 6:00 PM</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${afterSchool ? 'bg-emerald-500' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${afterSchool ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-emerald-50 transition-colors" onClick={() => setTransport(!transport)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🚌</span>
              <div>
                <p className="font-bold text-slate-700">Transportation</p>
                <p className="text-[10px] text-slate-400">Secure door-to-door shuttle</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 transition-colors ${transport ? 'bg-emerald-500' : 'bg-slate-300'}`}>
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${transport ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-500">Monthly Tuition Investment</span>
            <span className="text-3xl font-bold font-display text-emerald-600">${total}</span>
          </div>
          <p className="text-[10px] text-slate-400 text-center italic">
            *Fees are per month for the academic session. Final fee structure shared during admission.
          </p>
        </div>

        <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors shadow-lg">
          Download School Prospectus
        </button>
      </div>
    </div>
  );
};

export default FeeCalculator;
