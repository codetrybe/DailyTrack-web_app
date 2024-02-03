import React, { useContext, useState } from 'react'
import {VscThreeBars} from 'react-icons/vsc'
import {FaSearch} from 'react-icons/fa'
import {TbBrandAirbnb} from 'react-icons/tb'
import { Link } from 'react-router-dom'
// import { userContext } from './UserContext'
import {AiOutlineUser} from 'react-icons/ai'
import logo from "../asset/form-page assets/logo.svg"
// import { DrawerDefault } from './SideNav'


export default function Header() {
  const [p, setP] = useState(false)
  const handleClick = () =>{
    setP((p) => !p)

  }
//   const {user} = useContext(userContext)
  return (
    <div>
        <header className='p-2 flex justify-between '>
          <Link to = {'/'}>
        <div className=''>
          <div className="  flex justify-center  mx-auto ">
            <img src={logo} alt="logo" className="w-[70%] h-full"/>
          </div>
        </div>
        </Link>

      <div className='flex border border-gray-300 rounded-full px-3 gap-2 justify-center items-center'>
       < VscThreeBars/>
        {/* <Link to = {user? "/account":"/login"}> < AiOutlineUser/></Link>
        {!!user && (
          <div className='text-black'>
            {user?.data.user.name} 
          </div>
        // )} */}
        {/* //  <Link to = {user? "/account":"/login"}> < AiOutlineUser/></Link>
        //   <div className="lg:hidden block">
        //   <DrawerDefault /> */}
        {window.innerWidth <= 768 ? (
          <div  className="">
            {/* <Link to={user ? "/account" : "/login"}> */}
                <AiOutlineUser/>
                {/* </Link> */}
           
          </div>
        ) : (
        //    <DrawerDefault />
        ""
        )}

          {/* {!!user && (
          <div className='text-black'>
            {user?.data.user.name} 
          </div>
            )} */}

      
      
      </div>
      </header>
      
    </div>
  )
}
