import Hero from "./Hero";
import Product from "./Product";
import ServiceAd from "./ServiceAd";

const Home = () => { 
return ( 
     <div className="pt-20 min-h-screen">
         <Hero/>
         <ServiceAd/>
         <Product/>
     </div>
);
};

export default Home;