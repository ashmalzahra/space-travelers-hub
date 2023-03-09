import React from 'react';

const Rocket = ({id, name, type, image}) => {

    return(
            <div>
                <img src={image} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{type}</p>
                    <button id={id}>Reserve Rocket</button>
                </div>
            </div>
        )
}

export default Rocket