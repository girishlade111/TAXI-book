
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
            <Car className="h-8 w-8 text-taxi mr-2" />
            <div className="font-bold">
              <span className="text-xl md:text-2xl font-extrabold text-white drop-shadow-md">
                TAXI AMORGOS
              </span>
              <span className="block text-sm md:text-base text-taxi font-semibold drop-shadow-md">
                Lyviakis
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#services"
            className="text-lg lg:text-xl font-medium text-white hover:text-taxi transition-colors animated-border-button drop-shadow-md"
          >
            Our Services
          </a>
          <a
            href="#pricing"
            className="text-lg lg:text-xl font-medium text-white hover:text-taxi transition-colors animated-border-button drop-shadow-md"
          >
            Pricing
          </a>
          <a
            href="#booking"
            className="text-lg lg:text-xl font-medium text-white hover:text-taxi transition-colors animated-border-button drop-shadow-md"
          >
            Book Now
          </a>
          <a
            href="#contact"
            className="text-lg lg:text-xl font-medium text-white hover:text-taxi transition-colors animated-border-button drop-shadow-md"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+306937883838"
            className="flex items-center space-x-2 text-lg lg:text-xl font-medium text-white drop-shadow-md"
          >
            <Phone className="h-5 w-5 text-taxi" />
            <span>+30 693 788 3838</span>
          </a>
          <Button
            asChild
            className="bg-taxi hover:bg-taxi-dark text-taxi-contrast text-lg px-6 py-2 font-semibold shadow-md"
          >
            <a href="#booking">Book a Taxi</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-xl font-medium py-2 border-b border-gray-700 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Services
            </a>
            <a
              href="#pricing"
              className="text-xl font-medium py-2 border-b border-gray-700 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#booking"
              className="text-xl font-medium py-2 border-b border-gray-700 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="text-xl font-medium py-2 border-b border-gray-700 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button
              asChild
              className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast text-xl font-semibold"
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
