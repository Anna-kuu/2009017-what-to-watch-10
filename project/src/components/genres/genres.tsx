import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre, resetCounter } from '../../store/films-data/films-data';

type GenresProps = {
  selectedGenre: string,
  genres: string[],
}

export default function GenresList({selectedGenre, genres}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleChangeGenre = (evt: React.MouseEvent<HTMLElement>) => {
    dispatch(changeGenre(evt.currentTarget.dataset.genre));
    dispatch(resetCounter());
  };

  const genresList = genres.map((genre) => (
    <li onClick={handleChangeGenre} data-genre={genre} key={genre} className={`catalog__genres-item ${(genre === selectedGenre) ? 'catalog__genres-item--active' : ''}`}>
      <Link to={AppRoute.Root} className="catalog__genres-link">{genre}</Link>
    </li>));

  return (
    <ul className="catalog__genres-list">
      {genresList}
    </ul>
  );
}
