import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainScreen from '../../pages/main/main';
import Login from '../../pages/login/login';
import ErrorScreen from '../../pages/404/404';
import PropertyScreen from '../../pages/property/property';
import Layout from '../layout/layout';
import { useAppSelector } from '../../hooks/store';
import LoaderComponent from '../loader/loader';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isRoomsLoading = useAppSelector((state) => state.isRoomsLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isRoomsLoading) {
    return (
      <LoaderComponent />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MainScreen />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Login} element={<Login />} />
          <Route path={`${AppRoute.Room}/:id`} element={<PropertyScreen />} />
          <Route path='*' element={<ErrorScreen />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
