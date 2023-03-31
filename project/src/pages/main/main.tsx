import { Link } from 'react-router-dom';
import CardComponent from '../../components/card/card';
import { Header } from '../../components/header/header';
import MapComponent from '../../components/map/map-component';
import { Cities, SortOffers } from '../../const';
import { Offers } from '../../types/offer';
import { getOffersByCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import SortList from '../../components/sort-list/sort-list';
import { useEffect, useState } from 'react';
import MainScreenEmpty from '../main-empty/main-empty';

type LocationTabItemProps = {
  isActive: boolean;
  city: Cities;
  changeCurrentLocation: (e: React.MouseEvent<HTMLAnchorElement>, city: Cities) => void;
}

type AllOffersProps = {
  offers: Offers;
  setActiveOffer: (id: number | null) => void;
}

const getCityOffers = (cityName: string, items: Offers) => items.filter((e) => e.city.name === cityName);

function MainScreen(): JSX.Element {
  const [currentOffers, setCurrentOffers] = useState<Offers>([]);
  const [activeOffer, setActiveOffer] = useState<null | number>(null);
  const dispatch = useAppDispatch();
  const selectedCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const offersAll = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === selectedCity));
  const selectedSortItem = useAppSelector((state) => state.sortOption);
  const sortOffers = SortOffers(offersAll, selectedSortItem);

  const handleChangeCity = (e: React.MouseEvent<HTMLAnchorElement>, city: Cities) => {
    e.preventDefault();
    dispatch(getOffersByCity(city));
  };

  useEffect(() => {
    const cityOffers = getCityOffers(selectedCity, offers);
    // cityOffers = SortOffers(cityOffers, currentSortType);

    setCurrentOffers(cityOffers);

  }, [selectedCity, offers]);

  const offersEmpty = currentOffers.length < 1;
  return (
    <>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <ul className='locations__list tabs__list'>
              {Object.values(Cities).map((city) => (
                <LocationTabItem
                  city={city}
                  key={city}
                  isActive={selectedCity === city}
                  changeCurrentLocation={handleChangeCity}
                />
              ))}
            </ul>
          </section>
        </div>
        <div className='cities'>
          <div className={`cities__places-container ${offersEmpty ? 'cities__places-container--empty ' : ''}container`}>
            {offersEmpty && <MainScreenEmpty cityName={selectedCity} />}
            <section className='cities__places places'>
              <h2 className='visually-hidden'>Places</h2>
              <b className='places__found'>{offersAll.length} places to stay in {selectedCity}</b>
              <SortList selectedSortItem={selectedSortItem} />
              <AllOffers offers={sortOffers} setActiveOffer={setActiveOffer} />
            </section>
            <div className="cities__right-section">
              <MapComponent className='cities__map map' activeOffer={activeOffer} offersAll={offersAll} style={{ height: '1100px' }} />
            </div>
          </div>
        </div>
      </main>
    </>

  );
}

function LocationTabItem({ city, changeCurrentLocation, isActive }: LocationTabItemProps) {
  const setActive = isActive ? 'tabs__item--active' : '';

  return (
    <li className='locations__item'>
      <Link className={`locations__item-link tabs__item ${setActive}`} to={'/'} onClick={(e) => changeCurrentLocation(e, city)}>
        <span>{city}</span>
      </Link>
    </li>
  );
}

function AllOffers({ offers, setActiveOffer }: AllOffersProps) {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => <CardComponent key={offer.id} offer={offer} setActiveOffer={setActiveOffer} />)
      }
    </div>
  );
}

export default MainScreen;
