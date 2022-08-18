import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filmsShownCounter, loadFilms, loadPromoFilm, resetCounter, setDataLoadedStatus, requireAuthorization, setError} from './action';
import { getFilmsByGenre, getGenresFilm } from '../utils';
import { MIN_NUMBER_FILMS, AuthorizationStatus } from '../const';
import { Film, Films } from '../types/films';


const FILM_COUNTER_STEP = 8;
const INITIAL_GENRE = 'All genres';

type InitialState = {
  selectedGenre: string,
  films: Films,
  promoFilm: Film | null,
  filmsByGenre: Films,
  genres: string[],
  filmsCounter: number,
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  error: string | null,
};

const initialState: InitialState = {
  selectedGenre: INITIAL_GENRE,
  films: [],
  promoFilm: null,
  filmsByGenre: [],
  genres: [],
  filmsCounter: MIN_NUMBER_FILMS,
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
    })
    .addCase(filmsShownCounter, (state) => {
      state.filmsCounter += FILM_COUNTER_STEP;
    })
    .addCase(resetCounter, (state) => {
      state.filmsCounter = MIN_NUMBER_FILMS;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.genres = getGenresFilm(action.payload);
      state.filmsByGenre = action.payload;
    })
    .addCase(loadPromoFilm, (state,action)=> {
      state.promoFilm = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
