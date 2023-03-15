/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMissionsAsync,
  missionsActions,
} from '../redux/features/missions/missionsSlice';

export default function Missions() {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAsync());
  }, [dispatch]);

  return (
    <>
      <p>Missions</p>
      {missions.map((mission) => (
        <>
          <p key={mission.mission_id}>{mission.mission_name}</p>
          <Mission mission={mission} />
        </>
      ))}
    </>
  );
}

const Mission = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoinMission = (e) => {
    const { id } = e.target;
    dispatch(missionsActions.joinMission(id));
  };

  const handleLeaveMission = (e) => {
    const { id } = e.target;
    dispatch(missionsActions.leaveMission(id));
  };

  return (
    <article>
      <div>
        <h3>{mission.mission_name}</h3>
        <p>{mission.description}</p>
        <div>
          {mission.joined === true ? (
            <span>Active member</span>
          ) : (
            <span>Not a member</span>
          )}
        </div>

        {mission.joined === true ? (
          <button
            onClick={handleLeaveMission}
            id={mission.mission_id}
            type="button"
          >
            Leave Mission
          </button>
        ) : (
          <button
            onClick={handleJoinMission}
            id={mission.mission_id}
            type="button"
          >
            Join Mission
          </button>
        )}
      </div>
    </article>
  );
};
