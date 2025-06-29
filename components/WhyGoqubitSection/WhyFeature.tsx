interface FeatureShowcaseProps {
  features?: {
    topLeft: string
    topRight: string
    bottomLeft: string
    bottomRight: string
  }
  className?: string
}

const WhyFeatureShowcase = ({
  features = {
    topLeft: "Unified Teams",
    topRight: "Code That Scales",
    bottomLeft: "Built for Speed",
    bottomRight: "Flexible by Design",
  },
  className = "",
}: FeatureShowcaseProps) => {
  return (
    <div className={` min-h-[80%] bg-section-bg flex items-center justify-center ${className}`}>
      <div className=" wrapper relative w-full max-w-4xl">
        {/* Central Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className=" w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
              {/* Phone Screen */}
              <div className="w-full h-full bg-white rounded-[2.5rem] relative overflow-hidden">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>

                {/* Screen Content Area */}
                <div className="pt-12 px-4 h-full">{/* You can add screen content here */}</div>
              </div>
            </div>
          </div>
        </div>


        {/* Connecting Lines (Optional) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Left Box */}
          <div className={` absolute -top-10 left-32 md:left-32 transform rotate-1 bg-white rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-300 ${className} p-7 w-[300px] h-[230px] `}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-800 font-medium text-lg">{features.topLeft}</span>
            </div>
          </div>

          {/* Top Right Box */}
          <div className={` absolute -top-10 right-32 md:right-32 transform -rotate-1 bg-white rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-300 ${className} p-7 w-[300px] h-[230px] `}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-800 font-medium text-lg">{features.topRight}</span>
            </div>
          </div>


          {/* Bottom Left Box */}
          <div className={`absolute bottom-10 -left-22 md:left-20 transform -rotate-1 bg-white rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-300 ${className} p-7 w-[300px] h-[230px] `}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-800 font-medium text-lg">{features.bottomLeft}</span>
            </div>
          </div>

          {/* Bottom Right Box */}
          <div className={`absolute bottom-10 right-22 md:right-20 transform -rotate-1 bg-white rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-300 ${className} p-7 w-[300px] h-[230px] `}>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-gray-800 font-medium text-lg">{features.bottomRight}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WhyFeatureShowcase
