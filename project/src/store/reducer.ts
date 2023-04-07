import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, loadOffers, requireAuthorization, setActiveCity, setError, setRoomsLoadingStatus } from './action';
import { AuthorizationStatus, SortMenuItems } from '../const';
import { City, Offers } from '../types/offer';

type initialState = {
  city: City;
  offers: Offers;
  sortOption: string;
  isRoomsLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: initialState = {
  city: CITY,
  offers: [],
  sortOption: SortMenuItems[0],
  isRoomsLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(loadOffers, (state, actions) => {
      state.offers = actions.payload;
    })
    .addCase(setRoomsLoadingStatus, (state, actions) => {
      state.isRoomsLoading = actions.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
