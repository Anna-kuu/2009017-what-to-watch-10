import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filmsShownCounter, loadFilms, loadPromoFilm, resetCounter, setDataLoadedStatus, loadFilmById, loadSimilarFilms, loadReviews} from './action';
import { getFilmsByGenre} from '../utils';
import { INITIAL_GENRE, MIN_NUMBER_FILMS} from '../const';
import { Film, Films, Reviews } from '../types/films';


const FILM_COUNTER_STEP = 8;


type InitialState = {
  selectedGenre: string,
  films: Films,
  promoFilm: Film | null,
  film: Film | null,
  similarFilms: Films,
  filmsByGenre: Films,
  reviews: Reviews,
  filmsCounter: number,
  isDataLoaded: boolean,
};

const initialState: InitialState = {
  selectedGenre: INITIAL_GENRE,
  films: [],
  promoFilm: null,
  film: null,
  similarFilms: [],
  filmsByGenre: [],
  reviews: [],
  filmsCounter: MIN_NUMBER_FILMS,
  isDataLoaded: false,
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
      state.filmsByGenre = action.payload;
    })
    .addCase(loadPromoFilm, (state,action)=> {
      state.promoFilm = action.payload;
    })
    .addCase(loadFilmById, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});

export {reducer};
