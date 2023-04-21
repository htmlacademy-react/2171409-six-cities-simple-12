import MapComponent from '../../components/map/map-component';
import { sortOffers } from '../../const';
import { setActiveCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import SortList from '../../components/sort-list/sort-list';
import { useMemo, useState } from 'react';
import MainScreenEmpty from '../main-empty/main-empty';
import { HeaderMenu } from '../../components/header-menu/header-menu';
import OffersListComponent from '../../components/offers-list/offers-list';
import { City } from '../../types/offer';
import { LOCATIONS } from '../../mocks/locations';

function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector(({ city }) => city);
  const currentOffers = useAppSelector(({ offers }) => offers.filter((offer) => offer.city.name === selectedCity.name));
  const currentedOffers = useMemo(() => currentOffers, [currentOffers]);
  const activeSortType = useAppSelector(({ sortOption }) => sortOption);
  const sortedOffers = (sortOffers(currentedOffers, activeSortType)).slice(0, 6);
  const memoizedSortedOffers = useMemo(() => sortedOffers, [sortedOffers]);
  const memoizedOfferList = useMemo(() => <OffersListComponent offers={memoizedSortedOffers} setActiveOffer={setActiveOffer} />, [memoizedSortedOffers, setActiveOffer]);
  const handleChangeCity = (e: React.MouseEvent<HTMLAnchorElement>, city: City) => {
    e.preventDefault();
    dispatch(setActiveCity(city));
  };

  const noOffers = currentOffers.length < 1;

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className='tabs'>
        <section className='locations container'>
          <ul className='locations__list tabs__list'>
            {LOCATIONS.map((city) => (
              <HeaderMenu
                city={city}
                key={city.name}
                isActive={selectedCity.name === city.name}
                changeCurrentLocation={handleChangeCity}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className='cities'>
        <div className="cities__places-container container">
          {noOffers ? (<MainScreenEmpty cityName={selectedCity.name} />) : (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length}&nbsp;{currentOffers.length <= 1 ? 'place' : 'places'} to stay in {selectedCity.name}</b>
                <SortList selectedSortItem={activeSortType} />

                {memoizedOfferList}

              </section>
              <div className="cities__right-section">
                <MapComponent className='cities__map map' activeOffer={activeOffer} offers={currentOffers} style={{ height: '1100px' }} />
              </div>
            </>
          )}
        </div>
      </div>
    </main>

  );
}

export default MainScreen;
