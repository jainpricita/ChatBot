import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function End() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
useEffect(()=>{
    const delay = 1000;
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    } else {
      navigate("/success");
    }
},[countdown,navigate]);

  return <div> <p style={{color:"#008caa", textAlign:"center"}}>Redirecting in {countdown} seconds...</p> </div>;
  }