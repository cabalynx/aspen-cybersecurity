
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-main text-font">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <Card className="bg-main/50 border-accent/20 backdrop-blur-sm max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg mb-4">
              As the founder of Aspen Cybersecurity, I bring extensive experience in information security
              and risk management to help organizations strengthen their security posture.
            </p>
            <p className="text-lg mb-4">
              With a background in incident response and security operations, I specialize in conducting
              thorough risk assessments and engaging tabletop exercises that prepare teams for real-world
              cyber threats.
            </p>
            <p className="text-lg">
              My approach combines technical expertise with practical solutions, ensuring your organization
              is well-equipped to handle modern cybersecurity challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
