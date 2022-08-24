import Logo from '../../components/logo/logo';
import FilmList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/selectors';

export default function MyList(): JSX.Element {
  const favoriteFilms = useAppSelector(getFilms).filter((film) => film.isFavorite === true);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          {<Logo/>}
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>

      <footer className="page-footer">
        <div className="logo">
          {<Logo/>}
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
