
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EcommerceStore from "@/components/EcommerceStore";
import { CreditCard, ShieldCheck, LockKeyhole, ShoppingBag, Car } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="bg-muted py-4 px-4">
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-taxi" />
              <p>Secure online payments</p>
            </div>
            <div className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-taxi" />
              <p>Encrypted transactions</p>
            </div>
            <div className="flex items-center">
              <LockKeyhole className="h-4 w-4 mr-2 text-taxi" />
              <p>Protected by Cardlink</p>
            </div>
          </div>
        </div>
        <Services />
        <Gallery />
        <Pricing />
        
        {/* Connected Experience Banner */}
        <div className="bg-taxi/10 py-10 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Complete Amorgos Experience</h2>
              <p className="text-lg mb-6">
                Seamlessly shop for souvenirs and book your ride in one connected experience.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <div className="flex flex-col items-center max-w-xs">
                  <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                    <ShoppingBag className="h-10 w-10 text-taxi" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Shop Merchandise</h3>
                  <p className="text-center">
                    Purchase branded souvenirs from our online shop.
                  </p>
                </div>
                
                <div className="relative h-0 md:h-auto md:w-8 flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-taxi text-white rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="flex flex-col items-center max-w-xs">
                  <div className="bg-white rounded-full p-4 mb-4 shadow-md">
                    <Car className="h-10 w-10 text-taxi" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Book Your Ride</h3>
                  <p className="text-center">
                    Schedule a taxi to pick up your merchandise or explore the island.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <BookingForm />
        <EcommerceStore />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
