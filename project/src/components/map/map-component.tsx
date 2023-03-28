import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { City, Locations } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { URL_POINT_DEFAULT } from '../../const';
import { Icon } from 'leaflet';


type MapComponentProps = {
  city: City;
  locations: Locations;
  styleProp: object;
  spliceOffers?: number;
};


function MapComponent(props: MapComponentProps): JSX.Element {
  const { city, locations, styleProp, spliceOffers = 4 } = props;

  const defaultCustomIcon = new Icon({
    iconUrl: URL_POINT_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const mapRef = useRef(null);

  return (
    <MapContainer center={[city.location.latitude, city.location.longitude]} zoom={city.location.zoom} style={styleProp} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {
        locations.map(({ location, name }) => (<Marker position={[location.latitude, location.longitude]} icon={defaultCustomIcon} key={name} />)).splice(0, spliceOffers)
      }
    </MapContainer>
  );
}

export default MapComponent;
