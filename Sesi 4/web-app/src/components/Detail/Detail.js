import React from 'react';
import './Detail.css';

const Detail = () => {
  return (
    <div className="detail">
      <h3 className="detail-title">Next Meetup</h3>
      <div className="main-detail">
        <p>Awesome meetup and event</p>
        <p className="date">25 January 2019</p>
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
