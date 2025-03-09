export const isCategory = (
  value: string
): value is
  | 'business'
  | 'entertainment'
  | 'general'
  | 'health'
  | 'science'
  | 'sports'
  | 'technology' => {
  return [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ].includes(value);
};
