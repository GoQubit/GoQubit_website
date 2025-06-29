import React from 'react'

const Features = ({ featuresData }: { featuresData: string[] }) => {
  return (
    <div className='flex items-center gap-3 space-x-4' >
      {
        featuresData.map((feature, index) => (
          <div key={index} className="flex items-center gap-1">
            <span className="font-nanum text-2xl font-bold ml-6">{feature}</span>
            <span className='w-6 h-6 bg-logo rounded-full ml-6 '></span>
          </div>
        ))
      }
    </div>
  )
}

export default Features