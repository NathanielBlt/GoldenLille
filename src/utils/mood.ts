export const moodColors = {
  sarcelle: '#1d3b3a',
  violet: '#3d2245',
  vert: '#4a5a3f',
  beige: '#d8c9ae',
} as const;

export type Mood = keyof typeof moodColors;
