
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, Info } from "lucide-react";
import { toast } from "sonner";

interface PaymentIntegrationProps {
  amount: number;
  bookingReference: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentIntegration: React.FC<PaymentIntegrationProps> = ({
  amount,
  bookingReference,
  onSuccess,
  onCancel
}) => {
  // This would be replaced with actual Cardlink integration
  const handleCardlinkPayment = () => {
    // Simulate payment processing
    toast.loading("Processing payment...");
    
    // In a real implementation, this would redirect to Cardlink or open their payment modal
    setTimeout(() => {
      toast.dismiss();
      toast.success("Payment successful!");
      onSuccess();
    }, 2000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-taxi" />
          Secure Payment
        </CardTitle>
        <CardDescription>
          Complete your booking by paying securely with Cardlink
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b">
            <span>Booking Reference:</span>
            <span className="font-medium">{bookingReference}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b">
            <span>Amount to pay:</span>
            <span className="font-medium text-lg">€{amount.toFixed(2)}</span>
          </div>
          
          <div className="bg-muted/30 p-3 rounded-md flex items-start gap-2 text-sm">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>Your payment will be processed securely by Cardlink, a leading payment processor in Greece.</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span>Secure transaction</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span>Encrypted payment details</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-green-500" />
              <span>No booking fees</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3 flex-col sm:flex-row">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast" 
          onClick={handleCardlinkPayment}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Pay with Cardlink
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentIntegration;
