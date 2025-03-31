
import React from "react";
import { Car, ArrowRight } from "lucide-react";

// Define price list from the given data
const priceList = [
  { from: "Aegiali", to: "Monastery", price: 25 },
  { from: "Aegiali", to: "Katapola", price: 30 },
  { from: "Aegiali", to: "Chora", price: 22 },
  { from: "Aegiali", to: "Langada", price: 8 },
  { from: "Aegiali", to: "Tholaria", price: 8 },
  { from: "Aegiali", to: "Agios Pavlos", price: 10 },
  { from: "Aegiali", to: "Kalotaritissa", price: 50 },
  { from: "Aegiali", to: "Arkesini", price: 40 },
  { from: "Katapola", to: "Chora", price: 10 },
  { from: "Katapola", to: "Agia Anna", price: 14 },
  { from: "Katapola", to: "Ag. Paraskevi", price: 30 },
  { from: "Katapola", to: "Kalotaritissa", price: 33 },
  { from: "Katapola", to: "Monastery", price: 12 }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Fixed fares for your peace of mind. Our prices are valid for taxis or vans of up to 4 persons.
            Minimum charge: <span className="font-semibold">€6</span>
          </p>
        </div>
        
        <div className="relative overflow-hidden bg-white rounded-lg shadow-lg max-w-5xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-2 taxi-gradient"></div>
          
          {/* Price table header */}
          <div className="p-6 bg-gray-100 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold flex items-center">
                <Car className="mr-2 h-5 w-5 text-taxi" />
                <span>Price List</span>
              </h3>
              <p className="text-sm text-muted-foreground">All prices in EUR (€)</p>
            </div>
          </div>
          
          {/* Price table content */}
          <div className="grid grid-cols-1 divide-y">
            {priceList.map((route, index) => (
              <div 
                key={index} 
                className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <span className="font-medium">{route.from}</span>
                  <ArrowRight className="mx-2 h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{route.to}</span>
                </div>
                <span className="text-lg font-bold text-taxi-contrast">€{route.price}</span>
              </div>
            ))}
          </div>
          
          {/* Additional pricing notes */}
          <div className="p-6 bg-gray-50 border-t">
            <h4 className="font-semibold mb-2">Additional Information</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="text-taxi mr-2">•</span>
                <span>Prices are valid for taxi or van of up to 4 persons</span>
              </li>
              <li className="flex items-start">
                <span className="text-taxi mr-2">•</span>
                <span>Minimum charge: €6</span>
              </li>
              <li className="flex items-start">
                <span className="text-taxi mr-2">•</span>
                <span>For larger groups or special requirements, please contact us directly</span>
              </li>
              <li className="flex items-start">
                <span className="text-taxi mr-2">•</span>
                <span>Prices may vary during high season (June-September)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
