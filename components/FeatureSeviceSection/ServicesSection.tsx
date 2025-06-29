import React from 'react'
import SectionHeading from '../TextTypography/SectionHeading'
import ServiceCard from './components/ServiceCard'
import SkillsAutoScroll from './components/SkillsAutoScroll'
import AnimatedContent from '../Animations/AnimatedContent'

const ServicesSection = () => {

  const services = [
    {
      title: "UX UI Services",
      description: "Intuitive. Beautiful. Human-first",
      image: "/images/ServicesImg/webdev.png",
      className: 'w-[300px] self-start'
    },
    {
      title: "Web Development",
      description: "Fast, responsive, and pixel-perfect",
      image: "/images/ServicesImg/webdev.png",
      className: "w-[500px]"
    },
    {
      title: "App Development",
      description: "Secure. Scalable. Built to perform",
      image: "/images/ServicesImg/webdev.png",
      className: 'w-[300px] self-start'
    }
  ]

  return (
    <div className=' relative bg-section-bg min-h-[80%] '>
      <div className='wrapper py-20'>
        <div className='flex items-center justify-center'>
          <SectionHeading
            title="Feature Services"
            subtitle="You’ve got a business, We have got a brilliant  minds"
          />
        </div>

        <div className="flex items-center justify-between gap-8 mt-8">
          {
            services.map((service, index) => (
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  className={service.className}
                />
              </AnimatedContent>
            ))
          }
        </div>

      </div>

      <div className=' h-[150px] '>
        <SkillsAutoScroll />
      </div>

    </div>
  )
}

export default ServicesSection