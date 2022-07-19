import React from 'react';
import Chips from '../molecules/Chips';

const Past = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        padding: '10px',
        margin: '20px'
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: '97%',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <h3>Past Meetups</h3>
        <h4>See all</h4>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginInline: '20px',
          paddingInline: '20px',
          justifyContent: 'space-between'
        }}>
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
