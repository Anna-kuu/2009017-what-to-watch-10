import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, filmsShownCounter} from './action';
import {films} from '../mocks/films-mocks';
import { getFilmsByGenre, getGenresFilm } from '../utils';

const initialState = {
  selectedGenre: 'All genres',
  films: films,
  filmsByGenre: films,
  genres: getGenresFilm(films),
  filmsCounter: 3,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
      state.filmsCounter = 3;
    })
    .addCase(filmsShownCounter, (state) => {
      state.filmsCounter += 3;
    });
});

export {reducer};
