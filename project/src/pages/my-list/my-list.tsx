import Logo from '../../components/logo/logo';
import FilmList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hooks';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import { getFavoriteFilms } from '../../store/film-data/selectors';

export default function MyList(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          {<Logo/>}
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteFilms.length}</span></h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmList films={favoriteFilms} />
      </section>

      <Footer />
    </div>
  );
}
