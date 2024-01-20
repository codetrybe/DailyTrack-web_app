import React from 'react'
import Vector from "../asset/TasksAsset/Vector.svg"
import { Link } from 'react-router-dom'

export default function TaskProp({event}) {
    const { task, icon, start_date, end_date} = event

  return (

    <div className='w-[312px] hover:bg-grey rounded-sm bg-red-600 px-3 flex 'style={{ padding: "10px", borderRadius:"12px", backgroundColor:"white"}}>
     
        <div>
            {icon}
        </div>
        <div className='flex flex-col flex-1' style={{flex:"1", padding:"0 20px"}}>
           <h2 className='font-bold'> {task}</h2>
            
           <div> 
            <p className='' style={{fontSize:"11px"}}>{start_date} - {end_date} </p>
          </div>
        </div>
        <div>
          <Link to={"/todo/" + event.id}>
            <img src={Vector} alt='more'/>
          </Link>

        </div>
        
    </div>
  )
}
