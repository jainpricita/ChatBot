import React from 'react';

export default function GotIt(props) {
   return (
    <div className="widget">
            <button
              onClick={()=>{props.actions.actions.handleStart()}}
            >
              Got It!
            </button>

      </div>
  )
}