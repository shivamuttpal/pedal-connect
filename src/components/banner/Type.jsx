import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Startup Enthusisast",
          "Career Opportunities",
          "Access to offline meetups of PedalStart",
          "Access to accelerated and cohorts Startups"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
