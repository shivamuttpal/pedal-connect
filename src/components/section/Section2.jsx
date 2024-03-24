import React from 'react'
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
// import Img from "../../../public/profile-photos/myphoto.png"

function Section2() {
  return (
    <div className="h-[calc(100vh-12rem)] flex flex-wrap items-center justify-evenly font-carattere tracking-widest text-content md:text-8xl text-5xl">
        <div className='underline font-normal mb-5 md:mb-0'>Testimonials</div>
        
        <Carousel
          style={{ width: "70%", maxWidth: "800px", height: "70%" }}
          withIndicators
          slideGap="md"
          controlsOffset="xs"
          controlSize={80} 
          loop
          dragFree
          controlColor="black"
        >
          <Carousel.Slide className=" h-[40vh] md:w-[60vw] md:h-[60vh] flex justify-center "><div className=' bg-slate-600 rounded-full w-full h-full flex justify-center items-center text-black font-mono'>1</div></Carousel.Slide>
          <Carousel.Slide className=" h-[40vh] md:w-[60vw] md:h-[60vh] flex justify-center "><div className='bg-slate-600 rounded-full w-full h-full flex justify-center items-center text-black font-mono'>2</div></Carousel.Slide>
          <Carousel.Slide className=" h-[40vh] md:w-[60vw] md:h-[60vh] flex justify-center "><div className='bg-slate-600 rounded-full w-full h-full flex justify-center items-center text-black font-mono'>3</div></Carousel.Slide>
          <Carousel.Slide className=" h-[40vh] md:w-[60vw] md:h-[60vh] flex justify-center "><div className='bg-slate-600 rounded-full w-full h-full flex justify-center items-center text-black font-mono'>4</div></Carousel.Slide>
          
        </Carousel>
    </div>
  )
}

export default Section2
