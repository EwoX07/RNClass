import React from 'react'

const List = (props) => {
  return (
    <li
          style={{
            display: 'inline',
            marginRight: '20px',
            paddingInline: '10px'
          }}>
          <a
            style={{
              color: 'aliceblue',
              fontSize: 'large',
              textDecoration: 'none'
            }}
            href={props.data.href}
            className="mid">
            {props.data.a}
          </a>
        </li>
  )
}

export default List