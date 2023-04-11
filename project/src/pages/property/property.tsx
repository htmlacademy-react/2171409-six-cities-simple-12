import { Navigate, useParams } from 'react-router-dom';
import ImagesComponent from '../../components/images/images';
import MapComponent from '../../components/map/map-component';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/store';
import { calcRating } from '../../utils';

function PropertyScreen(): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const selectedOffer = offers.find((element) => element.id === Number(id));
  if (!selectedOffer) {
    return (<Navigate to={AppRoute.Empty} replace />);
  }

  const styleProp = { height: '579px', width: '1144px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '50px' };

  return (
    <main className='page page__main page__main--property'>
      <section className='property'>
        <div className='property__gallery-container container'>
          <div className='property__gallery'>
            {
              selectedOffer.images.map((link) => <ImagesComponent link={link} key={link} />).slice(0, 6)
            }
          </div>
        </div>
        <div className='property__container container'>
          <div className='property__wrapper'>
            <div className='property__mark'>
              <span>{selectedOffer.isPremium ? 'Premium' : 'Standart'}</span>
            </div>
            <div className='property__name-wrapper'>
              <h1 className='property__name'>
                {selectedOffer.title}
              </h1>
            </div>
            <div className='property__rating rating'>
              <div className='property__stars rating__stars'>
                <span style={{ width: calcRating(selectedOffer.rating) }} />
                <span className='visually-hidden'>Rating</span>
              </div>
              <span className='property__rating-value rating__value'>{selectedOffer.rating}</span>
            </div>
            <ul className='property__features'>
              <li className='property__feature property__feature--entire'>
                Apartment
              </li>
              <li className='property__feature property__feature--bedrooms'>
                {selectedOffer.bedrooms} Bedrooms
              </li>
              <li className='property__feature property__feature--adults'>
                Max {selectedOffer.maxAdults} adults
              </li>
            </ul>
            <div className='property__price'>
              <b className='property__price-value'>€{selectedOffer.price}</b>
              <span className='property__price-text'>&nbsp;night</span>
            </div>
            <div className='property__inside'>
              <h2 className='property__inside-title'>What&apos;s inside</h2>
              <ul className='property__inside-list'>
                {
                  selectedOffer.goods.map((link) =>
                    <li className='property__inside-item' key={link}>{link}</li>
                  )
                }
              </ul>
            </div>
            <div className='property__host'>
              <h2 className='property__host-title'>Meet the host</h2>
              <div className='property__host-user user'>
                <div className='property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper'>
                  <img className='property__avatar user__avatar' src='img/avatar-angelina.jpg' width={74} height={74} alt='Host avatar' />
                </div>
                <span className='property__user-name'>
                  Angelina
                </span>
                <span className='property__user-status'>
                  Pro
                </span>
              </div>
              <div className='property__description'>
                <p className='property__text'>
                  {selectedOffer.description}
                </p>
                {/* <p className='property__text'>
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p> */}
              </div>
            </div>
            {/* <section className='property__reviews reviews'>
                <h2 className='reviews__title'>Reviews · <span className='reviews__amount'>{reviews.length}</span></h2>
                <ReviewsComponent reviews={reviews} />
                <CommentFormComponent />
              </section> */}
          </div>
        </div>
        <MapComponent className='map' offers={offers} style={styleProp} activeOffer={selectedOffer.id} />
      </section>
      <div className='container'>

      </div>
    </main>

  );
}

export default PropertyScreen;
