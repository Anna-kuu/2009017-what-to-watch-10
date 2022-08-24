import { useAppDispatch } from '../../hooks';
import { filmsShownCounter } from '../../store/films-data/films-data';


export default function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="catalog__more">
      <button onClick={() => {dispatch(filmsShownCounter());}} className="catalog__button" type="button">Show more</button>
    </div>
  );
}
