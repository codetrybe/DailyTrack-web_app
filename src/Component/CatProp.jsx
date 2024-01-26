import React, { useState } from 'react'
import { BiSolidFlagAlt } from 'react-icons/bi';
import { MdCancel } from "react-icons/md";

export default function CatProp(
    {cat, onHandleClick, onSelected}
  
) {
  const [selected, setSelected] = useState(false)

 function handleClick() {
  console.log("click", cat.id)
  onHandleClick()
 }
 function handleSelect() {
  onSelected(cat.id); 
  // Inform the parent component of the selected category
  setSelected(true); 

  console.log("selected")

 }
  
  return (
    <div onClick={handleSelect} className='relative'>
       <label 
       className={`${selected ? "bg-secondary drop-shadow-md border-none outline-none text-white font-bold"  : ""} input-container rounded-2xl p-2 border-black border-2`}>
        {cat.title}
        <div onClick={handleClick} className='absolute bottom-0 right-0'><MdCancel/></div>
      </label>
           
    </div>
  )
}
