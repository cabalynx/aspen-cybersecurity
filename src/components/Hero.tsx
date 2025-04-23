
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-main text-font relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center animate-fadeIn">
        <img 
          src="/lovable-uploads/9bb51fd1-689c-46d4-bbc0-28eddfe73317.png" 
          alt="Aspen Cybersecurity" 
          className="h-32 w-auto mb-8"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Securing Your Digital Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Expert cybersecurity risk assessments and tabletop exercises to protect your organization
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-main font-bold">
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
