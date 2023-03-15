/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './Rockets.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRocketsAsync, rocketsActions } from '../redux/features/rockets/rocketsSlice';

export default function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRocketsAsync());
  }, [dispatch]);
  return (
    <section className="rockets-sec">
      {rockets.map((rocket) => (
        <>
          <Rocket rocket={rocket} />
        </>
      ))}
    </section>
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
    <article className="rocket-cont">
      <div className="img-cont">
        <img alt={rocket.name} src={rocket.flickr_images} className="rocket-img" />
      </div>
      <div className="about-rocket-cont">
        <h3 className="rocket-name">{rocket.name}</h3>
        <p className="rocket-desc">
          {
            rocket.reserved && <span className="badge">reserved</span>
          }
          {rocket.description}
        </p>
        <>
          {
            rocket.reserved !== true
              ? <button onClick={handleReservation} id={rocket.id} type="button" className="reserve-btn">Reserve rocket</button>
              : <button onClick={handleCancelReservation} id={rocket.id} type="button" className="cancel-btn">Cancel reservation</button>
          }
        </>
      </div>
    </article>
  );
};
