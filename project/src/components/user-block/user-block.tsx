import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user-process/selectors';

export default function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const avatar = useAppSelector(getAvatarUrl);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div onClick={() => navigate(AppRoute.Mylist)} className="user-block__avatar">
          <img src={avatar} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <div onClick={handleLogout} className="user-block__link">Sign out</div>
      </li>
    </ul>

  );
}

