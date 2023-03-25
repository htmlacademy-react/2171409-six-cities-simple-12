import CardComponent from '../../components/card/card';
import { HeaderMenu } from '../../components/header-menu/headerMenu';
// import { Header } from '../../components/header/header';
import MapComponent from '../../components/map/mapComponent';
import { City, Locations, Offers } from '../../types/offer';

type MainScreenProps = {
  placesAmount: number;
  offers: Offers;
  city: City;
  locations: Locations;
}

function MainScreen(props: MainScreenProps): JSX.Element {
  const { placesAmount, offers, city, locations } = props;

  // const [selectedLocation, setSelectedLocation] = useState(Location | undefined);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <HeaderMenu />
      <div className='cities'>
        <div className='cities__places-container container'>
          <section className='cities__places places'>
            <h2 className='visually-hidden'>Places</h2>
            <b className='places__found'>{placesAmount} places to stay in Amsterdam</b>
            <form className='places__sorting' action='#' method='get'>
              <span className='places__sorting-caption'>Sort by</span>
              <span className='places__sorting-type' tabIndex={0}>
                Popular
                <svg className='places__sorting-arrow' width={7} height={4}>
                  <use xlinkHref='#icon-arrow-select' />
                </svg>
              </span>
              <ul className='places__options places__options--custom places__options--opened'>
                <li
                  className='places__option places__option--active'
                  tabIndex={0}
                >
                  Popular
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: low to high
                </li>
                <li className='places__option' tabIndex={0}>
                  Price: high to low
                </li>
                <li className='places__option' tabIndex={0}>
                  Top rated first
                </li>
              </ul>
            </form>
            <div className='cities__places-list places__list tabs__content'>
              {
                offers.map((offer) => <CardComponent key={offer.id} offer={offer} />)
              }
            </div>
          </section>
          <div className="cities__right-section">
            <section className='map' style={{width: '100%', height: '100vh'}}>
              <MapComponent city={city} locations={locations} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainScreen;
