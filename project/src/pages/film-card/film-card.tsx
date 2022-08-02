import {Link} from 'react-router-dom';
import { FilmInfo } from '../../types/films';

type FilmCardProps = {
  film: FilmInfo;
  setActiveCard: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function FilmCard({film, setActiveCard}: FilmCardProps): JSX.Element {
  const mouseOverHandler = () => {
    setActiveCard(film.id);
  };

  return (
    <article onMouseOver={mouseOverHandler} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
