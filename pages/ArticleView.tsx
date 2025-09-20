
import React, { useState, useEffect, useRef } from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { ARTICLES } from '../constants';
import { Article, Difficulty, TableOfContentsItem } from '../types';
import QuizModal from '../components/QuizModal';
import { ArrowLeft, Clock, List } from 'lucide-react';

const difficultyColors: { [key in Difficulty]: string } = {
  [Difficulty.Beginner]: 'bg-green-100 text-green-800',
  [Difficulty.Intermediate]: 'bg-yellow-100 text-yellow-800',
  [Difficulty.Advanced]: 'bg-red-100 text-red-800',
};

const TableOfContents: React.FC<{toc: TableOfContentsItem[]}> = ({ toc }) => (
    <aside className="lg:col-span-1 lg:sticky top-24 self-start bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><List size={20}/> Table of Contents</h3>
        <ul className="space-y-2">
            {toc.map(item => (
                <li key={item.id}>
                    <a href={`#${item.id}`} className="text-text-secondary hover:text-primary hover:underline transition-colors">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    </aside>
);


const ArticleView: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const navigate = ReactRouterDOM.useNavigate();
  const article = ARTICLES.find(a => a.id === id);
  
  const [timeSpent, setTimeSpent] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    window.scrollTo(0, 0); // scroll to top on new article
    return () => clearInterval(timer);
  }, [id]);
  
  if (!article) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <ReactRouterDOM.Link to="/" className="text-primary hover:underline mt-4 inline-block">Back to Knowledge Hub</ReactRouterDOM.Link>
      </div>
    );
  }

  const handleFinishReading = () => {
    setShowQuiz(true);
  };

  const handleCloseQuiz = () => {
    setShowQuiz(false);
    navigate(-1); // Go back to previous page (hub or path view)
  }

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-primary hover:underline mb-6 font-semibold">
            <ArrowLeft size={20} />
            Back
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {article.tableOfContents && article.tableOfContents.length > 0 && <TableOfContents toc={article.tableOfContents} />}
            
            <article className={`bg-white rounded-lg shadow-lg p-6 sm:p-10 ${article.tableOfContents && article.tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                <div className="flex justify-between items-start mb-4">
                    <span className="text-secondary font-semibold">{article.topic}</span>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${difficultyColors[article.difficulty]}`}>{article.difficulty}</span>
                </div>
                <h1 className="text-4xl font-bold text-text-primary mb-4">{article.title}</h1>
                <div className="flex items-center text-text-secondary mb-6">
                    <Clock size={16} className="mr-2"/>
                    <span>Time spent reading: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s</span>
                </div>
                <img src={article.imageUrl} alt={article.title} className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-8"/>
                <div
                ref={contentRef}
                className="prose lg:prose-xl max-w-none text-text-primary article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
                />
                <div className="mt-12 text-center">
                    <button 
                        onClick={handleFinishReading}
                        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-10 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
                    >
                        I'm done reading, start the quiz!
                    </button>
                </div>
            </article>
        </div>
        {showQuiz && <QuizModal article={article} onClose={handleCloseQuiz} />}
    </div>
  );
};

export default ArticleView;
