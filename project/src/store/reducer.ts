import { offers } from './../mocks/offers';
import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, getOffersByCity } from './action';
import { SortMenuItems } from '../const';


const initialState = {
  city: CITY.name,
  offers: offers,
  sortOption: SortMenuItems[0],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersByCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.sortOption = action.payload;
    });

});

export {reducer};
