import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { resetCounter } from '../../store/films-data/films-data';

export default function Footer(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <footer className="page-footer">
      <div className="logo">
        <Link onClick={() => dispatch(resetCounter())} to="/" className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
