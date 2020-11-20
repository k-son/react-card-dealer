import React from 'react';
import './Card.css';

export const Card = (props) => {
  return(
    <div className="Card">
      <img src={props.image} alt={props.alt} style={{left: props.left + '%', top: props.top + 'px', transform: `translateX(-50%) rotate(${props.rotate}deg)`}}/>
    </div>
  );
};
