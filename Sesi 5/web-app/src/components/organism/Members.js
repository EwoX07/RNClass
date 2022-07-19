import React from 'react';
import Icon from '../atoms/Icon';

const Members = () => {
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
          maxWidth: '99%',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <h3>Members</h3>
        <h4>See all</h4>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'rgb(105, 105, 105)',
          marginInline: '10px',
          paddingInline: '10px'
        }}>
        <Icon />
        <div>
          <p
            style={{
              fontSize: 'large',
              fontWeight: '600',
              marginBottom: '5px',
              marginTop: '40px'
            }}>
            Organizers
          </p>
          <table className="members-table">
            <tr>
              <th
                style={{
                  textAlign: 'left',
                  fontWeight: '500',
                  paddingRight: '30px',
                  paddingLeft: '0px',
                  paddingBottom: '5px'
                }}>
                Adhy Wiranata
              </th>
              <td
                style={{
                  fontWeight: '500'
                }}>
                4 others.
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
