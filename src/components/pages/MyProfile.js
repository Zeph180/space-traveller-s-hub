/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';
import './MyProfile.css';

export default function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <section className="container">
      <div>
        <h3 className="cat-headers">My Missions</h3>
        <div className="toper">
          {missions.map((mission) => (mission.joined ? <p className="my-mission">{mission.mission_name}</p> : null))}
        </div>
      </div>
      <div>
        <h3 className="cat-headers">My Rockets</h3>
        <div className="toper">
          {rockets.map((rocket) => (rocket.reserved ? <p className="my-rocket">{rocket.name}</p> : null))}
        </div>
      </div>
    </section>
  );
}
