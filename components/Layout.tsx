
import React, { ReactNode } from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { BookOpen, User, Zap, Milestone, Target } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { progress } = useUser();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-md transition-colors duration-200 text-text-secondary hover:bg-green-100";
    const activeClasses = "bg-primary text-white";
    return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <ReactRouterDOM.NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-primary-dark">
              <LeafIcon />
              <span>EcoLearner</span>
            </ReactRouterDOM.NavLink>
            <div className="flex items-center gap-4">
              <ReactRouterDOM.NavLink to="/" end className={getNavLinkClass}>
                <BookOpen size={20} />
                <span className="hidden sm:inline">Knowledge Hub</span>
              </ReactRouterDOM.NavLink>
              <ReactRouterDOM.NavLink to="/paths" className={getNavLinkClass}>
                <Milestone size={20} />
                <span className="hidden sm:inline">Learning Paths</span>
              </ReactRouterDOM.NavLink>
               <ReactRouterDOM.NavLink to="/challenges" className={getNavLinkClass}>
                <Target size={20} />
                <span className="hidden sm:inline">Challenges</span>
              </ReactRouterDOM.NavLink>
              <ReactRouterDOM.NavLink to="/profile" className={getNavLinkClass}>
                <User size={20} />
                <span className="hidden sm:inline">Profile</span>
              </ReactRouterDOM.NavLink>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 font-semibold px-3 py-1.5 rounded-full">
                <Zap size={16} className="text-yellow-500"/>
                <span>{progress.ecoPoints}</span>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 4 13V8a2 2 0 0 1 2-2h4l2-3 2 3h4a2 2 0 0 1 2 2v5a7 7 0 0 1-7 7Zm0 0v-5" />
  </svg>
);


export default Layout;