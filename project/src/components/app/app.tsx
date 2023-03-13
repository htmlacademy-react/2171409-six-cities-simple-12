import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import ErrorScreen from '../../pages/404/404';
import PropertyScreen from '../../pages/property/property';

type AppProps = {
  placesAmount: number;
}

function App({ placesAmount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesAmount={placesAmount} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Room} element={< PropertyScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
