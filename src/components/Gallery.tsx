
import React from "react";
import { GalleryVertical } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/ac05156d-2892-497d-b56b-6e50dfa6caba.png",
      alt: "Taxi driver with passenger inside vehicle"
    },
    {
      src: "/lovable-uploads/c5c9d902-d731-45f7-8367-0535720e91c2.png",
      alt: "Taxi drivers standing by vehicle"
    },
    {
      src: "/lovable-uploads/3dcdf1a8-52fc-47f4-b4c7-72826ae1fad3.png",
      alt: "Taxi by the beach with beautiful sea view"
    },
    {
      src: "/lovable-uploads/0114ee36-6c8c-4883-b248-c521872f03d6.png",
      alt: "Taxi vehicles parked at harbor"
    },
    {
      src: "/lovable-uploads/e4abe63b-ca8f-4e8f-8ac9-6c546c9f0cdb.png", 
      alt: "Happy customers with taxi at night"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-amorgos-sea/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <GalleryVertical className="text-taxi h-8 w-8 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Gallery</h2>
          </div>
          <div className="w-24 h-1 bg-taxi mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Amorgos Island through our eyes - from scenic beach rides to happy customers experiencing our premium taxi service.
          </p>
        </div>

        <div className="relative px-4 md:px-12 mt-8">
          <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 md:p-4">
                    <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="object-cover w-full h-full transition-all duration-500 hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white text-sm md:text-base">
                          <p className="font-medium">{`Amorgos Taxi Service - Image ${index + 1}`}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1 md:-left-6 bg-taxi text-taxi-contrast hover:bg-taxi-dark hover:text-taxi-contrast border-none" />
            <CarouselNext className="right-1 md:-right-6 bg-taxi text-taxi-contrast hover:bg-taxi-dark hover:text-taxi-contrast border-none" />
          </Carousel>
          
          <div className="mt-6">
            <Pagination>
              <PaginationContent>
                {images.map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink 
                      className="bg-taxi/20 hover:bg-taxi/40 text-taxi-contrast border-taxi/30 w-3 h-3 md:w-4 md:h-4 p-0 min-w-0 rounded-full"
                      href="#" 
                      onClick={(e) => e.preventDefault()}
                      isActive={index === 0} 
                    >
                      <span className="sr-only">{`Page ${index + 1}`}</span>
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="italic text-muted-foreground max-w-2xl mx-auto">
            "Experience the beauty of Amorgos Island with our reliable and comfortable taxi service. Our professional drivers are ready to take you on an unforgettable journey."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
