import { Mail, ChevronRight, Globe, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 w-16 h-16 opacity-60">
        <svg viewBox="0 0 64 64" className="w-full h-full">
          <path
            d="M8 32C8 18.7 18.7 8 32 8C45.3 8 56 18.7 56 32"
            stroke="#10B981"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 w-12 h-16 opacity-60">
        <svg viewBox="0 0 48 64" className="w-full h-full">
          <path d="M8 8L40 8L32 24L40 40L8 40L16 24Z" fill="#F59E0B" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto">
        {/* Thumbs Up Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm">
            <span className="text-4xl">👍</span>
          </div>
        </div>

        {/* Header Text */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-2">{"WE'RE STILL"}</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-8 leading-tight">Cooking Our Website.</h1>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-600 mb-2">We are going to launch our website Very Soon.</p>
          <p className="text-lg md:text-xl text-gray-600">Stay Tune.</p>
        </div>

        {/* Notify Button */}
        <div className="mb-16 w-full flex justify-center">
        <a href="mailto:work@goqubit.in" className="text-blue-400 hover:text-blue-300 transition-colors">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium group transition-all duration-200 shadow-lg hover:shadow-xl flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            Notify Me
            <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-6">
          <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-200">
          <Link href="https://www.goqubit.in/" >
            <Globe className="w-4 h-4 text-gray-600" />
          </Link>
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-200">
            <Link href="https://www.instagram.com/goqubit.in/" >
              <Instagram className="w-4 h-4 text-gray-600" />
            </Link>
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-200">
            <Link href="" >
              <Linkedin className="w-4 h-4 text-gray-600" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ComingSoonPage