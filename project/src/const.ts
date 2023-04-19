import { Offers } from './types/offer';

export const MAX_OFFERS_NEARBY = 3;

export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = 'login',
  Room = 'offer',
  Empty = 'empty',
  Rooms = 'offers'
}

export enum APIRoute {
  Hotels = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
  Nearby = '/nearby'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const SortMenuItems = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export function sortOffers(cards: Offers, sortListItem: string) {
  if(sortListItem === SortMenuItems[1]) {
    return cards.sort((a, b) => a.price - b.price);
  } else if (sortListItem === SortMenuItems[2]) {
    return cards.sort((a, b) => b.price - a.price);
  } else if(sortListItem === SortMenuItems[3]) {
    return cards.sort((a, b) => b.rating - a.rating);
  } else {
    return cards;
  }
}

export const URL_POINT_DEFAULT = './img/pin.svg';

export const URL_POINT_ACTIVE = './img/pin-active.svg';
