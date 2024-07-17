import { Outlet } from "react-router-dom";
import NavBar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const Layout = () => { 
    return (
        <div>
           <div className="w-[90%] mx-auto ">
           <NavBar></NavBar>
            <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;