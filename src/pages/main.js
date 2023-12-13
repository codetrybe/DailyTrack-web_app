// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"
import HomeLogo from '../images/svg/homesvg.svg'
import Input from "../Component/Input";
import { Link } from "react-router-dom";
import Auth from "../Component/Auth";




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
           <Link path="/sign-up" className="w-full">
             <button style={{letterSpacing: "3px"}} className="text-base">SignUp</button>
           </Link>
           
            <p className="text-center">Already have an account?<span className="pl-2 span.primary"> Login</span></p>
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
        <div className="daily-tracker">
            {/* <header className="headerlogin">
                <div className="logo">
                    <Link to={ MainLinks.home }> <img alt="" src={ Images.serchLogo } width={30} height={30} /> </Link>
                </div>
                <div className="" >
                    <p className='servicemadeeasy'>service made easy</p>
                </div>
             </header>
            <LoginProvider/> */}
           
        </div>
    );
}

export const SignUp = ()=>{
    Title("Daily Tracker || Sign up");
    return (
    <form>
     <div className=" flex justify-center mx-auto  max-w-xl  lg:my-10 p-10 h-screen lg:h-full w-full bg-cover flex-col">
        <div></div>
        <h1 className="mb-2">Create new account</h1>

        <div className="space-y-4">
        <Input type="text" icon="icon" placeholder="name" id="name" label="Name" />
        <Input type="text" placeholder="email" id="email" label="Email Address" />
        <Input type="password" placeholder="password" password id="password" label="Password" />
        </div>
        <div> i have read agreed to Daily Tracker <span>Policy Policy</span></div>

        <div>
            <button>SignUp</button>
            <div className='flex items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300 '>
                <p className=' text-center'>or continue with</p>
            </div>
            <Auth/>
        </div>
            {/* <SignupProvider/> */}
           

     </div>
     </form>
    );
}
export const ProfileHome = ()=>{
    Title("Daily Tracker || Profile");
    return(
       
            <div className="daily-tracker">
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
        <div className='pageerror'>
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