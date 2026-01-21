
import React, { useState } from 'react';

const TeacherPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');

  const students = [
    { id: 'LS-2024-001', name: 'Leo Smith', grade: 'Kindergarten', mood: 'Joyful' },
    { id: 'LS-2024-002', name: 'Amara Khan', grade: 'Pre-K', mood: 'Curious' },
    { id: 'LS-2024-003', name: 'Noah Miller', grade: 'Pre-School', mood: 'Active' },
    { id: 'LS-2024-004', name: 'Sofia Garcia', grade: 'Pre-K', mood: 'Quiet' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (teacherId === 'STAFF-1' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Teacher ID or Password. Demo: STAFF-1 / admin');
    }
  };

  if (isLoggedIn) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-10 duration-700">
          <div className="bg-emerald-600 p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">👩‍🏫</div>
              <div>
                <h2 className="text-3xl font-bold font-display">Educator Portal</h2>
                <p className="text-emerald-100 text-sm">Welcome back, Ms. Sarah Miller</p>
              </div>
            </div>
            <button 
              onClick={() => setIsLoggedIn(false)}
              className="bg-emerald-700 hover:bg-emerald-800 px-6 py-2 rounded-full text-xs font-bold transition-colors"
            >
              Sign Out
            </button>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-end mb-8">
               <h3 className="text-2xl font-bold font-display text-slate-800">Assigned Students</h3>
               <div className="flex gap-4">
                 <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors">Export Attendance</button>
                 <button className="px-6 py-2 bg-emerald-100 text-emerald-700 rounded-xl text-sm font-bold hover:bg-emerald-200 transition-colors">+ New Entry</button>
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">Student Name</th>
                    <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Student ID</th>
                    <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Class</th>
                    <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today's Mood</th>
                    <th className="pb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right pr-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {students.map((student) => (
                    <tr key={student.id} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-6 pl-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">
                            {student.name[0]}
                          </div>
                          <span className="font-bold text-slate-700">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-6 font-mono text-xs text-slate-500">{student.id}</td>
                      <td className="py-6">
                        <span className="text-xs font-bold px-3 py-1 bg-sky-50 text-sky-600 rounded-full">{student.grade}</span>
                      </td>
                      <td className="py-6">
                        <span className="text-xs font-medium text-slate-600">{student.mood}</span>
                      </td>
                      <td className="py-6 text-right pr-4">
                        <button className="text-emerald-600 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 bg-emerald-50 rounded-xl transition-all">
                          Update Progress
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                <h4 className="font-bold text-amber-900 mb-2">Term 1 Assessment</h4>
                <p className="text-xs text-amber-800/70 mb-4">Complete your term-end reports by next Friday.</p>
                <div className="w-full bg-white h-2 rounded-full overflow-hidden">
                  <div className="w-3/4 bg-amber-400 h-full"></div>
                </div>
              </div>
              <div className="bg-sky-50 p-6 rounded-3xl border border-sky-100">
                <h4 className="font-bold text-sky-900 mb-2">Lesson Planning</h4>
                <p className="text-xs text-sky-800/70">"Nature and Patterns" module starts on Monday.</p>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl text-white">
                <h4 className="font-bold mb-2">Quick Note</h4>
                <p className="text-xs text-slate-400 italic">"Remember to document peer interaction for the Pre-School group."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto py-24 px-4">
      <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
           <span className="text-4xl">👨‍🏫</span>
        </div>
        <h3 className="text-3xl font-bold font-display text-slate-900 text-center mb-2">Teacher Login</h3>
        <p className="text-slate-500 text-center mb-8 text-sm leading-relaxed">Secure academic management area for Little Sprouts faculty.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Staff ID</label>
            <input 
              type="text" 
              placeholder="STAFF-XXX" 
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none"
              value={teacherId}
              onChange={e => setTeacherId(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-4">Access Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-colors shadow-lg mt-4">
            Authorized Access
          </button>
        </form>
        <div className="mt-8 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <p className="text-[10px] text-emerald-700 text-center">
            <strong>Staff Credentials:</strong><br/>
            ID: STAFF-1 | Pass: admin
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherPortal;
