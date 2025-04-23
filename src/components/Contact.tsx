
import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-main/95 text-font">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <Card className="bg-main/50 border-accent/20 backdrop-blur-sm max-w-lg mx-auto">
          <CardContent className="p-6">
            <p className="text-center mb-8">
              Ready to enhance your cybersecurity? Get in touch to discuss how we can help protect your organization.
            </p>
            <div className="space-y-4">
              <Button variant="outline" className="w-full text-accent hover:text-accent/90" asChild>
                <a href="mailto:contact@aspencybersecurity.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" className="w-full text-accent hover:text-accent/90" asChild>
                <a href="tel:+1234567890" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
