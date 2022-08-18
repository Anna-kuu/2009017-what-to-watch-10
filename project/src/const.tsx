export enum AppRoute {
  Root = '/',
  Login = '/login',
  Mylist = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const MIN_NUMBER_FILMS = 8;

export enum APIRoute {
  Films = '/films',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout',
}

export const TIMEOUT_SHOW_ERROR = 2000;
