import {Link} from 'react-router-dom';
import {resetCounter} from '../../store/action';
import { useAppDispatch } from '../../hooks';

export default function Logo(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Link onClick={() => {dispatch(resetCounter());}}to="/" className="logo__link">
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}
