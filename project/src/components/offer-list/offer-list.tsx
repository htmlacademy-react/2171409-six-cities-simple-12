import { Offers } from '../../types/offer';
import CardComponent from '../card/card';

type OfferListComponentProps = {
  offers: Offers;
  // onMouseOverOffer?(id: number): void | undefined;
  setActiveOffer: (id: number | null) => void;
}

function OfferListComponent(props: OfferListComponentProps) {
  const { offers, setActiveOffer } = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => <CardComponent key={offer.id} offer={offer} setActiveOffer={setActiveOffer}/>)
      }
    </div>
  );
}

export default OfferListComponent;
