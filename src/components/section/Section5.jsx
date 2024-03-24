import React from 'react'
import { Link } from "react-router-dom";

function Section5() {
  return (
    <div className="h-[calc(100vh-12rem)]  flex flex-col items-center justify-center font-carattere tracking-widest text-content md:text-2xl text-5xl">
        <div className='md:text-8xl p-10 mt-32 md:mb-10 text-4xl underline'>Join Now</div>
       
        <Link to='/Signup' className='text-sm md:text-2xl cursor-pointer  gap-2  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-amber-500 shadow-md hover:shadow-buttonMain duration-500  font-semibold p-7 rounded-lg  text-center sm:tracking-widest'>Don't wait Fill The Form Now</Link>
      </div>
  )
}

export default Section5