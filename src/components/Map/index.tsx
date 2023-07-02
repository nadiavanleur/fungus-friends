import { Mushroom } from '@/pages/api/mushrooms';
import style from './map.module.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { use, useEffect, useState } from 'react';
import MapMarker from '../Marker';

type Props = {
  mushrooms: Mushroom[];
}

export default function Map(props: Props) {
  const [center, setCenter] = useState<[number, number]>([52.082042, 5.236192]);
  const { mushrooms } = props;

  useEffect(() => {
    if (mushrooms.length > 0) {
      const lat = mushrooms.reduce((acc, curr) => acc + curr.latlng[0], 0) / mushrooms.length;
      const lng = mushrooms.reduce((acc, curr) => acc + curr.latlng[1], 0) / mushrooms.length;
      setCenter([lat, lng]);
    }
  }, [mushrooms]);

  return (
    <MapContainer center={center} zoom={17} scrollWheelZoom={false} className={style.map}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {mushrooms.map((mushroom, n) => (
        <MapMarker key={`${n}_${mushroom.name}`} mushroom={mushroom} />
      ))}
    </MapContainer>
  );
}
