import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/planet.png';

export default function NavBar() {
  return (
    <nav>
      <div className="logo-cont">
        <img
          src={logo}
          alt="logo"
          height={50}
          width={50}
        />
        <h1>
          Space Travelers Hub
        </h1>
      </div>
      <span className="links-cont">
        <span><Link className="link" to="/">Rockets</Link></span>
        <span><Link className="link" to="/missions">Missions</Link></span>
        <span><Link className="link" to="/my-profile">My Profile</Link></span>
      </span>
    </nav>
  );
}
