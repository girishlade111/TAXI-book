
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, addDays, isBefore } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Clock, CreditCard, Car, Users, Info, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import PaymentIntegration from "./PaymentIntegration";
import { priceList, findPrice, minimumCharge } from "@/utils/pricingData";

// Extract locations from price list to avoid duplication
const getUniqueLocations = () => {
  const locations = new Set<string>();
  
  priceList.forEach(route => {
    locations.add(route.from);
    locations.add(route.to);
  });
  
  return Array.from(locations).sort();
};

const locations = getUniqueLocations();

const BookingForm = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickup: "",
    destination: "",
    passengers: "1",
    paymentMethod: "cash",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingReference, setBookingReference] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [priceCalculated, setPriceCalculated] = useState(false);

  // Create date objects for validation
  const today = new Date();
  const tomorrow = addDays(today, 1);
  
  // Function to handle date selection with validation
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    // If date is earlier than tomorrow, show a warning
    if (selectedDate && isBefore(selectedDate, tomorrow)) {
      toast.error("Bookings must be at least 1 day in advance.", {
        icon: <AlertCircle className="h-4 w-4" />,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Calculate price when pickup or destination changes
  useEffect(() => {
    if (formData.pickup && formData.destination) {
      // Only calculate if both pickup and destination are selected
      const price = findPrice(formData.pickup, formData.destination);
      
      if (price !== null) {
        setEstimatedPrice(price);
        setPriceCalculated(true);
      } else {
        // If no direct route found, show minimum charge
        setEstimatedPrice(minimumCharge);
        setPriceCalculated(false);
        toast.info("No direct price available for this route. Minimum charge applied.", {
          icon: <Info className="h-4 w-4" />,
        });
      }
    } else {
      setEstimatedPrice(null);
      setPriceCalculated(false);
    }
  }, [formData.pickup, formData.destination]);

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate if date is at least tomorrow
    if (!date) {
      toast.error("Please select a pickup date", {
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }
    
    if (isBefore(date, tomorrow)) {
      toast.error("Bookings must be at least 1 day in advance.", {
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }
    
    setIsSubmitting(true);

    // Generate a random booking reference
    const reference = `AMG-${Math.floor(Math.random() * 900000) + 100000}`;
    setBookingReference(reference);
    
    // If card payment is selected, show payment screen
    if (formData.paymentMethod === "card") {
      setIsSubmitting(false);
      setShowPayment(true);
    } else {
      // For cash payments, proceed with the normal flow
      // Simulate form submission
      setTimeout(() => {
        toast.success("Booking received! We'll confirm shortly via email.");
        setIsSubmitting(false);
        resetForm();
      }, 1500);
    }
  };

  const handlePaymentSuccess = () => {
    setShowPayment(false);
    toast.success("Booking confirmed! Reference: " + bookingReference);
    resetForm();
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    toast("Payment cancelled. You can try again or pay with cash.", {
      icon: <Info className="h-4 w-4" />,
    });
  };

  const resetForm = () => {
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      pickup: "",
      destination: "",
      passengers: "1",
      paymentMethod: "cash",
      notes: ""
    });
    setDate(undefined);
    setEstimatedPrice(null);
    setPriceCalculated(false);
  };

  // Payment screen rendering
  if (showPayment) {
    return (
      <section id="booking" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Payment</h2>
            <p className="text-lg text-muted-foreground">
              Secure your booking by completing payment through our trusted partner, Cardlink.
            </p>
          </div>
          
          <PaymentIntegration 
            amount={estimatedPrice || minimumCharge}
            bookingReference={bookingReference}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
          
          <div className="mt-10 text-center text-sm text-muted-foreground">
            <p>
              Need help? Contact our support team at <a href="mailto:support@amorgostaxi.gr" className="text-taxi hover:underline">support@amorgostaxi.gr</a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Ride</h2>
          <p className="text-lg text-muted-foreground">
            Fill out the form below to book your taxi. We'll get back to you with a confirmation as soon as possible.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="+30 69XXXXXXXX" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Ride Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Ride Details</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("pickup", value)}
                        value={formData.pickup}
                      >
                        <SelectTrigger id="pickup">
                          <SelectValue placeholder="Select pickup location" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Select 
                        onValueChange={(value) => handleSelectChange("destination", value)}
                        value={formData.destination}
                      >
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Pickup Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            disabled={(date) => isBefore(date, tomorrow)}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                      <p className="text-xs text-muted-foreground mt-1">
                        Bookings must be made at least 1 day in advance.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="time">Pickup Time</Label>
                    <div className="flex items-center border rounded-md">
                      <span className="pl-3 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                      </span>
                      <Input 
                        id="time" 
                        name="time" 
                        type="time" 
                        className="border-0"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers</Label>
                    <div className="flex items-center border rounded-md">
                      <span className="pl-3 text-muted-foreground">
                        <Users className="h-4 w-4" />
                      </span>
                      <Select 
                        onValueChange={(value) => handleSelectChange("passengers", value)}
                        value={formData.passengers}
                      >
                        <SelectTrigger id="passengers" className="border-0">
                          <SelectValue placeholder="Passengers" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? "passenger" : "passengers"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <RadioGroup 
                      defaultValue={formData.paymentMethod}
                      onValueChange={handleRadioChange}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="cursor-pointer">Cash</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="cursor-pointer flex items-center">
                          <CreditCard className="h-4 w-4 mr-1" /> Card (Cardlink)
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                {estimatedPrice !== null && (
                  <div className={`${priceCalculated ? 'bg-taxi/10' : 'bg-muted/50'} p-4 rounded-md border ${priceCalculated ? 'border-taxi/20' : 'border-muted'}`}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{priceCalculated ? 'Fixed Price:' : 'Estimated Price:'}</span>
                      <span className="text-xl font-bold text-taxi">€{estimatedPrice.toFixed(2)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {priceCalculated 
                        ? "This is a fixed price based on our official pricing." 
                        : "This is an estimated price. The final price may vary based on waiting time or additional services."}
                    </p>
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    placeholder="Any special requirements or additional information..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-taxi hover:bg-taxi-dark text-taxi-contrast"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        <Car className="mr-2 h-5 w-5" />
                        {formData.paymentMethod === "card" ? "Proceed to Payment" : "Book My Taxi"}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
