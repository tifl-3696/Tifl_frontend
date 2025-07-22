
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-accent/30 pt-4 pb-8 md:pt-10 md:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              <span className="text-primary">Smart tools</span> for Smart families
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
              Supporting early childhood development through innovative resources, training, and community engagement. 
              Together we can build stronger foundations for Pakistan's children.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <Link to="/milestones" className="w-full sm:w-auto">
                <Button className="bg-primary hover:bg-primary/90 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full sm:w-auto">
                  Try Milestone Tracker
                </Button>
              </Link>
              <Link to="/smart-reminders" className="w-full sm:w-auto">
                <Button variant="outline" className="border-primary text-primary hover:bg-accent text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full sm:w-auto">
                  Smart Reminders
                </Button>
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white/80 rounded-lg p-4 shadow-sm border border-accent">
              <h3 className="text-base md:text-lg font-semibold text-primary mb-3 text-center lg:text-left">
                Contact Us
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Phone className="h-4 w-4 text-primary/80 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base">03325890475</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <Mail className="h-4 w-4 text-primary/80 flex-shrink-0" />
                  <span className="text-gray-700 text-sm md:text-base break-all">tifl5617@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-60 sm:h-72 md:h-80 rounded-lg relative overflow-hidden">
              <img 
                src="/lovable-uploads/20937feb-d1fa-4058-99f8-73efbadf94d3.png" 
                alt="TIFL Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
