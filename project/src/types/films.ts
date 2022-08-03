export type FilmInfo = {
  id: number;
  name: string;
  genre: string;
  released: number;
  posterImage: string;
  backgroundImage: string
  rating: number;
  scoresCount: number
  description: string;
  director: string;
  starring: string;
  runTime: string;
  isFavorite: boolean;
  videoLink: string;
};

export type FilmReview = {
  id: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  }
};
