import React from 'react'
import Features from './Features'


const SkillsAutoScroll = () => {
  return (
    <div className=' absolute -bottom-5 w-full overflow-hidden  '>
      <div className="relative  bg-gradient-to-r bg-white py-4 rotate-[-1deg] inline-flex whitespace-nowrap !h-[108px]  ">

        {/* Repeating Content */}
        <div className="flex items-center space-x-8 animate-marquee">
          <Features featuresData={['CREATIVE', 'TECH SAVVY', 'INNOVATIVE', 'SEAMLESS', 'TRUSTABLE']} />
        </div>
        <div className="flex items-center space-x-8 animate-marquee">
          <Features featuresData={['CREATIVE', 'TECH SAVVY', 'INNOVATIVE', 'SEAMLESS', 'TRUSTABLE']} />
        </div>
        <div className="flex items-center space-x-8 animate-marquee">
          <Features featuresData={['CREATIVE', 'TECH SAVVY', 'INNOVATIVE', 'SEAMLESS', 'TRUSTABLE']} />
        </div>

      </div>
    </div>

  )
}

export default SkillsAutoScroll