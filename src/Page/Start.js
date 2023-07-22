import React from "react";
import { Link } from "react-router-dom";

export default function Start(props) {
  return (
    <div className="center">
      <h1>Enter into Student Info System</h1>
      <Link to="/chat">
      <button className="action-btn" onClick={() => props.toggleClick()}>Enroll Now!</button>
      </Link>
    </div>
  );
}
