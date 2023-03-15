/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAsync, rocketsActions } from '../redux/features/rockets/rocketsSlice';

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
        <>
          <p key={rocket.rocket_id}>{rocket.name}</p>
          <Rocket rocket={rocket} />
        </>
      ))}
    </>
  );
}
const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleReservation = (e) => {
    const { id } = e.target;
    dispatch(rocketsActions.reserveRocket(id));
  };
  const handleCancelReservation = (e) => {
    const { id } = e.target;
    dispatch(rocketsActions.cancelRocketReservation(id));
  };
  return (
    <article>
      <div className="img-cont">
        <img alt={rocket.name} src={rocket.flickr_images} />
      </div>
      <div>
        <h3>{rocket.name}</h3>
        <p>
          {
            rocket.reserved && <span>reserved</span>
          }
          {rocket.description}
        </p>
        <>
          {
            rocket.reserved !== true
              ? <button onClick={handleReservation} id={rocket.id} type="button">Reserve rocket</button>
              : <button onClick={handleCancelReservation} id={rocket.id} type="button">Cancel reservation</button>
          }
        </>
      </div>
    </article>
  );
};
