import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
  return (
    <nav>
      <h1>Space Traveler hub</h1>
      <span className="links-cont">
        <span><Link className="link" to="/">Rockets</Link></span>
        <span><Link className="link" to="/missions">Missions</Link></span>
        <span><Link className="link" to="/my-profile">My Profile</Link></span>
      </span>
    </nav>
  );
}
