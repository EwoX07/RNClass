import React from 'react';

const Table = ({ data }) => {
  return (
    <div>
      <table>
        {data.map((item) => {
          return (
            <tr>
              <th style={{
                textAlign: 'left',
                fontWeight: '450',
                paddingRight: '30px',
                paddingLeft: '0px',
                paddingTop: '5px',
                paddingBottom: '5px'
              }}>{item.header}</th>
              <td>{item.dataCell}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;