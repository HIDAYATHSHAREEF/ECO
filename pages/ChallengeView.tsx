
import React, { useState } from 'react';
// FIX: Use namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { CHALLENGES } from '../constants';
import { useUser } from '../context/UserContext';
import { ArrowLeft, CheckCircle, XCircle, Award, Zap } from 'lucide-react';

const ChallengeView: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const navigate = ReactRouterDOM.useNavigate();
  const { progress, completeChallenge } = useUser();
  const challenge = CHALLENGES.find(c => c.id === id);

  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!challenge) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Challenge not found</h2>
        <ReactRouterDOM.Link to="/challenges" className="text-primary hover:underline mt-4 inline-block">Back to Challenges</ReactRouterDOM.Link>
      </div>
    );
  }

  const handleAnswer = (taskId: string, answer: string) => {
    if (selectedAnswers[taskId]) return; // Already answered

    setSelectedAnswers(prev => ({ ...prev, [taskId]: answer }));

    const task = challenge.tasks.find(t => t.id === taskId);
    if (task && answer === task.answer) {
      // Correct answer
      if (activeTaskIndex === challenge.tasks.length - 1) {
        // Last task, challenge complete
        setIsCompleted(true);
        if (!progress.completedChallenges.includes(challenge.id)) {
            completeChallenge(challenge.id, challenge.points);
        }
      }
    }
  };

  const handleNextTask = () => {
    if (activeTaskIndex < challenge.tasks.length - 1) {
        setActiveTaskIndex(prev => prev + 1);
    }
  }

  if (isCompleted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in">
        <div className="bg-dark-card rounded-lg shadow-2xl p-8 text-center max-w-md w-full animate-slide-in-up text-dark-text">
          <Award className="w-20 h-20 mx-auto text-yellow-400" />
          <h2 className="text-3xl font-bold text-white mt-4">Challenge Complete!</h2>
          <p className="text-dark-text-secondary mt-2">You've successfully completed "{challenge.title}"</p>
          <div className="my-6">
            <p className="text-lg">You earned</p>
            <p className="text-5xl font-bold text-primary flex items-center justify-center gap-2">
              <Zap /> {challenge.points}
            </p>
            <p className="text-lg mt-1">eco-points!</p>
          </div>
          <button
            onClick={() => navigate('/challenges')}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Back to Challenges
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in text-dark-text">
       <button onClick={() => navigate('/challenges')} className="flex items-center gap-2 text-primary hover:underline mb-6 font-semibold">
            <ArrowLeft size={20} />
            Back to Challenges
        </button>

      <div className="bg-dark-card border border-dark-border rounded-lg p-8 mb-8">
        <div className="flex gap-4 items-center mb-4">
            <span className="text-5xl">{challenge.icon}</span>
            <div>
                <h1 className="text-3xl font-bold text-white">{challenge.title}</h1>
                <p className="text-dark-text-secondary">{challenge.topic} | {challenge.difficulty}</p>
            </div>
        </div>
        <p className="text-lg font-semibold mb-2">The Scenario:</p>
        <p className="text-dark-text-secondary">{challenge.scenario}</p>
      </div>

      <div className="space-y-4">
        {challenge.tasks.map((task, index) => {
            const userAnswer = selectedAnswers[task.id];
            const isCorrect = userAnswer === task.answer;
            const isLocked = index > activeTaskIndex;
            const isActive = index === activeTaskIndex;

            if (isLocked) return null;

            return (
                <div key={task.id} className={`bg-dark-card border border-dark-border rounded-lg p-6 transition-all duration-500 ${!isActive ? 'opacity-60' : ''}`}>
                    <h3 className="font-bold text-xl text-white mb-4">Task {index + 1}: {task.question}</h3>
                    <div className="space-y-3">
                        {task.options?.map((option) => {
                            const isSelected = userAnswer === option;
                            let buttonClass = 'border-dark-border hover:border-primary';
                            if (userAnswer) {
                                if (option === task.answer) {
                                    buttonClass = 'bg-green-500/20 border-green-500 text-white';
                                } else if (isSelected) {
                                    buttonClass = 'bg-red-500/20 border-red-500 text-white';
                                }
                            }
                            
                            return (
                                <button
                                key={option}
                                onClick={() => handleAnswer(task.id, option)}
                                disabled={!!userAnswer}
                                className={`w-full text-left p-4 rounded-lg border-2 transition duration-200 flex items-center justify-between disabled:cursor-not-allowed ${buttonClass}`}
                                >
                                <span>{option}</span>
                                {userAnswer && isSelected && (isCorrect ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-500"/>)}
                                {userAnswer && !isSelected && option === task.answer && <CheckCircle className="text-green-500"/>}
                                </button>
                            );
                        })}
                         {task.type === 'true-false' && ['True', 'False'].map((option) => {
                            const isSelected = userAnswer === option;
                            let buttonClass = 'border-dark-border hover:border-primary';
                            if (userAnswer) {
                                if (option === task.answer) {
                                    buttonClass = 'bg-green-500/20 border-green-500 text-white';
                                } else if (isSelected) {
                                    buttonClass = 'bg-red-500/20 border-red-500 text-white';
                                }
                            }
                            return (
                                <button
                                key={option}
                                onClick={() => handleAnswer(task.id, option)}
                                disabled={!!userAnswer}
                                className={`w-full text-left p-4 rounded-lg border-2 transition duration-200 flex items-center justify-between disabled:cursor-not-allowed ${buttonClass}`}
                                >
                                <span>{option}</span>
                                {userAnswer && isSelected && (isCorrect ? <CheckCircle className="text-green-500"/> : <XCircle className="text-red-500"/>)}
                                </button>
                            );
                        })}
                    </div>
                    {userAnswer && (
                        <div className={`mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'}`}>
                            <p className="font-semibold">{isCorrect ? 'Correct!' : 'Not quite.'}</p>
                            <p className="text-sm">{task.feedback}</p>
                            {isCorrect && isActive && activeTaskIndex < challenge.tasks.length - 1 && (
                                <button onClick={handleNextTask} className="mt-3 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-lg">
                                    Next Task
                                </button>
                            )}
                        </div>
                    )}
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default ChallengeView;
