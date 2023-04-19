import { Offers } from '../../types/offer';
import CardComponent from '../card/card';

type OffersListComponentProps = {
  offers: Offers;
  // onMouseOverOffer?(id: number): void | undefined;
  setActiveOffer: (id: number | null) => void;
}

function OffersListComponent(props: OffersListComponentProps) {
  const { offers, setActiveOffer } = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => <CardComponent key={offer.id} offer={offer} setActiveOffer={setActiveOffer} />)
      }
    </div>
  );
}

export default OffersListComponent;
