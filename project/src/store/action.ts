import { createAction } from '@reduxjs/toolkit';
import { Film, Films } from '../types/films';
import { AppRoute, AuthorizationStatus } from '../const';

export const changeGenre = createAction('films/changeGenre', (value) => ({
  payload: value,
}));

export const filmsShownCounter = createAction('films/filmsShownCounter');

export const resetCounter = createAction('films/resetCounter');

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('films/setError');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');

