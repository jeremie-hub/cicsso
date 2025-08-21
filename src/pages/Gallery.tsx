import { useState } from "react";
import { Image, Play, Calendar, Users, Search, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const mediaItems = [
    {
      id: 1,
      title: "Tech Innovation Summit 2023",
      type: "image",
      category: "conferences",
      date: "2023-12-15",
      thumbnail: "/api/placeholder/300/200",
      description: "Highlights from our annual technology summit with industry leaders"
    },
    {
      id: 2,
      title: "Hackathon Night 2023",
      type: "video",
      category: "competitions",
      date: "2023-11-22",
      thumbnail: "/api/placeholder/300/200",
      description: "24-hour coding marathon showcase and winner announcements"
    },
    {
      id: 3,
      title: "Python Workshop Series",
      type: "image",
      category: "workshops",
      date: "2023-10-30",
      thumbnail: "/api/placeholder/300/200",
      description: "Students learning Python programming fundamentals"
    },
    {
      id: 4,
      title: "Alumni Networking Event",
      type: "image",
      category: "networking",
      date: "2023-10-15",
      thumbnail: "/api/placeholder/300/200",
      description: "Connecting current students with successful alumni"
    },
    {
      id: 5,
      title: "Career Fair Highlights",
      type: "video",
      category: "career",
      date: "2023-09-20",
      thumbnail: "/api/placeholder/300/200",
      description: "Students connecting with top tech companies"
    },
    {
      id: 6,
      title: "Student Recognition Ceremony",
      type: "image",
      category: "achievements",
      date: "2023-09-10",
      thumbnail: "/api/placeholder/300/200",
      description: "Celebrating academic excellence and achievements"
    },
    {
      id: 7,
      title: "Web Development Bootcamp",
      type: "video",
      category: "workshops",
      date: "2023-08-25",
      thumbnail: "/api/placeholder/300/200",
      description: "Intensive web development training program"
    },
    {
      id: 8,
      title: "Freshman Orientation 2023",
      type: "image",
      category: "orientation",
      date: "2023-08-15",
      thumbnail: "/api/placeholder/300/200",
      description: "Welcome activities for new CICS students"
    }
  ];

  const categories = [
    { id: "all", name: "All Media", count: mediaItems.length },
    { id: "conferences", name: "Conferences", count: mediaItems.filter(item => item.category === "conferences").length },
    { id: "workshops", name: "Workshops", count: mediaItems.filter(item => item.category === "workshops").length },
    { id: "competitions", name: "Competitions", count: mediaItems.filter(item => item.category === "competitions").length },
    { id: "networking", name: "Networking", count: mediaItems.filter(item => item.category === "networking").length },
    { id: "achievements", name: "Achievements", count: mediaItems.filter(item => item.category === "achievements").length }
  ];

  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const photoItems = filteredItems.filter(item => item.type === "image");
  const videoItems = filteredItems.filter(item => item.type === "video");

  const MediaCard = ({ item }: { item: any }) => (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        {/* Placeholder for image/video thumbnail */}
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            {item.type === "video" ? (
              <Play className="h-12 w-12 mx-auto mb-2" />
            ) : (
              <Image className="h-12 w-12 mx-auto mb-2" />
            )}
            <p className="text-sm">{item.type === "video" ? "Video" : "Photo"}</p>
          </div>
        </div>
        
        {/* Play button overlay for videos */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="h-6 w-6 text-primary-foreground ml-1" />
            </div>
          </div>
        )}

        {/* Type badge */}
        <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">
          {item.type}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date(item.date).toLocaleDateString()}
          </div>
          <Badge variant="outline" className="text-xs">
            {item.category}
          </Badge>
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
              Photo & Video Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore memorable moments from our events, workshops, and activities. 
              See our vibrant community in action through photos and videos.
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
                  placeholder="Search photos and videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="text-xs"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="all">All Media</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="photos">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {photoItems.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {videoItems.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Image className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No media found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Visual Story</h2>
            <p className="text-muted-foreground">
              Numbers that showcase our active and engaging community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Photos Captured</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Videos Produced</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Events Documented</div>
            </Card>
            <Card className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Memories Created</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;