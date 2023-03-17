/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getMissionsAsync,
  missionsActions,
} from '../redux/features/missions/missionsSlice';

const Missions = () => {
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAsync());
  }, [dispatch]);

  return (
    <section className="missions-cont">
      <article className="mission">
        <h3 className="mission-header">Mission</h3>
        <p className="desc-header">Description</p>
        <p className="status-desc">Status</p>
      </article>
      {missions.map((mission) => (
        <>
          <Mission mission={mission} />
        </>
      ))}
    </section>
  );
};

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
    <article className="mission">
      <h3>{mission.mission_name}</h3>
      <p className="mission-desc">{mission.description}</p>
      <div className="members-cont">
        {mission.joined === true ? (
          <span className="member-badge">Active member</span>
        ) : (
          <span className="not-member-badge">NOT A MEMBER</span>
        )}
      </div>
      <div className="buttons-cont">
        {mission.joined === true ? (
          <button
            onClick={handleLeaveMission}
            id={mission.mission_id}
            type="button"
            className="leave-btn"
          >
            Leave Mission
          </button>
        ) : (
          <button
            onClick={handleJoinMission}
            id={mission.mission_id}
            type="button"
            className="join-btn"
          >
            Join Mission
          </button>
        )}
      </div>
    </article>
  );
};

export default Missions;
