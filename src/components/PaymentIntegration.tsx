
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, Info, ArrowRight, Loader2 } from "lucide-react";
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStep, setPaymentStep] = useState<'details' | 'processing' | 'confirmation'>('details');
  
  // This would be replaced with actual Cardlink integration
  const handleCardlinkPayment = () => {
    // Move to processing state
    setIsProcessing(true);
    setPaymentStep('processing');
    
    // Simulate payment processing
    toast.loading("Connecting to secure payment gateway...");
    
    // In a real implementation, this would redirect to Cardlink or open their payment modal
    setTimeout(() => {
      // After first delay, show processing payment message
      toast.dismiss();
      toast.loading("Processing payment...");
      
      setTimeout(() => {
        // After second delay, show verification message
        toast.dismiss();
        toast.loading("Verifying transaction...");
        
        setTimeout(() => {
          // Complete the transaction
          toast.dismiss();
          setIsProcessing(false);
          setPaymentStep('confirmation');
          toast.success("Payment successful!");
        }, 1500);
      }, 2000);
    }, 1500);
  };

  const completeBooking = () => {
    onSuccess();
  };

  // Payment details step
  const renderPaymentDetails = () => (
    <>
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
          disabled={isProcessing}
        >
          Cancel
        </Button>
        <Button 
          className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast" 
          onClick={handleCardlinkPayment}
          disabled={isProcessing}
        >
          <CreditCard className="mr-2 h-4 w-4" />
          Pay with Cardlink
        </Button>
      </CardFooter>
    </>
  );

  // Processing step
  const renderProcessing = () => (
    <>
      <CardContent className="flex flex-col items-center justify-center py-10">
        <div className="w-16 h-16 rounded-full bg-taxi/10 flex items-center justify-center mb-4">
          <Loader2 className="h-8 w-8 text-taxi animate-spin" />
        </div>
        <h3 className="text-lg font-medium mb-2">Processing Your Payment</h3>
        <p className="text-center text-muted-foreground mb-6">
          Please don't close this window while we process your payment.
        </p>
        <div className="w-full max-w-xs bg-muted/30 h-2 rounded-full overflow-hidden">
          <div className="h-full bg-taxi animate-pulse" style={{width: '60%'}}></div>
        </div>
      </CardContent>
    </>
  );

  // Confirmation step
  const renderConfirmation = () => (
    <>
      <CardContent className="flex flex-col items-center justify-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-500" />
        </div>
        <h3 className="text-lg font-medium mb-2">Payment Successful</h3>
        <p className="text-center text-muted-foreground mb-4">
          Your payment for €{amount.toFixed(2)} has been processed successfully.
        </p>
        <div className="bg-muted/30 p-3 rounded-md w-full max-w-xs mb-6">
          <div className="flex justify-between text-sm">
            <span>Payment Reference:</span>
            <span className="font-medium">{bookingReference}-PAY</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast" 
          onClick={completeBooking}
        >
          Complete Booking
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </>
  );

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
      
      {paymentStep === 'details' && renderPaymentDetails()}
      {paymentStep === 'processing' && renderProcessing()}
      {paymentStep === 'confirmation' && renderConfirmation()}
    </Card>
  );
};

export default PaymentIntegration;
