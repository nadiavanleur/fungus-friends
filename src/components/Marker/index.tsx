import { Mushroom } from '@/pages/api/mushrooms';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { Color, Spots } from '@/pages/api/mushrooms';
import L from 'leaflet';

const customMarkers = {
  [Color.RED]: new L.Icon({
    iconUrl: '/mushroom-red.svg',
    iconRetinaUrl: '/mushroom-red.svg',
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  }),
  [Color.GREEN]: new L.Icon({
    iconUrl: '/mushroom-green.svg',
    iconRetinaUrl: '/mushroom-green.svg',
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  }),
  [Color.YEllOW]: new L.Icon({
    iconUrl: '/mushroom-yellow.svg',
    iconRetinaUrl: '/mushroom-yellow.svg',
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  }),
  [Color.BLUE]: new L.Icon({
    iconUrl: '/mushroom-blue.svg',
    iconRetinaUrl: '/mushroom-blue.svg',
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  }),
};

type Props = {
  mushroom: Mushroom;
}

export default function Marker(props: Props) {
  const { mushroom } = props;

  return (
    <LeafletMarker position={mushroom.latlng} icon={customMarkers[mushroom.color]}>
      <Popup>
        <h2>{mushroom.name}</h2>
        <dl>
          <dt>Color</dt>
          <dl>{Color[mushroom.color].toLowerCase()}</dl>

          <dt>Spots</dt>
          <dl>{Spots[mushroom.spots]}</dl>

          <dt>Coördinates</dt>
          <dl>{mushroom.latlng.join(', ')}</dl>
        </dl>
      </Popup>
    </LeafletMarker>
  )
}