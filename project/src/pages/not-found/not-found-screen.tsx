import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

export default function NotFoundScreen(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            {<Logo/>}
          </div>

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
      </div>
      <section>
        <h2 className="film-card__title">404. Page not found</h2>
        <Link to={AppRoute.Root}>Вернуться на главную</Link>
      </section>
    </section>
  );
}
