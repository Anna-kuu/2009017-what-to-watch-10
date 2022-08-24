import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmData } from './film-data/film-data';
import { filmsData } from './films-data/films-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmData.reducer,
  [NameSpace.Films]: filmsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
