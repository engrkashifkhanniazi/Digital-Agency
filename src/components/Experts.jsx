import React from 'react';
import laptop2 from '../assets/images/laptop2.png';
function Experts() {
  return (
    <div className='max-w-[1200px] p-2 mx-auto my-10 md:grid grid-cols-2'>
      <div className='col-span-1 m:w-[80%]'>
        <img src={laptop2} alt="" />
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis laborum asperiores ut, ipsam, necessitatibus accusamus magni ab dolor voluptatem ipsa impedit et qui quidem vel aliquam quos architecto neque? Corporis!
        </p>
        <button className='w-40	 bg-black font-bold hover:bg-sky-800 text-white p-2 rounded-full'>Get Started</button>
      </div>
    </div>
  );
}

export default Experts;