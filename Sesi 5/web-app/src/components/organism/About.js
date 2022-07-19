import React from 'react';

const About = () => {
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
      <h3 style={{ marginBottom: '10px' }} className="about-title">
        About Meetup
      </h3>
      <div
        style={{
          marginInline: '20px',
          paddingInline: '20px'
        }}>
        <p style={{ fontWeight: '500' }}>
          Come and meet other developers interested in the JavaScript and it's library in the
          Greater Jakarta area.
        </p>
        <p style={{ fontWeight: '500' }}>Twitter: @JakarjaJS and we use the hashtag #jakartajs</p>
      </div>
    </div>
  );
};

export default About;
