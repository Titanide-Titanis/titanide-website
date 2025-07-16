import { ArrowRight, Users, Heart, Shield, CheckCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MichadrianHealthcare = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Titanide UK | Michadrian Healthcare Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Healthcare Personnel & Compliance Solutions for the UK Market
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            variant="secondary"
            className="group"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            Titanide Consulting Group proudly introduces our UK division — <strong>Michadrian Healthcare Services Ltd</strong> — 
            delivering healthcare personnel matchmaking, home care services, and regulatory compliance solutions 
            tailored for the UK healthcare sector.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Healthcare Personnel Matchmaking</h3>
                <p className="text-muted-foreground">
                  Connecting qualified, vetted healthcare professionals with clients for home-based nursing and personal care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Home Care Services</h3>
                <p className="text-muted-foreground">
                  Compassionate, personalized care delivered in the comfort of clients' homes by experienced healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Regulatory Compliance & Risk Management</h3>
                <p className="text-muted-foreground">
                  Helping UK healthcare organizations meet statutory obligations, strengthen governance, and improve operational outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Titanide Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Titanide</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg">International expertise with local insight</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg">Proven track record in healthcare compliance</p>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <p className="text-lg">Fully staffed UK presence and registered office in Manchester</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Our UK Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Swan Street, City Centre<br />
                    Manchester, M4<br />
                    (Suite number forthcoming)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">info@titanideholdings.com</p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 Titanide Consulting Group. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="/" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MichadrianHealthcare;