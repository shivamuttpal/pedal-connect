import React from "react";
import Type from "./Type";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbMessage } from "react-icons/tb";
import { textVariants } from "../motionVariants/motionVariants";
import { sliderVariants } from "../motionVariants/motionVariants";

// import Design from "../particleAnimation/Design";

function Banner() {
 
  
  return (
    <div className="h-[calc(100vh-12rem)]  text-content  flex flex-col md:flex-row items-center justify-center md:justify-evenly md:gap-8 gap-4 p-8 overflow-hidden relative ">


      <motion.div
        className="flex flex-col  justify-center gap-7 md:w-1/3 z-10"
        variants={textVariants}
        initial={{ x: -500, opacity: 0 }}
        animate="animate"
      >
        <motion.h1
          className="lg:text-7xl sm:text-5xl text-4xl font-bold "
          variants={textVariants}
        >
          Building{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            🤯
          </span>
        </motion.h1>
        {/* <motion.p className="sm:text-3xl text-2xl" variants={textVariants}>
          I'M{" "}
          <span className="text-amber-400 sm:text-5xl text-3xl font-semibold font-carattere tracking-widest">
            shivam-uttpal
          </span>
        </motion.p> */}
        <motion.div
          className="sm:text-3xl text-2xl md:pt-6 text-amber-400 font-medium"
          variants={textVariants}
        >
          <Type />
        </motion.div>
        <motion.div
          className="sm:text-xl text-lg  gap-14 md:pt-6 flex font-medium gap"
          variants={textVariants}
        >
          <Link
            to="/Signup"
            className=" flex gap-2  items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg  text-center sm:tracking-widest"
          >
            <TbMessage /> Sign-Up
          </Link>
          <Link
            to="/Signup"
            className=" flex gap-2 items-center transition ease-in-out delay-150 bg-buttonMain hover:-translate-y  hover:scale-110 hover:bg-buttonHover shadow-md hover:shadow-buttonMain duration-500  font-semibold p-2 rounded-lg text-center sm:tracking-widest"
          >
             Join Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Particle Background */}
      {/* <div className="w-full h-screen absolute top-0 left-0 ">
        <Design />
      </div> */}
    </div>
  );
}

export default Banner;
