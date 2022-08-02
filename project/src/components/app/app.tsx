
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import AddReview from '../../pages/add-review/add-review';
import MainScreen from '../../pages/main/main';
import Film from '../../pages/movie-page/film';
import MyList from '../../pages/my-list/my-list';
import NotFoundScreen from '../../pages/not-found/not-found-screen';
import Player from '../../pages/player/player';
import Login from '../../pages/sign-in/login';
import PrivateRoute from '../private-route/private-route';
import {FilmInfo, FilmReview} from '../../types/films';

type AppScreenProps = {
  filmsInfo: FilmInfo[];
  film: FilmInfo;
}

function App({filmsInfo, film}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen filmsInfo={filmsInfo} film={film}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Mylist}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyList films={filmsInfo}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<Film films={filmsInfo}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={filmsInfo}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={filmsInfo}/>}
        />
        <Route
          path="*"
          element={<NotFoundScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
