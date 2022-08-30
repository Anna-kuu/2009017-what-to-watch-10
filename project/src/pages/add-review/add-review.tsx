import Logo from '../../components/logo/logo';
import { Navigate, Link} from 'react-router-dom';
import AddReviewComment from '../../components/add-review-comment/add-review-comment';
import { useAppSelector } from '../../hooks';
import { APIRoute, AppRoute } from '../../const';
import { getFilm } from '../../store/film-data/selectors';
import UserBlock from '../../components/user-block/user-block';

export default function AddReview(): JSX.Element {
  const currentFilm = useAppSelector(getFilm);

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
                <Link to={`${APIRoute.Films}/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <div className="breadcrumbs__link">Add review</div>
              </li>
            </ul>
          </nav>

          <UserBlock />
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
