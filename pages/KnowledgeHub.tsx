
import React, { useState, useMemo } from 'react';
import { ARTICLES, FEATURED_ARTICLE_ID } from '../constants';
import { Article, Topic } from '../types';
import ArticleCard from '../components/ArticleCard';
import { Search, Star } from 'lucide-react';

const KnowledgeHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | 'All'>('All');

  const featuredArticle = ARTICLES.find(a => a.id === FEATURED_ARTICLE_ID);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter(article => {
      const matchesTopic = selectedTopic === 'All' || article.topic === selectedTopic;
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            article.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesTopic && matchesSearch && article.id !== FEATURED_ARTICLE_ID;
    });
  }, [searchTerm, selectedTopic]);

  const topics: ('All' | Topic)[] = ['All', ...Object.values(Topic)];

  return (
    <div className="animate-fade-in">
      {featuredArticle && (
        <div className="mb-12 bg-card p-6 rounded-xl shadow-lg border border-yellow-300 flex flex-col md:flex-row gap-6 items-center">
            <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full md:w-1/3 h-64 object-cover rounded-lg"/>
            <div className="flex-1">
                <div className="flex items-center gap-2 text-yellow-500 font-semibold mb-2">
                    <Star size={20} fill="currentColor"/>
                    <span>Featured Article of the Week</span>
                </div>
                <h2 className="text-3xl font-bold text-text-primary mb-2">{featuredArticle.title}</h2>
                <p className="text-text-secondary mb-4">{featuredArticle.summary}</p>
                <a href={`#/article/${featuredArticle.id}`} className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                    Read Now
                </a>
            </div>
        </div>
      )}

      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <h1 className="text-3xl font-bold text-text-primary">Knowledge Hub</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-64 focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
          {topics.map(topic => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                selectedTopic === topic
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-secondary hover:bg-gray-100 border'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
       {filteredArticles.length === 0 && (
          <div className="text-center col-span-full py-12">
            <p className="text-text-secondary text-lg">No articles found. Try adjusting your filters!</p>
          </div>
       )}
    </div>
  );
};

export default KnowledgeHub;
