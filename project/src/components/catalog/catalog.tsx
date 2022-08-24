import { useAppSelector } from '../../hooks';
import { getFilms, getFilmsCounter, getSelectedGenre } from '../../store/films-data/selectors';
import { getGenresFilm, getFilmsByGenre } from '../../utils';
import FilmList from '../film-list/film-list';
import GenresList from '../genres/genres';
import ShowMore from '../show-more/show-more';

export default function Catalog(): JSX.Element {
  const selectedGenre = useAppSelector(getSelectedGenre);
  const films = useAppSelector(getFilms);
  const filmsByGenre = getFilmsByGenre(selectedGenre, films);
  const genres = getGenresFilm(films);
  const filmsCounter = useAppSelector(getFilmsCounter);
  const shownFilms = filmsByGenre.slice(0, filmsCounter);
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList selectedGenre={selectedGenre} genres={genres}/>
      <FilmList films={shownFilms} />
      {((filmsByGenre.length - shownFilms.length) > 0) && <ShowMore />}
    </section>
  );
}
