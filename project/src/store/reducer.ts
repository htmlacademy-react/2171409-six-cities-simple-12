import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, getUserData, loadOffers, setActiveCity, setAuthorizationStatus, setError, setRoomsLoadingStatus } from './action';
import { AuthorizationStatus, SortMenuItems } from '../const';
import { City, Offers } from '../types/offer';
import { UserData } from '../types/user-data';

type initialStateType = {
  city: City;
  offers: Offers;
  sortOption: string;
  isRoomsLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: initialStateType = {
  city: CITY,
  offers: [],
  sortOption: SortMenuItems[0],
  isRoomsLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
