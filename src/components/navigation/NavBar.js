import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <h1>Space Traveler hub</h1>
      <span><Link to="/">Rockets</Link></span>
      <span><Link to="/my-profile">My Profile</Link></span>
      <span><Link to="/missions">Missions</Link></span>
    </nav>
  );
}
