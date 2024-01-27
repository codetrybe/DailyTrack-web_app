// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import cplus from "../asset/TasksAsset/navIcon/cplus.svg"
import TaskProp from "../Component/TaskProp";
import { NavIcon, imageIcon, tasks, Category } from "../Datasheets";
import React from 'react';
import Users from "../Component/Users";
import Nav from "../Component/Nav";
import "react-datepicker/dist/react-datepicker.css";
import { MdDeleteOutline } from "react-icons/md";




export const TaskHome = ()=>{
    Title("Daily Tracker || Dashboard");
    //  const [progress, setProgress] = useState(100 + 0.1, 1.0);

    // const increaseProgress = () => {
    //     const newProgress = Math.min(progress + 0.1, 1.0);
    //     setProgress(newProgress);
    // };
    const navigate = useNavigate()

    function downNav(route){
        if (route === "home"){
            console.log(route)
            navigate("/todos")
        } else if (route === "calendar") {
            console.log(route)
            navigate("/calendar")
        }  else if (route === "profile"){
            console.log(route)
            navigate("/profile")
        }   if (route == "chat"){
            console.log(route)
            navigate("/chat")

        }
    } 

    return(
        <div>
  
            <div className="space-y-2 flex  justify-center mx-auto  max-w-xl   h-screen lg:h-full w-full bg-cover flex-col">

               <div className="flex justify-between items-center">
               <button className=" text-2xl bg-lightgrey ">
                    <VscThreeBars/>
                </button>
                <h1>Homepage</h1>
                <button className=" text-2xl text-green-400 bg-lightgrey ">
                    <IoNotificationsOutline />
                </button>
               </div>
                <div style={{letterSpacing:"1.26px"}} className="flex flex-col justify-between w-[316px] 
                 mx-auto my-[30px] h-[160px] p-4 bg-secondary rounded-xl text-white">
                  <div>  
                    <p className="text-xl " >Today's progress summary</p>
                    <p className="mt-2">13 Tasks</p>
                    </div>

                    <div className=" items-center flex justify-between ">
                        <div>
                        <ul className="flex ">

                            {imageIcon.length > 0? (
                                imageIcon.map((user) => <Users key={user.id} user={user} />)
                                ) : (
                                <div className="text-center">+</div>
                            )}
                        </ul>


                        </div>
                        {/* <CircularProgressBar progress={progress}/> */}

                    </div>

                </div>

                <div className="task-category h-[800px] max-h-[800px]">
                    <div className="flex justify-between">
                        
                    <h1>Today's Task</h1> 
                    <p>See All</p>
                    </div>

                    <div>
                        <ul className="flex flex-col gap-2 overflow-y-auto">
                          
                            {tasks.length > 0 ? (
                              
                                tasks.map((event) => (
                                    
                                    <TaskProp key={event.id} event={event} />
                                    )
                                )
                              
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
                <div>
                   
                   <div className=" fixed h-[95px] w-full px-4 items-center flex justify-between bg-white bottom-0">
                   <Link to={'/todo'} >
                        <img className="absolute bottom-16 right-40" src={cplus} alt="add task"/>
                   </Link>
                    <ul className="flex justify-between  w-full">
                        {NavIcon.length > 0 ? (
                            NavIcon.map((icon) => <Nav key={icon.id} icon={icon} onHandleClick={() => downNav(icon.title)} />)
                            ) : ("")
                        }
                    </ul>
                    

                </div>
                </div>
            
            </div>
        
    )
    
};

