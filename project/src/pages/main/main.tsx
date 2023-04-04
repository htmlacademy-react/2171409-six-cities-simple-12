import { Header } from '../../components/header/header';
import MapComponent from '../../components/map/map-component';
import { CITIES, sortOffers } from '../../const';
import { setOffersByCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import SortList from '../../components/sort-list/sort-list';
import { useState } from 'react';
import MainScreenEmpty from '../main-empty/main-empty';
import { HeaderMenu } from '../../components/header-menu/header-menu';
import OffersListComponent from '../../components/offers-list/offers-list';


function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  const allOffers = useAppSelector((state) => state.offers);
  const currentOffers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity.name));
  const activeSortType = useAppSelector((state) => state.sortOption);
  const sortedOffers = sortOffers(currentOffers, activeSortType);

  const handleChangeCity = (e: React.MouseEvent<HTMLAnchorElement>, city: string) => {
    e.preventDefault();
    dispatch(setOffersByCity(city));
  };

  const noOffers = currentOffers.length < 1;

  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              {CITIES.map((city) => (
                <HeaderMenu
                  city={city}
                  key={city}
                  isActive={selectedCity.name === city}
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
                  <OffersListComponent offers={sortedOffers} setActiveOffer={setActiveOffer} />
                </section>
                <div className="cities__right-section">
                  <MapComponent className='cities__map map' activeOffer={activeOffer} offers={allOffers} style={{ height: '1100px' }} />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>

  );
}

export default MainScreen;
