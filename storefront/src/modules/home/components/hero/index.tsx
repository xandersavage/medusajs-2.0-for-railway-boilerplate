import React from 'react'
import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://console-production-d2ee.up.railway.app/api/v1/buckets/medusa-media/objects/download?preview=true&prefix=%F0%9F%A6%8B%20on%20Twitter.jpg&version_id=null"
          alt="Hero background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Brand Name with Animation */}
          <div className="space-y-4 animate-fade-in">
            <Heading
              level="h1"
              className="text-5xl md:text-7xl font-bold text-white tracking-wider transform hover:scale-105 transition-transform duration-300"
            >
              PAWKLAN
            </Heading>
            
            <Heading
              level="h2"
              className="text-2xl md:text-3xl text-white/90 font-light italic tracking-wide"
            >
              Wear the Bold. Own the Moment
            </Heading>
          </div>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our exclusive collection of bold, contemporary fashion that defines your unique style and makes every moment count.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              className="bg-white text-black hover:bg-white/90 px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Shop Collection
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-medium transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center items-start p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero