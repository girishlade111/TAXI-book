
import React from "react";
import { Button } from "@/components/ui/button";
import { Car, Calendar, Clock, MapPin, Star, ChevronDown } from "lucide-react";
const Hero = () => {
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen overflow-hidden">
      {/* Background image with parallax effect and overlay */}
      <div className="absolute inset-0 bg-cover bg-center z-0 transform scale-105 motion-safe:animate-[pulse_15s_ease-in-out_infinite]" style={{
      backgroundImage: "url('/lovable-uploads/7492547f-8c85-4c8f-825b-cb208ec52358.png')",
      backgroundAttachment: "fixed"
    }} />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-0"></div>
      
      {/* Animated car driving across the screen */}
      <div className="absolute bottom-20 right-0 animate-taxi-drive z-10">
        <Car className="h-16 w-16 text-taxi drop-shadow-[0_0_8px_rgba(255,204,0,0.6)]" />
      </div>
      
      {/* Glowing particles effect */}
      <div className="absolute inset-0 z-5 opacity-60">
        <div className="absolute top-1/4 left-1/4 h-2 w-2 rounded-full bg-white animate-pulse" style={{
        animationDelay: "0.5s"
      }}></div>
        <div className="absolute top-1/3 left-1/2 h-3 w-3 rounded-full bg-taxi animate-pulse" style={{
        animationDelay: "1.2s"
      }}></div>
        <div className="absolute top-2/3 left-1/4 h-2 w-2 rounded-full bg-white animate-pulse" style={{
        animationDelay: "2.1s"
      }}></div>
        <div className="absolute top-1/5 right-1/3 h-2 w-2 rounded-full bg-taxi animate-pulse" style={{
        animationDelay: "0.7s"
      }}></div>
        <div className="absolute bottom-1/4 right-1/4 h-3 w-3 rounded-full bg-white animate-pulse" style={{
        animationDelay: "1.5s"
      }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-36 pb-24 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center">
        {/* Main Heading - Moved above the images */}
        <div className="max-w-4xl mx-auto mb-8 backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg animate-slide-in">
            Discover <span className="bg-clip-text text-transparent bg-gradient-to-r from-taxi to-taxi-light">Amorgos Island</span> <br />
            <span className="relative inline-block mt-2">
              in Style
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-taxi"></span>
            </span>
          </h1>
        </div>
        
        {/* Amorgos Island Taxi Images - Now Two Side by Side */}
        <div className="mb-8 flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* First Taxi Image */}
          <div className="max-w-xs md:max-w-sm animate-float">
            <img alt="Amorgos Island Taxi" src="/lovable-uploads/653c472b-f84f-4f6e-b08b-1136e4cee1a5.jpg" className="rounded-xl shadow-2xl border-4 border-taxi/30 transform rotate-2 hover:rotate-0 transition-transform duration-500 object-contain" />
          </div>
          
          {/* Duplicated Taxi Image */}
          <div className="max-w-xs md:max-w-sm animate-float" style={{ animationDelay: "0.3s" }}>
            <img alt="Amorgos Island Taxi" src="/lovable-uploads/653c472b-f84f-4f6e-b08b-1136e4cee1a5.jpg" className="rounded-xl shadow-2xl border-4 border-taxi/30 transform rotate-2 hover:rotate-0 transition-transform duration-500 object-contain" />
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/10 p-8 rounded-2xl border border-white/10">
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 drop-shadow-md font-light">
            Premium taxi services with professional local drivers, comfortable vehicles,
            and the best island experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12 justify-center">
            <Button asChild className="bg-taxi hover:bg-taxi-dark text-taxi-contrast text-lg px-10 py-7 rounded-xl shadow-[0_0_15px_rgba(255,204,0,0.5)] hover:shadow-[0_0_25px_rgba(255,204,0,0.7)] transition-all duration-300" size="lg">
              <a href="#booking">
                <Car className="mr-2 h-5 w-5" />
                Book Your Ride Now
              </a>
            </Button>
            <Button asChild className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 text-lg px-10 py-7 rounded-xl hover:border-white/40 transition-all duration-300" size="lg" variant="outline">
              <a href="#pricing">
                <Star className="mr-2 h-5 w-5 text-taxi" />
                View Our Prices
              </a>
            </Button>
          </div>
        </div>
        
        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12">
          <div className="glass-card animate-float hover:scale-105 transition-transform duration-300">
            <div className="feature-icon-wrapper">
              <Car className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Professional Service</h3>
            <p className="text-white/80">Experienced drivers with extensive knowledge of Amorgos Island</p>
          </div>
          
          <div className="glass-card animate-float hover:scale-105 transition-transform duration-300" style={{
          animationDelay: "0.2s"
        }}>
            <div className="feature-icon-wrapper">
              <Clock className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Always On Time</h3>
            <p className="text-white/80">Punctuality is our pride - we'll be there when you need us</p>
          </div>
          
          <div className="glass-card animate-float hover:scale-105 transition-transform duration-300" style={{
          animationDelay: "0.4s"
        }}>
            <div className="feature-icon-wrapper">
              <MapPin className="h-6 w-6 text-taxi-contrast" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Island Expertise</h3>
            <p className="text-white/80">We know every corner of Amorgos and its hidden gems</p>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer" onClick={scrollToNextSection}>
          <span className="text-white/80 text-sm mb-2">Discover More</span>
          <ChevronDown className="h-6 w-6 text-taxi" />
        </div>
      </div>
      
      {/* Diagonal clip bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background clip-path-diagonal" />
    </section>;
};
export default Hero;
