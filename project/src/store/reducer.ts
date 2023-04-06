import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, loadOffers, setActiveCity, setRoomsLoadingStatus } from './action';
import { SortMenuItems } from '../const';
import { City, Offers } from '../types/offer';

type initialState = {
  city: City;
  offers: Offers;
  sortOption: string;
  isRoomsLoading: boolean;
  error: string | null;
}

const initialState: initialState = {
  city: CITY,
  offers: [],
  sortOption: SortMenuItems[0],
  isRoomsLoading: false,
  error: null,
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
    });
});

export {reducer};
