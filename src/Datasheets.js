import chart from './asset/TasksAsset/chart.svg'
import office from './asset/TasksAsset/office.svg'
import ui from './asset/TasksAsset/ui.svg'
import Group from './asset/TasksAsset/Group.svg'
import user_one from './asset/TasksAsset/userIcon/user_one.svg'
import user_two from './asset/TasksAsset/userIcon/user_two.svg'
import user_three from './asset/TasksAsset/userIcon/user_three.svg'
import user_four from './asset/TasksAsset/userIcon/user_three.svg'
import add_user from './asset/TasksAsset/userIcon/add_user.svg'
import home from './asset/TasksAsset/navIcon/home.svg'
import chat from './asset/TasksAsset/navIcon/chat.svg'
import user from './asset/TasksAsset/navIcon/user.svg'
import calendar from './asset/TasksAsset/navIcon/calendar.svg'

export const tasks = [
    {
        id: 1,
        task: "UI Design",
        start_date: new Date().toLocaleTimeString(),
        end_date: new Date().toLocaleTimeString(),
        icon: <img src={ui} alt="ui"/>
    },
    {
        id: 2,
        task: "Web Development",
        start_date: new Date().toLocaleTimeString(),
        end_date: new Date().toLocaleTimeString(),
        icon: <img src={Group} alt="group"/>
    },
    {
        id: 3,
        task: "Office Meeting",
        start_date: new Date().toLocaleTimeString(),
        end_date: new Date().toLocaleTimeString(),
        icon: <img src={office} alt="office"/>
    },
    {
        id: 4,
        task: "Personal Growth",
        start_date: new Date().toLocaleTimeString(),
        end_date: new Date().toLocaleTimeString(),
        icon: <img src={chart} alt="chart"/>
    }
]
export const imageIcon = [
    {
        id: 1,
        icon: <img src={user_one} alt="user_one"/>
    },
    {
        id: 2,
        icon: <img src={user_two} alt="user_one"/>
    },
    {
        id: 3,
        icon: <img src={user_three} alt="user_three"/>
    },
    {
        id: 4,
        icon: <img src={user_four} alt="user_four"/>
    },
    {
        id: 5,
        icon: <img src={add_user} alt="add_user"/>
    }
      
]
export const NavIcon = [
    {
        id: 1,
        title:"home",
        icon: <img src={home} alt="user_one"/>
    },
    {
        id: 2,
        title:"calendar",
        icon: <img src={calendar} alt="user_one"/>
    },
    {
        id: 3,
        title:"profile",
        icon: <img src={user} alt="user_three"/>
    },
    {
        id: 4,
        title:"chat",
        icon: <img src={chat} alt="user_four"/>
    }
      
]
export const Category= [
    {
        id: 1,
        title: "Design"
    },
    {
        id: 2,
        title: "Development"
    },
    {
        id: 3,
        title: "Research "
    },
    {
        id: 4,title: "Fun"
    },
      
    {
        id: 5,title: "+"
    }
      
]