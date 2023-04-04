import { Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_POINT_ACTIVE, URL_POINT_DEFAULT } from '../../const';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks/store';

type StyleMap = {
  height: string;
};

type MapComponentProps = {
  activeOffer: number | null;
  offers: Offers;
  className: string;
  style: StyleMap;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_POINT_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_POINT_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

function MapComponent(props: MapComponentProps): JSX.Element {
  const { activeOffer, offers, className, style } = props;
  const mapRef = useRef(null);
  const selectedCity = useAppSelector(({ city }) => city);
  const map = useMap(mapRef, selectedCity);

  useEffect(() => {
    const markers: Marker[] = [];
    if (map) {
      map.setView(
        [
          selectedCity.location.latitude,
          selectedCity.location.longitude
        ],
        selectedCity.location.zoom
      );
      const addMarker = (offer: Offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(
            activeOffer && offer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
        markers.push(marker);
      };

      offers.forEach((offer) => {
        addMarker(offer);
      });

    }
    return () => {
      markers.forEach((marker) => marker.remove());
    };

  }, [map, offers, activeOffer, selectedCity]);

  return (
    <section className={className} ref={mapRef} style={style} />
  );
}

export default MapComponent;
