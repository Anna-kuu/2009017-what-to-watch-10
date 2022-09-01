import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Film, Films, Reviews } from './films.js';
import { ReviewData } from './review-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  avatarUrl: string,
};

export type FilmsData = {
  selectedGenre: string,
  films: Films,
  promoFilm: Film,
  isDataLoaded: boolean,
  filmsCounter: number,
};

export type FilmData = {
  film: Film,
  similarFilms: Films,
  reviews: Reviews,
  isDataLoaded: boolean,
  isCommentSend: boolean,
  newReview: ReviewData,
  favoriteFilms: Films,
}
