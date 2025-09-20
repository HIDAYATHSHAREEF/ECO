export enum Difficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
}

export enum Topic {
  ClimateChange = 'Climate Change',
  Water = 'Water',
  Energy = 'Energy',
  Waste = 'Waste',
  Lifestyle = 'Lifestyle',
  Technology = 'Technology',
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'mcq' | 'true-false';
  options?: string[];
  answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface TableOfContentsItem {
  id: string;
  title: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  topic: Topic;
  difficulty: Difficulty;
  content: string; // HTML content
  imageUrl: string;
  quiz: QuizQuestion[];
  tableOfContents?: TableOfContentsItem[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string; // Emoji or SVG name
}

export interface ChallengeTask {
  id: string;
  question: string;
  type: 'mcq' | 'true-false';
  options?: string[];
  answer: string;
  feedback: string;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  scenario: string;
  topic: Topic;
  difficulty: Difficulty;
  tasks: ChallengeTask[];
  points: number;
  icon: string;
}


export interface UserProgress {
  completedArticles: string[];
  completedChallenges: string[];
  quizScores: { [articleId: string]: number };
  ecoPoints: number;
  badges: string[];
  learningStreaks: {
    current: number;
    lastCompleted: string | null; // ISO date string
  };
}

export interface LeaderboardUser {
    id:string;
    name: string;
    avatar: string;
    points: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string; // Emoji
  articleIds: string[];
}