export interface ContributorReview {
  id: string;
  github: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  approved: boolean;
  displayConsent: boolean;
  date: string;
}
