import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => (
  <div className="wrapper">
    <Navbar />
    <Outlet />
  </div>
);
export default Header;
