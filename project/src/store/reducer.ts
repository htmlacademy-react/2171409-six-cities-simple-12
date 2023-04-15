import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, getUserData, loadOffer, loadOffers, loadOffersNearby, loadReviews, setActiveCity, setAuthorizationStatus, setError, setReview, setRoomsLoadingStatus } from './action';
import { AuthorizationStatus, SortMenuItems } from '../const';
import { City, NewReview, Offer, Offers, Reviews } from '../types/offer';
import { UserData } from '../types/user-data';

type initialStateType = {
  city: City;
  offers: Offers;
  offer: Offer | null;
  offersNearby: Offers;
  reviews:Reviews;
  sortOption: string;
  isRoomsLoading: boolean;
  error: string | null;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  isReviewLoading: boolean;
  formData: NewReview | null;
}

const initialState: initialStateType = {
  city: CITY,
  offers: [],
  offer: null,
  offersNearby: [],
  reviews:[],
  sortOption: SortMenuItems[0],
  isRoomsLoading: false,
  error: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  formData: null,
  isReviewLoading: false,
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
    .addCase(loadOffer, (state, actions) => {
      state.offer = actions.payload;
    })
    .addCase(loadOffersNearby, (state, actions) => {
      state.offersNearby = actions.payload;
    })
    .addCase(loadReviews, (state, actions) => {
      state.reviews = actions.payload;
    })
    .addCase(setReview, (state, { payload }) => {
      state.formData = payload;
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
