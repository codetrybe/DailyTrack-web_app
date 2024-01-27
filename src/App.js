import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NoPage} from "./pages/main";
import { CreateTask} from "./pages/create";
import {ProfileHome} from "./pages/profile";
import {Login} from "./pages/login";
import {SignUp} from "./pages/signup";
import {Reset} from "./pages/reset";
import {TaskHome} from "./pages/dashboard";
import { EditTask } from "./pages/edit";
import { ToastContainer } from 'react-toastify';
import { AppLinks, MainLinks } from "./config/custom/links";
// import { ResetPassword } from "./pages/edituser";


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />

        {/* <Route path={ CompanyLinks.blogs } element={<BlogPost />} />
        <Route path={ CompanyLinks.news } element={<NewsPost />} /> */}

        <Route path={ MainLinks.home } element={<Home />} />
        {/* <Route path={ AppLinks.signup} element={<SignUp/>} /> */}
        <Route path="/v1/users/signUp" element={<SignUp/>} />
        <Route path="/v1/users/login" element={<Login/>} />
        <Route path="/v1/users/reset" element={<Reset/>} />
        <Route path="/todos" element={<TaskHome/>} />
        <Route path="/profile" element={<ProfileHome/>} />  
        <Route path="/todo" element={<CreateTask/>} />
        <Route path="/todo/:id" element={<EditTask/>} />
        {/* <Route path="/todo/:id" element={<EditTask/>} /> */}
        {/* <Route path="/reset" element={<ResetEmail/>} /> */}
      </Routes>
    </BrowserRouter>
    <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
         />
    </div>

  );
}

export default App;