import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../../components/glass/GlassCard';
import { GlassButton } from '../../components/glass/GlassButton';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const questions = [
  {
    question: 'What genres do you love?',
    options: ['Rock', 'Pop', 'Hip-Hop', 'Electronic', 'Jazz', 'Classical']
  },
  {
    question: 'How many shows do you attend per year?',
    options: ['1-2', '3-5', '6-10', '11-20', '20+']
  },
  {
    question: 'What's your merch style?',
    options: ['T-shirts', 'Hoodies', 'Vinyl/CDs', 'Posters', 'Limited Edition', 'Not interested']
  },
  {
    question: 'Preferred ticket type?',
    options: ['General Admission', 'Reserved Seating', 'VIP', 'Front Row', 'Any is fine']
  },
  {
    question: 'How do you discover new events?',
    options: ['Social Media', 'Email', 'Friends', 'Artist Websites', 'Event Apps']
  }
];

export function Quiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 200);
    } else {
      setTimeout(() => {
        navigate('/fan');
      }, 300);
    }
  };

  const handleSkip = () => {
    navigate('/fan');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Back Button */}
        <button
          onClick={() => currentQuestion > 0 ? setCurrentQuestion(currentQuestion - 1) : navigate('/onboarding/fan-signup')}
          className="flex items-center gap-2 text-[rgba(255,255,255,0.65)] hover:text-[rgba(255,255,255,0.92)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6C3BFF] to-[#9B6BFF] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-[rgba(255,255,255,0.92)] mb-2">
              Help Hindsight Learn About You
            </h1>
            <p className="text-[rgba(255,255,255,0.65)]">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #6C3BFF 0%, #00C2A0 100%)'
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <GlassCard size="lg" className="mb-6">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-[rgba(255,255,255,0.92)] mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="p-4 rounded-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[#6C3BFF] transition-all text-left group"
                  >
                    <span className="text-[rgba(255,255,255,0.92)] group-hover:text-white">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </GlassCard>

          {/* Skip */}
          <div className="text-center">
            <button
              onClick={handleSkip}
              className="text-sm text-[rgba(255,255,255,0.40)] hover:text-[rgba(255,255,255,0.65)] transition-colors"
            >
              Skip for now — Hindsight will learn anyway
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
