export const MIN_NUMBER_FILMS = 8;
export const FILM_COUNTER_STEP = 8;
export const INITIAL_GENRE = 'All genres';

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

export enum APIRoute {
  Films = '/films',
  PromoFilm = '/promo',
  Login = '/login',
  Logout = '/logout',
  Review = '/comments'
}

export enum NameSpace {
  Data = 'DATA',
  Films = 'FILMS',
  Film = 'FILM',
  User = 'USER',
}
