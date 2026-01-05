// src/utils/helpers.ts

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateRatingColor = (rating: number): string => {
  if (rating >= 8) return 'text-green-500';
  if (rating >= 5) return 'text-yellow-500';
  return 'text-red-500';
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getDaysUntilRelease = (releaseDate: string): number => {
  const today = new Date();
  const release = new Date(releaseDate);
  const difference = release.getTime() - today.getTime();
  return Math.ceil(difference / (1000 * 3600 * 24));
};