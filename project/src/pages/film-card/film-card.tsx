import {Link} from 'react-router-dom';
import {Film} from '../../types/films';
import {useState} from 'react';
import VideoPlayer from '../../components/video-player/video-player';
import { useAppDispatch } from '../../hooks';
import { fetchFilmByIdAction } from '../../store/api-actions';

type FilmCardProps = {
  film: Film;
}

export default function FilmCard({film}: FilmCardProps): JSX.Element {
  const [isActiveCard, setActiveCard] = useState(false);
  const dispatch = useAppDispatch();


  return (
    <article onMouseEnter={() => setActiveCard(!isActiveCard)} onMouseLeave={() => setActiveCard(!isActiveCard)} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        {isActiveCard
          ? <VideoPlayer film={film} isActive={isActiveCard}/>
          : <img src={film.posterImage} alt={film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link onClick={() => {dispatch(fetchFilmByIdAction(film.id));}} className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}
