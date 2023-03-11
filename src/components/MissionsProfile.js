<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 9add45350724ad927b921ddfda852e38054be055
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((x) => x.reserved);

  return (
    <div className="reserve-container">
      <h1 className="profile-missions-title">My Missions</h1>
      <div className="profile-missions">
        {reservedMissions.length === 0 && <p className="no-reserve">No Mission Reserved</p>}
        {reservedMissions.map((x) => (
          <div key={x.mission_id} className="reserve-item">{x.mission_name}</div>
        ))}

      </div>
    </div>
  );
};

export default MissionsProfile;
