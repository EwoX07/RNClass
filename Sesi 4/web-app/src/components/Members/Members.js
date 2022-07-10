import React from 'react';
import './Members.css';

const Members = () => {
  return (
    <div className="members">
      <div className="members-head">
        <h3>Members</h3>
        <h4>See all</h4>
      </div>
      <div className="members-content">
        <div className="members-icon"></div>
        <div className="members-detail">
          <p>Organizers</p>
          <table className="members-table">
            <tr>
              <th>Adhy Wiranata</th>
              <td>4 others.</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Members;
