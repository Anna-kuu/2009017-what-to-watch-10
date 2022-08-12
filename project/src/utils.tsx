import { FilmInfo } from './types/films';

export function getFilmsByGenre (genre: string, films: FilmInfo[]) {
  if (genre === 'All genres') {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}

export function getGenresFilm (films: FilmInfo[]) {
  const genres = [...new Set(films.map((film) => film.genre))];
  console.log(genres);
  return genres;
}
