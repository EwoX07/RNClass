import React from 'react';
import './Past.css';
import Chips from '../Chips/Chips';

const Past = () => {
  return (
    <div className="past">
      <div className="past-head">
        <h3>Past Meetups</h3>
        <h4>See all</h4>
      </div>
      <div className="past-content">
        <Chips
          data={{
            date: '27 November 2017',
            detail: '#39 JakartaJS April Meetup with kumparan',
            went: 139
          }}
        />
        <Chips
          data={{
            date: '27 October 2017',
            detail: '#39 JakartaJS April Meetup with BliBli',
            went: 113
          }}
        />
        <Chips
          data={{
            date: '27 September 2017',
            detail: '#37 JakartaJS April Meetup with Hacktiv8',
            went: 110
          }}
        />
      </div>
    </div>
  );
};

export default Past;
