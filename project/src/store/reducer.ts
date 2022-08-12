import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getGenres} from './action';
import {films} from '../mocks/films-mocks';
import { getFilmsByGenre, getGenresFilm } from '../utils';

const initialState = {
  selectedGenre: 'All genres',
  films: films,
  filmsByGenre: films,
  genres: ['All genres'],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = getFilmsByGenre(action.payload, state.films);
    })
    .addCase(getGenres, (state, action) => {
      state.genres = getGenresFilm(state.films);
    });
});

export {reducer};
