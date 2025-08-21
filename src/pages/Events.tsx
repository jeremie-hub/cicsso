import { useState } from "react";
import { Calendar, Clock, MapPin, Users, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      date: "2024-03-15",
      time: "09:00 AM - 5:00 PM",
      location: "University Auditorium",
      type: "Conference",
      attendees: 200,
      description: "Annual technology summit featuring industry leaders, workshops, and networking opportunities.",
      status: "registration-open",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Hackathon: Code for Change",
      date: "2024-03-22",
      time: "6:00 PM - 6:00 AM",
      location: "Computer Lab Building",
      type: "Competition",
      attendees: 80,
      description: "24-hour hackathon focused on developing solutions for social impact.",
      status: "registration-open",
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Industry Career Fair",
      date: "2024-04-05",
      time: "10:00 AM - 4:00 PM",
      location: "Student Center",
      type: "Career",
      attendees: 150,
      description: "Connect with top tech companies and explore internship and job opportunities.",
      status: "upcoming",
      image: "/api/placeholder/400/200"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Python Workshop Series",
      date: "2024-02-20",
      time: "2:00 PM - 5:00 PM",
      location: "Lab 301",
      type: "Workshop",
      attendees: 45,
      description: "Comprehensive Python programming workshop for beginners to intermediate learners.",
      status: "completed",
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "Alumni Networking Night",
      date: "2024-02-14",
      time: "6:00 PM - 9:00 PM",
      location: "Faculty Lounge",
      type: "Networking",
      attendees: 60,
      description: "Evening networking event with successful CICSSO alumni in the tech industry.",
      status: "completed",
      image: "/api/placeholder/400/200"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "registration-open": return "bg-success";
      case "upcoming": return "bg-warning";
      case "completed": return "bg-muted";
      default: return "bg-muted";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Conference": return "bg-primary";
      case "Workshop": return "bg-success";
      case "Competition": return "bg-warning";
      case "Career": return "bg-destructive";
      case "Networking": return "bg-accent";
      default: return "bg-muted";
    }
  };

  const EventCard = ({ event, showRegistration = false }: { event: any, showRegistration?: boolean }) => (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 rounded-t-lg flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <Calendar className="h-12 w-12 mx-auto mb-2" />
          <p className="text-sm">Event Image</p>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge className={`${getTypeColor(event.type)} text-white`}>
            {event.type}
          </Badge>
          <Badge className={`${getStatusColor(event.status)} text-white`}>
            {event.status.replace('-', ' ')}
          </Badge>
        </div>
        <CardTitle className="text-xl">{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2" />
            {event.attendees} attendees
          </div>
          
          {showRegistration && event.status === "registration-open" && (
            <Button className="w-full group-hover:bg-primary-dark transition-colors">
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Events & Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in exciting workshops, seminars, competitions, and networking events 
              designed to enhance your academic and professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="upcoming" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="upcoming" className="text-base">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past" className="text-base">Past Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="upcoming">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                  <p className="text-muted-foreground">
                    Don't miss out on these exciting opportunities to learn, network, and grow!
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} showRegistration={true} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">Past Events</h2>
                  <p className="text-muted-foreground">
                    Take a look at our recent successful events and activities
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Calendar</h2>
            <p className="text-muted-foreground">
              Stay updated with all our scheduled activities and important dates
            </p>
          </div>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" size="sm" onClick={() => {
                const prevMonth = new Date(currentMonth);
                prevMonth.setMonth(prevMonth.getMonth() - 1);
                setCurrentMonth(prevMonth);
              }}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <h3 className="text-xl font-semibold">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </h3>
              
              <Button variant="outline" size="sm" onClick={() => {
                const nextMonth = new Date(currentMonth);
                nextMonth.setMonth(nextMonth.getMonth() + 1);
                setCurrentMonth(nextMonth);
              }}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i - 6);
                const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
                const hasEvent = [15, 22].includes(date.getDate()) && isCurrentMonth;
                
                return (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg
                      ${isCurrentMonth ? 'text-foreground hover:bg-accent' : 'text-muted-foreground'}
                      ${hasEvent ? 'bg-primary text-primary-foreground font-semibold' : ''}
                      cursor-pointer transition-colors
                    `}
                  >
                    {date.getDate()}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Event Categories</h2>
            <p className="text-muted-foreground">
              We organize diverse events to cater to different interests and career goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Workshops", icon: "🛠️", description: "Hands-on learning experiences" },
              { name: "Conferences", icon: "🎤", description: "Industry insights and keynotes" },
              { name: "Competitions", icon: "🏆", description: "Hackathons and coding challenges" },
              { name: "Networking", icon: "🤝", description: "Connect with peers and professionals" }
            ].map((category, index) => (
              <Card key={index} className="text-center group hover:shadow-soft transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;