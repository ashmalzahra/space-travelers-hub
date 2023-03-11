<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 9add45350724ad927b921ddfda852e38054be055
import { NavLink } from 'react-router-dom';
import Logo from '../Images/planet.png';

function Navbar() {
  return (
    <div className="NavBar">
      <div className="LogoContainer">
        <img className="planet" src={Logo} alt="planet-logo" />
        <h1>Traverlers Hub</h1>
      </div>
      <nav className="NavLinks">
<<<<<<< HEAD
        <NavLink to="rockets" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Rockets</NavLink>
        <NavLink to="missions" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Missions</NavLink>
        <NavLink to="profile" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>My Profile</NavLink>
=======
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Rockets</NavLink>
        <NavLink to="/missions" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Missions</NavLink>
        <NavLink to="/profile" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>My Profile</NavLink>
>>>>>>> 9add45350724ad927b921ddfda852e38054be055
      </nav>
    </div>
  );
}

export default Navbar;
