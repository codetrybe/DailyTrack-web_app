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
           <Link to={"/v1/users/signUp"} className="w-full">
             <button style={{letterSpacing: "3px"}} className="mt-2 btn text-base">SignUp</button>
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