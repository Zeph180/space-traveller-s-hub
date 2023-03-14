import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAsync } from '../redux/features/rockets/rocketsSlice';

export default function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAsync());
  }, [dispatch]);

  return (
    <>
      <p>Rockets</p>
      {rockets.map((rocket) => (
        <p key={rocket.rocket_id}>{rocket.name}</p>
      ))}
    </>
  );
}
