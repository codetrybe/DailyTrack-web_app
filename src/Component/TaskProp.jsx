import React from 'react'
import Vector from "../asset/TasksAsset/Vector.svg"

export default function TaskProp({event}) {
    const { task, icon, start_date, end_date} = event

  return (
    <div className='w-[312px] rounded-sm bg-red-600 px-4 flex 'style={{ padding: "10px", borderRadius:"12px", backgroundColor:"white"}}>
        <div>
            {icon}
        </div>
        <div className='flex flex-col flex-1 bg-blue-500' style={{flex:"1", padding:"0 20px"}}>
           <h2 className='font-bold'> {task}</h2>
            
           <div> 
            <p className='' style={{fontSize:"11px"}}>{start_date} - {end_date} </p>
          </div>
        </div>
        <div>
            <img src={Vector} alt='more'/>

        </div>
    </div>
  )
}
