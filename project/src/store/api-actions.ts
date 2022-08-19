import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Films, Review, Reviews } from '../types/films';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadFilmById, loadFilms, loadPromoFilm, loadReviews, loadSimilarFilms, redirectToRoute, requireAuthorization, setDataLoadedStatus, setError } from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { store } from './';
import { ReviewData } from '../types/review-data';


export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadFilms(data));
    dispatch(setDataLoadedStatus(false));
  }
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadPromoFilm(data));
    dispatch(setDataLoadedStatus(false));
  }
);

export const fetchFilmByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmByIdAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    dispatch(loadFilmById(data));
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilmsAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  },
);

export const fetchReviewAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviewAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Review}/${id}`);
    dispatch(loadReviews(data));
  },
);

export const reviewAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/review',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Reviews>(`${APIRoute.Review}/${id}`, {comment, rating});
    dispatch(loadReviews(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email,password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
