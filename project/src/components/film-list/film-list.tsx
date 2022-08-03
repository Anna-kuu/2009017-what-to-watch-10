import {useState} from 'react';
import FilmCard from '../../pages/film-card/film-card';
import {FilmInfo} from '../../types/films';

type FilmListProps = {
  films: FilmInfo[];
}

export default function FilmList ({films}: FilmListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | undefined>(undefined);

  // eslint-disable-next-line no-console
  console.log(activeCard);
  const filmsList = films.map((film) => (<FilmCard key={film.id} film={film} setActiveCard={setActiveCard}/>));
  return (
    <div className="catalog__films-list">
      {filmsList}
    </div>
  );
}
