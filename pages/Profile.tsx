
import React from 'react';
import { useUser } from '../context/UserContext';
import { LEADERBOARD_DATA, LEARNING_PATHS } from '../constants';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { Award, BookOpen, Target, Zap, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';


const Profile: React.FC = () => {
  const { progress, getBadgeDetails } = useUser();

  const totalArticles = progress.completedArticles.length;
  const quizScoresArray = Object.values(progress.quizScores);
  const averageScore = quizScoresArray.length > 0
    ? (quizScoresArray.reduce((acc, score) => acc + score, 0) / quizScoresArray.length) * 100
    : 0;

  return (
    <div className="bg-dark-bg text-dark-text min-h-full p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-4">
          <img src="https://i.pravatar.cc/150?u=currentUser" alt="User Avatar" className="w-16 h-16 rounded-full border-4 border-primary"/>
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <p className="text-dark-text-secondary">Ready to continue your green journey?</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:flex gap-4">
          <HeaderStat icon={<Zap className="text-yellow-400"/>} value={progress.ecoPoints.toLocaleString()} label="Eco-Points" />
          <HeaderStat icon={<BookOpen className="text-sky-400"/>} value={totalArticles} label="Articles Read" />
          <HeaderStat icon={<TrendingUp className="text-green-400"/>} value={`${progress.learningStreaks.current} Days`} label="Streak" />
          <HeaderStat icon={<Target className="text-red-400"/>} value={`${averageScore.toFixed(0)}%`} label="Avg. Score" />
        </div>
      </div>

      {/* Learning Paths */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Your Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARNING_PATHS.map(path => {
            const articlesInPath = path.articleIds.length;
            const completedInPath = path.articleIds.filter(id => progress.completedArticles.includes(id)).length;
            const pathProgress = articlesInPath > 0 ? (completedInPath / articlesInPath) * 100 : 0;
            
            return (
              <ReactRouterDOM.Link to={`/path/${path.id}`} key={path.id} className="block group">
                <div className="bg-dark-card border border-dark-border rounded-lg p-6 h-full flex flex-col hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{path.icon}</div>
                     <span className="text-sm font-semibold text-dark-text-secondary">{`${completedInPath} / ${articlesInPath} Completed`}</span>
                  </div>
                  <div className="flex-grow mt-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{path.title}</h3>
                    <p className="text-dark-text-secondary text-sm mt-1">{path.description}</p>
                  </div>
                   <div className="mt-4">
                      <div className="w-full bg-dark-border rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{width: `${pathProgress}%`}}></div>
                      </div>
                  </div>
                </div>
              </ReactRouterDOM.Link>
            )
          })}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Badges */}
        <div className="lg:col-span-1 bg-dark-card border border-dark-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Award/> Badges Earned</h2>
          {progress.badges.length > 0 ? (
            <div className="space-y-4">
              {progress.badges.map(badgeId => {
                const badge = getBadgeDetails(badgeId);
                return badge ? (
                  <div key={badge.id} className="flex items-center gap-4 bg-dark-bg p-3 rounded-md">
                    <span className="text-3xl">{badge.icon}</span>
                    <div>
                      <h3 className="font-semibold text-dark-text">{badge.name}</h3>
                      <p className="text-sm text-dark-text-secondary">{badge.description}</p>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <p className="text-dark-text-secondary">Keep learning to earn new badges!</p>
          )}
        </div>

        {/* Leaderboard */}
        <div className="lg:col-span-2 bg-dark-card border border-dark-border rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Leaderboard</h2>
          <div className="space-y-2">
              {LEADERBOARD_DATA.map((user, index) => (
                  <div key={user.id} className="flex items-center p-3 rounded-lg bg-dark-bg">
                      <span className="font-bold text-lg w-8 text-dark-text-secondary">{index + 1}</span>
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mx-4" />
                      <span className="flex-grow font-semibold text-dark-text">{user.name}</span>
                      <div className="flex items-center gap-1 font-bold text-yellow-400">
                        <Zap size={16}/>
                        <span>{user.points.toLocaleString()}</span>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface HeaderStatProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
}

const HeaderStat: React.FC<HeaderStatProps> = ({ icon, value, label }) => (
    <div className="bg-dark-card border border-dark-border p-3 rounded-lg flex items-center gap-3">
        <div className="text-2xl">
            {icon}
        </div>
        <div>
            <p className="text-xl font-bold text-dark-text">{value}</p>
            <p className="text-xs text-dark-text-secondary">{label}</p>
        </div>
    </div>
);

export default Profile;
