import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/home/Home";
import Products from "../components/navroutes/Products";
import About from "../components/navroutes/About";
import Contact from "../components/navroutes/Contact";
import PManagement from "../components/navroutes/PManagement";

const router = createBrowserRouter([
 {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/products",
            element: <Products/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/pmanagement",
            element: <PManagement/>
        }
    ]
 }
])


export default router;