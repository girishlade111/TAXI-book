
import React, { useState, useEffect } from "react";
import { Car, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-black/40 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <div className="font-bold">
              <span className={cn(
                "text-base md:text-xl font-extrabold drop-shadow-md",
                isScrolled ? "text-taxi-contrast" : "text-white"
              )}>
                TAXI AMORGOS
              </span>
              <span className={cn(
                "block text-sm md:text-base font-semibold drop-shadow-md",
                isScrolled ? "text-taxi" : "text-taxi"
              )}>
                Lyviakis
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="#services" 
            className={cn(
              "text-sm lg:text-base font-medium transition-colors animated-border-button drop-shadow-md",
              isScrolled ? "text-taxi-contrast hover:text-taxi" : "text-white hover:text-taxi"
            )}
          >
            Our Services
          </a>
          <a 
            href="#pricing" 
            className={cn(
              "text-sm lg:text-base font-medium transition-colors animated-border-button drop-shadow-md",
              isScrolled ? "text-taxi-contrast hover:text-taxi" : "text-white hover:text-taxi"
            )}
          >
            Pricing
          </a>
          <a 
            href="#booking" 
            className={cn(
              "text-sm lg:text-base font-medium transition-colors animated-border-button drop-shadow-md",
              isScrolled ? "text-taxi-contrast hover:text-taxi" : "text-white hover:text-taxi"
            )}
          >
            Book Now
          </a>
          <a 
            href="#contact" 
            className={cn(
              "text-sm lg:text-base font-medium transition-colors animated-border-button drop-shadow-md",
              isScrolled ? "text-taxi-contrast hover:text-taxi" : "text-white hover:text-taxi"
            )}
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+306937883838" 
            className={cn(
              "flex items-center space-x-2 text-sm lg:text-base font-medium drop-shadow-md",
              isScrolled ? "text-taxi-contrast" : "text-white"
            )}
          >
            <Phone className="h-4 w-4 text-taxi" />
            <span>+30 693 788 3838</span>
          </a>
          <Button 
            asChild 
            className="bg-taxi hover:bg-taxi-dark text-taxi-contrast text-sm px-4 py-1 font-medium shadow-md"
          >
            <a href="#booking">Book a Taxi</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden",
            isScrolled ? "text-taxi-contrast" : "text-white"
          )} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-base font-medium py-2 border-b border-gray-700 text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </a>
            <a 
              href="#pricing" 
              className="text-base font-medium py-2 border-b border-gray-700 text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#booking" 
              className="text-base font-medium py-2 border-b border-gray-700 text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
            <a 
              href="#contact" 
              className="text-base font-medium py-2 border-b border-gray-700 text-white" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              asChild 
              className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast text-base font-medium"
            >
              <a href="#booking" onClick={() => setMobileMenuOpen(false)}>
                Book a Taxi
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
