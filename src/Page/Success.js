import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="center">
      <h1>Your name Gowtham aged 27 has been added to student system. You may now exit.</h1>
      <Link to="/">
      <button className='action-btn'>Exit</button>
      </Link>
    </div>
  )
}
