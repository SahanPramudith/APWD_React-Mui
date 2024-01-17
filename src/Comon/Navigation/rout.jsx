import Home from "../../Pages/Homepage/Home.jsx";
import Dashbord from "../../Pages/Dashbord/dashbord.jsx";
import Axios from "../../Pages/Axios/Axios.jsx";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Student from "../../Pages/Student/Steudent.jsx";


const routs =[
    {
        name:'Dashbord',
        key : 'dashbord',
        component : <Dashbord/>,
        path : '/dashbord',

    },

    {
        name:'home',
        key : 'home',
        component : <Home/>,
        path : '/home'
    },
    {
        name:'axios',
        key : 'axios',
        component : <Axios/>,
        path : '/axios'
    },
    {
        name:'student',
        key : 'student',
        component : <Student/>,
        path : '/student'
    },
]
export default routs;

