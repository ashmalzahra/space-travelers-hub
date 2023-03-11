import React from 'react';
import { useSelector } from 'react-redux';
import MissionsProfile from './MissionsProfile';
import Joined from './display';

const Profile = () => {
  const Rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <Joined myRockets={reservedRockets} />
      <MissionsProfile />
    </div>
  );
};

export default Profile;
