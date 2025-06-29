import React from 'react'
import SectionHeading from '../TextTypography/SectionHeading'
import WhyFeatureShowcase from './WhyFeature'

const WhyGoqubitSection = () => {
  return (
    <div className='relative min-h-[80%]'>

      <div className='wrapper py-20'>
        <div className='flex items-center justify-center'>
          <SectionHeading
            title="Why GoQubit?"
            subtitle="Turning complex ideas into clean, scalable, and user-focused products."
            className='max-w-[600px]'
          />
        </div>
      </div>

      <WhyFeatureShowcase />

    </div>
  )
}

export default WhyGoqubitSection