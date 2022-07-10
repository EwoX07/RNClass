import React from 'react';
import './Invitation.css';

const Invitation = () => {
  return (
    <div className="invitation">
      <div className="invitation-content"></div>
      <div className="invitation-content-detail">
        <h3>Hacktiv8 Meetup</h3>
        <table className="invitation-table">
          <tr>
            <th>Location</th>
            <td>Jakarta, Indonesia</td>
          </tr>
          <tr>
            <th>Members</th>
            <td>1,078</td>
          </tr>
          <tr>
            <th>Organizers</th>
            <td>Adhy Wiranata</td>
          </tr>
        </table>
        <div className="join-button">Join Us</div>
      </div>
    </div>
  );
};

export default Invitation;
