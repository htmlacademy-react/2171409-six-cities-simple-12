import { Header } from '../../components/header/header';
import MapComponent from '../../components/map/map-component';
import { CITIES, SortOffers } from '../../const';
import { setOffersByCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import SortList from '../../components/sort-list/sort-list';
import { useState } from 'react';
import MainScreenEmpty from '../main-empty/main-empty';
import { HeaderMenu } from '../../components/header-menu/header-menu';
import OfferListComponent from '../../components/offer-list/offer-list';


function MainScreen(): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity.name));
  const selectedSortItem = useAppSelector((state) => state.sortOption);
  const sortOffers = SortOffers(offersByCity, selectedSortItem);

  const handleChangeCity = (e: React.MouseEvent<HTMLAnchorElement>, city: string) => {
    e.preventDefault();
    dispatch(setOffersByCity(city));
  };

  const noOffers = offersByCity.length < 1;

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
                  <b className="places__found">{offersByCity.length}&nbsp;{offersByCity.length <= 1 ? 'place' : 'places'} to stay in {selectedCity.name}</b>
                  <SortList selectedSortItem={selectedSortItem} />
                  <OfferListComponent offers={sortOffers} setActiveOffer={setActiveOffer} />
                </section>
                <div className="cities__right-section">
                  <MapComponent className='cities__map map' activeOffer={activeOffer} offers={offers} style={{ height: '1100px' }} />
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
