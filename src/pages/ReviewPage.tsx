import React from 'react';
import { MacLayout } from '../layout/MacLayout';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ArrowLeft } from 'lucide-react';

export const ReviewPage: React.FC = () => {
  return (
    <MacLayout>
      <div className="flex-1 overflow-y-auto scrollbar-thin relative w-full h-full flex flex-col items-center justify-center p-4">
        
        <div className="w-full max-w-md mb-8 text-center animate-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-2">Rahul Pamula</h1>
          <h2 className="text-accent text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-md">Contributor Review</h2>
          <p className="text-white/90 font-medium text-sm leading-relaxed max-w-[280px] mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your feedback helps me improve and highlights the people I've had the opportunity to build with.
          </p>
        </div>

        <div className="w-full animate-in slide-in-from-bottom-8 duration-700">
          <ReviewForm isStandalone={true} />
        </div>

        <div className="mt-8 animate-in fade-in duration-1000 delay-300">
          <a href="/" className="text-white/70 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors drop-shadow-md">
            <ArrowLeft size={16} />
            Back to portfolio
          </a>
        </div>

      </div>
    </MacLayout>
  );
};
