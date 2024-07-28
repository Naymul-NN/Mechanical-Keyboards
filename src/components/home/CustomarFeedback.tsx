import Marquee from "react-fast-marquee";



const CustomarFeedback = () => { 
return ( 
    <div>
    <h1 className="text-center text-4xl pb-5 font-bold  text-orange-400">Customars Feedback</h1>
   
    <Marquee pauseOnHover={true} speed={50} direction="right">
        <div className="grid grid-cols-3 gap-10 ">
            <div className=" w-96 bg-base-200 h-80  rounded-3xl lg:ml-10 p-5">
                <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/1nXLFpf/image-2.png" alt="" /></figure>
                <p className="text-center">I always buy Keyboards from Mechanical keyboards they have a greate service.</p>
                <br />
                <p className="text-center font-bold text-green-400">Dev Garry</p>
                <p className=" text-center "> chief accountent</p>
            </div>
            <div className=" w-96 rounded-3xl bg-base-200 h-80 p-5">
                <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/Jq9n3yk/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA.jpg" alt="" /></figure>
                <p className="text-center">The keybords and service of Mechanical Keyboars is best they are 24/7 open .</p>
                <br />
                <p className="text-center font-bold text-green-400">Hu yang </p>
                <p className=" text-center "> Software Enginer</p>
            </div>
            <div className=" w-96 rounded-3xl bg-base-200 h-80 p-5">
                <figure className="flex justify-center items-center"><img className="w-32 h-32 border border-green-400 rounded-[800px]" src="https://i.ibb.co/LthqT9M/240-F-214746128-31-Jkea-P6r-U0-Nzzzd-FC4kh-Gkmqc8noe6h.jpg" alt="" /></figure>
                <p className="text-center">you can take the service of Machanical Keyboards . there product is 100% pure.</p>
                <br />
                <p className="text-center font-bold text-green-400">Vam broclen</p>
                <p className=" text-center "> Sales manager</p>
            </div>
        </div>
    </Marquee>
</div>
);
};

export default CustomarFeedback;