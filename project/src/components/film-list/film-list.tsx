import FilmCard from '../../pages/film-card/film-card';
import {Films} from '../../types/films';

type FilmListProps = {
  films: Films;
}

export default function FilmList ({films}: FilmListProps): JSX.Element {
  const filmsList = films.map((film) => (<FilmCard key={film.id} film={film} />));

  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}
