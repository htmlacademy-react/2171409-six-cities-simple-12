import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import ErrorScreen from '../../pages/404/404';
import PropertyScreen from '../../pages/property/property';
import { City, Locations, Offers, Reviews } from '../../types/offer';
import Layout from '../layout/layout';
import MainScreenEmpty from '../../pages/mainEmpty/mainEmpty';

type AppProps = {
  placesAmount: number;
  offers: Offers;
  reviews: Reviews;
  city: City;
  locations: Locations;
};

function App(props: AppProps): JSX.Element {
  const { placesAmount, offers, reviews, city, locations } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen placesAmount={placesAmount} offers={offers} city={city} locations={locations} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<PropertyScreen offers={offers} reviews={reviews} />} />
          <Route path={AppRoute.Empty} element={<MainScreenEmpty />} />
          <Route path='*' element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
