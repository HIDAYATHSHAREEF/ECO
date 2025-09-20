
import React from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { Article, Difficulty } from '../types';
import { useUser } from '../context/UserContext';
import { CheckCircle2 } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const difficultyColors: { [key in Difficulty]: string } = {
  [Difficulty.Beginner]: 'bg-green-100 text-green-800',
  [Difficulty.Intermediate]: 'bg-yellow-100 text-yellow-800',
  [Difficulty.Advanced]: 'bg-red-100 text-red-800',
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { progress } = useUser();
  const isCompleted = progress.completedArticles.includes(article.id);

  return (
    <ReactRouterDOM.Link to={`/article/${article.id}`} className="block group">
      <div className="bg-card rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
        <div className="relative">
            <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
            {isCompleted && (
                <div className="absolute top-2 right-2 flex items-center bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                    <CheckCircle2 size={14} className="mr-1"/>
                    Completed
                </div>
            )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-secondary font-medium">{article.topic}</span>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColors[article.difficulty]}`}>
              {article.difficulty}
            </span>
          </div>
          <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-200 mb-2 flex-grow">{article.title}</h3>
          <p className="text-text-secondary text-sm">{article.summary}</p>
        </div>
      </div>
    </ReactRouterDOM.Link>
  );
};

export default ArticleCard;
