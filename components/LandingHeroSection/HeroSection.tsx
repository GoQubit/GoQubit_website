import { Sparkles } from 'lucide-react'
import React from 'react'
import BorderedTypography from '../TextTypography/BorderedTypography'
import TypewriterText from '../TextTypography/TypewriterText'
import Link from 'next/link'
import Button from '../Button'
import AnimatedContent from '../Animations/AnimatedContent'
import FadeContent from '../Animations/FadeContent'

const HeroSection = () => {
  return (
    <main className=" wrapper min-h-[80%] relative px-4 py-20 md:px-6 lg:px-8 ">

      <div className="">
        {/* Decorative Stars */}
        <Sparkles className="absolute top-8 left-8 w-6 h-6 text-gray-400 bounce-effect" />
        <Sparkles className="absolute bottom-20 right-20 w-6 h-6 text-gray-400 bounce-effect" />



        {/* Hero Section */}
        <div className="text-center relative h-[400px]">

          {/* Code Snippet Decoration */}
          <div className="absolute left-2 top-[65%] transform -translate-y-1/2 bg-primary-light-bg px-3 py-2 rounded-lg text-sm font-mono text-logo hidden lg:block  -rotate-12 ">
            {'<div class="floating-ui">'}
          </div>

          {/* Achievement Badges */}
          <div className="absolute right-20 top-5 block">
            <div className="bg-primary-light-bg rounded-lg p-1 flex items-center">
              <span className="text-xl">🚀</span>
              <span className="text-sm font-light">99% Delivery on Time</span>
            </div>
            <div className="bg-primary-light-bg rounded-lg p-1 pr-3 shadow-sm border flex items-center">
              <span className="text-xl">⭐</span>
              <span className="text-sm font-light ">100+ Projects Completed</span>
            </div>
          </div>


          <FadeContent blur={true} duration={1500} easing="ease-out" initialOpacity={0}>
            <BorderedTypography text="GoQubit" className="" />
          </FadeContent>


          {/* Main Content */}
          <div className="absolute top-[150px] inset-0">
            <div className="relative z-10 pb-8">

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
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-nanum flex items-center gap-1 justify-center">
                  <span className="text-purple-600">Build Smarter,</span>{" "}
                  <TypewriterText data={["Not Harder", "Win Faster", "Break Limits"]} />
                </h2>
              </AnimatedContent>

              <AnimatedContent
                distance={200}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className=" max-w-[300px] md:max-w-[700px] mx-auto ">
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Skip the tech headaches. Our Expert Design, Frontend, and Backend Development services streamline your
                    Digital Product Journey.
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <p className="text-lg md:text-xl text-logo font-light mb-8">
                  So you can Focus on Growth, not Glitches.
                </p>
              </AnimatedContent>

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
                <Link href="/contact" >
                  <Button onClick={() => { }}
                    className='font-medium text-xl !w-[230px] '
                  >
                    Contact Us
                  </Button>
                </Link>
              </AnimatedContent>
            </div>
          </div>
        </div>

        {/* Mobile Achievement Badges */}
        <div className="flex justify-center space-x-4 mt-12 lg:hidden">
          <div className="bg-white rounded-lg px-4 py-3 shadow-sm border flex items-center space-x-2">
            <span className="text-xl">🚀</span>
            <span className="text-sm font-medium text-gray-700">99% Delivery on Time</span>
          </div>
          <div className="bg-white rounded-lg px-4 py-3 shadow-sm border flex items-center space-x-2">
            <span className="text-xl">📊</span>
            <span className="text-sm font-medium text-gray-700">100+ Projects Completed</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection