import Logo from '../../components/logo/logo';
import {Link, useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FilmList from '../../components/film-list/film-list';
import { useEffect } from 'react';
import { fetchFilmByIdAction, fetchReviewAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import NotFoundScreen from '../not-found/not-found-screen';
import UserBlock from '../../components/user-block/user-block';
import { AuthorizationStatus } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { getFilm, getReviews, getSimilarFilms } from '../../store/film-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import MyListButton from '../../components/my-list-button/my-list-button';
import Footer from '../../components/footer/footer';

export default function MoviePage(): JSX.Element {
  const params = useParams();
  const dispatch = useAppDispatch();

  const id = Number(params.id);

  const currentFilm = useAppSelector(getFilm);
  const similarFilms = useAppSelector(getSimilarFilms).filter((film) => film.id !== currentFilm.id).slice(0, 5);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    if (id === null) {
      return;
    }

    dispatch(fetchFilmByIdAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviewAction(id));
  }, [id, dispatch]);

  if (currentFilm === null) {
    return (
      <NotFoundScreen/>
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              {<Logo/>}
            </div>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${currentFilm?.id}`}className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton filmId={currentFilm.id} />
                {(authorizationStatus === AuthorizationStatus.Auth)
                  ? <Link to={`/films/${currentFilm?.id}/review`} className="btn film-card__button">Add review</Link>
                  : ''}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={currentFilm?.posterImage} alt={currentFilm?.name} width="218" height="327" />
            </div>

            <Tabs film={currentFilm} reviews={reviews} />

          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
}

