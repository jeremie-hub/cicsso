import { useState } from "react";
import { Calendar, Pin, Bell, Search, Filter, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const announcements = [
    {
      id: 1,
      title: "Registration Open: Tech Innovation Summit 2024",
      category: "events",
      date: "2024-02-28",
      priority: "high",
      pinned: true,
      excerpt: "Early bird registration is now open for our flagship technology summit featuring industry leaders and hands-on workshops.",
      content: "Join us for the biggest tech event of the year! The Tech Innovation Summit 2024 will feature keynote speakers from major tech companies, interactive workshops, and networking opportunities. Early bird pricing available until March 1st.",
      author: "CICSSO Events Team",
      readTime: "2 min read"
    },
    {
      id: 2,
      title: "New Financial Aid Program for CICS Students",
      category: "academic",
      date: "2024-02-25",
      priority: "high",
      pinned: true,
      excerpt: "CICSSO announces expanded financial assistance program to support students pursuing computing sciences degrees.",
      content: "We're excited to announce a new financial aid initiative that will provide scholarships and emergency funding for eligible CICS students. Applications open March 1st with priority given to students demonstrating financial need and academic excellence.",
      author: "CICSSO Finance Committee",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Upcoming Elections: Call for Nominations",
      category: "organizational",
      date: "2024-02-20",
      priority: "medium",
      pinned: false,
      excerpt: "Nominations are now open for the 2024-2025 CICSSO Executive Board positions. Deadline: March 15th.",
      content: "It's time to shape the future of our organization! We're accepting nominations for all executive positions including President, Vice President, Secretary, Treasurer, and committee chairs. Campaign period begins March 20th.",
      author: "CICSSO Elections Committee",
      readTime: "2 min read"
    },
    {
      id: 4,
      title: "Industry Partnership: Internship Opportunities with TechCorp",
      category: "career",
      date: "2024-02-18",
      priority: "medium",
      pinned: false,
      excerpt: "Exclusive internship opportunities available for CICS students through our new partnership with TechCorp.",
      content: "We've partnered with TechCorp to offer summer internship positions specifically for our students. Positions available in software development, data science, and cybersecurity. Applications due March 10th.",
      author: "CICSSO Career Services",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Library Extended Hours During Finals Week",
      category: "academic",
      date: "2024-02-15",
      priority: "low",
      pinned: false,
      excerpt: "Computer lab and library will have extended hours from March 25-30 to support students during finals.",
      content: "To better support our students during the final examination period, the computer laboratory and study areas will be open 24/7 from March 25th through March 30th. Additional technical support staff will be available.",
      author: "CICSSO Academic Affairs",
      readTime: "1 min read"
    },
    {
      id: 6,
      title: "Workshop Series: AI and Machine Learning Fundamentals",
      category: "events",
      date: "2024-02-12",
      priority: "medium",
      pinned: false,
      excerpt: "Four-part workshop series on artificial intelligence and machine learning starts March 5th.",
      content: "Join our comprehensive AI/ML workshop series designed for beginners to intermediate learners. Topics include Python for ML, neural networks, computer vision, and natural language processing. Limited to 30 participants.",
      author: "CICSSO Technical Committee",
      readTime: "3 min read"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "events", label: "Events" },
    { value: "academic", label: "Academic" },
    { value: "career", label: "Career" },
    { value: "organizational", label: "Organizational" }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive";
      case "medium": return "bg-warning";
      case "low": return "bg-success";
      default: return "bg-muted";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "events": return "bg-primary";
      case "academic": return "bg-success";
      case "career": return "bg-warning";
      case "organizational": return "bg-accent";
      default: return "bg-muted";
    }
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         announcement.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || announcement.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const pinnedAnnouncements = filteredAnnouncements.filter(a => a.pinned);
  const regularAnnouncements = filteredAnnouncements.filter(a => !a.pinned);

  const AnnouncementCard = ({ announcement, isPinned = false }: { announcement: any, isPinned?: boolean }) => (
    <Card className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 ${isPinned ? 'border-primary/50 bg-primary/5' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {isPinned && <Pin className="h-4 w-4 text-primary" />}
            <Badge className={`${getCategoryColor(announcement.category)} text-white text-xs`}>
              {announcement.category}
            </Badge>
            <Badge className={`${getPriorityColor(announcement.priority)} text-white text-xs`}>
              {announcement.priority} priority
            </Badge>
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight">{announcement.title}</CardTitle>
        <CardDescription className="text-base">{announcement.excerpt}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {announcement.content}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(announcement.date).toLocaleDateString()}
            </div>
            <div>{announcement.readTime}</div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs">By {announcement.author}</span>
            <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
              Read More
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </div>
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
              Announcements & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with the latest news, updates, and important information 
              from the CICSSO community and academic programs.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterCategory} onValueChange={setFilterCategory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Announcements */}
      {pinnedAnnouncements.length > 0 && (
        <section className="py-12 bg-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <Pin className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Pinned Announcements</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pinnedAnnouncements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} isPinned={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Announcements */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Recent Updates</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {regularAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-12">
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No announcements found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 text-primary-light">
            Subscribe to our newsletter to receive important announcements and updates directly in your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-primary-foreground text-foreground"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe
              <Bell className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-sm text-primary-light mt-4">
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Announcements;