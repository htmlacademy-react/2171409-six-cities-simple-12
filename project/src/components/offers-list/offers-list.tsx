import { memo } from 'react';
import { Offers } from '../../types/offer';
import CardComponent from '../card/card';

type OffersListComponentProps = {
  offers: Offers;
  setActiveOffer: (id: number | null) => void;
}

const OffersListComponent: React.FC<OffersListComponentProps> = memo((props: OffersListComponentProps) => {
  const { offers, setActiveOffer } = props;
  return (
    <div className='cities__places-list places__list tabs__content'>
      {
        offers.map((offer) => <CardComponent key={offer.id} offer={offer} setActiveOffer={setActiveOffer} />)
      }
    </div>
  );
});
OffersListComponent.displayName = 'OffersListComponent';

export default OffersListComponent;
