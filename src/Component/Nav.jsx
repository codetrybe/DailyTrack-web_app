import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav({icon, onHandleClick}) {
  function handleClick(){
    onHandleClick()
  }
  return (

  
    <div onClick={handleClick}>
      
        {icon.icon}

     
      
    </div>
  )
}
