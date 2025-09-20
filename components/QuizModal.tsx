
import React, { useState, useEffect } from 'react';
import { QuizQuestion, Article } from '../types';
import { useUser } from '../context/UserContext';
import { CheckCircle, XCircle, Award, BrainCircuit, RefreshCw } from 'lucide-react';
import { generateQuizQuestion } from '../services/geminiService';

interface QuizModalProps {
  article: Article;
  onClose: () => void;
}

const QuizModal: React.FC<QuizModalProps> = ({ article, onClose }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>(article.quiz);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const { completeArticle } = useUser();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    if (answer === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      const finalScore = (score + (selectedAnswer === currentQuestion.answer ? (isAnswered ? 1 : 0) : 0)) / questions.length;
      completeArticle(article.id, finalScore);
    }
  };
  
  const handleGenerateQuestion = async () => {
    setIsGenerating(true);
    try {
      const newQuestion = await generateQuizQuestion(article.content);
      if (newQuestion) {
        setQuestions(prev => [...prev, { ...newQuestion, id: `gen-${Date.now()}` }]);
      }
    } catch(error) {
        console.error("Failed to generate question:", error);
        alert("Sorry, we couldn't generate a new question right now. Please try again later.");
    } finally {
      setIsGenerating(false);
    }
  };


  if (showResults) {
    const finalScore = score / questions.length;
    const points = 50 + Math.round(finalScore * 50);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
        <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-md w-full animate-slide-in-up">
          <Award className="w-20 h-20 mx-auto text-yellow-400" />
          <h2 className="text-3xl font-bold text-primary-dark mt-4">Quiz Complete!</h2>
          <p className="text-text-secondary mt-2">You've completed the quiz for "{article.title}"</p>
          <div className="my-6">
            <p className="text-lg">Your Score:</p>
            <p className="text-5xl font-bold text-secondary">
              {Math.round(finalScore * 100)}%
            </p>
            <p className="text-lg mt-4">You earned <span className="font-bold text-primary">{points}</span> eco-points! 🌳</p>
          </div>
          <button
            onClick={onClose}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-2xl p-6 sm:p-8 max-w-2xl w-full animate-slide-in-up">
        <div className="flex justify-between items-start">
            <div>
                <h2 className="text-2xl font-bold text-primary-dark">Test Your Knowledge</h2>
                <p className="text-text-secondary mt-1">Question {currentQuestionIndex + 1} of {questions.length}</p>
            </div>
            <button
              onClick={handleGenerateQuestion}
              disabled={isGenerating}
              className="flex items-center gap-2 bg-secondary/10 text-secondary hover:bg-secondary/20 font-semibold py-2 px-4 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? <RefreshCw className="animate-spin h-5 w-5" /> : <BrainCircuit size={20} />}
              <span className="hidden sm:inline">{isGenerating ? 'Generating...' : 'Bonus Question'}</span>
            </button>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-text-primary mb-4">{currentQuestion.question}</p>
          <div className="space-y-3">
            {currentQuestion.type === 'mcq' && currentQuestion.options?.map((option, index) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = option === selectedAnswer;
              let buttonClass = 'border-gray-300 hover:border-secondary hover:bg-secondary/5';
              if (isAnswered) {
                if (isCorrect) {
                  buttonClass = 'bg-green-100 border-green-500 text-green-800';
                } else if (isSelected) {
                  buttonClass = 'bg-red-100 border-red-500 text-red-800';
                }
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition duration-200 flex items-center justify-between ${buttonClass}`}
                >
                  <span>{option}</span>
                  {isAnswered && isSelected && (isCorrect ? <CheckCircle className="text-green-600"/> : <XCircle className="text-red-600"/>)}
                  {isAnswered && !isSelected && isCorrect && <CheckCircle className="text-green-600"/>}
                </button>
              );
            })}
            {currentQuestion.type === 'true-false' && ['True', 'False'].map((option, index) => {
                const isCorrect = option === currentQuestion.answer;
                const isSelected = option === selectedAnswer;
                let buttonClass = 'border-gray-300 hover:border-secondary hover:bg-secondary/5';
                if (isAnswered) {
                    if (isCorrect) {
                        buttonClass = 'bg-green-100 border-green-500 text-green-800';
                    } else if (isSelected) {
                        buttonClass = 'bg-red-100 border-red-500 text-red-800';
                    }
                }
                return (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-lg border-2 transition duration-200 flex items-center justify-between ${buttonClass}`}
                    >
                    <span>{option}</span>
                    {isAnswered && isSelected && (isCorrect ? <CheckCircle className="text-green-600"/> : <XCircle className="text-red-600"/>)}
                    {isAnswered && !isSelected && isCorrect && <CheckCircle className="text-green-600"/>}
                    </button>
                );
            })}
          </div>
        </div>

        {isAnswered && (
          <div className="mt-6 text-right">
            <button
              onClick={handleNext}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-8 rounded-lg transition duration-300"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizModal;
