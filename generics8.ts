const SUBJECT = {
  Math : 'Math',
  English : 'English',
} as const;
type SUBJECT = typeof SUBJECT[keyof typeof SUBJECT]; // 'Math' | 'English'