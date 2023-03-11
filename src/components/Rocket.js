import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './Rocket.css';
import { reserveRocket, cancelReserveRocket } from '../Redux/RocketsSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();

  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelRocketHandler = (id) => {
    dispatch(cancelReserveRocket(id));
  };

  return (
    <div className="container" id={rocket.rocket_id}>
      <img src={rocket.flickr_images} alt={rocket.rocket_name} className="pic" />
      <div>
        <h3 className="title">{rocket.rocket_name}</h3>
        <p className="description">
          {rocket.reserved === true && <Button variant="success">Reserved</Button>}
          {rocket.description}
        </p>
        {rocket.reserved === true ? (<Button variant="light" id={rocket.rocket_id} onClick={() => cancelRocketHandler(rocket.rocket_id)}>Cancel Reservation</Button>)
          : (<Button variant="primary" id={rocket.rocket_id} onClick={() => reserveRocketHandler(rocket.rocket_id)}>Reserve Rocket</Button>)}
      </div>
    </div>
  );
};

Rocket.propTypes = {
   rocket: PropTypes.shape({
    rocket_id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool,
  }),
};

export default Rocket;
