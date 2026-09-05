import type { ContributorReview } from '../types/review';

// The Google Apps Script Web App URL for the contributor review service
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz4LdbqOFl0s22lBDGSk-6sMKjVpYLWV2O-xRnHyFg-CgPd7O0TjYt-9ZXJmpPXtccdUA/exec';

export const reviewService = {
  /**
   * Fetches the public GitHub profile for a given username.
   */
  async getGitHubProfile(username: string): Promise<{ avatar_url: string; name: string; login: string } | null> {
    try {
      const cleanUsername = username.trim().replace(/^@/, '');
      if (!cleanUsername) return null;
      
      const response = await fetch(`https://api.github.com/users/${cleanUsername}`);
      
      if (!response.ok) {
        return null;
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
      return null;
    }
  },

  /**
   * Submits a new review to the Google Apps Script endpoint.
   */
  async submitReview(review: Omit<ContributorReview, 'id' | 'approved' | 'date'>): Promise<boolean> {
    try {
      if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_GOOGLE')) {
        console.warn('Google Apps Script URL is not configured. Submission simulated.');
        // Simulate a delay for testing
        await new Promise(resolve => setTimeout(resolve, 1500));
        return true;
      }

      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Essential for basic form submission without complex CORS setup in Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      // no-cors mode always returns an opaque response (type: 'opaque', status: 0)
      // We assume success if the fetch didn't throw a network error.
      return response.type === 'opaque' || response.ok;
    } catch (error) {
      console.error('Error submitting review:', error);
      return false;
    }
  },

  /**
   * Fetches approved reviews from the Google Apps Script endpoint.
   */
  async getApprovedReviews(): Promise<ContributorReview[]> {
    try {
      if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes('YOUR_GOOGLE')) {
        // Return dummy data if not configured, for visual testing
        return [];
      }

      const response = await fetch(`${APPS_SCRIPT_URL}?action=getReviews`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch reviews');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  }
};
