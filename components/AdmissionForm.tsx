
import React, { useState } from 'react';

const AdmissionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    program: 'Pre-School'
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! Our admissions counselor will contact you soon.');
    setStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        <div className="md:w-1/3 bg-emerald-500 p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold font-display mb-6">Join Our Family</h3>
            <p className="text-emerald-100 text-sm leading-relaxed mb-8">
              Complete this application to start your child's academic journey at Little Sprouts.
            </p>
            <div className="space-y-6">
              {[
                { s: 1, label: 'Parent Info' },
                { s: 2, label: 'Child Details' },
                { s: 3, label: 'Review' }
              ].map(item => (
                <div key={item.s} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= item.s ? 'bg-white text-emerald-600 border-white' : 'border-emerald-300 text-emerald-300'}`}>
                    {item.s}
                  </div>
                  <span className={`font-bold text-xs uppercase tracking-widest ${step >= item.s ? 'text-white' : 'text-emerald-300'}`}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="text-xs text-emerald-200">
            Admissions Office: +1 (555) 123-9999
          </div>
        </div>
        
        <div className="md:w-2/3 p-8 md:p-16">
          <form onSubmit={handleSubmit} className="h-full flex flex-col">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <h4 className="text-2xl font-bold font-display text-slate-800 mb-8">Parent/Guardian Information</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    value={formData.parentName}
                    onChange={e => setFormData({...formData, parentName: e.target.value})}
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <h4 className="text-2xl font-bold font-display text-slate-800 mb-8">Child Details</h4>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Child's Full Name" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    value={formData.childName}
                    onChange={e => setFormData({...formData, childName: e.target.value})}
                    required
                  />
                  <input 
                    type="number" 
                    placeholder="Age (Years)" 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    value={formData.childAge}
                    onChange={e => setFormData({...formData, childAge: e.target.value})}
                    required
                  />
                  <select 
                    className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 transition-all outline-none appearance-none"
                    value={formData.program}
                    onChange={e => setFormData({...formData, program: e.target.value})}
                  >
                    <option>Pre-School</option>
                    <option>Pre-K</option>
                    <option>Kindergarten</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right duration-500">
                <h4 className="text-2xl font-bold font-display text-slate-800 mb-8">Review Application</h4>
                <div className="p-6 bg-slate-50 rounded-3xl space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest text-[10px]">Parent</span>
                    <span className="text-slate-800 font-bold">{formData.parentName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest text-[10px]">Email</span>
                    <span className="text-slate-800 font-bold">{formData.email}</span>
                  </div>
                  <hr className="border-slate-200" />
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest text-[10px]">Child</span>
                    <span className="text-slate-800 font-bold">{formData.childName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 uppercase font-bold tracking-widest text-[10px]">Target Grade</span>
                    <span className="text-emerald-600 font-bold">{formData.program}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed text-center px-4">
                  Enrollment is subject to available seats and school policy review.
                </p>
              </div>
            )}

            <div className="mt-auto flex justify-between pt-12">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="px-8 py-3 text-slate-400 font-bold hover:text-slate-600 transition-colors">
                  Back
                </button>
              ) : (
                <div></div>
              )}
              {step < 3 ? (
                <button type="button" onClick={nextStep} className="px-12 py-3 bg-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-600 transition-colors">
                  Next Step
                </button>
              ) : (
                <button type="submit" className="px-12 py-3 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition-colors">
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
