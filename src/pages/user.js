// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import Input from "../Component/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import Auth from "../Component/Auth";
import logo from "../asset/form-page assets/logo.svg"
import user from "../asset/form-page assets/user.svg"
import emails from "../asset/form-page assets/email.svg"
import padlock from "../asset/form-page assets/padlock.svg"
import { useEffect, useState } from "react";
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios"

export const Login = () => {
    Title("Daily Tracker || Login");
    const [formData, setFormData] = useState({
        email: "",
        password_hash: ""
   })
   const navigate = useNavigate()
   const {email, password_hash} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

   const submit = (e) =>{
       e.preventDefault()
       axios.post("http://localhost:3000/v1/users/login", formData)
       .then(res => {
        console.log(res)
        if (res.data.success === true) {
            console.log(res.data.message)
            navigate("/todos")
        }
       }).catch(err => {
        alert(err.response.data.error.message)
       })
       
       

   }
    return (
        <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div className="logo w-[50%] border-[10px] flex justify-center border-r-[20px] p-10 mx-auto ">
            {/* <img src={logo} alt="logo" className="w-full h-full"/> */}
        </div>
        <h1 className="mb-2">Welcome Back!!!</h1>

        <Input 
            type="text" 
            icon= {<img src={user} alt="email"/>} 
            placeholder="peterobi@gmail.com" 
            id="email" 
            label="Email Address"
            value={email} 
            name="email"
            onChanged ={handleChange} />
        <Input 
            type="password" 
            icon = {< img src={padlock} alt="password"/>}
             placeholder="password" 
             password
             id="password_hash" 
             label="Password"
             value={password_hash} 
             name= "password"
             onChanged ={handleChange} />
        <Link to={'/reset'} >
            <p className=" text-grey text-[1rem] ">Forgot password?
                 <span className="pl-2 text-primary text-[0.9rem] font-bold">
                    reset
                </span>
                
            </p>
        </Link>
            {/* <SignupProvider/> */}
           
        <div className=" flex flex-col">
      
            <button type="submit mt-2" onClick={submit} className="btn">Login</button>
      
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
                <p className=' text-center text-grey text-[1rem] '>or continue with</p>
            </div>
            <div className="">
              <Auth />
            </div>
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Don't have an account?
                 <Link to={'/sign-up'} >
                    <span className="pl-2 text-primary font-bold">
                    Sign up
                    </span>
                </Link>
                </p>
            {/* <SignupProvider/> */}
           

     </div>
     </form>
    );
}

export const SignUp = ()=>{
    Title("Daily Tracker || Sign up");

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password_hash: ""
   })
   const navigate = useNavigate()
   const {fullname, email, password_hash} = formData
   
   const handleChange = (e) =>{
       setFormData((prev) =>({
         ...prev,
         [e.target.id] : e.target.value
       }))
     }

   const submit = (e) =>{
       e.preventDefault()
       axios.post("http://localhost:3000/v1/users/signUp", formData)
       .then(res => {
        console.log(res)
       })
       .catch(err => {
        console.error(err)
       })
       console.log(formData)
    //    navigate("/")
       

   }
    return (
    <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div className="logo w-[50%] border-[10px] flex justify-center border-r-[20px] p-10 mx-auto ">
            <img src={logo} alt="logo" className="w-full h-full"/>
        </div>
        <h1 className="mb-2">Create new account</h1>

        <Input 
            type="text" 
            icon= {< img src={user} alt="user"/>}
            placeholder="Peter Obi"
            id="fullname"
            label="Full Name"
            name="name"
            value={fullname}
            onChanged={handleChange}  />
        <Input 
             type="text"
             icon= {< img src={emails} alt="email"/>} 
             placeholder="peterobi@gmail.com" 
             id="email" 
             label="Email Address"
             name="email"
             value={email}
             onChanged={handleChange}  />
        <Input 
             type="password" 
             icon = {< img src={padlock} alt="password"/>} 
             placeholder="password" 
             password 
             id="password_hash"
             label="Password" 
             name="password"
             value={password_hash}
             onChanged={handleChange} />
        
        <div className="flex w-ful">
            <input type="checkbox" />
            <p className="text-grey text-[0.75rem]">
                I have read and agreed to Daily Tracker
                <span className="text-primary">
                &nbsp;Private Policy
                <br />
                Terms &amp; Conditions
                </span>
            </p>
        </div>

        <div className=" flex flex-col">
        
            <button onClick={submit}  className="btn mt-2">Sign Up page</button>
        
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
                <p className=' text-center text-grey text-[1rem] '>or continue with</p>
            </div>
            <div className="">
              <Auth />
            </div>
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Already have an account?
                 <Link to={'/'} >
                    <span className="pl-2 text-primary font-bold">
                    Log in
                    </span>
                </Link>
                </p>
            {/* <SignupProvider/> */}
           

     </div>
     </form>
    );
}