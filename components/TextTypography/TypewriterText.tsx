import React from 'react'
import Typewriter from "typewriter-effect";

const TypewriterText = ({ data }: { data: string[] }) => {
  return (
    <span className="text-gray-900">
      <Typewriter
        options={{
          strings: data, // Array of strings to type
          autoStart: true,
          loop: true,
          delay: 50, // Typing speed (ms)
          deleteSpeed: 30, // Deleting speed (ms)
          cursor: "|", // Custom cursor
        }}
      />
    </span>
  );
}

export default TypewriterText


    // <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-nanum">
    //   <span className="text-purple-600">Build Smarter,</span>{" "}
      
    // </h2>