// import Header from "../Component/Header";
import { Title } from "../config/titleHeader";
import { Header } from "../widgets/Header";
import "../css/style.css"



export const Home = () => {
    Title("Daily Tracker || Welcome");
    return (
        <div className="daily-tracker h-screen w-full bg-cover" style={{}}>
           
          
          
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
     <div className="daily-tracker">
        <Header/> 
      
            {/* <SignupProvider/> */}
           

     </div>
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