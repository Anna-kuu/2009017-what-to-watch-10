import Logo from '../../components/logo/logo';
import {useAppSelector} from '../../hooks';
import UserBlock from '../../components/user-block/user-block';
import { getPromoFilm } from '../../store/films-data/selectors';
import Catalog from '../../components/catalog/catalog';
import { Link } from 'react-router-dom';
import MyListButton from '../../components/my-list-button/my-list-button';
import Footer from '../../components/footer/footer';
import { APIRoute } from '../../const';

export default function MainScreen(): JSX.Element {
  const promoFilm = useAppSelector(getPromoFilm);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <Logo/>
          </div>

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`${APIRoute.Player}/${promoFilm?.id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <MyListButton filmId={promoFilm.id}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />

        <Footer />
      </div>
    </>
  );
}

