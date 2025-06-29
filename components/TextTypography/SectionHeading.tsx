import React from 'react'

const SectionHeading = ({ title, subtitle, className }: { title: string, subtitle: string, className?:string }) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center mb-5 max-w-[500px] ${className} `}>
      <h2 className=' font-annie text-logo text-2xl'>
        {title}
      </h2>
      <h4 className=' font-nanum font-extrabold text-3xl md:text-4xl '>
        {subtitle}
      </h4>
    </div>
  )
}

export default SectionHeading