
import React, { useState } from "react";
import { Grid3X3, Eye, X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
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

  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-background to-amorgos-sea/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Grid3X3 className="text-taxi h-8 w-8 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Gallery</h2>
          </div>
          <div className="w-24 h-1 bg-taxi mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore Amorgos Island through our eyes - from scenic beach rides to happy customers experiencing our premium taxi service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl aspect-[4/3] group cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between">
                <div className="p-4 text-white">
                  <p className="font-medium">{`Amorgos Taxi - Image ${index + 1}`}</p>
                </div>
                <div className="p-4">
                  <button className="bg-taxi/90 hover:bg-taxi p-2 rounded-full">
                    <Eye className="w-5 h-5 text-taxi-contrast" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image view */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-5xl w-full mx-auto">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 bg-taxi/90 hover:bg-taxi p-2 rounded-full z-10"
              >
                <X className="w-6 h-6 text-taxi-contrast" />
              </button>
              <div className="bg-black relative overflow-hidden rounded-xl">
                <img 
                  src={selectedImage !== null ? images[selectedImage].src : ''} 
                  alt={selectedImage !== null ? images[selectedImage].alt : ''}
                  className="w-full h-auto object-contain max-h-[80vh]" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <p>{selectedImage !== null ? images[selectedImage].alt : ''}</p>
                </div>
              </div>
            </div>
          </div>
        )}

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
