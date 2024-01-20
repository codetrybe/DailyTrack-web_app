import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NoPage} from "./pages/main";
import { CreateTask} from "./pages/create";
import {ProfileHome} from "./pages/profile";
import {Login, SignUp} from "./pages/user";
import {TaskHome} from "./pages/dashboard";
import { EditTask } from "./pages/edit";
import { AppLinks, MainLinks } from "./config/custom/links";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NoPage />} />

        {/* <Route path={ CompanyLinks.blogs } element={<BlogPost />} />
        <Route path={ CompanyLinks.news } element={<NewsPost />} /> */}

        <Route path={ MainLinks.home } element={<Home />} />
        {/* <Route path={ AppLinks.signup} element={<SignUp/>} /> */}
        <Route path="/v1/users/signUp" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/todos" element={<TaskHome/>} />
        <Route path="/profile" element={<ProfileHome/>} />  
        <Route path="/todo" element={<CreateTask/>} />
        <Route path="/todo/:id" element={<EditTask/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;