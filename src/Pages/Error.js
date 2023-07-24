import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='center'>
      <h1 style={{fontSize:"100px"}}>Error 404</h1>
      {/* <h2>404</h2> */}
      <Link to="/">
      <button className='action-btn'>Go to Home Page</button>
      </Link>
    </div>
  )
}
