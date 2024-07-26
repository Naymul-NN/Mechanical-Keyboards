import { MdLocalShipping } from "react-icons/md";
import { TbCreditCardPay } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { TfiSupport } from "react-icons/tfi";


const ServiceAd = () => {
    return (
        <section className="bg-white w-3/4 h-44 mx-auto justify-center my-5 items-center flex">
           <div className=" flex gap-5 pb-5">
            <div className="bg-orange-200 p-5 rounded-lg">
                <MdLocalShipping />
                <h1 className="text-black font-bold">Free Shipping</h1>
                <p>Orders over $500</p>
            </div>
            <div className="bg-green-200 p-5 rounded-lg">
            <TbCreditCardPay />
                <h1 className="text-black font-bold">Quick Payment</h1>
                <p>100% Secure</p>
            </div>
            <div className="bg-amber-200 p-5 rounded-lg">
            <MdAttachMoney />
                <h1 className="text-black font-bold">Big Cashback</h1>
                <p>Over 40% cashback</p>
            </div>
            <div className="bg-indigo-200 p-5 rounded-lg">
            <TfiSupport />
                <h1 className="text-black font-bold">24/7 Support</h1>
                <p>Ready for you</p>
            </div>
           
           </div>
        </section>
    );
};

export default ServiceAd;