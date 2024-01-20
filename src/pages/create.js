// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import "../css/style.css"
import Input from "../Component/Input";
import CircularProgressBar from "../Component/progressBar/CircularProgressBar";
import { useEffect, useState } from "react";
import TaskProp from "../Component/TaskProp";
import { NavIcon, imageIcon, tasks, Category } from "../Datasheets";
import React from 'react';
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { Label } from "../Component/styled";
import CatProp from "../Component/CatProp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const CreateTask= () => {
    Title("Daily Tracker || Task");
    const [date, setDate] = useState(new Date());
    const [newCategory, setNewCategory] = useState([]);

    const [formData, setFormData] = useState({
        task: "",
        startDate: "",
        endDate: "",
        desc: ""
   })
   const {task, desc, startDate, endDate} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

    
   
     useEffect(() => {
       // Assuming you want to set newCategory initially to Category
       setNewCategory(Category);
     },[]); // Include Category as a dependency to re-run the effect when Category changes
   
     const removeCategory = (id) => {
       const updatedCat = newCategory.filter((cat) => cat.id !== id);
       setNewCategory(updatedCat);
     };

    
     const selectedCategory = (id) => {
        const selectedCat = newCategory.filter((cat) => cat.id === id);
        setFormData((p) => ({
            ...p,
            cat: selectedCat
        }));
        console.log(id)
      };

   const submit = (e) =>{
       e.preventDefault()
       console.log(formData)
       

   }
    
    return (
        <div className="space-y-2 flex justify-center mx-auto px-5 py-8 lg:p-0 my-8 lg:m-0 max-w-xl   h-screen lg:h-full w-full bg-cover flex-col">
        <form className="flex flex-col">
                <div className="flex items-center mb-4">
                    <div className="">
                    <BiArrowBack/> 
                    {/* //replace with svg */}
                    </div>
                    <div className="flex-1 ">
                    <h1 className="text-center">Create Task</h1>
                    </div>
                    
                </div>               

                <div className="">
                <Input 
                type="text" 
                placeholder="task"  
                id="task"
                task
                label="Task Name" 
                name="task"
                value={task}
                onChanged={handleChange} />
                <h4>&nbsp;</h4>
                <div className=" hidden z-50 mx-auto -my-[20px] popover w-[300px] rounded-xl p-2
                h-[300px] overflow-y-scroll max-h-[300px]
                bg-red-500">
                  

                </div>
                </div>
               
                <div classname="">
                <Label className="label" htmlFor="category ">Category</Label>
                    <div>
                    <ul className="flex gap-2 flex-wrap mb-4">
                    {newCategory && newCategory.length > 0 ? (
                        newCategory.map((cat) => 
                        <CatProp 
                        key={cat.id}
                         cat={cat} 
                         onHandleClick ={()=>removeCategory(cat.id)}
                         onSelected={()=>selectedCategory(cat.id)}
                          />)
                            ) : (
                            <div className="text-center">
                               <button className=' rounded-sm p-2 border-slate-50 '>
                                  Add Category
                                </button>
                               
                            </div>
                            )}
                     </ul>

                    </div>

                    
                </div>

                <div className="flex flex-col gap-2">
                <Label className="label" htmlFor="calendar ">Date & Calendar</Label>
                <div className="input-container justify-between">
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
                <BiCalendar/>
                </div>

                <div className="flex gap-6 ">
                    <div className="">
                   
                    <Input 
                        type="text" 
                        icon= {<BiCalendar/>}
                        placeholder="01-12-2022"  
                        id="startDate"
                        label="Start Time" 
                        name="startDate"
                        value={startDate}
                        //dont forget to format using regex
                        onChanged={handleChange} />
                  
                    </div>
                    <div>
                    <Input 
                        type="text" 
                        placeholder="01-12-2022"  
                        icon= {<BiCalendar/>}
                        id="endDate"
                        label="End Time" 
                        name="endDate"
                        value={endDate}
                         

                        //dont forget to format using regex
                        onChanged={handleChange} />
                   
                    </div>
                </div>
                
                <Label className="label" htmlFor="description ">Description</Label>
                <textarea
                 className="textarea"
                 id="description"
                 name="description" 
                 value={desc}
                 onChange={handleChange}
                ></textarea>
                </div>

                <button onClick={submit}  class="btn my-6">Create Task</button>
             </form>
                
             
               
            
        </div>
    );
}