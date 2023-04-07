import { AuthorizationStatus } from '../const';
import { City, Offers } from './../types/offer';
import {createAction} from '@reduxjs/toolkit';

export const setActiveCity = createAction('offers/cityChange', (city: City) => ({
  payload: city
}));

export const changeOffersSort = createAction('offers/changeOffersSort', (sort: string) => ({
  payload: sort
}));

export const loadOffers = createAction<Offers>('offers/loadOffers');
export const setRoomsLoadingStatus = createAction<boolean>('offers/setRoomsLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('offers/setError');
