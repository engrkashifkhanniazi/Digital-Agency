import React from 'react'

function Newsletter() {
  return (
    <div className='w-full bg-sky-400 p-12'>
        <div className='max-w-[1200px] py-[12px] flex justify-between items-center mx-auto'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[35px] text-white font-bold'>Want to learn latest IT skills?</h1>
                <span className='text-white '>Sign up to our newsletter to get up to date</span>
            </div>
            <div className='p-2 mr-2'>
                <input className='rounded-full mb-2 p-2' type="text" placeholder='Enter your email' />
                <button className='bg-black font-bold hover:bg-sky-800 text-white md:ml-2 px-5 py-2 rounded-full'>Subscribe</button>
                <br />
                <p className='text-white '>
                    We care about the protection of your data. Read our 
                    <br /> <a href="" className='text-blue-800 font-bold'>Privacy Policy</a>
                </p>
            </div>
        </div> 
    </div>
  )
}

export default Newsletter