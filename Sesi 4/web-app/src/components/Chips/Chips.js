import React from 'react';
import './Chips.css';

const Chips = (props) => {
  return (
    <div className="box">
      <p>{props.data.date}</p>
      <hr className="box-divider" />
      <p>{props.data.detail}</p>
      <p>
        {props.data.went} <span>went</span>
      </p>
      <div className="box-button">View</div>
    </div>
  );
};

export default Chips;
