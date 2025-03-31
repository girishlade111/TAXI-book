
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Calendar, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/7492547f-8c85-4c8f-825b-cb208ec52358.png')",
          filter: "brightness(0.8)"
        }}
      />
      
      {/* Animated car driving across the screen */}
      <div className="absolute bottom-20 left-0 animate-taxi-drive z-10">
        <Car className="h-12 w-12 text-taxi" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg animate-slide-in">
          Experience Amorgos Island <br/>
          <span className="text-taxi">in Style and Comfort</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
          Your reliable transportation partner in Amorgos. We provide premium taxi services
          with professional drivers, comfortable vehicles, and competitive prices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button 
            asChild 
            className="bg-taxi hover:bg-taxi-dark text-taxi-contrast text-lg px-8 py-6 animate-pulse-soft"
            size="lg"
          >
            <a href="#booking">
              <Car className="mr-2 h-5 w-5" />
              Book Your Ride
            </a>
          </Button>
          <Button 
            asChild 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 text-lg px-8 py-6"
            size="lg"
            variant="outline"
          >
            <a href="#pricing">View Prices</a>
          </Button>
        </div>
        
        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-float">
            <div className="bg-taxi rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Car className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Professional Service</h3>
            <p className="text-white/80">Experienced drivers with extensive knowledge of Amorgos Island</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-float" style={{ animationDelay: "0.2s" }}>
            <div className="bg-taxi rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Always On Time</h3>
            <p className="text-white/80">Punctuality is our pride - we'll be there when you need us</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="bg-taxi rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Easy Booking</h3>
            <p className="text-white/80">Simple online reservations or call us directly anytime</p>
          </div>
        </div>
      </div>
      
      {/* Diagonal clip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background clip-path-diagonal" />
    </section>
  );
};

export default Hero;
