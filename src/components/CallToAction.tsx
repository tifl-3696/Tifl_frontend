
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="bg-primary py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
            Join the Movement for Better Early Childhood Development in Pakistan
          </h2>
          <p className="text-primary-foreground text-base md:text-xl mb-6 md:mb-8">
            Together we can create positive change for the next generation. 
            Start by accessing our resources or becoming a part of our community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button className="bg-white text-primary hover:bg-accent/90 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full sm:w-auto">
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-primary/80 text-base md:text-lg py-4 md:py-6 px-6 md:px-8 w-full sm:w-auto"
              onClick={() => window.open('https://chat.whatsapp.com/CqHkD6gIAtoFJysWbMBaZa', '_blank')}
            >
              Join Our Network
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
