import Logo from '../../components/logo/logo';
import {useParams, Navigate, Link} from 'react-router-dom';
import AddReviewComment from '../../components/add-review-comment/add-review-comment';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import { getFilms } from '../../store/films-data/selectors';


export default function AddReview(): JSX.Element {
  const params = useParams();
  const currentFilm = useAppSelector(getFilms).find((film) => film.id === Number(params.id));

  if (!currentFilm) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            {<Logo/>}
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a href="/" className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={currentFilm.posterImage} alt={currentFilm.name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        {<AddReviewComment/>}
      </div>

    </section>
  );
}
