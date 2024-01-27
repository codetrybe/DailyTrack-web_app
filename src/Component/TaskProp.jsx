import React from 'react'
// import Vector from "../asset/TasksAsset/Vector.svg"
import { Link } from 'react-router-dom'
// import { MdDeleteOutline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

export default function TaskProp({event}) {
    const { task, icon, start_date, end_date} = event

  return (

    <div  className='w-[312px] hover:bg-grey rounded-sm drop-shadow-lg px-3 flex 'style={{ padding: "10px", borderRadius:"12px", backgroundColor:"white"}}>
        <div>
            {icon}
        </div>
        <Link to={"/todo/" + event.id}  className='flex flex-col flex-1' style={{flex:"1", padding:"0 20px"}}>
           <h2 className='font-bold'> {task}</h2>
            
           <div> 
            <p className='' style={{fontSize:"11px"}}>{start_date} - {end_date} </p>
          </div>
        </Link>
        <div className='text-xl'>
         
            <BsThreeDots />
         

        </div>

        
    </div>
  )
}
