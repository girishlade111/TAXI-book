
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setIsSubmitting(false);
      
      // Reset form
      setContactForm({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sea-gradient text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-white/80">
            Have questions or need more information? Get in touch with us directly or fill out the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">AMORGOS TRANSPORT</h3>
              <p className="text-white/80 mb-8 max-w-md">
                Your reliable transportation partner in Amorgos. Available 24/7 for all your travel needs.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p>+30 693 788 3838</p>
                  <p>+30 693 667 1030</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p>taxiamorgos@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Address</h4>
                  <p>Aegiali • Amorgos • 84008</p>
                  <p>Greece</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name" className="text-white">Your Name</Label>
                <Input 
                  id="contact-name" 
                  name="name" 
                  placeholder="John Doe" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-email" className="text-white">Email Address</Label>
                <Input 
                  id="contact-email" 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-white">Message</Label>
                <Textarea 
                  id="contact-message" 
                  name="message" 
                  placeholder="How can we help you?" 
                  className="min-h-[150px] bg-white/5 border-white/20 text-white placeholder:text-white/50"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-white text-amorgos-blue hover:bg-white/90"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
