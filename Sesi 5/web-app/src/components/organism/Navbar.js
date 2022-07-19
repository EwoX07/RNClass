import React from 'react';
import Brand from '../atoms/Brand';
import List from '../molecules/List';

const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'rgb(82, 82, 82)',
        justifyContent: 'space-between'
      }}>
      <Brand />
      <ul>
        <List data={{
          a: 'Create Meetup',
          href: '#meetup'
        }}/>
        <List data={{
          a: 'Explore',
          href: '#explore'
        }}/>
      </ul>
      <ul
        style={{
          marginLeft: 'auto',
          listStyle: 'none'
        }}>
        <li>
          <a
            style={{
              color: 'aliceblue',
              fontSize: 'large',
              textDecoration: 'none',
              marginRight: '20px'
            }}
            href="#login">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
