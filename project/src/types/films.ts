export type FilmInfo = {
  id: number;
  title: string;
  genre: string;
  releaseDate: number;
  posterImg: string;
  rating: number;
  description: string;
  director: string;
  starring: string;
  runTime: string;
};

export type FilmReview = {
  id: number;
  comment: string;
  name: string;
  date: string;
  rating: number;
};
