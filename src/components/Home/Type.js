import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "MERN Stack Developer",
          "Mobile App Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;
