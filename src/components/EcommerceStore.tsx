import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Tag, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import PaymentIntegration from "./PaymentIntegration";

// Define the product interface
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

// Sample products
const products: Product[] = [
  {
    id: "tshirt-1",
    name: "Amorgos Taxi T-Shirt",
    description: "Comfortable cotton t-shirt with Amorgos Taxi logo",
    price: 19.99,
    image: "/lovable-uploads/c382fb30-7129-4004-a2ed-c54a95a83927.png"
  },
  {
    id: "cap-1",
    name: "Logo Cap",
    description: "Stylish cap with embroidered taxi logo",
    price: 14.99,
    image: "/lovable-uploads/c5c9d902-d731-45f7-8367-0535720e91c2.png"
  },
  {
    id: "mug-1",
    name: "Amorgos Taxi Mug",
    description: "Ceramic mug featuring the island scenery",
    price: 9.99,
    image: "/lovable-uploads/d9dc9629-95c4-4a3e-a0f8-b3892180343f.png"
  },
  {
    id: "keychain-1",
    name: "Taxi Keychain",
    description: "Metal keychain with taxi pendant",
    price: 6.99,
    image: "/lovable-uploads/d26204ad-900d-43b1-9818-b7cf1ab6ff4b.png"
  }
];

// Cart item interface
interface CartItem extends Product {
  quantity: number;
}

const EcommerceStore = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [orderReference, setOrderReference] = useState("");
  
  // Calculate the total amount for all items in the cart
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(currentCart => {
      // Check if product already exists in cart
      const existingItem = currentCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // If product exists, increase quantity
        return currentCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // If product doesn't exist, add it with quantity 1
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
    
    toast.success(`Added ${product.name} to your cart`);
  };
  
  // Increase product quantity in cart
  const increaseQuantity = (productId: string) => {
    setCart(currentCart => 
      currentCart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };
  
  // Decrease product quantity in cart
  const decreaseQuantity = (productId: string) => {
    setCart(currentCart => {
      // Find the current item
      const currentItem = currentCart.find(item => item.id === productId);
      
      // If quantity will be 0, remove item from cart
      if (currentItem && currentItem.quantity === 1) {
        return currentCart.filter(item => item.id !== productId);
      }
      
      // Otherwise decrease quantity
      return currentCart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    });
  };
  
  // Proceed to checkout
  const checkout = () => {
    // Generate an order reference number
    const reference = `AMG-SHOP-${Math.floor(Math.random() * 900000) + 100000}`;
    setOrderReference(reference);
    setShowPayment(true);
  };
  
  // Handle payment success
  const handlePaymentSuccess = () => {
    setShowPayment(false);
    setCart([]);
    toast.success("Order completed successfully! Your items will be ready for pickup at our main office.");
  };
  
  // Handle payment cancellation
  const handlePaymentCancel = () => {
    setShowPayment(false);
    toast.info("Payment cancelled. Your cart has been saved.");
  };
  
  // Render payment screen if active
  if (showPayment) {
    return (
      <section id="shop" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Your Purchase</h2>
            <p className="text-lg text-muted-foreground">
              Secure your order by completing payment through our trusted partner, Cardlink.
            </p>
          </div>
          
          <PaymentIntegration 
            amount={cartTotal}
            bookingReference={orderReference}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
          
          <div className="mt-10 text-center text-sm text-muted-foreground">
            <p>
              Need help? Contact our store team at <a href="mailto:shop@amorgostaxi.gr" className="text-taxi hover:underline">shop@amorgostaxi.gr</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section id="shop" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Amorgos Taxi Shop</h2>
          <p className="text-lg text-muted-foreground">
            Take a piece of Amorgos home with you! Browse our collection of branded merchandise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-taxi" />
                  <span className="font-medium text-lg">€{product.price.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Shopping Cart */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5 text-taxi" />
            Your Cart
          </h3>
          
          {cart.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              Your cart is empty. Add some products to get started!
            </div>
          ) : (
            <>
              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">€{item.price.toFixed(2)} each</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="w-20 text-right font-medium">
                        €{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-lg">Total:</span>
                  <span className="font-bold text-xl text-taxi">€{cartTotal.toFixed(2)}</span>
                </div>
                
                <Button 
                  className="w-full bg-taxi hover:bg-taxi-dark text-taxi-contrast"
                  size="lg"
                  onClick={checkout}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcommerceStore;
