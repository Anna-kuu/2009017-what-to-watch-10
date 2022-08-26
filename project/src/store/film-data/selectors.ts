import { NameSpace } from '../../const';
import { Film, Films, Reviews } from '../../types/films';
import { State } from '../../types/state';

export const getFilm = (state: State): Film => state[NameSpace.Film].film;
export const getSimilarFilms = (state: State): Films => state[NameSpace.Film].similarFilms;
export const getReviews = (state: State): Reviews => state[NameSpace.Film].reviews;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Film].isDataLoaded;
