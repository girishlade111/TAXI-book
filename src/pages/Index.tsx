
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { CreditCard } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="bg-muted py-2 px-4">
          <div className="container mx-auto flex items-center justify-center text-sm">
            <CreditCard className="h-4 w-4 mr-2 text-muted-foreground" />
            <p className="text-muted-foreground">We accept secure online payments through Cardlink</p>
          </div>
        </div>
        <Services />
        <Gallery />
        <Pricing />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
