import { AuthorizationStatus } from './const';
import { Films } from './types/films';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const MAX_GENRES = 9;

export function getRating (rating: number) {
  switch (true) {
    case (0 <= rating && rating < 3):
      return 'Bad';
    case (3 <= rating && rating < 5 ):
      return 'Normal';
    case (5 <= rating && rating < 8):
      return 'Good';
    case (8 <= rating && rating < 10):
      return 'Very good';
    case (rating === 10):
      return 'Awesome';
  }
}

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

export const durationTime = (timeLeft: number) => {
  const time = dayjs.duration(timeLeft, 'seconds');
  return (time.hours() > 0) ? time.format('-HH:mm:ss') : time.format('-mm:ss');
};

export const dateFormat = (dateReview: string) => {
  const date = dayjs(dateReview).format('MMMM DD, YYYY ');
  return date;
};

export const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};
