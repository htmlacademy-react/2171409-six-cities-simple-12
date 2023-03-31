import { Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_POINT_ACTIVE, URL_POINT_DEFAULT } from '../../const';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';

type StyleMap = {
  height: string;
};

type MapComponentProps = {
  activeOffer: null | number;
  offersAll: Offers;
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
  const { activeOffer, offersAll, className, style } = props;
  const mapRef = useRef(null);
  const city = offersAll[0].city;
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      offersAll.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            offer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offersAll, activeOffer]);

  return (
    <section className={className} ref={mapRef} style={style} />
  );
}

export default MapComponent;
