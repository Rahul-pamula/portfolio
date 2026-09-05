import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { reviewService } from '../../services/reviewService';
import type { ContributorReview } from '../../types/review';

export const ContributorSignal: React.FC = () => {
  const [reviews, setReviews] = useState<ContributorReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviewService.getApprovedReviews();
      setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  if (loading || reviews.length === 0) {
    return null; // Do not show fake statistics or empty state here
  }

  const averageRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="flex items-center gap-3 bg-surface border border-border px-4 py-2 rounded-full w-fit animate-in fade-in duration-500">
      <div className="flex items-center gap-1 text-yellow-500">
        <Star size={16} fill="currentColor" />
        <span className="text-sm font-bold text-text-primary ml-1">{averageRating}/5</span>
      </div>
      <div className="w-px h-4 bg-border"></div>
      <span className="text-xs font-medium text-text-muted">
        {reviews.length} contributor review{reviews.length !== 1 ? 's' : ''}
      </span>
    </div>
  );
};
