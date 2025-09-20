
import React from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { LEARNING_PATHS } from '../constants';
import { ArrowRight } from 'lucide-react';

const LearningPaths: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-2">Choose Your Learning Path</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Follow our guided paths to build your knowledge from the ground up or dive into advanced topics.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {LEARNING_PATHS.map((path) => (
          <ReactRouterDOM.Link to={`/path/${path.id}`} key={path.id} className="block group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 transform hover:-translate-y-2">
            <div className="flex flex-col h-full">
              <div className="text-5xl mb-4">{path.icon}</div>
              <h2 className="text-2xl font-bold text-primary-dark mb-3">{path.title}</h2>
              <p className="text-text-secondary mb-6 flex-grow">{path.description}</p>
              <div className="flex items-center text-primary font-semibold group-hover:underline">
                Start Path <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </ReactRouterDOM.Link>
        ))}
      </div>
    </div>
  );
};

export default LearningPaths;
