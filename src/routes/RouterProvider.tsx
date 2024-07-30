import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../components/home/Home";
import About from "../components/navroutes/About";
import Contact from "../components/navroutes/Contact";
import PManagement from "../components/navroutes/PManagement";
import ProductDetails from "../components/home/ProductDetails";
import ALLProducts from "../components/navroutes/ALLProducts";

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
            element: <ALLProducts/>
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
        },
        {
            path: "/productDetails/:id",
            element: <ProductDetails />
        }
    ]
 }
])


export default router;