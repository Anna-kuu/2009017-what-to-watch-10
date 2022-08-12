import { FilmInfo } from './types/films';

const MAX_GENRES = 9;

export function getFilmsByGenre (genre: string, films: FilmInfo[]) {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}

export function getGenresFilm (films: FilmInfo[]) {
  const genres = [...new Set(films.map((film) => film.genre))].slice(0, MAX_GENRES);
  genres.splice(0, 0, 'All genres');
  return genres;
}

