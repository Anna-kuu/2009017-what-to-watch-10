import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addIsFavoriteAction} from '../../store/api-actions';
import { getFilm } from '../../store/film-data/selectors';
import { getFavoriteFilms } from '../../store/films-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type MyListButtonProps = {
  filmId: number,
  filmStatus: boolean,
}

export default function MyListButton ({filmId, filmStatus}: MyListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilmsLength = useAppSelector(getFavoriteFilms).length;
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  //const film = useAppSelector(getFilm);
  //const idFilm = film.id;
  //const filmStatus = film.isFavorite;

  const handleMyListButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    }
    dispatch(addIsFavoriteAction({
      id: filmId,
      isFavorite: Number(!filmStatus),
    }));
  };

  return (
    <button onClick={handleMyListButtonClick} className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        {filmStatus
          ? <use xlinkHref="#in-list"></use>
          : <use xlinkHref="#add"></use>}
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsLength}</span>
    </button>
  );
}
