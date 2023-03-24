import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { markerUrlDefault } from '../../const';
import { City, Locations } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';


type MapComponentProps = {
  city: City;
  locations: Locations;
};


function MapComponent(props: MapComponentProps): JSX.Element {
  const { city, locations } = props;

  const defaultCustomIcon = new Icon({
    iconUrl: markerUrlDefault,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  const mapRef = useRef(null);

  return (
    <MapContainer center={[city.location.latitude, city.location.longitude]} zoom={city.location.zoom} style={{ height: '682px' }} ref={mapRef}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      {
        locations.map(({ location, name }) => (<Marker position={[location.latitude, location.longitude]} icon={defaultCustomIcon} key={name} />))
      }
    </MapContainer>
  );
}

export default MapComponent;
