
import React from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { CHALLENGES } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Challenge, Difficulty } from '../types';

const difficultyColors: { [key in Difficulty]: string } = {
  [Difficulty.Beginner]: 'bg-green-100 text-green-800',
  [Difficulty.Intermediate]: 'bg-yellow-100 text-yellow-800',
  [Difficulty.Advanced]: 'bg-red-100 text-red-800',
};

const ChallengeCard: React.FC<{challenge: Challenge}> = ({ challenge }) => {
    const { progress } = useUser();
    const isCompleted = progress.completedChallenges.includes(challenge.id);

    return (
         <ReactRouterDOM.Link to={`/challenge/${challenge.id}`} className="block group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
            <div className="p-6">
                {isCompleted && (
                    <div className="absolute top-4 right-4 flex items-center bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                        <CheckCircle2 size={14} className="mr-1"/>
                        Completed
                    </div>
                )}
                <div className="text-4xl mb-4">{challenge.icon}</div>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-secondary font-medium">{challenge.topic}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${difficultyColors[challenge.difficulty]}`}>
                    {challenge.difficulty}
                    </span>
                </div>
                <h2 className="text-xl font-bold text-primary-dark mb-2">{challenge.title}</h2>
                <p className="text-text-secondary text-sm flex-grow">{challenge.description}</p>
            </div>
            <div className="mt-auto bg-gray-50 p-4 rounded-b-xl">
                 <div className="flex items-center text-primary font-semibold group-hover:underline">
                    Start Challenge <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
          </ReactRouterDOM.Link>
    )
}

const ChallengesHub: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-2">Real-World Challenges</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">Apply your knowledge to solve practical environmental problems and earn extra points.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CHALLENGES.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default ChallengesHub;
