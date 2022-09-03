import { datatype, internet, name } from 'faker';
import { Film, Films, Review, Reviews } from '../types/films';
import { isFavoriteData } from '../types/isFavorite-data';
import { ReviewData } from '../types/review-data';
import { UserData } from '../types/user-data';

export const makeFakeFilm = (): Film => ({
  id: 1,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'https://10.react.pages.academy/static/film/preview/snatch.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel-poster.jpg',
  backgroundColor: '#FDFDFC',
  videoLink: 'https://10.react.pages.academy/static/film/video/matrix.mp4',
  previewVideoLink: 'https://10.react.pages.academy/static/film/video/dog.mp4',
  description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.',

  rating: 8.9,
  scoresCount: 230,
  director: 'Wes Anderson',
  starring: ['Jason Statham', 'Brad Pitt', 'Benicio Del Toro'],
  runTime: 128,
  genre: 'Drama',
  released: 2014,
  isFavorite: true,
});

export const makeFakeFilms = (): Films => (new Array(4).fill(null).map(makeFakeFilm));

export const makeFakeReviews = (): Reviews => (new Array(4).fill(null).map(makeFakeReview));

export const makeFakeReview = (): Review => ({
  id: 1,
  user: {
    id: 15,
    name: 'Kendall',
  },
  rating: 8.2,
  comment: 'This movie really touched my heart, it really is the best movie of the year and everyone should see this masterpiece.',
  date: '2022-06-14T12:25:36.946Z'
});

export const makeFakeUser = (): UserData => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  id: 4,
  name: name.firstName(),
  token: '',
});

export const makeFakeId = (): number => datatype.number();

export const makeFakeComment = (): ReviewData => ({
  comment: datatype.string(),
  rating: datatype.number(),
  id: datatype.number(),
});

export const makeFavoriteStatus = (): isFavoriteData => ({
  isFavorite: 0,
  id: datatype.number(),
});
