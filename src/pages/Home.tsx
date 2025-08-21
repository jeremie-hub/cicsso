import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, FileText, Image, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import cicssoLogo from "@/assets/cicsso-logo.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      title: "Tech Innovation Summit 2024",
      description: "Join us for the biggest tech event of the year featuring industry leaders and innovative workshops.",
      image: "/api/placeholder/800/400",
      type: "event"
    },
    {
      title: "New Student Financial Aid Program",
      description: "CICSSO announces expanded financial assistance for students pursuing computer science degrees.",
      image: "/api/placeholder/800/400", 
      type: "announcement"
    },
    {
      title: "Hackathon Winners Showcase",
      description: "Celebrating our students' achievements in the recent university-wide hackathon competition.",
      image: "/api/placeholder/800/400",
      type: "achievement"
    }
  ];

  const quickLinks = [
    {
      title: "Latest Resolutions",
      description: "View our recent organizational decisions and policy updates",
      icon: FileText,
      link: "/resolutions",
      color: "bg-primary"
    },
    {
      title: "Event Calendar",
      description: "Stay updated with upcoming seminars, workshops, and meetings",
      icon: Calendar,
      link: "/events",
      color: "bg-success"
    },
    {
      title: "Photo Gallery",
      description: "Explore memories from our activities and achievements",
      icon: Image,
      link: "/gallery",
      color: "bg-warning"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <img src={cicssoLogo} alt="CICSSO Logo" className="h-24 w-24 drop-shadow-lg" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-primary-light">CICSSO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            College of Information and Computing Sciences Student Organization
          </p>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Empowering students through technology, innovation, and academic excellence. 
            Building tomorrow's tech leaders today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Join Our Community
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Highlights</h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-medium">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {highlights.map((highlight, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="border-0 rounded-none">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="bg-gradient-card p-8 md:p-12 flex items-center">
                          <div>
                            <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                              {highlight.type}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                              {highlight.title}
                            </h3>
                            <p className="text-muted-foreground text-lg mb-6">
                              {highlight.description}
                            </p>
                            <Button className="group">
                              Read More
                              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </div>
                        <div className="bg-muted aspect-video md:aspect-auto">
                          {/* Placeholder for image */}
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                              <Image className="h-16 w-16 mx-auto mb-2" />
                              <p>Image Placeholder</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Access</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`inline-flex w-12 h-12 rounded-lg ${link.color} items-center justify-center mb-4`}>
                    <link.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{link.title}</CardTitle>
                  <CardDescription className="text-base">{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={link.link}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explore
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-light">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-light">Events This Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-primary-light">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-primary-light">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;