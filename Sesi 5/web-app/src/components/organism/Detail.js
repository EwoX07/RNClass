import React from 'react';

const Detail = () => {
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
      <h3
        style={{
          marginBottom: '10px'
        }}>
        Next Meetup
      </h3>
      <div
        style={{
          backgroundColor: 'rgb(141, 141, 141)',
          marginInline: '20px',
          paddingInline: '20px'
        }}>
        <p
          style={{
            fontWeight: '600'
          }}>
          Awesome meetup and event
        </p>
        <p
          style={{
            color: 'rgba(54, 54, 54, 0.822)',
            fontWeight: '450'
          }}>
          25 January 2019
        </p>
        <p>
          Hello, JavaScript &amp; Node.js Ninjas!
          <br />
          Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!
          <br />
          The meetup format will contain some short stories and technical talks.
          <br />
          If you have a short announcement you'd like to share with the audience, you may do so
          during open mic announcements.
          <br />
          <br />
          Remember to bring a photo ID to get through bulding security
          <br />
          <br />
          - - - - -
          <br />
          <br />
          See you there!
          <br />
          <br />
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </p>
      </div>
    </div>
  );
};

export default Detail;

/*
.detail {
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  borderRadius: '5px',
  padding: '10px',
  margin: '20px'
}

.detail-title {
  margin-bottom: '10px'
}

.main-detail {
  background-color: rgb(141, 141, 141);
  margin-inline: 20px;
  padding-inline: 20px;
}

*/
