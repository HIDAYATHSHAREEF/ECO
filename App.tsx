
import React from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import KnowledgeHub from './pages/KnowledgeHub';
import ArticleView from './pages/ArticleView';
import Profile from './pages/Profile';
import Layout from './components/Layout';
import { UserProvider } from './context/UserContext';
import LearningPaths from './pages/LearningPaths';
import LearningPathView from './pages/LearningPathView';
import ChallengesHub from './pages/ChallengesHub';
import ChallengeView from './pages/ChallengeView';

const App: React.FC = () => {
  return (
    <UserProvider>
      <ReactRouterDOM.HashRouter>
        <Layout>
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<KnowledgeHub />} />
            <ReactRouterDOM.Route path="/paths" element={<LearningPaths />} />
            <ReactRouterDOM.Route path="/path/:id" element={<LearningPathView />} />
            <ReactRouterDOM.Route path="/challenges" element={<ChallengesHub />} />
            <ReactRouterDOM.Route path="/challenge/:id" element={<ChallengeView />} />
            <ReactRouterDOM.Route path="/article/:id" element={<ArticleView />} />
            <ReactRouterDOM.Route path="/profile" element={<Profile />} />
          </ReactRouterDOM.Routes>
        </Layout>
      </ReactRouterDOM.HashRouter>
    </UserProvider>
  );
};

export default App;