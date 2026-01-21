
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import Safety from './components/Safety';
import Staff from './components/Staff';
import VirtualTour from './components/VirtualTour';
import AdmissionForm from './components/AdmissionForm';
import ParentPortal from './components/ParentPortal';
import TeacherPortal from './components/TeacherPortal';
import FeeCalculator from './components/FeeCalculator';
import EventsCalendar from './components/EventsCalendar';
import ChildProgressDashboard from './components/ChildProgressDashboard';
import { askAssistant } from './services/geminiService';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [showAi, setShowAi] = useState(false);
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim()) return;
    
    setIsAiLoading(true);
    const result = await askAssistant(aiQuestion);
    setAiResponse(result);
    setIsAiLoading(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return (
          <>
            <Hero onCTA={setCurrentPage} />
            <Curriculum />
            <div className="bg-sky-50 py-24">
              <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                 <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">Invest in Their Future</h2>
                 <p className="text-slate-500 max-w-xl mx-auto">Transparent pricing to help you plan your child's first step into formal education.</p>
              </div>
              <FeeCalculator />
            </div>
            <Safety />
            <EventsCalendar />
          </>
        );
      case Page.Curriculum:
        return <Curriculum />;
      case Page.Safety:
        return <Safety />;
      case Page.Staff:
        return <Staff />;
      case Page.VirtualTour:
        return <VirtualTour />;
      case Page.Admissions:
        return <AdmissionForm />;
      case Page.ParentPortal:
        return <ParentPortal onNavigate={setCurrentPage} />;
      case Page.TeacherPortal:
        return <TeacherPortal />;
      case Page.Progress:
        return <ChildProgressDashboard />;
      default:
        return <Hero onCTA={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}

      {/* AI Assistant Toggle Button */}
      <button 
        onClick={() => setShowAi(!showAi)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-emerald-500 rounded-full shadow-2xl z-[60] flex items-center justify-center hover:scale-110 active:scale-95 transition-all text-2xl"
      >
        {showAi ? '✕' : '🤖'}
      </button>

      {/* AI Assistant Modal */}
      {showAi && (
        <div className="fixed bottom-28 right-8 w-[90vw] md:w-96 bg-white rounded-[32px] shadow-2xl z-[60] overflow-hidden border border-slate-100 flex flex-col animate-in fade-in slide-in-from-bottom-10">
          <div className="bg-emerald-500 p-6 text-white">
            <h4 className="font-bold font-display text-xl">Sprout Assistant</h4>
            <p className="text-xs text-emerald-100">AI Support Powered by Gemini</p>
          </div>
          
          <div className="p-6 max-h-96 overflow-y-auto bg-slate-50">
            {aiResponse ? (
              <div className="bg-white p-4 rounded-2xl shadow-sm text-sm text-slate-600 leading-relaxed mb-4">
                {aiResponse}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-400 text-xs italic">"How safe is the campus?" or "Tell me about the curriculum."</p>
              </div>
            )}
            {isAiLoading && (
              <div className="flex items-center gap-2 text-emerald-500">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
              </div>
            )}
          </div>

          <form onSubmit={handleAiSubmit} className="p-4 border-t border-slate-100 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                className="w-full px-4 py-3 bg-slate-100 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500 outline-none pr-12"
                value={aiQuestion}
                onChange={e => setAiQuestion(e.target.value)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1.5 w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50"
                disabled={isAiLoading}
              >
                ↑
              </button>
            </div>
          </form>
        </div>
      )}
    </Layout>
  );
};

export default App;
