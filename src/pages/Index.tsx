
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
import { CreditCard, ShieldCheck, LockKeyhole } from "lucide-react";

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
        <BookingForm />
        <EcommerceStore />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
