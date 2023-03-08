import React from 'react';
import Button from 'react-bootstrap/Button';
import './Rocket.css'

const Rocket = ({id, name, type, image}) => {

    return(
            <div className="container">
                <img src={image} alt={name} className="pic"/>
                <div>
                    <h3 className="title">{name}</h3>
                    <p className="description">{type}</p>
                    <Button variant="primary" id={id}>Reserve Rocket</Button>
                </div>
            </div>
        )
}

export default Rocket