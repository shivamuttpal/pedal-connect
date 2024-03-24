import React from 'react'
import { Link } from 'react-router-dom'

function Section3() {
  return (
    <div className="h-[calc(100vh-12rem)]  py-8 mt-40 flex flex-col items-center justify-center font-carattere tracking-widest text-content md:text-8xl text-5xl">
        <div className='w-full h-1/3  flex justify-around md:mb-20'><div className='p-7 md:text-8xl underline'>Selection-Process</div></div>
        <div className='w-full h-1/3 flex flex-wrap flex-row mb-28 px-3'>
          <div className='md:w-1/2 w-full h-full  flex flex-wrap justify-center items-center  md:text-5xl text-xl md:mt-[3rem]'> <div className='cursor-pointer flex gap-2 items-center transition ease-in-out delay-150 border border-amber-500 hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500 font-semibold md:p-7 p-4 rounded-lg text-center sm:tracking-widest '>Form-Screening</div>
</div>
          <div className='md:w-1/2 w-full h-full  flex flex-wrap justify-center items-center  md:text-5xl text-xl mt-[-2rem]'> <div className='cursor-pointer flex gap-2 items-center transition ease-in-out delay-150 border border-amber-500 hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500 font-semibold md:p-7 p-4 rounded-lg text-center sm:tracking-widest'>One on One Interaction</div></div>
          
          
         
        </div>
        <div className='w-full h-1/3 flex justify-center items-center md:text-5xl text-2xl '> <Link to='/Signup' className='cursor-pointer flex gap-2  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-amber-500 shadow-md hover:shadow-buttonMain duration-500  font-semibold p-7 rounded-lg  text-center sm:tracking-widest"
          '>Access to Meetups</Link></div>
        
      </div>
  )
}

export default Section3 