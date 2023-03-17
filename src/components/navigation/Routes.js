import { Routes, Route } from 'react-router-dom';
import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';
import Rockets from '../pages/Rockets';
import NavBar from './NavBar';

export default function OurRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}
