import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { State } from '../types/state';
import {Action} from 'redux';
import { APIRoute } from '../const';
import { addIsFavoriteAction, addReviewAction, checkAuthAction, fetchFavoriteFilmsAction, fetchFilmByIdAction, fetchFilmsAction, fetchPromoFilmAction, fetchReviewAction, fetchSimilarFilmsAction, loginAction, logoutAction } from './api-actions';
import { AuthData } from '../types/auth-data';
import { redirectToRoute } from './action';
import { makeFakeComment, makeFakeFilm, makeFakeFilms, makeFakeId, makeFakeReviews, makeFavoriteStatus } from '../utils/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization and RedirectToRoute when POST /login', async () => {
    const fakeUser: AuthData = {login: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, {token: 'secret'});


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      redirectToRoute.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('what-to-wach-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      redirectToRoute.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('what-to-wach-token');
  });

  it('should dispatch Load_Films when GET /films', async () => {
    const mockFilms = makeFakeFilms();
    mockAPI
      .onGet(APIRoute.Films)
      .reply(200, mockFilms);

    const store = mockStore();

    await store.dispatch(fetchFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmsAction.pending.type,
      fetchFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Promo_Film when GET /promo', async () => {
    const mockPromoFilm = makeFakeFilm();
    mockAPI
      .onGet(APIRoute.PromoFilm)
      .reply(200, mockPromoFilm);

    const store = mockStore();

    await store.dispatch(fetchPromoFilmAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoFilmAction.pending.type,
      fetchPromoFilmAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_FilmById when GET /films/:id', async () => {
    const mockFilmById = makeFakeFilm();
    const id = mockFilmById.id;
    mockAPI
      .onGet(`${APIRoute.Films}/${id}`)
      .reply(200, mockFilmById);

    const store = mockStore();

    await store.dispatch(fetchFilmByIdAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFilmByIdAction.pending.type,
      fetchFilmByIdAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_SimilarFilms when GET /films/:id/similar', async () => {
    const mockSimilarFilms = makeFakeFilms();
    const mockId = makeFakeId();
    mockAPI
      .onGet(`${APIRoute.Films}/${mockId}/similar`)
      .reply(200, mockSimilarFilms);

    const store = mockStore();

    await store.dispatch(fetchSimilarFilmsAction(mockId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarFilmsAction.pending.type,
      fetchSimilarFilmsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Reviews when GET /comments', async () => {
    const mockReviews = makeFakeReviews();
    const mockId = makeFakeId();
    mockAPI
      .onGet(`${APIRoute.Review}/${mockId}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewAction(mockId));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewAction.pending.type,
      fetchReviewAction.fulfilled.type
    ]);
  });

  it('should dispatch addReview when POST /comments/:id', async () => {
    const mockComment = makeFakeComment();
    const mockReviews = makeFakeReviews();
    mockAPI
      .onPost(`${APIRoute.Review}/${mockComment.id}`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(addReviewAction(mockComment));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addReviewAction.pending.type,
      redirectToRoute.type,
      addReviewAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Favorites when GET /favorite', async () => {
    const mockFavotireFilms = makeFakeFilms();
    mockAPI
      .onGet(APIRoute.FavoriteFilms)
      .reply(200, mockFavotireFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteFilmsAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchFavoriteFilmsAction.pending.type,
      fetchFavoriteFilmsAction.fulfilled.type
    ]);
  });


  it('should dispatch AddIsFavorite when POST /favorite/:id/{status}', async () => {
    const mockFavoriteStatus = makeFavoriteStatus();
    const mockFilm = makeFakeFilm();
    mockAPI
      .onPost(`${APIRoute.FavoriteFilms}/${mockFavoriteStatus.id}/${mockFavoriteStatus.isFavorite}`)
      .reply(200, mockFilm);

    const store = mockStore();

    await store.dispatch(addIsFavoriteAction(mockFavoriteStatus));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      addIsFavoriteAction.pending.type,
      fetchFavoriteFilmsAction.pending.type,
      addIsFavoriteAction.fulfilled.type
    ]);
  });
});
