
import { Link } from "react-router-dom";


const NavBar = () => {
    
   
    const link = <>
        <li className="font-bold"><Link to="/"> Home</Link></li>
        <li className="font-bold"><Link to="/products"> Products</Link></li>
        <li className="font-bold"><Link to="/about">About Us</Link></li>
        <li className="font-bold"><Link to="/contact">Contact Us</Link></li>
        <li className="font-bold"><Link to="/pmanagement">Dashboard</Link></li>

    </>
    
    return (
        <div className="">
            <div className="navbar fixed z-10 bg-opacity-50 bg-slate-300 lg:w-[90%] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {link}
                        </ul>
                    </div>
                    <Link to="/"><img className="w-16" src="https://i.ibb.co/kDfGMcG/depositphotos-93965950-stock-illustration-bangladesh-travel-company-logo.jpg" alt="" /> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
               
                    <Link to="/register" className="btn btn-secondary">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;