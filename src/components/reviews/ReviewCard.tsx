import React from 'react';
import type { ContributorReview } from '../../types/review';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  review: ContributorReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="card-premium p-6 flex flex-col gap-4 h-full">
      <div className="flex gap-1 text-yellow-500">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={16} 
            fill={star <= review.rating ? "currentColor" : "none"} 
            className={star <= review.rating ? "text-yellow-500" : "text-border"} 
          />
        ))}
      </div>
      
      <p className="text-text-primary text-sm leading-relaxed flex-grow italic whitespace-pre-wrap">
        "{review.comment}"
      </p>
      
      <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
        <img 
          src={review.avatar || '/assets/default-avatar.png'} 
          alt={`${review.name || review.github}'s avatar`} 
          className="w-10 h-10 rounded-full border border-border object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/default-avatar.png';
          }}
        />
        
        <div className="flex items-center min-w-0 flex-1">
          <a 
            href={`https://github.com/${review.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-text-primary truncate hover:text-accent transition-colors"
            title={`${review.name || review.github}'s GitHub profile`}
          >
            {review.name || review.github}
          </a>
        </div>
      </div>
    </div>
  );
};
