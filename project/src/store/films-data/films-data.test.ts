import { Film } from '../../types/films';
import { FilmsData } from '../../types/state';
import { makeFakeFilm, makeFakeFilms } from '../../utils/mocks';
import { fetchFilmsAction, fetchPromoFilmAction } from '../api-actions';
import { changeGenre, filmsData, filmsShownCounter, resetCounter } from './films-data';

const films = makeFakeFilms();
const film = makeFakeFilm();

describe('Reducer: films-data', () => {
  let state: FilmsData;

  beforeEach(() => {
    state = {
      selectedGenre: 'All genres',
      films: [],
      promoFilm: {} as Film,
      isDataLoaded: false,
      filmsCounter: 8,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(filmsData.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should change the genre', () => {
    expect(filmsData.reducer(state, changeGenre('Comedy')))
      .toEqual({
        selectedGenre: 'Comedy',
        films: [],
        promoFilm: {} as Film,
        isDataLoaded: false,
        filmsCounter: 8,
      });
  });
  it('should increment counter', () => {
    expect(filmsData.reducer(state, filmsShownCounter()))
      .toEqual({
        selectedGenre: 'All genres',
        films: [],
        promoFilm: {} as Film,
        isDataLoaded: false,
        filmsCounter: 16,
      });
  });
  it('should reset counter', () => {
    expect(filmsData.reducer(state, resetCounter()))
      .toEqual({
        selectedGenre: 'All genres',
        films: [],
        promoFilm: {} as Film,
        isDataLoaded: false,
        filmsCounter: 8,
      });
  });
  it('should update films by load films', () => {
    expect(filmsData.reducer(state, {type: fetchFilmsAction.fulfilled.type, payload: films}))
      .toEqual({
        selectedGenre: 'All genres',
        films: films,
        promoFilm: {} as Film,
        isDataLoaded: false,
        filmsCounter: 8,
      });
  });
  it('should update promo film by load promo film', () => {
    expect(filmsData.reducer(state, {type: fetchPromoFilmAction.fulfilled.type, payload: film}))
      .toEqual({
        selectedGenre: 'All genres',
        films: [],
        promoFilm: film,
        isDataLoaded: false,
        filmsCounter: 8,
      });
  });
});
