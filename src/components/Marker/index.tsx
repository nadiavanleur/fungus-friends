import { Mushroom } from '@/pages/api/mushrooms';
import { Marker as LeafletMarker, Popup } from 'react-leaflet';
import { Color, Spots } from '@/pages/api/mushrooms';

type Props = {
  mushroom: Mushroom;
}

export default function Marker(props: Props) {
  const { mushroom } = props;

  return (
    <LeafletMarker position={mushroom.latlng}>
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