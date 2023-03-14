import { useSelector } from 'react-redux';

export default function Missions() {
  // const [missions, setMissions] = useState(initialState);
  const missions = useSelector((state) => state.missions);
  // const dispatch = useDispatch();

  return (
    <>
      <p>Missions</p>
      {
        missions.map((mission) => <p key={12}>{mission.mission}</p>)
      }
    </>
  );
}
