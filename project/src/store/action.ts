import { createAction } from '@reduxjs/toolkit';
import { Film, Films, Reviews } from '../types/films';
import { AppRoute, AuthorizationStatus } from '../const';
import { ReviewData } from '../types/review-data';

export const changeGenre = createAction('films/changeGenre', (value) => ({
  payload: value,
}));

export const filmsShownCounter = createAction('films/filmsShownCounter');

export const resetCounter = createAction('films/resetCounter');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const loadFilmById = createAction<Film>('data/loadFilmById');

export const loadSimilarFilms = createAction<Films>('data/loadSimilarFilms');

export const loadReviews = createAction<Reviews>('data/loadReview');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');
