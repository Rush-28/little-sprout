
import React from 'react';
import { Page } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center cursor-pointer" onClick={() => onPageChange(Page.Home)}>
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">🌱</span>
              </div>
              <span className="text-2xl font-bold font-display tracking-tight text-emerald-600">LittleSprouts</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {[
                { label: 'Curriculum', page: Page.Curriculum },
                { label: 'Safety', page: Page.Safety },
                { label: 'Virtual Tour', page: Page.VirtualTour },
                { label: 'Admissions', page: Page.Admissions },
              ].map((item) => (
                <button
                  key={item.page}
                  onClick={() => onPageChange(item.page)}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    currentPage === item.page ? 'text-emerald-600' : 'text-slate-500 hover:text-emerald-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button 
              onClick={() => onPageChange(Page.ParentPortal)}
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-sky-100 transition-all hover:scale-105 active:scale-95"
            >
              Parent Portal
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xl">🌱</span>
                </div>
                <span className="text-xl font-bold font-display text-emerald-600">LittleSprouts</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                Nurturing curiosity and kindness since 2010. We provide a premium environment where your child's natural love for learning can grow.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:border-emerald-300 transition-colors">
                  <span className="text-slate-400 font-bold text-xs">F</span>
                </div>
                <div className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center cursor-pointer hover:border-emerald-300 transition-colors">
                  <span className="text-slate-400 font-bold text-xs">IG</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Explore</h4>
              <ul className="space-y-4">
                <li><button onClick={() => onPageChange(Page.Home)} className="text-slate-500 hover:text-emerald-500 text-sm">Home</button></li>
                <li><button onClick={() => onPageChange(Page.Curriculum)} className="text-slate-500 hover:text-emerald-500 text-sm">Curriculum</button></li>
                <li><button onClick={() => onPageChange(Page.Staff)} className="text-slate-500 hover:text-emerald-500 text-sm">Our Teachers</button></li>
                <li><button onClick={() => onPageChange(Page.Admissions)} className="text-slate-500 hover:text-emerald-500 text-sm">Admissions</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-slate-800 mb-6 uppercase tracking-wider text-xs">Staff Area</h4>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => onPageChange(Page.TeacherPortal)} className="text-emerald-600 font-bold hover:text-emerald-700 text-sm flex items-center gap-2">
                    <span>👩‍🏫</span> Educator Login
                  </button>
                </li>
                <li><p className="text-sm text-slate-500">123 Playful Lane, Sunnyside District</p></li>
                <li><p className="text-sm text-slate-500">hello@littlesprouts.edu</p></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:row items-center justify-between text-xs text-slate-400">
            <p>&copy; 2024 Little Sprouts Play School. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
