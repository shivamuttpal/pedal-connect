import React, { useState } from 'react';
import Banner from "../components/banner/Banner";
import Section1 from "../components/section/Section1"
import Section2 from "../components/section/Section2"
import Section3 from "../components/section/Section3"
import Section4 from "../components/section/Section4"
import Section5 from "../components/section/Section5"
import Design from "../components/particleAnimation/Design";



function Home() {
  

  return (
    <>
      <div className="bg-gradient-to-b from-bgDark  ">


        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <div className="w-full h-screen absolute top-0 left-0 ">
          <Design />
        </div>
      </div> 
    </>
  );
}

export default Home;
