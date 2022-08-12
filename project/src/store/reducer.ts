import {createReducer} from '@reduxjs/toolkit';
import {changeGenre} from './action';
import {films} from '../mocks/films-mocks';
import { getFilmsByGenre, getGenresFilm } from '../utils';

const initialState = {
  selectedGenre: 'All genres',
  films: films,
  filmsByGenre: films,
  genres: getGenresFilm(films),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
    });
});

export {reducer};
