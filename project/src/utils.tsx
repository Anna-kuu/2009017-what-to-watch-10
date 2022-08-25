import { AuthorizationStatus } from './const';
import { Films } from './types/films';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const MAX_GENRES = 9;

export function getFilmsByGenre (genre: string, films: Films) {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}

export function getGenresFilm (films: Films) {
  const genres = [...new Set(films.map((film) => film.genre))].slice(0, MAX_GENRES);
  genres.splice(0, 0, 'All genres');
  return genres;
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

//export const durationTime = (time: number | undefined) => dayjs.duration(time, 'minutes');
