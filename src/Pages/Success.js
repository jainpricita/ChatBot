import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {  userSelected} from '../redux/validationSlice';

export default function Success() {
  const {name,age}=useSelector(userSelected);
  return (
    <div className="center message-padding">
      <h1>Your name {name.toUpperCase()} aged {age} has been added to student system. You may now exit.</h1>
      <Link to="/">
      <button className='action-btn'>Exit</button>
      </Link>
    </div>
  )
}
