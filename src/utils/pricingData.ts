
// Define price list that can be shared across components
export const priceList = [
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

// Helper function to find price between two locations
export const findPrice = (from: string, to: string): number | null => {
  // Look for direct route
  const directRoute = priceList.find(
    route => (route.from === from && route.to === to) || (route.from === to && route.to === from)
  );
  
  if (directRoute) {
    return directRoute.price;
  }
  
  return null; // Price not found
};

// Define minimum charge
export const minimumCharge = 6;
