import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {APIRoute} from '../const';
import { loadOffers, setRoomsLoadingStatus } from './action';
import { Offers } from '../types/offer';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setRoomsLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Hotels);
    dispatch(setRoomsLoadingStatus(false));
    dispatch(loadOffers(data));
  }
);
