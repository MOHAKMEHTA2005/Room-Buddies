import { Button } from "@/components/ui/button";
import { Mic, Users, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 animate-float">
          <div className="bg-accent/20 backdrop-blur-sm rounded-full p-4">
            <Heart className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
          <div className="bg-primary/20 backdrop-blur-sm rounded-full p-4">
            <Users className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-float" style={{animationDelay: '2s'}}>
          <div className="bg-trust/20 backdrop-blur-sm rounded-full p-4">
            <MapPin className="w-6 h-6 text-trust" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Find Your Perfect
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Room Buddy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            AI-powered roommate matching for women's co-living spaces. 
            Safe, smart, and perfectly matched.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button variant="hero" size="xl" className="group">
              <Mic className="group-hover:animate-pulse" />
              Start Voice Matching
            </Button>
            <Button variant="accent" size="xl">
              Browse Hostels
              <MapPin />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Partner Hostels</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust mb-2">50+</div>
              <div className="text-muted-foreground">Cities</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </div>
  );
};

export default Hero;