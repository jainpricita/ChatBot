import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { addAge, addName, setClicked} from "../redux/validationSlice";
import { useDispatch } from "react-redux";
export default function Start() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(addAge(""));
    dispatch(addName(""));
  },[])
  return (
    <div className="center">
      <h1>Enter into Student Info System</h1>
      <Link to="/chat">
      <button className="action-btn" onClick={()=>{dispatch(setClicked())}}>Enroll Now!</button>
      </Link>
    </div>
  );
}
