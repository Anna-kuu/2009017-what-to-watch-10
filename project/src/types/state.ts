import { AuthorizationStatus } from '../const.js';
import {store} from '../store/index.js';
import { Film, Films, Reviews } from './films.js';
import { ReviewData } from './review-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus
};

export type FilmsData = {
  selectedGenre: string,
  films: Films,
  promoFilm: Film | null,
  filmsByGenre: Films,
  isDataLoaded: boolean,
  filmsCounter: number,
};

export type FilmData = {
  film: Film | null,
  similarFilms: Films,
  reviews: Reviews,
  isDataLoaded: boolean,
  newReview: ReviewData | null,
}
