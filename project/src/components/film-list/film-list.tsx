import FilmCard from '../../pages/film-card/film-card';
import {FilmInfo} from '../../types/films';

type FilmListProps = {
  films: FilmInfo[];
}

export default function FilmList ({films}: FilmListProps): JSX.Element {
  //const [isActiveCard, setActiveCard] = useState<number | undefined>(undefined);

  const filmsList = films.map((film) => (<FilmCard key={film.id} film={film} />));
  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}
