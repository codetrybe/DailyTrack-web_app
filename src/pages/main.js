// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"
import HomeLogo from '../images/svg/homesvg.svg'
import Input from "../Component/Input";
import { Link } from "react-router-dom";
import Auth from "../Component/Auth";
import logo from "../asset/form-page assets/logo.svg"
import { IoNotificationsOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import user from "../asset/form-page assets/user.svg"
import password from "../asset/form-page assets/password.svg"
import padlock from "../asset/form-page assets/padlock.svg"
import CircularProgressBar from "../Component/progressBar/CircularProgressBar";
import { useState } from "react";
import TaskProp from "../Component/TaskProp";
import { tasks } from "../Datasheets";
import React from 'react';


export const Home = () => {
    Title("Daily Tracker || Welcome");
    return (
        <div className="daily-tracker justify-center max-w-xl mx-auto lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col" style={{}}>
            {/* <Header/> */}
           
           <div className=" ">
           <p className="lg:text-center  text-2xl tracking-wider mb-3"> Welcome to <span className="font-bold text-3xl tracking-widest">DailyTraker</span></p>
           </div>
           <div className="lg:flex lg:justify-center">
              <img src={HomeLogo} alt="home logo"/>
           </div>

           <div className="flex-col flex gap-2"> 
           <Link to={"/sign-up"} className="w-full">
             <button style={{letterSpacing: "3px"}} className=" btn text-base">SignUp</button>
           </Link>
           
            <p className="text-center text-[1rem]">Already have an account?
                <span className="pl-2 text-primary">
                <Link to={'login'}> Log in</Link>
                </span>
                </p>
           </div>

        </div>
    );
}

export const Support = () => {
    Title("Daily Tracker || Support");
    return (
        <div className="daily-tracker">
            {/* <Header /> */}
           
        </div>
    );
}
export const Login = () => {
    Title("Daily Tracker || Login");
    return (
        <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div className="logo w-[50%] border-[10px] flex justify-center border-r-[20px] p-10 mx-auto ">
            {/* <img src={logo} alt="logo" className="w-full h-full"/> */}
        </div>
        <h1 className="mb-2">Welcome Back!!!</h1>

        <Input type="text" icon= {<img src={password} alt="email"/>} placeholder="peterobi@gmail.com" id="email" label="Email Address" />
        <Input type="password" icon = {< img src={padlock} alt="password"/>} placeholder="password" password id="password" label="Password" />
        <Link to={'login'} >
            <p className=" text-grey text-[1rem] ">Forgot password?
                 <span className="pl-2 text-primary text-[0.9rem] font-bold">
                    reset
                </span>
                
            </p>
        </Link>
            {/* <SignupProvider/> */}
           
        <div className=" flex flex-col">
            <button className="btn">Login</button>
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
                <p className=' text-center text-grey text-[1rem] '>or continue with</p>
            </div>
            <div className="-mt-3">
              <Auth />
            </div>
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Don't have an account?
                 <Link to={'login'} >
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
    return (
    <form className="">
     <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div className="logo w-[50%] border-[10px] flex justify-center border-r-[20px] p-10 mx-auto ">
            {/* <img src={logo} alt="logo" className="w-full h-full"/> */}
        </div>
        <h1 className="mb-2">Create new account</h1>

        <Input type="text" icon= {< img src={user} alt="user"/>} placeholder="Peter Obi" id="name" label="Full Name" />
        <Input type="text" icon= {< img src={password} alt="email"/>} placeholder="peterobi@gmail.com" id="email" label="Email Address" />
        <Input type="password" icon = {< img src={padlock} alt="password"/>} placeholder="password" password id="password" label="Password" />
        
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
            <button className="btn">Sign Up</button>
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
                <p className=' text-center text-grey text-[1rem] '>or continue with</p>
            </div>
            <div className="-mt-3">
              <Auth />
            </div>
            
        </div>
        
        <p className="text-center text-grey text-[1rem] mt-2">Already have an account?
                 <Link to={'login'} >
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
export const ProfileHome = ()=>{
    Title("Daily Tracker || Profile");
    return(
       
            <div className="space-y-2 flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        {/* <HeaderSignup/>
                <Profile/>
                <div className='nav_icon'style={{width: "100%"}}>
                    <ProfileIcons column/>
                </div> */}
            </div>
        
    )
    
};
export const TaskHome = ()=>{
    Title("Daily Tracker || HomePage");
     const [progress, setProgress] = useState(100 + 0.1, 1.0);

    // const increaseProgress = () => {
    //     const newProgress = Math.min(progress + 0.1, 1.0);
    //     setProgress(newProgress);
    // };
    return(
    
        <div className=" max-w-xl  lg:my-10 px-6 h-screen lg:h-full w-full bg-cover flex-col" style={{}}>

               <div className="flex justify-between items-center">
               <button className=" text-2xl bg-lightgrey ">
                    <VscThreeBars/>
                </button>
                <h1>Homepage</h1>
                <button className=" text-2xl text-green-400 bg-lightgrey ">
                    <IoNotificationsOutline />
                </button>
               </div>
                <div style={{letterSpacing:"1.26px"}} className="flex flex-col justify-between w-[316px]  mx-auto my-[30px] h-[160px] p-4 bg-secondary rounded-xl text-white">
                  <div>  
                    <p className="text-xl " >Today's progress summary</p>
                    <p className="mt-2">13 Tasks</p>
                    </div>

                    <div className=" items-center flex justify-between ">
                        <p>icons</p>
                        <CircularProgressBar progress={progress}/>

                    </div>

                </div>

                <div className="task-category">
                    <div className="flex justify-between">
                        
                    <h1>Today's Task</h1> 
                    <p>See All</p>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-2">
                            {tasks.length > 0? (
                                tasks.map((event) => <TaskProp key={event.id} event={event} />)
                                ) : (
                                <div className="text-center">No Event Today</div>
                            )}
                        </ul>
                    </div>


                </div>
                {/* <HeaderSignup/>
                <Profile/>
                <div className='nav_icon'style={{width: "100%"}}>
                    <ProfileIcons column/>
                </div> */}
            </div>
        
    )
    
};


export const NoPage = () => {
    Title("Daily Tracker || We are Expecting You back");
    return (
        <div className='flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col'>
            {/* <Header /> */}
            <div className='pageerror_img'></div>
            <div className='errorpage'>
                {/* <img alt="" src={ Image404.side } /> */}
                <div className='errortext'>
                    <h3>Sorry, we couldn't find that page</h3>
                    <p>
                        We might have shifted the page you are looking for while we shifted a few things around.
                        Try re-entering the address or you can choose below.
                    </p>
                </div>
            </div>
            {/* <div className='redirectLinks'>
                <Link to={ MainLinks.home } className="head">Head to Serchservice.com</Link>
                <Link to={ CompanyLinks.careers } className="head">Head to Serch Careers</Link>
                <Link to={ ProductLinks.business } className="head">Head to Serch for Business</Link>
                <Link to={ InformationLinks.docs } className="head">Read our Documentation</Link>
                <Link to={ ProductLinks.request } className="head">Head to Serch Request</Link>
                <Link to={ InformationLinks.countries } className="head">See Countries in Serch</Link>
                <Link to={ MainLinks.helpAndSupport } className="head">Head to Serch Support</Link>
            </div> */}
        </div>
    );
}