
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface ParentPortalProps {
  onNavigate: (page: Page) => void;
}

const ParentPortal: React.FC<ParentPortalProps> = ({ onNavigate }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.toUpperCase() !== captchaCode) {
      alert('Incorrect Captcha. Please try again.');
      generateCaptcha();
      setCaptchaInput('');
      return;
    }
    
    if (studentId === 'LS-2024' && password === 'sprouts') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Student ID or Password. Demo: LS-2024 / sprouts');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in duration-700">
          <div className="bg-sky-500 p-8 text-white flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold font-display">Parent Dashboard</h2>
              <p className="text-sky-100 text-sm">Student: LS-2024 • Academic Term 1</p>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="bg-sky-600 hover:bg-sky-700 px-6 py-2 rounded-full text-xs font-bold transition-colors"
            >
              Sign Out
            </button>
          </div>
          
          <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-emerald-50 p-8 rounded-[40px] border border-emerald-100 flex flex-col justify-center h-full min-h-[300px]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">📢</div>
                  <h3 className="text-2xl font-bold font-display text-emerald-900">Weekly School Bulletin</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/60 rounded-2xl border border-white/40">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Upcoming Event</p>
                    <p className="text-sm font-bold text-slate-800">Summer Art Exhibition - Next Friday</p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-2xl border border-white/40">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Administrative Note</p>
                    <p className="text-sm font-bold text-slate-800">New Organic Menu launched for Term 2</p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-2xl border border-white/40">
                    <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Faculty News</p>
                    <p className="text-sm font-bold text-slate-800">Welcome Ms. Amara to our Science Lab team</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold font-display text-slate-800">Learning Portals</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <button 
                  onClick={() => onNavigate(Page.Progress)}
                  className="p-6 bg-emerald-50 rounded-3xl text-left border border-emerald-100 hover:bg-emerald-100 transition-colors group"
                >
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">📊</span>
                    <h5 className="font-bold text-emerald-800 text-sm">Learning Journey</h5>
                    <p className="text-[10px] text-emerald-600">Milestones & observations</p>
                 </button>
                 <button className="p-6 bg-sky-50 rounded-3xl text-left border border-sky-100 hover:bg-sky-100 transition-colors group">
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">🗓️</span>
                    <h5 className="font-bold text-sky-800 text-sm">Academic Calendar</h5>
                    <p className="text-[10px] text-sky-600">Events & holidays</p>
                 </button>
                 <button className="p-6 bg-yellow-50 rounded-3xl text-left border border-amber-100 hover:bg-yellow-100 transition-colors group">
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">📚</span>
                    <h5 className="font-bold text-amber-800 text-sm">Library Account</h5>
                    <p className="text-[10px] text-amber-600">Borrowed books & reading lists</p>
                 </button>
                 <button className="p-6 bg-slate-50 rounded-3xl text-left border border-slate-200 hover:bg-slate-100 transition-colors group">
                    <span className="text-2xl mb-2 block group-hover:scale-110 transition-transform">💳</span>
                    <h5 className="font-bold text-slate-800 text-sm">Fee Management</h5>
                    <p className="text-[10px] text-slate-500">Invoices & payment history</p>
                 </button>
              </div>
              <button className="w-full py-4 border-2 border-slate-100 bg-white text-slate-600 font-bold rounded-2xl hover:border-emerald-200 hover:text-emerald-600 transition-all flex items-center justify-center gap-2">
                <span>Contact Class Teacher</span>
                <span className="text-xl">✉️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-24 px-4">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
           <span className="text-4xl">🎒</span>
        </div>
        <h3 className="text-3xl font-bold font-display text-slate-900 text-center mb-2">Parent Portal</h3>
        <p className="text-slate-500 text-center mb-8 text-sm leading-relaxed">Access your student's learning records and school updates securely.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Student ID</label>
            <input 
              type="text" 
              placeholder="LS-XXXX-XXX" 
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none"
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-100 rounded-2xl">
              <span className="font-mono text-2xl font-bold tracking-[0.5em] text-slate-400 select-none italic line-through decoration-slate-300">
                {captchaCode}
              </span>
              <button 
                type="button" 
                onClick={generateCaptcha}
                className="text-xs font-bold text-sky-600 hover:text-sky-700 underline"
              >
                Refresh
              </button>
            </div>
            <input 
              type="text" 
              placeholder="Enter Captcha Above" 
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-sky-500 outline-none text-center font-bold uppercase"
              value={captchaInput}
              onChange={e => setCaptchaInput(e.target.value)}
              required
            />
          </div>

          <button className="w-full py-4 bg-sky-500 text-white font-bold rounded-2xl hover:bg-sky-600 transition-colors shadow-lg mt-4">
            Login to Dashboard
          </button>
        </form>
        <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-[10px] text-emerald-700 text-center">
            <strong>Demo Credentials:</strong><br/>
            ID: LS-2024 | Pass: sprouts
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;
