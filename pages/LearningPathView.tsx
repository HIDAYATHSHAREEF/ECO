
import React from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { LEARNING_PATHS, ARTICLES } from '../constants';
import { useUser } from '../context/UserContext';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const LearningPathView: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { progress } = useUser();
  const path = LEARNING_PATHS.find(p => p.id === id);

  if (!path) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Learning Path not found</h2>
        <ReactRouterDOM.Link to="/paths" className="text-primary hover:underline mt-4 inline-block">Back to Learning Paths</ReactRouterDOM.Link>
      </div>
    );
  }

  const pathArticles = path.articleIds.map(articleId => ARTICLES.find(a => a.id === articleId)).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <ReactRouterDOM.Link to="/paths" className="flex items-center gap-2 text-primary hover:underline mb-8 font-semibold">
        <ArrowLeft size={20} />
        Back to All Paths
      </ReactRouterDOM.Link>
      
      <div className="text-center mb-10">
        <div className="text-6xl mb-4">{path.icon}</div>
        <h1 className="text-4xl font-bold text-text-primary">{path.title}</h1>
        <p className="text-text-secondary mt-2 text-lg">{path.description}</p>
      </div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute top-0 h-full w-0.5 bg-gray-200" style={{left: '2.5rem'}}></div>
        
        {pathArticles.map((article, index) => {
          if (!article) return null;
          const isCompleted = progress.completedArticles.includes(article.id);
          
          return (
            <div key={article.id} className="relative mb-8">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center font-bold text-text-secondary" style={{left: '-1rem'}}>
                {index + 1}
              </div>
              <ReactRouterDOM.Link to={`/article/${article.id}`} className="block ml-10">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-text-primary">{article.title}</h3>
                    {isCompleted && (
                      <div className="flex items-center text-primary font-semibold text-sm">
                        <CheckCircle2 size={16} className="mr-1"/>
                        Completed
                      </div>
                    )}
                  </div>
                  <p className="text-text-secondary mt-2 text-sm">{article.summary}</p>
                </div>
              </ReactRouterDOM.Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPathView;
