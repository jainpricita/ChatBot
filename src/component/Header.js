import React from 'react'

export default function Header() {
  return (
    <div style={{
        borderTopRightRadius:"5px",
        borderTopLeftRadius:"5px",
        borderBottom:"2px solid #efefef" ,
        fontSize: "0.85rem",
        padding: "12.5px",
        fontWeight: "bold",backgroundColor: 'white'}}>
          <img className='logo' src="https://www.happilyever.co/static/media/newLogo.d5911d9d4440299a0327aa45842a62c1.svg" alt="Logo"/>
        </div>
  )
}
