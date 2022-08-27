import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Film, Review } from '../../types/films';
import { FilmData } from '../../types/state';
import { addIsFavoriteAction, addReviewAction, fetchFilmByIdAction, fetchReviewAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmData = {
  film: {} as Film,
  similarFilms: [],
  reviews: [],
  isDataLoaded: false,
  newReview: {} as Review,
};

export const filmData = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmByIdAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmByIdAction.fulfilled,(state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchSimilarFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addReviewAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(addIsFavoriteAction.pending, (state, action) => {
        state.isDataLoaded = true;
      })
      .addCase(addIsFavoriteAction.fulfilled, (state, action) => {
        state.film = action.payload;
        state.isDataLoaded = false;
      });
  }
});
