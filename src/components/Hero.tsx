
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-20 z-0"></div>
      
      {/* Animated gradient circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aiba-purple/20 rounded-full blur-[100px] animate-float z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aiba-purple/30 rounded-full blur-[100px] animate-float animation-delay-2000 z-0"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Transforming Business with Advanced AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Leverage state-of-the-art AI applications and expert consulting to drive efficiency, 
            reduce risk, and accelerate growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-aiba-purple hover:bg-aiba-purple-dark text-lg px-8 py-6 font-semibold btn-glow transition-all">
              Explore Applications
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 border-white/20 font-semibold hover:bg-white/5 transition-all group">
              <span>Consulting Services</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract decoration */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200L60 180C120 160 240 120 360 106.7C480 93.3 600 106.7 720 120C840 133.3 960 146.7 1080 143.3C1200 140 1320 120 1380 110L1440 100V200H1380C1320 200 1200 200 1080 200C960 200 840 200 720 200C600 200 480 200 360 200C240 200 120 200 60 200H0Z" fill="rgba(155, 135, 245, 0.05)"/>
      </svg>
    </div>
  );
};

export default Hero;
