import { Target, Eye, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const mvgo = [
    {
      title: "Mission",
      icon: Target,
      content: "To foster academic excellence, professional development, and technological innovation among students in the College of Information and Computing Sciences through collaborative learning, research opportunities, and industry partnerships.",
      color: "bg-primary"
    },
    {
      title: "Vision", 
      icon: Eye,
      content: "To be the leading student organization that bridges the gap between academic learning and industry practice, producing globally competitive IT professionals and innovators.",
      color: "bg-success"
    },
    {
      title: "Goals",
      icon: Users,
      content: "Enhance student engagement in academic and co-curricular activities, provide professional development opportunities, facilitate industry connections, and promote research and innovation in computing sciences.",
      color: "bg-warning"
    },
    {
      title: "Objectives",
      icon: BookOpen, 
      content: "Organize workshops, seminars, and training programs; establish mentorship programs; facilitate internship and job placement opportunities; promote student research and projects; and build strong alumni networks.",
      color: "bg-destructive"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">CICSSO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering the next generation of technology leaders through academic excellence, 
              professional development, and innovative collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-6">
                The College of Information and Computing Sciences Student Organization (CICSSO) 
                serves as the official representative body for students in the computing sciences programs. 
                We are dedicated to enhancing the academic experience and preparing our members for 
                successful careers in technology.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Since our establishment, we have been committed to creating an inclusive environment 
                where students can grow academically, professionally, and personally. Through our 
                various programs and initiatives, we bridge the gap between classroom learning and 
                real-world application.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Active</div>
                </div>
                <div className="text-center p-4 bg-accent rounded-lg">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold mb-6">Our Role in the College</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Representing student interests in college governance and decision-making</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Organizing academic support programs and peer mentoring initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Facilitating industry connections and career development opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Promoting research collaboration and innovation projects</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Building a strong community of future technology professionals</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MVGO Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mission, Vision, Goals & Objectives
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {mvgo.map((item, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Structure</h2>
            <p className="text-lg text-muted-foreground">
              Our organization is led by dedicated student officers committed to serving our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "President", "Vice President", "Secretary", "Treasurer",
              "Academic Affairs Officer", "External Affairs Officer", 
              "Internal Affairs Officer", "Public Relations Officer"
            ].map((position, index) => (
              <Card key={index} className="text-center group hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{position}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading initiatives and representing student interests
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;