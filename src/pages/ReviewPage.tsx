import React from 'react';
import { MacLayout } from '../layout/MacLayout';
import { ReviewForm } from '../components/reviews/ReviewForm';
import { ArrowLeft } from 'lucide-react';

export const ReviewPage: React.FC = () => {
  return (
    <MacLayout>
      <div className="flex-1 overflow-y-auto scrollbar-thin relative w-full h-full flex flex-col items-center justify-center p-4">
        
        <div className="w-full max-w-md mb-8 text-center animate-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Rahul Pamula</h1>
          <h2 className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">Contributor Review</h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-[280px] mx-auto">
            Your feedback helps me improve and highlights the people I've had the opportunity to build with.
          </p>
        </div>

        <div className="w-full animate-in slide-in-from-bottom-8 duration-700">
          <ReviewForm isStandalone={true} />
        </div>

        <div className="mt-8 animate-in fade-in duration-1000 delay-300">
          <a href="/" className="text-text-muted hover:text-text-primary text-sm flex items-center gap-2 transition-colors">
            <ArrowLeft size={16} />
            Back to portfolio
          </a>
        </div>

      </div>
    </MacLayout>
  );
};
