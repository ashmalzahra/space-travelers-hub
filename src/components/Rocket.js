import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './Rocket.css'
import { reserveRocket } from '../redux/RocketsSlice';

const Rocket = ({rocket, reserved= false,}) => {
    const dispatch = useDispatch();

    const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

    return(
            <div className="container" id={rocket.rocket_id}>
                <img src={rocket.flickr_images} alt={rocket.rocket_name} className="pic"/>
                <div>
                    <h3 className="title">{rocket.rocket_name}</h3>
                    {rocket.reserved === true && <button>Reserved</button>}
                    <p className="description">{rocket.description}</p>
                    <Button variant="primary" id={rocket.rocket_id} onClick={() => reserveRocketHandler(rocket.rocket_id)}>Reserve Rocket</Button>
                </div>
            </div>
        )
}

export default Rocket