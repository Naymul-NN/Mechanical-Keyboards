import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div>
            <div className="carousel-item relative w-full mx-auto h-[500px]  ">
                <img src='https://i.ibb.co/f8878zv/keyboard-collage.jpg' className=" w-full " />
                <div className='absolute  pl-20 h-full bg-gradient-to-r from-[#00ff0036] to-[#ffffffa4] w-full '>
                    <div className=' space-y-5 pt-32'>
                        <h1 className='text-5xl text-white font-bold '> Without good  <br /> <span className='py-10'>Products you can&apos;t work</span> <br /> properly</h1>
                        <p className='text-white'>At Keylabs.com, we are passionate about Provide you a good and qualityfull  <br /> Products.  We ensure you that your keyboards will work  wrok 24/7.</p>
                        <button className='px-2 py-2  hover:bg-orange-400 mr-5 bg-pink-400 rounded-lg text-black'>Discover more</button>
                        <Link to="/latest">
                            <button className='px-2 py-2 bg-pink-400 hover:bg-orange-500 mr-5 rounded-lg text-black'>Latest products</button>
                        </Link></div>
                </div>

            </div>
        </div>
    );
};

export default Hero;