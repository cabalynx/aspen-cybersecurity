
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-main/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <img src="/lovable-uploads/9bb51fd1-689c-46d4-bbc0-28eddfe73317.png" alt="Aspen Cybersecurity" className="h-10 w-auto" />
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-font hover:text-accent transition-colors">Services</a>
          <a href="#about" className="text-font hover:text-accent transition-colors">About</a>
          <a href="#contact" className="text-font hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-font">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-main">
            <div className="flex flex-col space-y-4 mt-8">
              <a href="#services" className="text-font hover:text-accent transition-colors">Services</a>
              <a href="#about" className="text-font hover:text-accent transition-colors">About</a>
              <a href="#contact" className="text-font hover:text-accent transition-colors">Contact</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
