import { offers } from './../mocks/offers';
import { CITY } from './../mocks/city';
import {createReducer} from '@reduxjs/toolkit';
import { changeOffersSort, setOffersByCity } from './action';
import { SortMenuItems } from '../const';


const initialState = {
  city: CITY,
  offers: offers,
  sortOption: SortMenuItems[0],
};


const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersByCity, (state, action) => {
      state.city.name = action.payload;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.sortOption = action.payload;
    });

});

export {reducer};
