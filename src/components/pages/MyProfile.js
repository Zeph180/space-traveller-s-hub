/* eslint-disable react/jsx-key */
import { useSelector } from 'react-redux';

export default function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <>
      <p>My profile</p>
      <div>
        {missions.map((mission) => (mission.joined ? <p>{mission.mission_name}</p> : null))}
      </div>
      <div>
        {rockets.map((rocket) => (rocket.reserved ? <p>{rocket.name}</p> : null))}
      </div>
    </>
  );
}
