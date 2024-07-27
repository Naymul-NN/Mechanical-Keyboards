
const Brands = () => { 
return ( 
     <div className="pb-5">
          <h1 className="pb-5 text-orange-400 font-bold text-3xl"> Top Brands </h1>
          <div className="grid grid-cols-5 gap-4">
            <div>
                <img className="h-[100px] w-[200px]" src="https://i.ibb.co/2F11Rhv/d90bf46e-a266-4a59-a450-0d6a90d82d75-1-1719467286.jpg" alt=""  />
                <h1> Wareless Keyboards</h1>
            </div>
           
            <div>
                <img className="h-[100px] w-[200px]" src="https://i.ibb.co/Zg6KF3s/maxresdefault.jpg" alt="" />
                <h1> Lighting Keyboards</h1>
            </div>
            <div>
                <img className="h-[100px] w-[200px]" src="https://i.ibb.co/0QyztvP/logitech2028.jpg" alt="" />
                <h1> Colorful Keyboards</h1>
            </div>
            <div>
                <img className="h-[100px] w-[200px]" src="https://i.ibb.co/0sCdqdR/razer.jpg" alt="" />
                <h1> Mini Keyboards</h1>
            </div>
            <div>
                <img className="h-[100px] w-[200px]" src="https://i.ibb.co/Pm4Hj6c/c2a723c69006474788ab160875dc273f737e347f-731x731.png" alt="" />
                <h1> Carreyable Keyboards</h1>
            </div>
          </div>
     </div>
 );
};

export default Brands;