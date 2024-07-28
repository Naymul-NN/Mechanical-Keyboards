import Brands from "./Brands";
import CustomarFeedback from "./CustomarFeedback";
import Hero from "./Hero";
import Product from "./Product";
import ServiceAd from "./ServiceAd";

const Home = () => { 
return ( 
     <div className="pt-20 min-h-screen">
         <Hero/>
         <ServiceAd/>
         <Product/>
         <Brands/>
         <CustomarFeedback/>
     </div>
);
};

export default Home;