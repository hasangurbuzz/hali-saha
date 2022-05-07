import React from 'react';
import './Card.css'

const Card = ({image, description}) => {
    return (
        <div className={'card-container'}>
            <div className={'card-image'} style={{
                backgroundImage: `url(/images/${image})`
            }}/>
            <p className={'card-info'}>{description}</p>

        </div>
    );
};

export default Card;
