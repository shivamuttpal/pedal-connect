import React from 'react';
// import { motion } from "framer-motion";
// import { textVariants } from "../motionVariants/motionVariants";
// import Design from "../particleAnimation/Design";

function Section1() {
  return (
    <div className="h-auto  text-content  flex flex-col md:flex-row items-center justify-center md:justify-evenly md:gap-8 gap-4 p-8 overflow-hidden relative ">
      <div className='font-carattere p-16 text-2xl text-center'>
        <h1 className="text-4xl md:text-8xl mb-6">Pedal - Connect</h1>
        <p className="mb-12 tracking-widest">An exclusive startup enthusiasts community backed by PedalStart.</p>
        <p className="mb-12 tracking-widest">Passionate about startups? Dive into Bangalore's thriving scene with PedalConnect, backed by PedalStart.</p>
        {/* <div className="w-full h-screen absolute top-0 left-0 ">
        <Design />
      </div> */}
      </div>
    </div>
  );
}

export default Section1;
