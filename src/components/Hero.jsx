import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="bg-sky-400 w-full py-[100px] ">
      <div className="max-w-[1400px] my-[40px] max-auto text-center font-bold">
        <div className="text-xl md:text-3xl">Learn with us</div>
        <div>
          <h2 className="text-white text-[35px] md:text-[50px] md:mt-2">
            Get started
          </h2>
        </div>
        <div className="text-[25px] md:text-[40px] text-white md: mb-4">
          Learn
          <Typed 
          className="pl-3"
          strings={["Web Development", "Mobile App Development", "Digital Marketing"]} typeSpeed={50} 
          loop={true}
          backSpeed={50}
          />
        </div>
        <button className='bg-[#090909] font-bold hover:bg-sky-800 text-white w-40 p-2 rounded-full'>Get Started</button>
      </div>
    </div>
  );
}
export default Hero;
