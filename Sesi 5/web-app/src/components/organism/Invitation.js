import React from 'react';
import Table from '../molecules/Table';
import Box from '../atoms/Box';

const Invitation = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'grey',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px'
      }}>
      <Box />
      <div>
        <h3
          style={{
            margin: 0
          }}>
          Hacktiv8 Meetup
        </h3>
        <Table data={TableData()} />
        <button
          style={{
            color: 'rgb(202, 202, 202)',
            backgroundColor: 'rgb(51, 51, 51)',
            fontSize: '16px',
            width: '7em',
            padding: '10px',
            marginTop: '10px',
            textAlign: 'center'
          }}>
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Invitation;

const TableData = () => {
  return [
    {
      header: 'Location',
      dataCell: 'Jakarta, Indonesia'
    },
    {
      header: 'Members',
      dataCell: '1,078'
    },
    {
      header: 'Organizers',
      dataCell: 'Adhy Wiranata'
    }
  ];
};
