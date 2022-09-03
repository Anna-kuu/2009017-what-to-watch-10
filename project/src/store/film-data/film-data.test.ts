
import { Film } from '../../types/films';
import { FilmData } from '../../types/state';
import { makeFakeFilm, makeFakeFilms, makeFakeReviews } from '../../utils/mocks';
import { addIsFavoriteAction, addReviewAction, fetchFavoriteFilmsAction, fetchFilmByIdAction, fetchReviewAction, fetchSimilarFilmsAction } from '../api-actions';
import { filmData } from './film-data';

const film = makeFakeFilm();
const similarFilms = makeFakeFilms();
const reviews = makeFakeReviews();
const favoriteFilms = makeFakeFilms();

describe('Reducer: film-data', () => {
  let state: FilmData;

  beforeEach(() => {
    state = {
      film: {} as Film,
      similarFilms: [],
      reviews: [],
      isDataLoaded: false,
      isCommentSend: false,
      favoriteFilms: [],
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });
  it('should update film by ID by load film by ID', () => {
    expect(filmData.reducer(state, {type: fetchFilmByIdAction.fulfilled.type, payload: film}))
      .toEqual({
        film: film,
        similarFilms: [],
        reviews: [],
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: [],
      });
  });
  it('should update films by load films', () => {
    expect(filmData.reducer(state, {type: fetchSimilarFilmsAction.fulfilled.type, payload: similarFilms}))
      .toEqual({
        film: {} as Film,
        similarFilms: similarFilms,
        reviews: [],
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: [],
      });
  });
  it('should update reviews by load reviews', () => {
    expect(filmData.reducer(state, {type: fetchReviewAction.fulfilled.type, payload: reviews}))
      .toEqual({
        film: {} as Film,
        similarFilms: [],
        reviews: reviews,
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: [],
      });
  });
  it('should update reviews by add reviews', () => {
    expect(filmData.reducer(state, {type: addReviewAction.fulfilled.type, payload: reviews}))
      .toEqual({
        film: {} as Film,
        similarFilms: [],
        reviews: reviews,
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: [],
      });
  });
  it('should update favorite films by load favorite films', () => {
    expect(filmData.reducer(state, {type: fetchFavoriteFilmsAction.fulfilled.type, payload: favoriteFilms}))
      .toEqual({
        film: {} as Film,
        similarFilms: [],
        reviews: [],
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: favoriteFilms,
      });
  });
  it('should update favorite status', () => {
    expect(filmData.reducer(state, {type: addIsFavoriteAction.fulfilled.type, payload: film}))
      .toEqual({
        film: film,
        similarFilms: [],
        reviews: [],
        isDataLoaded: false,
        isCommentSend: false,
        favoriteFilms: [],
      });
  });
});

