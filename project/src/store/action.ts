import { createAction } from '@reduxjs/toolkit';

export const redirectToRoute = createAction<string>('film/redirectToRoute');

export const reloadFilm = createAction('data/addIsFavoriteAction', (value) => ({payload: value}));
