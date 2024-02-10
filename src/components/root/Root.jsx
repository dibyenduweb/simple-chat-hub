import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";



const Root = () => {
    return (
        <div>
              <Navbar/>
           <Outlet></Outlet>
           <Toaster/>
        </div>
    );
};

export default Root;