import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import ErrorScreen from '../../pages/404/404';
import PropertyScreen from '../../pages/property/property';
import Layout from '../layout/layout';

// type AppProps = {
//   offers: Offers;
//   reviews: Reviews;
//   city: City;
//   locations: Locations;
// };

function App(): JSX.Element {
  // const { offers, reviews, city, locations } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Room}/:id`} element={<PropertyScreen />} />
          <Route path='*' element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
