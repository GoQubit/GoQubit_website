interface ServiceCardProps {
  title: string
  description: string
  image: string
  className?: string
}

const ServiceCard = ({ title, description, image, className = "" }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg border shadow-lg hover:shadow-xl transition-shadow duration-300 ${className} p-7`}>
      {/* Card Header */}
      <div className="text-center pb-4 ">
        <h3 className=" font-nanum text-2xl font-extrabold text-gray-900 mb-2">{title}</h3>
        <p className="font-epilogue text-gray-600 text-xl font-light leading-relaxed whitespace-pre-line">{description}</p>
      </div>
      {/* Card Content */}
      <div className="text-center">
        <img src={image} alt="service-image" />
      </div>
    </div>
  )
}

export default ServiceCard
