
import { Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-main/95 text-font">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-main/50 border-accent/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Risk Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-font/90">
                Comprehensive evaluation of your organization's cybersecurity posture, 
                identifying vulnerabilities and providing actionable recommendations for enhancement.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-main/50 border-accent/20 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Tabletop Exercises</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-font/90">
                Interactive scenarios designed to test and improve your team's incident response capabilities,
                ensuring readiness for real-world cyber threats.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
