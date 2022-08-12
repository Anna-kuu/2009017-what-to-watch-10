import { Link } from 'react-router-dom';
import { genres } from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';

type GenresProps = {
  selectedGenre: string,
}

export default function GenresList({selectedGenre}: GenresProps): JSX.Element {
  const dispatch = useAppDispatch();

  const genresList = genres.map((genre) => (
    <li onClick={()=>{dispatch(changeGenre(genre));}} key={genre} className={`catalog__genres-item ${(genre === selectedGenre) ? 'catalog__genres-item--active' : ''}`}>
      <Link to="/" className="catalog__genres-link">{genre}</Link>
    </li>));

  return (
    <ul className="catalog__genres-list">
      {genresList}
    </ul>
  );
}
