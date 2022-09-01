import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Film, Films, Reviews } from '../types/films';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review-data';
import { isFavoriteData } from '../types/isFavorite-data';
import { toast } from 'react-toastify';

export const fetchFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    return data;
  }
);

export const fetchPromoFilmAction = createAsyncThunk<Film, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.PromoFilm);
    return data;
  }
);

export const fetchFilmByIdAction = createAsyncThunk<Film, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilmByIdAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<Films, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarFilmsAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<Films, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilmsAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.FavoriteFilms);
    return data;
  },
);

export const addIsFavoriteAction = createAsyncThunk<Film, isFavoriteData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addIsFavoriteAction',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.FavoriteFilms}/${id}/${isFavorite}`, {id, isFavorite});
    dispatch(fetchFavoriteFilmsAction());
    return data;
  },
);

export const fetchReviewAction = createAsyncThunk<Reviews, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchReviewAction',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Review}/${id}`);
    return data;
  },
);

export const addReviewAction = createAsyncThunk<Reviews, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/review',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<Reviews>(`${APIRoute.Review}/${id}`, {comment, rating});
      dispatch(redirectToRoute(`${APIRoute.Films}/${id}`));
      return data;
    } catch (error) {
      toast.error('Can\'t send review. Try again later');
      throw (error);
    }
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    try {
      const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(redirectToRoute(AppRoute.Root));
      return data;
    } catch (error) {
      toast.error('Please enter a valid email address. ');
      throw (error);
    }
  }
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
    dispatch(redirectToRoute(AppRoute.Root));
  },
);
