import {createAction} from '@reduxjs/toolkit';

export const getOffersByCity = createAction('offers/cityChange', (city: string) => ({
  payload: city,
}));

export const changeOffersSort = createAction('offers/changeOffersSort',
  (sort: string) => ({
    payload: sort
  }));
