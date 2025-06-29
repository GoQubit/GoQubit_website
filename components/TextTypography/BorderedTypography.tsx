import React from 'react';

const BorderedTypography = ({ text = 'GoQubit', className='' }: { text: string, className?:string }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="">
        <h1
          className={` text-[100px] md:text-[170px] select-none ${className} `}
          style={{
            // fontFamily: "Nanum Myeongjo, serif",
            fontFamily: "Montserrat, serif",
            WebkitTextStroke: "2.84px #909090",
            WebkitTextFillColor: "transparent",
            color: "transparent",
            maskImage: "linear-gradient(to bottom, #909090 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #909090 0%, transparent 70%)",
          }}
        >
          {text}
        </h1>
      </div>
    </div>
  )
};

export default BorderedTypography;