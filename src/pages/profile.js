// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"
import HomeLogo from '../images/svg/homesvg.svg'
import Input from "../Component/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import Auth from "../Component/Auth";
import logo from "../asset/form-page assets/logo.svg"
import { IoNotificationsOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import user from "../asset/form-page assets/user.svg"
import edit from "../asset/form-page assets/edit.svg"
import deletes from "../asset/form-page assets/deleteIcon.svg"
import privacy from "../asset/form-page assets/privacy.svg"
import settings from "../asset/form-page assets/settingSet.svg"
import emails from "../asset/form-page assets/email.svg"
import passwords from "../asset/form-page assets/password.svg"
import padlock from "../asset/form-page assets/padlock.svg"
import cplus from "../asset/TasksAsset/navIcon/cplus.svg"
import CircularProgressBar from "../Component/progressBar/CircularProgressBar";
import { useEffect, useState } from "react";
import TaskProp from "../Component/TaskProp";
import { NavIcon, imageIcon, tasks, Category } from "../Datasheets";
import React from 'react';
import Users from "../Component/Users";
import Nav from "../Component/Nav";
import DateCal from "../Component/DateCal";
import { BiArrowBack, BiCalendar } from "react-icons/bi";
import { Label } from "../Component/styled";
import CatProp from "../Component/CatProp";
import add_user from "../asset/TasksAsset/userIcon/add_user.svg";
import { RiArrowDropDownLine} from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const ProfileHome = ()=>{
    Title("Daily Tracker || Profile");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        account:"",
        
        deleteAccount:"",
        
   })
   const navigate = useNavigate()
   const {name, email, password, account, deleteAccount} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

   const submit = (e) =>{
       e.preventDefault()
       console.log(formData)
       navigate("/todos")
       

   }
    return(
       
        <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div className="flex items-center mb-4">
                    <div className="block lg:hidden">
                    <BiArrowBack/> 
                    {/* //replace with svg */}
                    </div>
                    <div className="flex-1 ">
                    <h1 className="text-center">Profile</h1>
                    </div>
                    
                </div>   
                <div className="flex justify-center">
                    <div  className='relative border-profile bg-lightblue w-[120px] h-[120px] rounded-full p-8 '>
                       
                        <label className="absolute bottom-0 right-0">
                         <input type="file" multiple className='hidden' />
                          <img src={add_user}/>
                        </label>
                    </div>
                </div>  

                <form className="flex flex-col gap-4 pb-4 mt-6">
                
                <Input 
                type="text" 
                icon = {< img src={user} alt="user"/>} 
                placeholder="user" 
                id="name"
                profileEdit
                name="name"
                value={name}
                onChanged={handleChange} />

            <Input 
             type="email" 
             icon = {< img src={emails} alt="email"/>} 
             placeholder="peterobi@gmail.com" 
             profileEdit 
             id="email"
             name="email"
             value={email}
             onChanged={handleChange} />

            <Input 
             type="password" 
             icon = {< img src={padlock} alt="password"/>} 
             placeholder="Password" 
             id="password"
             name="passwords"
             value={password}
             onChanged={handleChange} />
            {/* <Input 
             type="button" 
             icon = {< img src={padlock} alt="password"/>} 
             placeholder="Password" 
             id="password"
             className="px-2"
             
             name="passwords"
             value="Edit Account"
             onChanged={handleChange} /> */}

            <div className="input-container">
                < img src={edit} alt="Edit Account"/>
                <p className="text-center ml-4 text-grey">Edit Account</p>
                <RiArrowDropDownLine size="40" fill="gray" />
            </div>

           <button className="input-container">
                <img src={privacy} alt="private"/>
                <p className="text-center ml-4 text-grey">Privacy</p>
                <RiArrowDropDownLine className="" size="40" fill="gray" />
            </button>
           <button className="input-container">
                <img src={settings} alt="settings"/>
                <p className="text-center ml-4 text-grey">Settings</p>
                <RiArrowDropDownLine className="float-right" size="40" fill="gray" />
            </button>
           <button className="input-container">
                <img src={deletes} alt="delete"/>
                <p className="text-center ml-4 text-grey">Deletes</p>
                <RiArrowDropDownLine className="float-right" size="40" fill="gray" />
            </button>

             <button className="btn">Logout</button>

                </form> 
            </div>
        
    )
    
};