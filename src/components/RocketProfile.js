import { useSelector } from 'react-redux';

const Joined = () => {
  const Rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = Rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="reserve-container" id="container">
      <h1 className="profile-missions-title">My Rockets</h1>
      <ul className="profile-missions">
        {reservedRockets.length === 0 && <p className="no-reserve">No Rockets Reserved</p>}
        {reservedRockets.map((rocket) => (
          <li className="reserve-item" key={rocket.rocket_id}>
            {rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Joined;
