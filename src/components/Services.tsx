
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hotel, Briefcase, Anchor, Mail, Clock, Package } from "lucide-react";

const services = [
  {
    title: "Hotel Service",
    description: "Comfortable transportation between your hotel and any destination on Amorgos Island",
    icon: Hotel,
    color: "text-amorgos-blue",
    animationDelay: "0s"
  },
  {
    title: "Travel Agencies",
    description: "Special partnerships with travel agencies for seamless coordination and group transportation",
    icon: Briefcase,
    color: "text-amorgos-blue",
    animationDelay: "0.1s"
  },
  {
    title: "Port Transportation",
    description: "Reliable transportation to and from ports, with timely pickups and drop-offs",
    icon: Anchor,
    color: "text-amorgos-blue",
    animationDelay: "0.2s"
  },
  {
    title: "Email Reservations",
    description: "Easy TAXI reservations via e-mail so we can wait for you at the port upon your arrival",
    icon: Mail,
    color: "text-amorgos-blue",
    animationDelay: "0.3s"
  },
  {
    title: "Hourly Rental",
    description: "Car rental with an hourly charge for flexible transportation needs",
    icon: Clock,
    color: "text-amorgos-blue",
    animationDelay: "0.4s"
  },
  {
    title: "Parcel Transport",
    description: "Safe and reliable transport of unaccompanied parcels across Amorgos Island",
    icon: Package,
    color: "text-amorgos-blue",
    animationDelay: "0.5s"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground">
            Experience the best transportation services Amorgos Island has to offer.
            We cater to all your travel needs with style, comfort, and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-none bg-white shadow">
              <CardHeader className="bg-secondary/50 pb-2">
                <div 
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                  style={{ animationDelay: service.animationDelay }}
                >
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-foreground/80 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
