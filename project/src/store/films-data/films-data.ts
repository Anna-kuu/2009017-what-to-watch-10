import { createSlice } from '@reduxjs/toolkit';
import { FILM_COUNTER_STEP, INITIAL_GENRE, MIN_NUMBER_FILMS, NameSpace } from '../../const';
import { FilmsData } from '../../types/state';
import { fetchFilmsAction, fetchPromoFilmAction } from '../api-actions';

const initialState: FilmsData = {
  selectedGenre: INITIAL_GENRE,
  films: [],
  promoFilm: null,
  isDataLoaded: false,
  filmsCounter: MIN_NUMBER_FILMS,
};

export const filmsData = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    filmsShownCounter: (state) => {
      state.filmsCounter += FILM_COUNTER_STEP;
    },
    resetCounter: (state) => {
      state.filmsCounter = MIN_NUMBER_FILMS;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoFilmAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.isDataLoaded = false;
      });
  }
});

export const {changeGenre, filmsShownCounter, resetCounter} = filmsData.actions;
