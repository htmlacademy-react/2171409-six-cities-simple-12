import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { LOCATIONS } from './mocks/locations';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const Settings = {
  CountPlaces: 312
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      placesAmount={Settings.CountPlaces}
      offers={offers}
      reviews={reviews}
      city={CITY}
      locations={LOCATIONS}
    />
  </React.StrictMode>,
);
