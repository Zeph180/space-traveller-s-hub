/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import './Missions.css';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
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
    <section className="mission-sec">

      {missions.map((mission) => (
        <div key={mission.mission_id}>
          <Mission mission={mission} />
        </div>
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
    <Table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p className="description">{mission.description}</p></td>
          <td>
            {mission.joined === true ? (
              <span className="member">Active member</span>
            ) : (
              <span className="no-member">Not a member</span>
            )}
          </td>
          <td>
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
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Missions;
