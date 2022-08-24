import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { FilmData } from '../../types/state';
import { addReviewAction, fetchFilmByIdAction, fetchReviewAction, fetchSimilarFilmsAction } from '../api-actions';

const initialState: FilmData = {
  film: null,
  similarFilms: [],
  reviews: [],
  isDataLoaded: false,
  newReview: null,
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
        state.isDataLoaded = true;
      });
  }
})
