
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { UserProgress, Badge } from '../types';
import { BADGES, ARTICLES } from '../constants';

const initialProgress: UserProgress = {
  completedArticles: [],
  completedChallenges: [],
  quizScores: {},
  ecoPoints: 0,
  badges: [],
  learningStreaks: { current: 0, lastCompleted: null },
};

interface UserContextType {
  progress: UserProgress;
  addPoints: (points: number) => void;
  completeArticle: (articleId: string, score: number) => void;
  completeChallenge: (challengeId: string, points: number) => void;
  getBadgeDetails: (badgeId: string) => Badge | undefined;
  getCompletedArticlesCountByTopic: (topic: string) => number;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const savedProgress = localStorage.getItem('userProgress');
      return savedProgress ? JSON.parse(savedProgress) : initialProgress;
    } catch (error) {
      console.error('Could not parse user progress from localStorage', error);
      return initialProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(progress));
  }, [progress]);

  const addPoints = (points: number) => {
    setProgress(prev => ({ ...prev, ecoPoints: prev.ecoPoints + points }));
  };

  const getBadgeDetails = (badgeId: string) => {
    return BADGES.find(b => b.id === badgeId);
  }

  const getCompletedArticlesCountByTopic = (topic: string) => {
    return progress.completedArticles.filter(articleId => {
        const article = ARTICLES.find(a => a.id === articleId);
        return article && article.topic === topic;
    }).length;
  }

  const completeChallenge = (challengeId: string, points: number) => {
    setProgress(prev => {
       const newCompletedChallenges = prev.completedChallenges.includes(challengeId)
        ? prev.completedChallenges
        : [...prev.completedChallenges, challengeId];

      return {
        ...prev,
        completedChallenges: newCompletedChallenges,
        ecoPoints: prev.ecoPoints + points,
      }
    });
  }

  const completeArticle = (articleId: string, score: number) => {
    setProgress(prev => {
      // Avoid duplicates
      const newCompletedArticles = prev.completedArticles.includes(articleId)
        ? prev.completedArticles
        : [...prev.completedArticles, articleId];

      const newScores = { ...prev.quizScores, [articleId]: score };
      const pointsEarned = 50 + Math.round(score * 50); // 50 for reading, up to 50 for quiz

      // Streak logic
      const today = new Date().toISOString().split('T')[0];
      let newStreak = prev.learningStreaks.current;
      if (prev.learningStreaks.lastCompleted !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayISO = yesterday.toISOString().split('T')[0];
        
        if (prev.learningStreaks.lastCompleted === yesterdayISO) {
          newStreak++; // Continue streak
        } else {
          newStreak = 1; // Reset streak
        }
      }

      // Badge logic
      const newBadges = [...prev.badges];
      if (newCompletedArticles.length >= 5 && !newBadges.includes('b1')) newBadges.push('b1');
      
      const perfectScores = Object.values(newScores).filter(s => s === 1).length;
      if (perfectScores >= 3 && !newBadges.includes('b2')) newBadges.push('b2');

      if (newStreak >= 3 && !newBadges.includes('b5')) newBadges.push('b5');

      const waterArticles = ARTICLES.filter(a => a.topic === 'Water');
      const completedWaterArticles = newCompletedArticles.filter(id => waterArticles.some(a => a.id === id));
      if(completedWaterArticles.length === waterArticles.length && !newBadges.includes('b3')) newBadges.push('b3');


      return {
        ...prev,
        completedArticles: newCompletedArticles,
        quizScores: newScores,
        ecoPoints: prev.ecoPoints + pointsEarned,
        badges: newBadges,
        learningStreaks: { current: newStreak, lastCompleted: today }
      };
    });
  };

  return (
    <UserContext.Provider value={{ progress, addPoints, completeArticle, completeChallenge, getBadgeDetails, getCompletedArticlesCountByTopic }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};