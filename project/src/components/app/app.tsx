import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import ErrorScreen from '../../pages/404/404';
import PropertyScreen from '../../pages/property/property';
import { Offers, Reviews } from '../../types/offer';
import Layout from '../layout/layout';

type AppProps = {
  placesAmount: number;
  offers: Offers;
  reviews: Reviews;
}

function App({ placesAmount, offers, reviews }: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainScreen placesAmount={placesAmount} offers={offers} />} />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={AppRoute.Room} element={<PropertyScreen offers={offers} />} />
          <Route path='*' element={<ErrorScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
