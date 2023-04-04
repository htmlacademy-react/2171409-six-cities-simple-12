import { City, Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef, useState } from 'react';
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
  const [currentCity, setCurrentCity] = useState<City>();
  const [map, layerGroup] = useMap(mapRef, selectedCity);

  useEffect(() => {
    if (map && layerGroup && selectedCity) {

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
          .addTo(layerGroup);
      };

      if (currentCity !== selectedCity) {

        if (currentCity) {
          map.flyTo([selectedCity.location.latitude, selectedCity.location.longitude], selectedCity.location.zoom, {
            animate: true,
            duration: 1
          });
        }

        setCurrentCity(selectedCity);
      }

      layerGroup.clearLayers();

      offers.forEach((offer) => {
        addMarker(offer);
      });
    }
  }, [map, offers, activeOffer, selectedCity, layerGroup, currentCity]);

  return (
    <section className={className} ref={mapRef} style={style} />
  );
}

export default MapComponent;
