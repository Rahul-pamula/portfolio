import React, { useEffect, useState } from 'react';
import { ReviewCard } from './ReviewCard';
import { ReviewForm } from './ReviewForm';
import { reviewService } from '../../services/reviewService';
import type { ContributorReview } from '../../types/review';
import { MessageSquare, ArrowRight, ArrowUp } from 'lucide-react';

export const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<ContributorReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await reviewService.getApprovedReviews();
      setReviews(data);
      setLoading(false);
    };
    fetchReviews();
  }, []);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);
  const hasMore = reviews.length > 6;

  if (loading) {
    return (
      <section className="py-8 border-b border-border/50 animate-pulse">
        <h2 className="text-xl font-semibold text-text-primary mb-6">Contributor Voices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-48 bg-surface border border-border rounded-xl"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Contributor Voices</h2>
          <p className="text-sm text-white mt-1">Feedback from developers and maintainers I've collaborated with.</p>
        </div>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="btn-primary shrink-0"
        >
          <MessageSquare size={16} />
          Leave a review
        </button>
      </div>

      {reviews.length === 0 ? (
        <div className="card-premium p-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="w-12 h-12 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted">
            <MessageSquare size={24} />
          </div>
          <div>
            <h3 className="text-text-primary font-medium">No reviews yet</h3>
            <p className="text-sm text-text-muted mt-1">Be one of the first contributors to leave feedback.</p>
          </div>
          <button 
            onClick={() => setIsFormOpen(true)}
            className="text-accent hover:text-accent-hover text-sm font-medium flex items-center gap-1 transition-colors mt-2"
          >
            Leave a review <ArrowRight size={14} />
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          {hasMore && (
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-text-secondary hover:text-text-primary text-sm font-medium flex items-center gap-2 transition-colors group"
              >
                {showAll ? (
                  <>Show less <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
                ) : (
                  <>See more <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" /></>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {isFormOpen && (
        <ReviewForm onClose={() => setIsFormOpen(false)} />
      )}
    </section>
  );
};
