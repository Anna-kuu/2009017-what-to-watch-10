import { NameSpace } from '../../const';
import { Film, Films } from '../../types/films';
import { State } from '../../types/state';

export const getFilms = (state: State): Films => state[NameSpace.Films].films;
export const getPromoFilm = (state: State): Film => state[NameSpace.Films].promoFilm;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.Films].isDataLoaded;

export const getSelectedGenre = (state: State): string => state[NameSpace.Films].selectedGenre;
export const getFilmsCounter = (state: State): number => state[NameSpace.Films].filmsCounter;
