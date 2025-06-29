import React from 'react'
import SectionHeading from '../TextTypography/SectionHeading'

const WorkSection = () => {
  return (
    <div className=' relative bg-section-bg min-h-[80%] '>
      <div className='wrapper py-32'>
        <div className='flex items-center justify-center'>
          <SectionHeading
            title="Work"
            subtitle="Things We’ve Built"
          />
        </div>
      </div>
    </div>
  )
}

export default WorkSection