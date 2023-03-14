import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsAsync } from '../redux/features/missions/missionsSlice';

export default function Missions() {
  // const [missions, setMissions] = useState(initialState);
  const { missions } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissionsAsync());
  }, [dispatch]);

  return (
    <>
      <p>Missions</p>
      {
        missions.map((mission) => <p key={mission.mission_id}>{mission.mission_name}</p>)
      }
    </>
  );
}
