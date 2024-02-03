// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"
import Input from "../Component/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavIcon, imageIcon, tasks, Category } from "../Datasheets";
import React from 'react';
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { Label } from "../Component/styled";
import CatProp from "../Component/CatProp";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";


export const EditTask= () => {
    Title("Daily Tracker || Task Edit");

    const [date, setDate] = useState(new Date());
    const [newCategory, setNewCategory] = useState([]);
    const [task, setTask] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [desc, setDesc] = useState("")
    const [selCat, setSelCal] = useState("")
    const {id} = useParams()

    const [fetchedData, setFetchedData] = useState([])


   
    const handleChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case "task":
                setTask(value);
                break;
            case "startDate":
                setStartDate(value);
                break;
            case "endDate":
                setEndDate(value);
                break;
            case "desc":
                setDesc(value);
                break;
            default:
                break;
        }
    };
    

    
   
    
     const removeCategory = (id) => {
       const updatedCat = newCategory.filter((cat) => cat.id !== id);
       setNewCategory(updatedCat);
     };

     const selectedCategory = (id) => {
        const selectedCat = newCategory.find((cat) => cat.id === id);
        if (selectedCat) {
            setSelCal(
                 selectedCat.title
             );
        }
        console.log(id)
      };
    
   const update = (e) =>{
       e.preventDefault()
      const formData = {
        task:task, 
        startDate: startDate, 
        endDate: endDate, 
        desc: desc,
        category: selCat
        }
        console.log(formData)

       

   }
   useEffect(() => {

    // Assuming you want to set newCategory initially to Category
    setNewCategory(Category);

    if (!id){
        return
      }
    console.log(id)
    axios.get('http://localhost:3001/todo/' + id).then(({response}) =>{
        const {data} = response;
      setFetchedData((prev) =>({
        ...prev,
        task: data.task,
        startDate: data.startDate, 
        endDate: data.endDate, 
        desc: data.desc,
        category: data.selCat
      }))
    })

   }, [])
    
    return (
        <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <form className="flex flex-col">
                <div className="flex items-center mb-4">
                    <div className="block lg:hidden">
                    <BiArrowBack/> 
                    {/* //replace with svg */}
                    </div>
                    <div className="flex-1 ">
                    <h1 className="text-center">Edit Task</h1>
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
                    dd

                </div>
                </div>
                
                <div classname="">
                <Label className="label" htmlFor="cateodry ">Category</Label>
                    <div>
                    <ul className="flex gap-2 flex-wrap mb-4">
                    {newCategory && newCategory.length > 0 ? (
                        newCategory.map((cat) => 
                        <CatProp 
                        key={cat.id}
                         cat={cat} onHandleClick ={()=>removeCategory(cat.id)} 
                         onSelected={()=>selectedCategory(cat.id)}/>)
                            ) : (
                            <div className="text-center">
                               <button className='input-container rounded-sm p-2 border-slate-50 '>
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
                    <Label className="label" htmlFor="calendar ">Start time</Label>
                    <div className="input-container justify-between">
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    <BiCalendar/>
                    </div>
                    </div>
                    <div>
                    <Label className="label" htmlFor="calendar ">End time</Label>
                    <div className="input-container justify-between">
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                    <BiCalendar/>
                    </div>
                    </div>
                </div>

                
                
                <Label className="label" htmlFor="description ">Description</Label>
                <textarea
                 type="text"
                 className="shadow-md hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease w-full rounded-sm"
                 id="desc"
                 name="desc" 
                 value={desc}
                 onChange={handleChange}/>
                 
                </div>

                <button onClick={update}  class="btn my-6">Update Task</button>
             </form>
                
             
               
            
        </div>
    );
}
