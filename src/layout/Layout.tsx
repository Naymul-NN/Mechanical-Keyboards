import { Outlet } from "react-router-dom";
import NavBar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => { 
    return (
        <div>
           <div className="w-[90%] mx-auto ">
           <NavBar></NavBar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Layout;