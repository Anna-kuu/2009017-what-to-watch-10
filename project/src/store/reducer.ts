import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filmsShownCounter, resetCounter} from './action';
import {films} from '../mocks/films-mocks';
import { getFilmsByGenre, getGenresFilm } from '../utils';
import { MIN_NUMBER_FILMS } from '../const';

const FILM_COUNTER_STEP = 3;

const initialState = {
  selectedGenre: 'All genres',
  films: films,
  filmsByGenre: films,
  genres: getGenresFilm(films),
  filmsCounter: MIN_NUMBER_FILMS,
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
    });
});

export {reducer};
