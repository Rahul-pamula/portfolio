import React, { useState } from 'react';
import { Star, X, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { reviewService } from '../../services/reviewService';

interface ReviewFormProps {
  onClose?: () => void;
  isStandalone?: boolean;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onClose, isStandalone = false }) => {
  const [step, setStep] = useState<'form' | 'loading' | 'success' | 'error'>('form');
  
  const [github, setGithub] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [displayConsent, setDisplayConsent] = useState(false);
  
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [profileData, setProfileData] = useState<{ avatar_url: string; name: string; login: string } | null>(null);

  const handleGithubBlur = async () => {
    const cleanUser = github.trim().replace(/^@/, '');
    if (!cleanUser) {
      setProfileData(null);
      setProfileError(false);
      return;
    }

    if (profileData && profileData.login.toLowerCase() === cleanUser.toLowerCase()) {
      return; // Already fetched
    }

    setProfileLoading(true);
    setProfileError(false);

    const data = await reviewService.getGitHubProfile(cleanUser);
    
    if (data) {
      setProfileData(data);
      setProfileError(false);
      setGithub(data.login); // normalize
    } else {
      setProfileData(null);
      setProfileError(true);
    }
    
    setProfileLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!github.trim() || rating === 0 || !comment.trim()) {
      return;
    }

    setStep('loading');

    const success = await reviewService.submitReview({
      github: profileData?.login || github.trim().replace(/^@/, ''),
      name: profileData?.name || '',
      avatar: profileData?.avatar_url || '/assets/default-avatar.png',
      rating,
      comment: comment.trim(),
      displayConsent,
    });

    if (success) {
      setStep('success');
    } else {
      setStep('error');
    }
  };

  return (
    <div className={isStandalone ? "w-full max-w-md mx-auto" : "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"}>
      <div className={`card-premium w-full p-6 relative shadow-2xl ${!isStandalone ? 'animate-in zoom-in-95 duration-200 max-w-md' : ''}`}>
        
        {!isStandalone && onClose && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}

        {step === 'form' && (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-2">
            <div className="text-center mb-2">
              <h3 className="text-xl font-bold text-text-primary">Leave a review</h3>
              <p className="text-sm text-text-muted mt-1">Takes about 1 minute.</p>
            </div>

            {/* GitHub Username */}
            <div className="flex flex-col gap-2">
              <label htmlFor="github" className="text-sm font-medium text-text-primary">
                GitHub username <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">@</span>
                <input 
                  id="github"
                  type="text"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  onBlur={handleGithubBlur}
                  className="w-full bg-surface border border-border rounded-md py-2 pl-8 pr-4 text-text-primary focus:outline-none focus:border-accent transition-colors"
                  placeholder="username"
                  required
                />
                {profileLoading && (
                  <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-text-muted" />
                )}
              </div>
              
              {/* Profile Preview */}
              {profileData && (
                <div className="flex items-center gap-3 mt-2 p-2 rounded-md bg-accent/5 border border-accent/20 animate-in fade-in slide-in-from-top-2">
                  <img src={profileData.avatar_url} alt="GitHub avatar" className="w-8 h-8 rounded-full border border-border" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text-primary leading-tight flex items-center gap-1">
                      {profileData.name || profileData.login}
                      <CheckCircle size={12} className="text-accent" />
                    </span>
                    <span className="text-xs text-text-muted leading-tight">GitHub profile found</span>
                  </div>
                </div>
              )}
              {profileError && (
                <div className="flex items-center gap-2 mt-1 text-xs text-text-muted">
                  <AlertCircle size={14} className="text-yellow-500" />
                  GitHub profile not found. We'll use a default avatar.
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-text-primary">
                How would you rate the collaboration? <span className="text-red-400">*</span>
              </label>
              <div className="flex gap-2" role="radiogroup" aria-label="Rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm transition-transform hover:scale-110"
                    aria-checked={rating === star}
                    role="radio"
                    aria-label={`${star} star${star !== 1 ? 's' : ''}`}
                  >
                    <Star 
                      size={28} 
                      fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                      className={`transition-colors ${(hoverRating || rating) >= star ? "text-yellow-500" : "text-border"}`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Comment */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <label htmlFor="comment" className="text-sm font-medium text-text-primary">
                  Comment <span className="text-red-400">*</span>
                </label>
                <span className={`text-xs ${comment.length > 300 ? 'text-red-400' : 'text-text-muted'}`}>
                  {comment.length}/300
                </span>
              </div>
              <textarea 
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value.slice(0, 300))}
                className="w-full bg-surface border border-border rounded-md p-3 text-text-primary focus:outline-none focus:border-accent transition-colors min-h-[100px] resize-none"
                placeholder="What did you think about my contribution?"
                maxLength={300}
                required
              />
            </div>

            {/* Consent */}
            <label className="flex items-start gap-3 cursor-pointer group mt-2">
              <div className="relative flex items-center justify-center mt-0.5">
                <input 
                  type="checkbox"
                  checked={displayConsent}
                  onChange={(e) => setDisplayConsent(e.target.checked)}
                  className="peer sr-only"
                />
                <div className="w-5 h-5 border border-border rounded bg-surface transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-accent peer-checked:bg-accent peer-checked:border-accent"></div>
                <CheckCircle size={14} className="absolute text-background opacity-0 peer-checked:opacity-100 transition-opacity" strokeWidth={3} />
              </div>
              <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                I'm okay with this review appearing on Rahul's portfolio.
              </span>
            </label>

            {/* Submit */}
            <button 
              type="submit"
              disabled={!github.trim() || rating === 0 || !comment.trim()}
              className="btn-primary w-full mt-4 py-3 bg-accent text-white border-accent hover:bg-accent-hover hover:border-accent-hover disabled:opacity-50 disabled:cursor-not-allowed justify-center"
            >
              Submit Review
            </button>
          </form>
        )}

        {step === 'loading' && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 size={32} className="text-accent animate-spin" />
            <p className="text-text-primary font-medium">Submitting review...</p>
          </div>
        )}

        {step === 'success' && (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-2">
              <CheckCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary">Thanks for the feedback!</h3>
            <p className="text-text-secondary text-sm">
              Your review has been submitted for approval.
            </p>
            {isStandalone ? (
              <a href="/" className="btn-primary w-full mt-6 text-center inline-block">
                Back to Portfolio
              </a>
            ) : (
              <button onClick={onClose} className="btn-primary w-full mt-6">
                Close
              </button>
            )}
            <div className="mt-4 flex justify-center">
              <a href="https://www.rahulpamula.me" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-text-muted hover:text-text-primary text-sm font-medium transition-colors group">
                Check Portfolio <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        )}

        {step === 'error' && (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-2">
              <AlertCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary">Something went wrong</h3>
            <p className="text-text-secondary text-sm">
              We couldn't submit your review. Please try again later.
            </p>
            <div className="flex gap-3 w-full mt-6">
              <button onClick={onClose} className="btn-primary flex-1 bg-surface">
                Cancel
              </button>
              <button onClick={() => setStep('form')} className="btn-primary flex-1 bg-accent text-white border-accent hover:bg-accent-hover">
                Try Again
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
